const elements = {
  tabs: [...document.querySelectorAll("[data-view-target]")],
  views: [...document.querySelectorAll("[data-view]")],
  segmentButtons: [...document.querySelectorAll("[data-segment-target]")],
  segmentPanels: [...document.querySelectorAll("[data-segment-panel]")],
  digestButton: document.querySelector("#digestButton"),
  generateButton: document.querySelector("#generateButton"),
  copyPromptKitButton: document.querySelector("#copyPromptKitButton"),
  codeInput: document.querySelector("#codeInput"),
  ideaInput: document.querySelector("#ideaInput"),
  constraintsInput: document.querySelector("#constraintsInput"),
  librarySearchInput: document.querySelector("#librarySearchInput"),
  statusText: document.querySelector("#statusText"),
  studioStatus: document.querySelector("#studioStatus"),
  metricTotal: document.querySelector("#metricTotal"),
  metricLanguage: document.querySelector("#metricLanguage"),
  metricTag: document.querySelector("#metricTag"),
  metricDirective: document.querySelector("#metricDirective"),
  profileSummary: document.querySelector("#profileSummary"),
  topLanguages: document.querySelector("#topLanguages"),
  topTags: document.querySelector("#topTags"),
  topDirectives: document.querySelector("#topDirectives"),
  recentDigests: document.querySelector("#recentDigests"),
  promptKitPreview: document.querySelector("#promptKitPreview"),
  memoryPreview: document.querySelector("#memoryPreview"),
  resultsSection: document.querySelector("#resultsSection"),
  languageLabel: document.querySelector("#languageLabel"),
  summaryText: document.querySelector("#summaryText"),
  tagList: document.querySelector("#tagList"),
  styleList: document.querySelector("#styleList"),
  preferencesList: document.querySelector("#preferencesList"),
  directivesList: document.querySelector("#directivesList"),
  patternsList: document.querySelector("#patternsList"),
  avoidList: document.querySelector("#avoidList"),
  memoryOutput: document.querySelector("#memoryOutput"),
  digestOutput: document.querySelector("#digestOutput"),
  filePaths: document.querySelector("#filePaths"),
  libraryList: document.querySelector("#libraryList"),
  libraryEmptyState: document.querySelector("#libraryEmptyState"),
  libraryDetail: document.querySelector("#libraryDetail"),
  detailTitle: document.querySelector("#detailTitle"),
  detailMeta: document.querySelector("#detailMeta"),
  detailReason: document.querySelector("#detailReason"),
  detailNotes: document.querySelector("#detailNotes"),
  detailTags: document.querySelector("#detailTags"),
  detailSummary: document.querySelector("#detailSummary"),
  detailDirectives: document.querySelector("#detailDirectives"),
  detailPatterns: document.querySelector("#detailPatterns"),
  detailAvoid: document.querySelector("#detailAvoid"),
  detailCode: document.querySelector("#detailCode"),
  detailDigest: document.querySelector("#detailDigest"),
  blueprintTitle: document.querySelector("#blueprintTitle"),
  blueprintThesis: document.querySelector("#blueprintThesis"),
  blueprintStack: document.querySelector("#blueprintStack"),
  blueprintTaste: document.querySelector("#blueprintTaste"),
  blueprintExperience: document.querySelector("#blueprintExperience"),
  blueprintArchitecture: document.querySelector("#blueprintArchitecture"),
  blueprintFeatures: document.querySelector("#blueprintFeatures"),
  blueprintBuildOrder: document.querySelector("#blueprintBuildOrder"),
  blueprintGuardrails: document.querySelector("#blueprintGuardrails"),
  starterPromptOutput: document.querySelector("#starterPromptOutput"),
};

const appState = {
  activeView: "digest",
  libraryItems: [],
  selectedSnippetId: null,
  librarySearchTimer: null,
};

bindEvents();
void boot();

function bindEvents() {
  for (const tab of elements.tabs) {
    tab.addEventListener("click", () => {
      setActiveView(tab.dataset.viewTarget || "digest");
    });
  }

  for (const button of elements.segmentButtons) {
    button.addEventListener("click", () => {
      setSegment(
        button.dataset.segmentGroup || "",
        button.dataset.segmentTarget || "",
      );
    });
  }

  elements.digestButton.addEventListener("click", () => {
    void submitDigest();
  });

  elements.generateButton.addEventListener("click", () => {
    void submitBlueprintRequest();
  });

  elements.copyPromptKitButton.addEventListener("click", async () => {
    const text = elements.promptKitPreview.textContent || "";

    if (!text.trim()) {
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      setDigestStatus("Prompt kit copied to clipboard.", "success");
    } catch {
      setDigestStatus("Clipboard access failed.", "error");
    }
  });

  elements.librarySearchInput.addEventListener("input", () => {
    window.clearTimeout(appState.librarySearchTimer);
    appState.librarySearchTimer = window.setTimeout(() => {
      void loadLibrary(elements.librarySearchInput.value.trim());
    }, 180);
  });
}

async function boot() {
  await refreshState();
  await loadLibrary("");
}

function setActiveView(viewName) {
  appState.activeView = viewName;

  for (const tab of elements.tabs) {
    tab.classList.toggle("is-active", tab.dataset.viewTarget === viewName);
  }

  for (const view of elements.views) {
    view.classList.toggle("is-active", view.dataset.view === viewName);
  }
}

function setSegment(groupName, targetName) {
  for (const button of elements.segmentButtons) {
    const isMatch =
      button.dataset.segmentGroup === groupName &&
      button.dataset.segmentTarget === targetName;
    button.classList.toggle("is-active", isMatch);
  }

  for (const panel of elements.segmentPanels) {
    const isMatch =
      panel.dataset.segmentGroup === groupName &&
      panel.dataset.segmentPanel === targetName;
    panel.classList.toggle("is-active", isMatch);
  }
}

async function refreshState() {
  try {
    const response = await fetch("/api/state");
    const payload = await response.json();

    if (!response.ok) {
      throw new Error(payload.error || "Failed to load state.");
    }

    renderProfile(payload.profile);
    renderPromptKit(payload.promptKitMarkdown);
    renderMemory(payload.memoryMarkdown);
    renderRecentDigests(payload.recentDigests);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to load app state.";
    elements.profileSummary.textContent = message;
    elements.promptKitPreview.textContent = message;
    elements.memoryPreview.textContent = message;
  }
}

async function submitDigest() {
  const body = {
    code: elements.codeInput.value,
  };

  if (!body.code.trim()) {
    setDigestStatus("Paste code before digesting.", "error");
    elements.codeInput.focus();
    return;
  }

  setDigestBusy(true);
  setDigestStatus("Digesting snippet and updating the learned profile…", "working");

  try {
    const response = await fetch("/api/digest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const payload = await response.json();

    if (!response.ok) {
      throw new Error(payload.error || "Digest failed.");
    }

    renderAnalysis(payload);
    renderProfile(payload.profile);
    renderPromptKit(payload.promptKitMarkdown);
    renderMemory(payload.memoryMarkdown);
    await loadLibrary(elements.librarySearchInput.value.trim());
    await refreshState();
    await loadSnippetDetail(payload.snippet.id);

    setDigestStatus(
      payload.snippet.analysis.mode === "ai"
        ? "Digest complete. AI updated the memory and profile."
        : "Digest complete in heuristic mode. The profile and library were still updated.",
      "success",
    );
  } catch (error) {
    setDigestStatus(error instanceof Error ? error.message : "Digest failed.", "error");
  } finally {
    setDigestBusy(false);
  }
}

async function submitBlueprintRequest() {
  const body = {
    idea: elements.ideaInput.value,
    constraints: elements.constraintsInput.value,
  };

  if (!body.idea.trim()) {
    setStudioStatus("Describe a product idea first.", "error");
    elements.ideaInput.focus();
    return;
  }

  setStudioBusy(true);
  setStudioStatus("Shaping a product using the learned profile…", "working");

  try {
    const response = await fetch("/api/generate-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const payload = await response.json();

    if (!response.ok) {
      throw new Error(payload.error || "Blueprint generation failed.");
    }

    renderBlueprint(payload);
    setStudioStatus(
      payload.mode === "ai"
        ? "Blueprint generated with AI using the learned taste profile."
        : "Blueprint generated in heuristic mode using the current learned profile.",
      "success",
    );
  } catch (error) {
    setStudioStatus(
      error instanceof Error ? error.message : "Blueprint generation failed.",
      "error",
    );
  } finally {
    setStudioBusy(false);
  }
}

function renderAnalysis(payload) {
  const { snippet, memoryMarkdown, digestMarkdown, files } = payload;
  const { analysis } = snippet;

  elements.resultsSection.classList.remove("hidden");
  elements.languageLabel.textContent = `${analysis.language} · ${Math.round(
    analysis.languageConfidence * 100,
  )}% confidence`;
  elements.summaryText.textContent = analysis.summary;

  renderChipRow(elements.tagList, analysis.tags);
  renderList(elements.styleList, analysis.styleObservations, "No style observations recorded.");
  renderList(
    elements.preferencesList,
    analysis.inferredPreferences,
    "No preferences inferred yet.",
  );
  renderList(
    elements.directivesList,
    analysis.buildDirectives,
    "No build directives recorded yet.",
  );
  renderList(
    elements.patternsList,
    analysis.reusablePatterns,
    "No reusable patterns recorded.",
  );
  renderList(
    elements.avoidList,
    mergeUnique(analysis.antiPatternsToAvoid, analysis.risksOrTradeoffs),
    "No avoid signals recorded.",
  );

  elements.memoryPreview.textContent = memoryMarkdown;
  elements.memoryOutput.textContent = memoryMarkdown;
  elements.digestOutput.textContent = digestMarkdown;

  elements.filePaths.innerHTML = "";
  for (const [label, filePath] of Object.entries(files)) {
    const chip = document.createElement("span");
    chip.className = "chip muted";
    chip.textContent = `${label}: ${filePath}`;
    elements.filePaths.appendChild(chip);
  }
}

function renderProfile(profile) {
  elements.metricTotal.textContent = String(profile.totalDigests);
  elements.metricLanguage.textContent = profile.topLanguages[0]?.value || "None yet";
  elements.metricTag.textContent = profile.topTags[0]?.value || "None yet";
  elements.metricDirective.textContent =
    profile.topDirectives[0]?.value || "Collect more signals";

  elements.profileSummary.textContent = profile.summary;
  renderChipRow(elements.topLanguages, profile.topLanguages.map(formatCountChip));
  renderChipRow(elements.topTags, profile.topTags.map(formatCountChip));
  renderList(
    elements.topDirectives,
    profile.topDirectives.map((item) => item.value),
    "No build directives learned yet.",
  );
}

function renderPromptKit(markdown) {
  elements.promptKitPreview.textContent = markdown || "Prompt kit unavailable.";
}

function renderMemory(markdown) {
  elements.memoryPreview.textContent = markdown || "Style memory unavailable.";
}

function renderRecentDigests(items) {
  elements.recentDigests.innerHTML = "";

  if (!items.length) {
    const li = document.createElement("li");
    li.className = "recent-item empty";
    li.textContent = "No digests saved yet.";
    elements.recentDigests.appendChild(li);
    return;
  }

  for (const item of items) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "recent-item";
    button.addEventListener("click", async () => {
      setActiveView("library");
      await loadSnippetDetail(item.id);
    });

    const title = document.createElement("span");
    title.className = "recent-title";
    title.textContent = item.title;

    const meta = document.createElement("span");
    meta.className = "recent-meta";
    meta.textContent = `${item.language} · ${formatDateTime(item.createdAt)}`;

    button.append(title, meta);
    elements.recentDigests.appendChild(button);
  }
}

async function loadLibrary(query) {
  try {
    const url = query ? `/api/snippets?q=${encodeURIComponent(query)}` : "/api/snippets";
    const response = await fetch(url);
    const payload = await response.json();

    if (!response.ok) {
      throw new Error(payload.error || "Failed to load library.");
    }

    appState.libraryItems = payload.items;
    renderLibraryList(payload.items);

    if (appState.selectedSnippetId) {
      const stillExists = payload.items.some((item) => item.id === appState.selectedSnippetId);
      if (stillExists) {
        return;
      }
    }

    if (payload.items[0]) {
      await loadSnippetDetail(payload.items[0].id);
    } else {
      clearLibraryDetail();
    }
  } catch (error) {
    elements.libraryList.innerHTML = "";
    const li = document.createElement("li");
    li.className = "library-item empty";
    li.textContent = error instanceof Error ? error.message : "Unable to load library.";
    elements.libraryList.appendChild(li);
    clearLibraryDetail();
  }
}

function renderLibraryList(items) {
  elements.libraryList.innerHTML = "";

  if (!items.length) {
    const li = document.createElement("li");
    li.className = "library-item empty";
    li.textContent = "No snippets match the current search.";
    elements.libraryList.appendChild(li);
    return;
  }

  for (const item of items) {
    const li = document.createElement("li");
    li.className = "library-item";

    const button = document.createElement("button");
    button.type = "button";
    button.className = `library-link ${item.id === appState.selectedSnippetId ? "is-selected" : ""}`;
    button.addEventListener("click", async () => {
      await loadSnippetDetail(item.id);
    });

    const title = document.createElement("span");
    title.className = "library-title";
    title.textContent = item.title;

    const meta = document.createElement("span");
    meta.className = "library-meta";
    meta.textContent = `${item.language} · ${formatDateTime(item.createdAt)}`;

    const summary = document.createElement("span");
    summary.className = "library-summary";
    summary.textContent = item.summary;

    const tags = document.createElement("span");
    tags.className = "library-tags";
    tags.textContent = (item.tags || []).slice(0, 4).join(" · ") || "untagged";

    button.append(title, meta, summary, tags);
    li.appendChild(button);
    elements.libraryList.appendChild(li);
  }
}

async function loadSnippetDetail(id) {
  try {
    const response = await fetch(`/api/snippets/${encodeURIComponent(id)}`);
    const payload = await response.json();

    if (!response.ok) {
      throw new Error(payload.error || "Failed to load snippet.");
    }

    appState.selectedSnippetId = id;
    renderLibraryList(appState.libraryItems);
    renderSnippetDetail(payload.snippet);
  } catch (error) {
    clearLibraryDetail(
      error instanceof Error ? error.message : "Unable to load snippet detail.",
    );
  }
}

function renderSnippetDetail(snippet) {
  elements.libraryEmptyState.classList.add("hidden");
  elements.libraryDetail.classList.remove("hidden");

  elements.detailTitle.textContent = snippet.title;
  elements.detailMeta.textContent = [
    `${snippet.analysis.language} · ${Math.round(snippet.analysis.languageConfidence * 100)}% confidence`,
    snippet.source ? `source: ${snippet.source}` : "",
    formatDateTime(snippet.createdAt),
  ]
    .filter(Boolean)
    .join(" · ");
  elements.detailReason.textContent = snippet.reason ? `Why saved: ${snippet.reason}` : "";
  elements.detailNotes.textContent = snippet.notes ? `Notes: ${snippet.notes}` : "";
  elements.detailSummary.textContent = snippet.analysis.summary;
  renderChipRow(elements.detailTags, snippet.analysis.tags);
  renderList(
    elements.detailDirectives,
    snippet.analysis.buildDirectives,
    "No directives recorded.",
  );
  renderList(
    elements.detailPatterns,
    snippet.analysis.reusablePatterns,
    "No patterns recorded.",
  );
  renderList(
    elements.detailAvoid,
    snippet.analysis.antiPatternsToAvoid,
    "No avoid signals recorded.",
  );
  elements.detailCode.textContent = snippet.code;
  elements.detailDigest.textContent = snippet.digestMarkdown;
}

function clearLibraryDetail(message = "Select a snippet to inspect its code, digest, and learned signals.") {
  elements.libraryEmptyState.textContent = message;
  elements.libraryEmptyState.classList.remove("hidden");
  elements.libraryDetail.classList.add("hidden");
  appState.selectedSnippetId = null;
}

function renderBlueprint(blueprint) {
  elements.blueprintTitle.textContent = `${blueprint.productName} · ${blueprint.mode}`;
  elements.blueprintThesis.textContent = blueprint.thesis;
  renderChipRow(elements.blueprintStack, blueprint.recommendedStack);
  renderList(elements.blueprintTaste, blueprint.tasteAlignment, "No taste alignment notes.");
  renderList(
    elements.blueprintExperience,
    blueprint.experiencePrinciples,
    "No experience principles.",
  );
  renderList(
    elements.blueprintArchitecture,
    blueprint.architectureDirection,
    "No architecture notes.",
  );
  renderList(
    elements.blueprintFeatures,
    blueprint.initialFeatures,
    "No feature slice proposed.",
  );
  renderList(
    elements.blueprintBuildOrder,
    blueprint.buildOrder,
    "No build order proposed.",
  );
  renderList(
    elements.blueprintGuardrails,
    blueprint.guardrails,
    "No guardrails proposed.",
  );
  elements.starterPromptOutput.textContent = blueprint.starterPrompt;
}

function renderChipRow(container, items) {
  container.innerHTML = "";

  if (!items.length) {
    const chip = document.createElement("span");
    chip.className = "chip muted";
    chip.textContent = "No data yet";
    container.appendChild(chip);
    return;
  }

  for (const item of items) {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = typeof item === "string" ? item : `${item.value} (${item.count})`;
    container.appendChild(chip);
  }
}

function renderList(container, items, fallback) {
  container.innerHTML = "";

  const safeItems = items.length ? items : [fallback];

  for (const item of safeItems) {
    const li = document.createElement("li");
    li.textContent = item;
    container.appendChild(li);
  }
}

function formatCountChip(item) {
  return `${item.value} (${item.count})`;
}

function formatDateTime(value) {
  try {
    return new Date(value).toLocaleString();
  } catch {
    return value;
  }
}

function mergeUnique(primary, secondary) {
  return [...new Set([...(primary || []), ...(secondary || [])])];
}

function setDigestBusy(isBusy) {
  elements.digestButton.disabled = isBusy;
  elements.digestButton.textContent = isBusy ? "Digesting…" : "Digest";
}

function setStudioBusy(isBusy) {
  elements.generateButton.disabled = isBusy;
  elements.generateButton.textContent = isBusy ? "Shaping…" : "Shape Product";
}

function setDigestStatus(message, tone) {
  elements.statusText.textContent = message;
  elements.statusText.className = `status ${tone}`;
}

function setStudioStatus(message, tone) {
  elements.studioStatus.textContent = message;
  elements.studioStatus.className = `status ${tone}`;
}
