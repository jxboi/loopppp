import { createServer } from "node:http";
import { randomUUID } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ENV_FILE = path.join(__dirname, ".env");

await loadEnvFile();

const HOST = process.env.HOST || "127.0.0.1";
const PORT = Number.parseInt(process.env.PORT || "3000", 10);
const PUBLIC_DIR = path.join(__dirname, "public");
const DATA_DIR = path.join(__dirname, "data");
const DIGEST_DIR = path.join(DATA_DIR, "digests");
const LEARNINGS_DIR = path.join(DATA_DIR, "learnings");
const SNIPPETS_DIR = path.join(DATA_DIR, "snippets");
const PROFILE_DIR = path.join(DATA_DIR, "profile");

const MEMORY_FILE = path.join(LEARNINGS_DIR, "style-memory.md");
const LOG_FILE = path.join(LEARNINGS_DIR, "learning-log.md");
const PROMPT_KIT_FILE = path.join(LEARNINGS_DIR, "prompt-kit.md");
const INDEX_FILE = path.join(SNIPPETS_DIR, "index.json");
const PROFILE_FILE = path.join(PROFILE_DIR, "profile.json");
const CONTEXT_FILE = path.join(PROFILE_DIR, "taste-context.json");

const MAX_BODY_BYTES = 1_500_000;
const LIST_LIMIT = 80;

const TAG_GUIDE = [
  "frontend",
  "backend",
  "business-logic",
  "database",
  "api",
  "state-management",
  "authentication",
  "testing",
  "devops",
  "data-processing",
  "complex-logic",
  "simple-logic",
  "architecture",
  "performance",
  "security",
];

await ensureDataDirectories();

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", `http://${request.headers.host}`);
    const pathname = decodeURIComponent(url.pathname);

    if (request.method === "GET" && pathname === "/api/state") {
      return sendJson(response, 200, await buildStatePayload());
    }

    if (request.method === "GET" && pathname === "/api/snippets") {
      const query = normalizeText(url.searchParams.get("q"), 120);
      return sendJson(response, 200, {
        items: await listSnippets(query),
      });
    }

    if (request.method === "GET" && pathname.startsWith("/api/snippets/")) {
      const snippetId = pathname.slice("/api/snippets/".length).trim();

      if (!snippetId) {
        return sendJson(response, 400, { error: "Snippet id is required." });
      }

      const detail = await getSnippetDetail(snippetId);

      if (!detail) {
        return sendJson(response, 404, { error: "Snippet not found." });
      }

      return sendJson(response, 200, detail);
    }

    if (request.method === "POST" && pathname === "/api/digest") {
      const body = await readJsonBody(request);
      const input = normalizeDigestInput(body);

      if (!input.code) {
        return sendJson(response, 400, { error: "Code is required." });
      }

      const priorMemory = await readTextFile(MEMORY_FILE);
      const profile = await readJsonFile(PROFILE_FILE, buildDefaultProfile());
      const promptKitMarkdown = await readTextFile(PROMPT_KIT_FILE);
      const analysis = await analyzeSnippet({
        input,
        priorMemory,
        profile,
        promptKitMarkdown,
      });
      const persisted = await persistLearning({
        input,
        analysis,
        previousProfile: profile,
      });

      return sendJson(response, 200, persisted);
    }

    if (request.method === "POST" && pathname === "/api/generate-product") {
      const body = await readJsonBody(request);
      const idea = normalizeText(body.idea, 1200);
      const constraints = normalizeText(body.constraints, 1600);

      if (!idea) {
        return sendJson(response, 400, { error: "Product idea is required." });
      }

      const memoryMarkdown = await readTextFile(MEMORY_FILE);
      const promptKitMarkdown = await readTextFile(PROMPT_KIT_FILE);
      const profile = await readJsonFile(PROFILE_FILE, buildDefaultProfile());
      const blueprint = await generateProductBlueprint({
        idea,
        constraints,
        memoryMarkdown,
        promptKitMarkdown,
        profile,
      });

      return sendJson(response, 200, blueprint);
    }

    if (request.method === "GET") {
      return serveStaticAsset(pathname, response);
    }

    return sendJson(response, 404, { error: "Not found." });
  } catch (error) {
    console.error(error);
    return sendJson(response, 500, {
      error: error instanceof Error ? error.message : "Unexpected server error.",
    });
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Code Digest is running on http://${HOST}:${PORT}`);
});

async function buildStatePayload() {
  await ensureDataDirectories();

  const memoryMarkdown = await readTextFile(MEMORY_FILE);
  const promptKitMarkdown = await readTextFile(PROMPT_KIT_FILE);
  const profile = await readJsonFile(PROFILE_FILE, buildDefaultProfile());
  const index = await loadSnippetIndex();

  return {
    memoryMarkdown,
    promptKitMarkdown,
    profile,
    recentDigests: index.slice(0, 12),
  };
}

async function listSnippets(query) {
  const index = await loadSnippetIndex();

  if (!query) {
    return index.slice(0, LIST_LIMIT);
  }

  const queryTerms = query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

  return index
    .filter((item) => {
      const haystack = [
        item.title,
        item.source,
        item.reason,
        item.notes,
        item.language,
        ...(item.tags || []),
        ...(item.inferredPreferences || []),
        ...(item.reusablePatterns || []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return queryTerms.every((term) => haystack.includes(term));
    })
    .slice(0, LIST_LIMIT);
}

async function getSnippetDetail(snippetId) {
  const filePath = path.join(SNIPPETS_DIR, `${snippetId}.json`);
  const detail = await readJsonFile(filePath, null);

  if (!detail) {
    return null;
  }

  return { snippet: detail };
}

function normalizeDigestInput(body) {
  return {
    title: normalizeText(body.title, 140),
    source: normalizeText(body.source, 160),
    reason: normalizeText(body.reason, 700),
    notes: normalizeText(body.notes, 1200),
    code: typeof body.code === "string" ? body.code.trim() : "",
  };
}

async function analyzeSnippet({ input, priorMemory, profile, promptKitMarkdown }) {
  const heuristic = analyzeHeuristically(input);

  if (!process.env.OPENAI_API_KEY) {
    return buildFallbackAnalysis({
      input,
      priorMemory,
      promptKitMarkdown,
      heuristic,
    });
  }

  try {
    const payload = await callOpenAIDigest({
      input,
      priorMemory,
      profile,
      promptKitMarkdown,
      heuristic,
    });
    const text = extractResponseText(payload);
    const parsed = JSON.parse(text);

    return normalizeAnalysis({
      ...parsed,
      mode: "ai",
      model: payload.model || process.env.OPENAI_MODEL || "gpt-4.1-mini",
      requestId: payload.id || randomUUID(),
    });
  } catch (error) {
    console.warn(`Falling back to heuristic digest: ${formatErrorMessage(error)}`);
    return buildFallbackAnalysis({
      input,
      priorMemory,
      promptKitMarkdown,
      heuristic,
      error,
    });
  }
}

async function callOpenAIDigest({
  input,
  priorMemory,
  profile,
  promptKitMarkdown,
  heuristic,
}) {
  const model = process.env.OPENAI_MODEL || "gpt-4.1-mini";
  const systemPrompt = [
    "You are Code Digest, an AI that learns a developer's taste from code they admire.",
    "You will analyze one snippet and update the developer's long-term memory.",
    "Make grounded inferences only. Prefer cautious signals over inflated claims.",
    "Use the developer's own notes and reason for saving the snippet as strong evidence.",
    "Classify with one or more tags. Use this base taxonomy when appropriate:",
    TAG_GUIDE.join(", "),
    "The updatedMemoryMarkdown field must be a complete markdown document that replaces the existing style memory.",
    "The learningEntryMarkdown field must be a markdown section about this snippet only.",
    "The buildDirectives field should contain concrete instructions future code generators should follow.",
    "The antiPatternsToAvoid field should capture what this snippet suggests the developer wants to avoid.",
    "Return strict JSON only.",
  ].join(" ");

  const schema = {
    type: "object",
    additionalProperties: false,
    properties: {
      title: { type: "string" },
      language: { type: "string" },
      languageConfidence: { type: "number" },
      tags: { type: "array", items: { type: "string" } },
      summary: { type: "string" },
      whyItWorks: { type: "array", items: { type: "string" } },
      styleObservations: { type: "array", items: { type: "string" } },
      inferredPreferences: { type: "array", items: { type: "string" } },
      risksOrTradeoffs: { type: "array", items: { type: "string" } },
      reusablePatterns: { type: "array", items: { type: "string" } },
      buildDirectives: { type: "array", items: { type: "string" } },
      antiPatternsToAvoid: { type: "array", items: { type: "string" } },
      learningEntryMarkdown: { type: "string" },
      updatedMemoryMarkdown: { type: "string" },
    },
    required: [
      "title",
      "language",
      "languageConfidence",
      "tags",
      "summary",
      "whyItWorks",
      "styleObservations",
      "inferredPreferences",
      "risksOrTradeoffs",
      "reusablePatterns",
      "buildDirectives",
      "antiPatternsToAvoid",
      "learningEntryMarkdown",
      "updatedMemoryMarkdown",
    ],
  };

  const requestBody = {
    model,
    input: [
      {
        role: "system",
        content: [{ type: "input_text", text: systemPrompt }],
      },
      {
        role: "user",
        content: [
          {
            type: "input_text",
            text: JSON.stringify(
              {
                task: "Digest this snippet and update the long-term developer taste memory.",
                userInput: input,
                priorMemoryMarkdown: priorMemory,
                promptKitMarkdown,
                profileSnapshot: profile,
                heuristicBaseline: heuristic,
              },
              null,
              2,
            ),
          },
        ],
      },
    ],
    text: {
      format: {
        type: "json_schema",
        name: "code_digest_result",
        schema,
      },
    },
    max_output_tokens: 3200,
  };

  const result = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify(requestBody),
  });

  if (!result.ok) {
    throw await buildOpenAIError(result, "digest");
  }

  return result.json();
}

async function generateProductBlueprint({
  idea,
  constraints,
  memoryMarkdown,
  promptKitMarkdown,
  profile,
}) {
  if (!process.env.OPENAI_API_KEY) {
    return buildFallbackBlueprint({
      idea,
      constraints,
      memoryMarkdown,
      promptKitMarkdown,
      profile,
    });
  }

  try {
    const payload = await callOpenAIProductBlueprint({
      idea,
      constraints,
      memoryMarkdown,
      promptKitMarkdown,
      profile,
    });
    const text = extractResponseText(payload);
    const parsed = JSON.parse(text);

    return normalizeBlueprint({
      ...parsed,
      mode: "ai",
      model: payload.model || process.env.OPENAI_MODEL || "gpt-4.1-mini",
      requestId: payload.id || randomUUID(),
    });
  } catch (error) {
    console.warn(`Falling back to heuristic blueprint: ${formatErrorMessage(error)}`);
    return buildFallbackBlueprint({
      idea,
      constraints,
      memoryMarkdown,
      promptKitMarkdown,
      profile,
      error,
    });
  }
}

async function callOpenAIProductBlueprint({
  idea,
  constraints,
  memoryMarkdown,
  promptKitMarkdown,
  profile,
}) {
  const model = process.env.OPENAI_MODEL || "gpt-4.1-mini";
  const systemPrompt = [
    "You are a product architect generating plans that match a developer's learned taste.",
    "Use the taste memory, prompt kit, and profile snapshot to shape the answer.",
    "Produce a plan the developer would likely consider elegant and aligned with their preferences.",
    "Keep recommendations specific and practical.",
    "Return strict JSON only.",
  ].join(" ");

  const schema = {
    type: "object",
    additionalProperties: false,
    properties: {
      productName: { type: "string" },
      thesis: { type: "string" },
      audience: { type: "string" },
      tasteAlignment: { type: "array", items: { type: "string" } },
      experiencePrinciples: { type: "array", items: { type: "string" } },
      architectureDirection: { type: "array", items: { type: "string" } },
      recommendedStack: { type: "array", items: { type: "string" } },
      initialFeatures: { type: "array", items: { type: "string" } },
      buildOrder: { type: "array", items: { type: "string" } },
      guardrails: { type: "array", items: { type: "string" } },
      starterPrompt: { type: "string" },
    },
    required: [
      "productName",
      "thesis",
      "audience",
      "tasteAlignment",
      "experiencePrinciples",
      "architectureDirection",
      "recommendedStack",
      "initialFeatures",
      "buildOrder",
      "guardrails",
      "starterPrompt",
    ],
  };

  const requestBody = {
    model,
    input: [
      {
        role: "system",
        content: [{ type: "input_text", text: systemPrompt }],
      },
      {
        role: "user",
        content: [
          {
            type: "input_text",
            text: JSON.stringify(
              {
                idea,
                constraints,
                memoryMarkdown,
                promptKitMarkdown,
                profile,
              },
              null,
              2,
            ),
          },
        ],
      },
    ],
    text: {
      format: {
        type: "json_schema",
        name: "product_blueprint",
        schema,
      },
    },
    max_output_tokens: 2200,
  };

  const result = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify(requestBody),
  });

  if (!result.ok) {
    throw await buildOpenAIError(result, "blueprint");
  }

  return result.json();
}

function extractResponseText(payload) {
  if (typeof payload.output_text === "string" && payload.output_text.trim()) {
    return payload.output_text;
  }

  for (const item of payload.output || []) {
    for (const content of item.content || []) {
      if (content.type === "output_text" && typeof content.text === "string") {
        return content.text;
      }
    }
  }

  throw new Error("OpenAI response did not include text output.");
}

function formatErrorMessage(error) {
  return error instanceof Error ? error.message : String(error);
}

async function buildOpenAIError(response, operation) {
  let details = "";

  try {
    const payload = await response.json();
    details =
      payload?.error?.message ||
      payload?.message ||
      JSON.stringify(payload);
  } catch {
    try {
      details = (await response.text()).trim();
    } catch {
      details = "";
    }
  }

  if (response.status === 429) {
    return new Error(
      `OpenAI ${operation} request hit a 429 rate/quota limit. ${details || "Check your API key, billing, project quota, or rate limits."}`,
    );
  }

  return new Error(
    `OpenAI ${operation} request failed with ${response.status}.${details ? ` ${details}` : ""}`,
  );
}

function analyzeHeuristically(input) {
  const trimmed = input.code.trim();
  const lineCount = trimmed ? trimmed.split(/\r?\n/).length : 0;
  const lower = trimmed.toLowerCase();
  const complexityScore =
    countMatches(trimmed, /\bif\s*\(/g) +
    countMatches(trimmed, /\bswitch\s*\(/g) +
    countMatches(trimmed, /\bfor\s*\(/g) +
    countMatches(trimmed, /\bwhile\s*\(/g) +
    countMatches(trimmed, /\bcatch\s*\(/g);

  let language = "Unknown";
  let confidence = 0.25;

  const detectors = [
    {
      language: "TSX / React",
      confidence: 0.95,
      test:
        /<\/?[A-Z][A-Za-z0-9]*|className=|useState\(|useEffect\(|tsx/i.test(trimmed) &&
        /return\s*\(|<div|<>|<\/[A-Za-z]/.test(trimmed),
    },
    {
      language: "TypeScript",
      confidence: 0.9,
      test:
        /\binterface\s+\w+|\btype\s+\w+\s*=|:\s*(string|number|boolean|Promise<|Record<)|\bimplements\b/.test(
          trimmed,
        ),
    },
    {
      language: "JavaScript",
      confidence: 0.82,
      test:
        /\bconst\b|\blet\b|\bfunction\b|=>|module\.exports|require\(/.test(trimmed),
    },
    {
      language: "Python",
      confidence: 0.9,
      test:
        /\bdef\s+\w+\(|\bimport\s+\w+|if __name__ == ["']__main__["']|:\n\s+/.test(trimmed),
    },
    {
      language: "Go",
      confidence: 0.92,
      test: /\bpackage\s+main\b|\bfunc\s+\w+\(|fmt\./.test(trimmed),
    },
    {
      language: "Rust",
      confidence: 0.92,
      test: /\bfn\s+main\b|\blet\s+mut\b|impl\s+\w+|Result<.*>/.test(trimmed),
    },
    {
      language: "Java",
      confidence: 0.88,
      test: /\bpublic\s+class\b|\bprivate\s+\w+|\bSystem\.out\b/.test(trimmed),
    },
    {
      language: "SQL",
      confidence: 0.96,
      test: /\bselect\b|\binsert\b|\bupdate\b|\bfrom\b|\bwhere\b/.test(lower),
    },
    {
      language: "CSS",
      confidence: 0.9,
      test: /[.#][\w-]+\s*\{|@media|--[\w-]+:/.test(trimmed),
    },
    {
      language: "HTML",
      confidence: 0.93,
      test: /<!doctype html>|<html|<body|<div|<section|<script/i.test(trimmed),
    },
  ];

  for (const detector of detectors) {
    if (detector.test) {
      language = detector.language;
      confidence = detector.confidence;
      break;
    }
  }

  const tags = new Set();
  const styleObservations = [];
  const inferredPreferences = [];
  const reusablePatterns = [];
  const buildDirectives = [];
  const antiPatternsToAvoid = [];
  const risksOrTradeoffs = [];

  if (
    /className=|<div|<section|useState\(|useEffect\(|styled|css|tailwind|@media|grid|flex/i.test(
      trimmed,
    )
  ) {
    tags.add("frontend");
    buildDirectives.push("Keep the UI composition modular and layout decisions explicit.");
  }

  if (
    /express|fastify|router|app\.get|app\.post|http\.createServer|fetch\(|axios|handler|middleware/i.test(
      trimmed,
    )
  ) {
    tags.add("backend");
    tags.add("api");
    buildDirectives.push("Keep request handling small and separated from domain logic.");
  }

  if (/select\b|insert\b|update\b|delete\b|schema|migration|prisma|sequelize|typeorm|sql/i.test(lower)) {
    tags.add("database");
    buildDirectives.push("Treat persistence as a clear boundary with explicit queries or schemas.");
  }

  if (/auth|token|jwt|session|oauth|permission|role/i.test(lower)) {
    tags.add("authentication");
    tags.add("security");
    antiPatternsToAvoid.push("Do not bury authorization rules inside unrelated feature code.");
  }

  if (/describe\(|it\(|test\(|expect\(|assert\b|pytest|jest|vitest/i.test(trimmed)) {
    tags.add("testing");
    inferredPreferences.push("Values executable examples and verification close to behavior.");
  }

  if (/docker|kubernetes|terraform|github actions|workflow|ci|cd|deploy/i.test(lower)) {
    tags.add("devops");
  }

  if (/map\(|filter\(|reduce\(|sort\(|transform|normalize|serialize|parse/i.test(trimmed)) {
    tags.add("data-processing");
    reusablePatterns.push("Use focused transformation steps instead of sprawling mutation.");
  }

  if (/service|repository|adapter|factory|strategy|domain|usecase|controller/i.test(lower)) {
    tags.add("architecture");
    inferredPreferences.push("Likely prefers intention-revealing layers and named boundaries.");
    buildDirectives.push("Model layers explicitly so responsibilities stay legible.");
  }

  if (/cache|memo|debounce|throttle|batch|queue|parallel|optimiz/i.test(lower)) {
    tags.add("performance");
  }

  if (complexityScore >= 3 || lineCount > 40 || /try\s*\{/.test(trimmed)) {
    tags.add("complex-logic");
    risksOrTradeoffs.push("As logic density rises, naming and function boundaries matter more.");
  } else {
    tags.add("simple-logic");
  }

  if (!tags.size) {
    tags.add("business-logic");
  }

  if (/\n\s{2,}\S/.test(trimmed)) {
    styleObservations.push("Whitespace and structure are used deliberately for readability.");
  }
  if (/return\s+[{[]/.test(trimmed)) {
    styleObservations.push("Return shapes are made explicit instead of being hidden in side effects.");
  }
  if (/const\s+[A-Z][A-Za-z0-9]+/.test(trimmed) || /\btype\s+[A-Z]/.test(trimmed)) {
    styleObservations.push("Names abstractions clearly and treats structure as part of quality.");
  }
  if (/try\s*\{[\s\S]*catch/.test(trimmed)) {
    styleObservations.push("Failure paths are acknowledged instead of assuming a perfect path.");
  }

  if (/interface|type|zod|schema/i.test(trimmed)) {
    inferredPreferences.push("Values explicit contracts and strong boundaries.");
    reusablePatterns.push("Model contracts before implementation details.");
    buildDirectives.push("Keep types and schemas visible at boundaries.");
    antiPatternsToAvoid.push("Avoid loose implicit data shapes around important flows.");
  }
  if (/map\(|filter\(|reduce\(/.test(trimmed)) {
    inferredPreferences.push("Leans toward declarative transformation over manual mutation.");
  }
  if (/className=|tailwind|styled|css/.test(trimmed)) {
    inferredPreferences.push("Cares about the presentation layer and UI composition details.");
  }

  if (/className=|<div|<section/i.test(trimmed) && !/aria-|role=|label/i.test(trimmed)) {
    risksOrTradeoffs.push("UI-oriented code may still need explicit accessibility cues.");
  }
  if (/reduce\(|Promise\.all|parallel|batch/i.test(trimmed)) {
    risksOrTradeoffs.push("Dense transformations can become harder to debug without careful naming.");
  }
  if (!risksOrTradeoffs.length) {
    risksOrTradeoffs.push("A single snippet is useful evidence, but broader taste should be inferred carefully.");
  }

  if (input.reason) {
    inferredPreferences.push(`The developer explicitly values: ${input.reason}`);
    buildDirectives.push(`Honor this stated preference: ${input.reason}`);
  }

  if (input.notes) {
    styleObservations.push(`Saved note: ${input.notes}`);
  }

  if (!buildDirectives.length) {
    buildDirectives.push("Favor code that reads cleanly at the boundary between intent and implementation.");
  }

  if (!antiPatternsToAvoid.length) {
    antiPatternsToAvoid.push("Avoid over-abstracting beyond what the snippet actually justifies.");
  }

  return {
    title: input.title || buildTitle(language, tags),
    language,
    languageConfidence: confidence,
    tags: [...tags],
    summary:
      "Heuristic digest based on syntax, structure, and the developer's own notes. Add an OpenAI API key to upgrade this into a deeper learning loop.",
    whyItWorks: [
      "The snippet exposes enough syntax to identify likely language and responsibilities.",
      "The structure provides evidence about readability, abstraction choices, and code taste.",
      input.reason
        ? "The developer supplied an explicit reason for saving the snippet, which strengthens the inference."
        : "More saved snippets will sharpen the learned profile.",
    ],
    styleObservations,
    inferredPreferences,
    risksOrTradeoffs,
    reusablePatterns,
    buildDirectives,
    antiPatternsToAvoid,
  };
}

function buildFallbackAnalysis({
  input,
  priorMemory,
  promptKitMarkdown,
  heuristic,
  error,
}) {
  const timestamp = new Date().toISOString();
  const updatedMemoryMarkdown = buildFallbackMemoryMarkdown({
    input,
    priorMemory,
    promptKitMarkdown,
    heuristic,
    timestamp,
    error,
  });

  const learningEntryMarkdown = [
    `## ${timestamp} · ${heuristic.title}`,
    "",
    `- Mode: heuristic`,
    `- Language: ${heuristic.language} (${Math.round(heuristic.languageConfidence * 100)}% confidence)`,
    `- Tags: ${heuristic.tags.join(", ")}`,
    input.source ? `- Source: ${input.source}` : "",
    input.reason ? `- Why saved: ${input.reason}` : "",
    input.notes ? `- Notes: ${input.notes}` : "",
    "",
    "### What Works",
    ...heuristic.whyItWorks.map((item) => `- ${item}`),
    "",
    "### Preferences",
    ...heuristic.inferredPreferences.map((item) => `- ${item}`),
    "",
    "### Build Directives",
    ...heuristic.buildDirectives.map((item) => `- ${item}`),
    "",
    "### Reusable Patterns",
    ...heuristic.reusablePatterns.map((item) => `- ${item}`),
  ]
    .filter(Boolean)
    .join("\n");

  return normalizeAnalysis({
    ...heuristic,
    learningEntryMarkdown,
    updatedMemoryMarkdown,
    mode: "heuristic",
    model: "local-heuristic-engine",
    requestId: randomUUID(),
    summary:
      error instanceof Error
        ? `${heuristic.summary} AI fallback reason: ${error.message}.`
        : heuristic.summary,
  });
}

function buildFallbackMemoryMarkdown({
  input,
  priorMemory,
  promptKitMarkdown,
  heuristic,
  timestamp,
  error,
}) {
  const priorSections = priorMemory && !/No digests yet\./.test(priorMemory) ? priorMemory.trim() : "";
  const evidenceLines = heuristic.inferredPreferences.length
    ? heuristic.inferredPreferences
    : ["Collect more snippets to sharpen this profile."];
  const directiveLines = heuristic.buildDirectives.length
    ? heuristic.buildDirectives
    : ["Keep future implementations explicit and intention-revealing."];
  const avoidLines = heuristic.antiPatternsToAvoid.length
    ? heuristic.antiPatternsToAvoid
    : ["Avoid inferring too much from a single snippet."];
  const promptKitHint = promptKitMarkdown.trim()
    ? "Future generators should also consult prompt-kit.md for the operational version of this taste profile."
    : "";
  const errorNote =
    error instanceof Error ? `> Latest AI attempt fell back to heuristics: ${error.message}` : "";

  return [
    "# Developer Taste Memory",
    "",
    `Last updated: ${timestamp}`,
    "",
    "## Current Hypotheses",
    ...evidenceLines.map((item) => `- ${item}`),
    "",
    "## Style Signals From The Latest Snippet",
    ...heuristic.styleObservations.map((item) => `- ${item}`),
    "",
    "## Build Directives",
    ...directiveLines.map((item) => `- ${item}`),
    "",
    "## Avoid",
    ...avoidLines.map((item) => `- ${item}`),
    "",
    "## Language Lean",
    `- ${heuristic.language}`,
    input.reason ? `- Explicitly valued by developer: ${input.reason}` : "",
    input.source ? `- Recent source: ${input.source}` : "",
    promptKitHint ? "" : "",
    promptKitHint ? `- ${promptKitHint}` : "",
    "",
    errorNote,
    priorSections ? "" : "",
    priorSections ? "## Previous Memory Snapshot" : "",
    priorSections,
  ]
    .filter(Boolean)
    .join("\n");
}

function normalizeAnalysis(analysis) {
  return {
    title: analysis.title || "Untitled digest",
    language: analysis.language || "Unknown",
    languageConfidence: clamp(Number(analysis.languageConfidence || 0), 0, 1),
    tags: uniqStrings(analysis.tags),
    summary: analysis.summary || "No summary produced.",
    whyItWorks: uniqStrings(analysis.whyItWorks),
    styleObservations: uniqStrings(analysis.styleObservations),
    inferredPreferences: uniqStrings(analysis.inferredPreferences),
    risksOrTradeoffs: uniqStrings(analysis.risksOrTradeoffs),
    reusablePatterns: uniqStrings(analysis.reusablePatterns),
    buildDirectives: uniqStrings(analysis.buildDirectives),
    antiPatternsToAvoid: uniqStrings(analysis.antiPatternsToAvoid),
    learningEntryMarkdown: analysis.learningEntryMarkdown || "## Learning entry unavailable",
    updatedMemoryMarkdown:
      analysis.updatedMemoryMarkdown || "# Developer Taste Memory\n\nNo digests yet.\n",
    mode: analysis.mode || "unknown",
    model: analysis.model || "unknown",
    requestId: analysis.requestId || randomUUID(),
  };
}

async function persistLearning({ input, analysis }) {
  await ensureDataDirectories();

  const timestamp = new Date().toISOString();
  const snippetId = randomUUID();
  const slug = slugify(input.title || analysis.title);
  const digestFile = path.join(DIGEST_DIR, `${safeTimestamp(timestamp)}-${slug}.md`);
  const snippetFile = path.join(SNIPPETS_DIR, `${snippetId}.json`);
  const digestMarkdown = buildDigestMarkdown({
    input,
    analysis,
    timestamp,
    snippetId,
  });

  const detailRecord = {
    id: snippetId,
    createdAt: timestamp,
    updatedAt: timestamp,
    title: input.title || analysis.title,
    source: input.source,
    reason: input.reason,
    notes: input.notes,
    code: input.code,
    lineCount: input.code.split(/\r?\n/).length,
    analysis,
    files: {
      digest: digestFile,
      snippet: snippetFile,
      memory: MEMORY_FILE,
      log: LOG_FILE,
      promptKit: PROMPT_KIT_FILE,
      profile: PROFILE_FILE,
      context: CONTEXT_FILE,
    },
    digestMarkdown,
  };

  await writeFile(digestFile, digestMarkdown, "utf8");
  await writeFile(MEMORY_FILE, analysis.updatedMemoryMarkdown.trim() + "\n", "utf8");
  await writeFile(snippetFile, JSON.stringify(detailRecord, null, 2) + "\n", "utf8");

  const existingLog = await readTextFile(LOG_FILE);
  const logPrefix = existingLog.trim() || "# Learning Log";
  const nextLog = [logPrefix, analysis.learningEntryMarkdown.trim()].filter(Boolean).join("\n\n---\n\n");
  await writeFile(LOG_FILE, nextLog + "\n", "utf8");

  const index = await loadSnippetIndex();
  const nextIndex = [buildIndexRecord(detailRecord), ...index];
  await writeFile(INDEX_FILE, JSON.stringify(nextIndex, null, 2) + "\n", "utf8");

  const profile = buildProfileSnapshot(nextIndex);
  await writeFile(PROFILE_FILE, JSON.stringify(profile, null, 2) + "\n", "utf8");

  const promptKitMarkdown = buildPromptKitMarkdown({
    profile,
    memoryMarkdown: analysis.updatedMemoryMarkdown,
  });
  await writeFile(PROMPT_KIT_FILE, promptKitMarkdown, "utf8");

  const tasteContext = buildTasteContext({
    profile,
    memoryMarkdown: analysis.updatedMemoryMarkdown,
    promptKitMarkdown,
  });
  await writeFile(CONTEXT_FILE, JSON.stringify(tasteContext, null, 2) + "\n", "utf8");

  return {
    snippet: detailRecord,
    digestMarkdown,
    memoryMarkdown: analysis.updatedMemoryMarkdown.trim(),
    promptKitMarkdown,
    profile,
    files: detailRecord.files,
  };
}

function buildIndexRecord(detailRecord) {
  return {
    id: detailRecord.id,
    createdAt: detailRecord.createdAt,
    updatedAt: detailRecord.updatedAt,
    title: detailRecord.title,
    source: detailRecord.source,
    reason: detailRecord.reason,
    notes: detailRecord.notes,
    language: detailRecord.analysis.language,
    languageConfidence: detailRecord.analysis.languageConfidence,
    tags: detailRecord.analysis.tags,
    summary: detailRecord.analysis.summary,
    mode: detailRecord.analysis.mode,
    model: detailRecord.analysis.model,
    styleObservations: detailRecord.analysis.styleObservations,
    inferredPreferences: detailRecord.analysis.inferredPreferences,
    risksOrTradeoffs: detailRecord.analysis.risksOrTradeoffs,
    reusablePatterns: detailRecord.analysis.reusablePatterns,
    buildDirectives: detailRecord.analysis.buildDirectives,
    antiPatternsToAvoid: detailRecord.analysis.antiPatternsToAvoid,
    codePreview: previewCode(detailRecord.code),
    files: {
      digest: detailRecord.files.digest,
      snippet: detailRecord.files.snippet,
    },
  };
}

function buildDigestMarkdown({ input, analysis, timestamp, snippetId }) {
  const listSection = (title, items) => {
    const safeItems = items.length ? items : ["No items recorded."];
    return [`## ${title}`, "", ...safeItems.map((item) => `- ${item}`), ""].join("\n");
  };

  return [
    `# ${input.title || analysis.title}`,
    "",
    `- Snippet ID: ${snippetId}`,
    `- Timestamp: ${timestamp}`,
    `- Mode: ${analysis.mode}`,
    `- Model: ${analysis.model}`,
    `- Request ID: ${analysis.requestId}`,
    `- Language: ${analysis.language} (${Math.round(analysis.languageConfidence * 100)}% confidence)`,
    `- Tags: ${analysis.tags.join(", ")}`,
    input.source ? `- Source: ${input.source}` : "",
    input.reason ? `- Why saved: ${input.reason}` : "",
    input.notes ? `- Notes: ${input.notes}` : "",
    "",
    "## Summary",
    "",
    analysis.summary,
    "",
    listSection("Why It Works", analysis.whyItWorks),
    listSection("Style Observations", analysis.styleObservations),
    listSection("Inferred Preferences", analysis.inferredPreferences),
    listSection("Reusable Patterns", analysis.reusablePatterns),
    listSection("Build Directives", analysis.buildDirectives),
    listSection("Avoid", analysis.antiPatternsToAvoid),
    listSection("Risks Or Tradeoffs", analysis.risksOrTradeoffs),
    "## Snippet",
    "",
    "```text",
    input.code,
    "```",
    "",
  ]
    .filter(Boolean)
    .join("\n");
}

function buildProfileSnapshot(index) {
  const topLanguages = countTop(index.map((item) => item.language), 5);
  const topTags = countTop(index.flatMap((item) => item.tags || []), 8);
  const topPreferences = countTop(index.flatMap((item) => item.inferredPreferences || []), 8);
  const topPatterns = countTop(index.flatMap((item) => item.reusablePatterns || []), 8);
  const topDirectives = countTop(index.flatMap((item) => item.buildDirectives || []), 8);
  const topAvoid = countTop(index.flatMap((item) => item.antiPatternsToAvoid || []), 8);
  const topSources = countTop(index.map((item) => item.source).filter(Boolean), 5);

  const aiDigests = index.filter((item) => item.mode === "ai").length;
  const heuristicDigests = index.filter((item) => item.mode === "heuristic").length;

  return {
    generatedAt: new Date().toISOString(),
    totalDigests: index.length,
    aiDigests,
    heuristicDigests,
    lastDigestedAt: index[0]?.createdAt || null,
    topLanguages,
    topTags,
    topPreferences,
    topPatterns,
    topDirectives,
    topAvoid,
    topSources,
    summary:
      index.length === 0
        ? "No snippets digested yet."
        : buildProfileSummaryText({
            topLanguages,
            topTags,
            topDirectives,
            topAvoid,
          }),
  };
}

function buildProfileSummaryText({
  topLanguages,
  topTags,
  topDirectives,
  topAvoid,
}) {
  const languageLead = topLanguages[0]?.value || "mixed languages";
  const tagLead = topTags.slice(0, 3).map((item) => item.value).join(", ") || "broad interests";
  const directiveLead = topDirectives[0]?.value || "favor explicit, legible code";
  const avoidLead = topAvoid[0]?.value || "avoid over-complexity";

  return `Profile currently leans toward ${languageLead}, with strong evidence in ${tagLead}. The clearest build directive is "${directiveLead}". Current avoid signal: "${avoidLead}".`;
}

function buildPromptKitMarkdown({ profile, memoryMarkdown }) {
  const topLanguages = formatCountList(profile.topLanguages);
  const topTags = formatCountList(profile.topTags);
  const topDirectives = profile.topDirectives.length
    ? profile.topDirectives.map((item) => `- ${item.value}`)
    : ["- Favor explicit, intention-revealing code."];
  const topPatterns = profile.topPatterns.length
    ? profile.topPatterns.map((item) => `- ${item.value}`)
    : ["- Gather more snippets to refine reusable patterns."];
  const topAvoid = profile.topAvoid.length
    ? profile.topAvoid.map((item) => `- ${item.value}`)
    : ["- Avoid guessing beyond the evidence."];

  return [
    "# Developer Prompt Kit",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    "Use this file when generating code, shaping product decisions, or evaluating whether a solution matches the developer's taste.",
    "",
    "## Snapshot",
    `- Total digests: ${profile.totalDigests}`,
    `- AI digests: ${profile.aiDigests}`,
    `- Heuristic digests: ${profile.heuristicDigests}`,
    `- Top languages: ${topLanguages}`,
    `- Top tags: ${topTags}`,
    "",
    "## Build Directives",
    ...topDirectives,
    "",
    "## Reusable Patterns",
    ...topPatterns,
    "",
    "## Avoid",
    ...topAvoid,
    "",
    "## Memory Excerpt",
    "",
    trimMarkdown(memoryMarkdown, 40),
    "",
  ].join("\n");
}

function buildTasteContext({ profile, memoryMarkdown, promptKitMarkdown }) {
  return {
    generatedAt: new Date().toISOString(),
    profile,
    memoryExcerpt: trimMarkdown(memoryMarkdown, 30),
    promptKitExcerpt: trimMarkdown(promptKitMarkdown, 30),
    directives: profile.topDirectives.map((item) => item.value),
    avoid: profile.topAvoid.map((item) => item.value),
    languages: profile.topLanguages.map((item) => item.value),
    tags: profile.topTags.map((item) => item.value),
  };
}

function buildFallbackBlueprint({
  idea,
  constraints,
  memoryMarkdown,
  promptKitMarkdown,
  profile,
  error,
}) {
  const recommendedStack = pickRecommendedStack(profile);
  const tasteAlignment = [
    profile.summary,
    profile.topPreferences[0]?.value || "Keep the implementation explicit and grounded.",
    profile.topPatterns[0]?.value || "Prefer patterns the tool has already seen repeatedly.",
  ].filter(Boolean);

  const experiencePrinciples = [
    profile.topDirectives[0]?.value || "Make the core flow obvious on first read.",
    profile.topDirectives[1]?.value || "Keep architecture legible at the boundaries.",
    profile.topPreferences[0]?.value || "Bias toward explicit contracts and named responsibilities.",
  ];

  const architectureDirection = [
    `Shape the app around ${recommendedStack.join(" + ")}.`,
    profile.topTags.some((item) => item.value === "frontend")
      ? "Invest in deliberate UI composition instead of generic scaffolding."
      : "Keep the user-facing flow simple and well bounded.",
    profile.topTags.some((item) => item.value === "backend")
      ? "Separate domain logic from request handling and persistence."
      : "Preserve a clean seam between core logic and storage.",
  ];

  const initialFeatures = [
    `Implement the core user flow for: ${idea}`,
    "Persist the minimum data needed to make the first version useful.",
    "Expose clear state, history, or artifacts so the system stays inspectable.",
    "Add one quality feature that reflects the learned taste profile instead of shipping a bland shell.",
  ];

  const buildOrder = [
    "Model the domain and data boundaries first.",
    "Build the smallest useful end-to-end flow.",
    "Add the UI or interaction layer with explicit states.",
    "Refine naming, structure, and test coverage where the product matters most.",
  ];

  const guardrails = uniqStrings([
    ...profile.topAvoid.slice(0, 5).map((item) => item.value),
    constraints ? `Respect this constraint: ${constraints}` : "",
    error instanceof Error ? `AI fallback reason: ${error.message}` : "",
  ]).filter(Boolean);

  const starterPrompt = [
    `Build a product called "${titleCase(idea)}".`,
    `Thesis: ${profile.summary}`,
    `Recommended stack: ${recommendedStack.join(", ")}.`,
    "Follow these build directives:",
    ...profile.topDirectives.slice(0, 5).map((item) => `- ${item.value}`),
    "Avoid these signals:",
    ...profile.topAvoid.slice(0, 5).map((item) => `- ${item.value}`),
    constraints ? `Constraints: ${constraints}` : "",
    "",
    "Use the following taste memory excerpt as grounding:",
    trimMarkdown(promptKitMarkdown || memoryMarkdown, 24),
  ]
    .filter(Boolean)
    .join("\n");

  return normalizeBlueprint({
    productName: titleCase(idea),
    thesis: `A taste-aligned implementation of ${idea} shaped by the developer's saved code preferences.`,
    audience: "The primary users implied by the product idea and the developer's implementation taste.",
    tasteAlignment,
    experiencePrinciples,
    architectureDirection,
    recommendedStack,
    initialFeatures,
    buildOrder,
    guardrails,
    starterPrompt,
    mode: "heuristic",
    model: "local-profile-engine",
    requestId: randomUUID(),
  });
}

function normalizeBlueprint(blueprint) {
  return {
    productName: blueprint.productName || "Untitled Product",
    thesis: blueprint.thesis || "No thesis produced.",
    audience: blueprint.audience || "Audience not specified.",
    tasteAlignment: uniqStrings(blueprint.tasteAlignment),
    experiencePrinciples: uniqStrings(blueprint.experiencePrinciples),
    architectureDirection: uniqStrings(blueprint.architectureDirection),
    recommendedStack: uniqStrings(blueprint.recommendedStack),
    initialFeatures: uniqStrings(blueprint.initialFeatures),
    buildOrder: uniqStrings(blueprint.buildOrder),
    guardrails: uniqStrings(blueprint.guardrails),
    starterPrompt: blueprint.starterPrompt || "",
    mode: blueprint.mode || "unknown",
    model: blueprint.model || "unknown",
    requestId: blueprint.requestId || randomUUID(),
  };
}

function pickRecommendedStack(profile) {
  const languages = profile.topLanguages.map((item) => item.value.toLowerCase());
  const tags = profile.topTags.map((item) => item.value);

  if (languages.some((item) => item.includes("typescript") || item.includes("tsx"))) {
    return tags.includes("frontend")
      ? ["TypeScript", "React", "Node.js"]
      : ["TypeScript", "Node.js", "Postgres"];
  }

  if (languages.some((item) => item.includes("python"))) {
    return ["Python", "FastAPI", "Postgres"];
  }

  if (languages.some((item) => item.includes("go"))) {
    return ["Go", "Postgres", "HTMX or thin frontend"];
  }

  if (languages.some((item) => item.includes("rust"))) {
    return ["Rust", "Axum", "Postgres"];
  }

  return tags.includes("frontend")
    ? ["TypeScript", "React", "Node.js"]
    : ["TypeScript", "Node.js", "SQLite"];
}

async function loadSnippetIndex() {
  return readJsonFile(INDEX_FILE, []);
}

async function serveStaticAsset(pathname, response) {
  const safePath = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const resolvedPath = path.join(PUBLIC_DIR, path.normalize(safePath));

  if (!resolvedPath.startsWith(PUBLIC_DIR)) {
    return sendJson(response, 403, { error: "Forbidden." });
  }

  try {
    const fileContents = await readFile(resolvedPath);
    response.writeHead(200, {
      "Content-Type": getContentType(resolvedPath),
    });
    response.end(fileContents);
  } catch {
    sendJson(response, 404, { error: "Asset not found." });
  }
}

function getContentType(filePath) {
  if (filePath.endsWith(".html")) return "text/html; charset=utf-8";
  if (filePath.endsWith(".css")) return "text/css; charset=utf-8";
  if (filePath.endsWith(".js")) return "application/javascript; charset=utf-8";
  if (filePath.endsWith(".json")) return "application/json; charset=utf-8";
  return "text/plain; charset=utf-8";
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
  });
  response.end(JSON.stringify(payload));
}

async function readJsonBody(request) {
  const chunks = [];
  let size = 0;

  for await (const chunk of request) {
    size += chunk.length;

    if (size > MAX_BODY_BYTES) {
      throw new Error("Request body too large.");
    }

    chunks.push(chunk);
  }

  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}

async function ensureDataDirectories() {
  await mkdir(DIGEST_DIR, { recursive: true });
  await mkdir(LEARNINGS_DIR, { recursive: true });
  await mkdir(SNIPPETS_DIR, { recursive: true });
  await mkdir(PROFILE_DIR, { recursive: true });

  const memory = await readTextFile(MEMORY_FILE);
  if (!memory) {
    await writeFile(MEMORY_FILE, "# Developer Taste Memory\n\nNo digests yet.\n", "utf8");
  }

  const log = await readTextFile(LOG_FILE);
  if (!log) {
    await writeFile(LOG_FILE, "# Learning Log\n", "utf8");
  }

  const index = await readTextFile(INDEX_FILE);
  if (!index) {
    await writeFile(INDEX_FILE, "[]\n", "utf8");
  }

  const profile = await readTextFile(PROFILE_FILE);
  if (!profile) {
    await writeFile(
      PROFILE_FILE,
      JSON.stringify(buildDefaultProfile(), null, 2) + "\n",
      "utf8",
    );
  }

  const promptKit = await readTextFile(PROMPT_KIT_FILE);
  if (!promptKit) {
    await writeFile(
      PROMPT_KIT_FILE,
      buildPromptKitMarkdown({
        profile: buildDefaultProfile(),
        memoryMarkdown: "# Developer Taste Memory\n\nNo digests yet.\n",
      }),
      "utf8",
    );
  }

  const context = await readTextFile(CONTEXT_FILE);
  if (!context) {
    await writeFile(
      CONTEXT_FILE,
      JSON.stringify(
        buildTasteContext({
          profile: buildDefaultProfile(),
          memoryMarkdown: "# Developer Taste Memory\n\nNo digests yet.\n",
          promptKitMarkdown: await readTextFile(PROMPT_KIT_FILE),
        }),
        null,
        2,
      ) + "\n",
      "utf8",
    );
  }
}

function buildDefaultProfile() {
  return {
    generatedAt: new Date().toISOString(),
    totalDigests: 0,
    aiDigests: 0,
    heuristicDigests: 0,
    lastDigestedAt: null,
    topLanguages: [],
    topTags: [],
    topPreferences: [],
    topPatterns: [],
    topDirectives: [],
    topAvoid: [],
    topSources: [],
    summary: "No snippets digested yet.",
  };
}

async function readTextFile(filePath) {
  try {
    return await readFile(filePath, "utf8");
  } catch {
    return "";
  }
}

async function readJsonFile(filePath, fallbackValue) {
  try {
    const raw = await readFile(filePath, "utf8");
    return JSON.parse(raw);
  } catch {
    return fallbackValue;
  }
}

async function loadEnvFile() {
  try {
    const raw = await readFile(ENV_FILE, "utf8");

    for (const line of raw.split(/\r?\n/)) {
      const trimmed = line.trim();

      if (!trimmed || trimmed.startsWith("#")) {
        continue;
      }

      const separatorIndex = trimmed.indexOf("=");

      if (separatorIndex === -1) {
        continue;
      }

      const key = trimmed.slice(0, separatorIndex).trim();
      const value = trimmed.slice(separatorIndex + 1).trim().replace(/^['"]|['"]$/g, "");

      if (key && !process.env[key]) {
        process.env[key] = value;
      }
    }
  } catch {
    // The app works without a .env file.
  }
}

function normalizeText(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function uniqStrings(values) {
  return [
    ...new Set(
      (values || [])
        .filter((value) => typeof value === "string" && value.trim())
        .map((value) => value.trim()),
    ),
  ];
}

function countTop(values, limit) {
  const counts = new Map();

  for (const value of values.filter(Boolean)) {
    counts.set(value, (counts.get(value) || 0) + 1);
  }

  return [...counts.entries()]
    .sort((left, right) => right[1] - left[1] || String(left[0]).localeCompare(String(right[0])))
    .slice(0, limit)
    .map(([value, count]) => ({ value, count }));
}

function countMatches(value, pattern) {
  return [...value.matchAll(pattern)].length;
}

function formatCountList(items) {
  if (!items.length) {
    return "none yet";
  }

  return items.map((item) => `${item.value} (${item.count})`).join(", ");
}

function trimMarkdown(markdown, maxLines) {
  const lines = (markdown || "").trim().split(/\r?\n/);

  if (lines.length <= maxLines) {
    return markdown.trim();
  }

  return `${lines.slice(0, maxLines).join("\n")}\n...`;
}

function previewCode(code) {
  return code.replace(/\s+/g, " ").trim().slice(0, 200);
}

function buildTitle(language, tags) {
  const safeTags = Array.isArray(tags) ? tags : [...tags];

  if (safeTags.includes("frontend")) return `${language} UI snippet digest`;
  if (safeTags.includes("backend")) return `${language} service snippet digest`;
  if (safeTags.includes("database")) return `${language} data-layer digest`;
  return `${language} code digest`;
}

function safeTimestamp(timestamp) {
  return timestamp.replace(/[:.]/g, "-");
}

function slugify(value) {
  return (value || "digest")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64) || "digest";
}

function titleCase(value) {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ")
    .slice(0, 80);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
