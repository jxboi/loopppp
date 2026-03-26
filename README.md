# Code Digest Studio

Code Digest Studio is a local web app for developers who want to teach a tool what "good code" looks like to them.

The app does three things:

1. It digests saved code snippets and learns from them.
2. It stores that learning as persistent markdown and structured profile data.
3. It uses the accumulated taste profile to shape future product ideas.

## App surfaces

- `Digest`: paste code and save it into the system.
- `Library`: search prior digests, inspect saved code, and review the generated markdown artifact.
- `Studio`: enter a product idea and generate a taste-aligned product blueprint from the learned profile.

## What gets learned

Each digest captures:

- likely language
- one or more tags
- style observations
- inferred preferences
- reusable patterns
- build directives for future generators
- anti-patterns or avoid signals

## Files written at runtime

- `data/digests/*.md`: per-snippet markdown digests
- `data/snippets/*.json`: full structured snippet records
- `data/snippets/index.json`: snippet library index
- `data/learnings/style-memory.md`: living markdown memory of the developer's taste
- `data/learnings/learning-log.md`: append-only learning history
- `data/learnings/prompt-kit.md`: compact prompt-friendly version of the profile
- `data/profile/profile.json`: aggregated profile metrics and counts
- `data/profile/taste-context.json`: machine-readable context for downstream tooling

## Running locally

1. Copy `.env.example` to `.env`.
2. Add `OPENAI_API_KEY` if you want AI-powered digestion and product shaping.
3. Start the app:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

No dependency install is required.

## Heuristic fallback

If no API key is present, the app still works.

If you want to suppress OpenAI calls entirely, leave `OPENAI_API_KEY` unset and the app will stay in heuristic mode.

In fallback mode it will:

- identify the likely language heuristically
- infer tags and style signals from syntax and structure
- update the markdown memory and prompt kit
- generate product blueprints from the stored profile without calling an external model

## Self-improvement loop

Every time you digest a snippet, the app:

1. reads the current `style-memory.md`
2. analyzes the new snippet against that existing memory
3. updates the living markdown memory
4. updates the structured profile and prompt kit
5. makes that profile available to the `Studio` generator

That means the system becomes more grounded in the developer's actual preferences as more snippets are saved.
