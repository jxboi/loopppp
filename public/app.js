const elements = {
  tabs: [...document.querySelectorAll("[data-view-target]")],
  viewOpenButtons: [...document.querySelectorAll("[data-open-view]")],
  views: [...document.querySelectorAll("[data-view]")],
  activeViewDescription: document.querySelector("#activeViewDescription"),
  segmentButtons: [
    ...document.querySelectorAll(
      "[data-segment-target]:not([data-modal-open])",
    ),
  ],
  segmentPanels: [...document.querySelectorAll("[data-segment-panel]")],
  modalOpenButtons: [...document.querySelectorAll("[data-modal-open]")],
  modalCloseButtons: [...document.querySelectorAll("[data-modal-close]")],
  modalRoots: [...document.querySelectorAll("[data-modal-root]")],
  exportButtons: [...document.querySelectorAll("[data-export-type]")],
  digestButton: document.querySelector("#digestButton"),
  generateButton: document.querySelector("#generateButton"),
  saveProfileButton: document.querySelector("#saveProfileButton"),
  copyPromptKitButton: document.querySelector("#copyPromptKitButton"),
  copyWorkspaceMemoryButton: document.querySelector(
    "#copyWorkspaceMemoryButton",
  ),
  copyMemoryButton: document.querySelector("#copyMemoryButton"),
  copyDigestButton: document.querySelector("#copyDigestButton"),
  copyDigestArtifactButton: document.querySelector("#copyDigestArtifactButton"),
  copyCodeButton: document.querySelector("#copyCodeButton"),
  copyPreviewButton: document.querySelector("#copyPreviewButton"),
  copyLatestDigestButton: document.querySelector("#copyLatestDigestButton"),
  copySelectedCodeButton: document.querySelector("#copySelectedCodeButton"),
  copySelectedDigestButton: document.querySelector("#copySelectedDigestButton"),
  copyBlueprintButton: document.querySelector("#copyBlueprintButton"),
  viewStarterPromptButton: document.querySelector("#viewStarterPromptButton"),
  copyPromptModalButton: document.querySelector("#copyPromptModalButton"),
  exportBlueprintButton: document.querySelector("#exportBlueprintButton"),
  formatCodeButton: document.querySelector("#formatCodeButton"),
  highlightCodeButton: document.querySelector("#highlightCodeButton"),
  refreshPreviewButton: document.querySelector("#refreshPreviewButton"),
  clearCodeButton: document.querySelector("#clearCodeButton"),
  undoClearButton: document.querySelector("#undoClearButton"),
  digestOptionsMenu: document.querySelector("#digestOptionsMenu"),
  toggleToolsButton: document.querySelector("#toggleToolsButton"),
  toggleContextButton: document.querySelector("#toggleContextButton"),
  toggleFilePathsButton: document.querySelector("#toggleFilePathsButton"),
  editorToolsPanel: document.querySelector("#editorToolsPanel"),
  digestContextPanel: document.querySelector("#digestContextPanel"),
  digestAutoImportPrompt: document.querySelector("#digestAutoImportPrompt"),
  digestAutoImportText: document.querySelector("#digestAutoImportText"),
  digestAutoImportButton: document.querySelector("#digestAutoImportButton"),
  digestImportReviewPanel: document.querySelector("#digestImportReviewPanel"),
  digestImportReviewTitle: document.querySelector("#digestImportReviewTitle"),
  digestImportReviewMeta: document.querySelector("#digestImportReviewMeta"),
  digestImportReviewSummary: document.querySelector(
    "#digestImportReviewSummary",
  ),
  digestPdfInput: document.querySelector("#digestPdfInput"),
  importPdfButton: document.querySelector("#importPdfButton"),
  applyImportReplaceButton: document.querySelector("#applyImportReplaceButton"),
  applyImportAppendButton: document.querySelector("#applyImportAppendButton"),
  dismissImportReviewButton: document.querySelector(
    "#dismissImportReviewButton",
  ),
  clearImportedSourceButton: document.querySelector(
    "#clearImportedSourceButton",
  ),
  digestImportChip: document.querySelector("#digestImportChip"),
  digestImportTitle: document.querySelector("#digestImportTitle"),
  digestImportSummary: document.querySelector("#digestImportSummary"),
  loadSampleSourceButton: document.querySelector("#loadSampleSourceButton"),
  digestEditorDropzone: document.querySelector("#digestEditorDropzone"),
  digestDropOverlay: document.querySelector("#digestDropOverlay"),
  codeInput: document.querySelector("#codeInput"),
  snippetTitleInput: document.querySelector("#snippetTitleInput"),
  snippetSourceInput: document.querySelector("#snippetSourceInput"),
  snippetReasonInput: document.querySelector("#snippetReasonInput"),
  snippetNotesInput: document.querySelector("#snippetNotesInput"),
  editorLanguage: document.querySelector("#editorLanguage"),
  codePreviewContent: document.querySelector("#codePreviewContent"),
  codePreviewLabel: document.querySelector("#codePreviewLabel"),
  previewStateChip: document.querySelector("#previewStateChip"),
  previewRefreshNotice: document.querySelector("#previewRefreshNotice"),
  previewRefreshText: document.querySelector("#previewRefreshText"),
  ideaInput: document.querySelector("#ideaInput"),
  studioIdeaPreview: document.querySelector("#studioIdeaPreview"),
  studioAudienceInput: document.querySelector("#studioAudienceInput"),
  studioProblemInput: document.querySelector("#studioProblemInput"),
  studioFirstReleaseInput: document.querySelector("#studioFirstReleaseInput"),
  constraintsInput: document.querySelector("#constraintsInput"),
  studioScopeInput: document.querySelector("#studioScopeInput"),
  studioScopeSummary: document.querySelector("#studioScopeSummary"),
  studioScopeButtons: [...document.querySelectorAll("[data-studio-scope]")],
  studioClarifyCard: document.querySelector("#studioClarifyCard"),
  studioClarifyList: document.querySelector("#studioClarifyList"),
  librarySearchInput: document.querySelector("#librarySearchInput"),
  librarySearchCount: document.querySelector("#librarySearchCount"),
  libraryFilterSummary: document.querySelector("#libraryFilterSummary"),
  libraryFiltersPanel: document.querySelector("#libraryFiltersPanel"),
  clearLibraryFiltersButton: document.querySelector(
    "#clearLibraryFiltersButton",
  ),
  libraryModeSelect: document.querySelector("#libraryModeSelect"),
  libraryRecencySelect: document.querySelector("#libraryRecencySelect"),
  libraryLanguageSelect: document.querySelector("#libraryLanguageSelect"),
  libraryTagSelect: document.querySelector("#libraryTagSelect"),
  libraryTableWrap: document.querySelector("#libraryTableWrap"),
  statusBanner: document.querySelector("#statusBanner"),
  statusText: document.querySelector("#statusText"),
  digestDraftStatus: document.querySelector("#digestDraftStatus"),
  restoreDigestDraftButton: document.querySelector("#restoreDigestDraftButton"),
  studioStatusBanner: document.querySelector("#studioStatusBanner"),
  studioStatus: document.querySelector("#studioStatus"),
  studioProgressPanel: document.querySelector("#studioProgressPanel"),
  studioProgressBar: document.querySelector("#studioProgressBar"),
  studioProgressSteps: document.querySelector("#studioProgressSteps"),
  studioDraftStatus: document.querySelector("#studioDraftStatus"),
  restoreStudioDraftButton: document.querySelector("#restoreStudioDraftButton"),
  profileStatusBanner: document.querySelector("#profileStatusBanner"),
  profileStatus: document.querySelector("#profileStatus"),
  profileUndoBar: document.querySelector("#profileUndoBar"),
  profileUndoSummary: document.querySelector("#profileUndoSummary"),
  undoLastProfileChangeButton: document.querySelector(
    "#undoLastProfileChangeButton",
  ),
  profileLearningModeSummary: document.querySelector(
    "#profileLearningModeSummary",
  ),
  profileLearningModeButtons: [
    ...document.querySelectorAll("[data-learning-mode]"),
  ],
  headerProfileStatus: document.querySelector("#headerProfileStatus"),
  headerProfileBadge: document.querySelector("#headerProfileBadge"),
  quickProfileSummary: document.querySelector("#quickProfileSummary"),
  quickProfileIdentity: document.querySelector("#quickProfileIdentity"),
  quickProfileMeta: document.querySelector("#quickProfileMeta"),
  quickLanguageChips: document.querySelector("#quickLanguageChips"),
  quickTagChips: document.querySelector("#quickTagChips"),
  profileSummary: document.querySelector("#profileSummary"),
  profileGrowthSummary: document.querySelector("#profileGrowthSummary"),
  profileGrowthShift: document.querySelector("#profileGrowthShift"),
  profileActiveMetric: document.querySelector("#profileActiveMetric"),
  profileActiveDetail: document.querySelector("#profileActiveDetail"),
  profileLastChangedMetric: document.querySelector("#profileLastChangedMetric"),
  profileLastChangedDetail: document.querySelector("#profileLastChangedDetail"),
  profileGrowthLanguages: document.querySelector("#profileGrowthLanguages"),
  profileGrowthTags: document.querySelector("#profileGrowthTags"),
  profileGrowthDirectives: document.querySelector("#profileGrowthDirectives"),
  profileGrowthTimeline: document.querySelector("#profileGrowthTimeline"),
  profileTimelineCaption: document.querySelector("#profileTimelineCaption"),
  profileTimelineDetailKicker: document.querySelector(
    "#profileTimelineDetailKicker",
  ),
  profileTimelineDetailTitle: document.querySelector(
    "#profileTimelineDetailTitle",
  ),
  profileTimelineDetailMeta: document.querySelector(
    "#profileTimelineDetailMeta",
  ),
  profileTimelineDetailSummary: document.querySelector(
    "#profileTimelineDetailSummary",
  ),
  profileTimelineContributors: document.querySelector(
    "#profileTimelineContributors",
  ),
  profileTimelineImpactList: document.querySelector(
    "#profileTimelineImpactList",
  ),
  profileTimelineCharacterSection: document.querySelector(
    "#profileTimelineCharacterSection",
  ),
  profileTimelineCharacter: document.querySelector("#profileTimelineCharacter"),
  profileTimelinePreferencesSection: document.querySelector(
    "#profileTimelinePreferencesSection",
  ),
  profileTimelinePreferences: document.querySelector(
    "#profileTimelinePreferences",
  ),
  profileTimelineSkillsetSection: document.querySelector(
    "#profileTimelineSkillsetSection",
  ),
  profileTimelineSkillset: document.querySelector("#profileTimelineSkillset"),
  profileKnowledgeSummary: document.querySelector("#profileKnowledgeSummary"),
  knowledgeAdvancedSection: document.querySelector("#knowledgeAdvancedSection"),
  recentDigestFilterSummary: document.querySelector(
    "#recentDigestFilterSummary",
  ),
  recentDigestFilterButtons: [
    ...document.querySelectorAll("[data-recent-digest-filter]"),
  ],
  profileGrowthWindowButtons: [
    ...document.querySelectorAll("[data-profile-window]"),
  ],
  profileFacetButtons: [...document.querySelectorAll("[data-profile-facet]")],
  profileIdentity: document.querySelector("#profileIdentity"),
  profileHeadline: document.querySelector("#profileHeadline"),
  profileManualList: document.querySelector("#profileManualList"),
  recentDigests: document.querySelector("#recentDigests"),
  promptKitPreview: document.querySelector("#promptKitPreview"),
  memoryPreview: document.querySelector("#memoryPreview"),
  resultsSection: document.querySelector("#resultsSection"),
  languageLabel: document.querySelector("#languageLabel"),
  summaryText: document.querySelector("#summaryText"),
  nextActionSummary: document.querySelector("#nextActionSummary"),
  nextActionDetail: document.querySelector("#nextActionDetail"),
  digestProfileImpactCard: document.querySelector("#digestProfileImpactCard"),
  digestProfileImpactKicker: document.querySelector(
    "#digestProfileImpactKicker",
  ),
  digestProfileImpactSummary: document.querySelector(
    "#digestProfileImpactSummary",
  ),
  digestProfileImpactSignals: document.querySelector(
    "#digestProfileImpactSignals",
  ),
  digestProfileImpactList: document.querySelector("#digestProfileImpactList"),
  digestProfileImpactActionButton: document.querySelector(
    "#digestProfileImpactActionButton",
  ),
  useLatestInStudioButton: document.querySelector("#useLatestInStudioButton"),
  openLatestInLibraryButton: document.querySelector(
    "#openLatestInLibraryButton",
  ),
  tagList: document.querySelector("#tagList"),
  styleList: document.querySelector("#styleList"),
  preferencesList: document.querySelector("#preferencesList"),
  directivesList: document.querySelector("#directivesList"),
  patternsList: document.querySelector("#patternsList"),
  avoidList: document.querySelector("#avoidList"),
  memoryOutput: document.querySelector("#memoryOutput"),
  digestOutput: document.querySelector("#digestOutput"),
  filePaths: document.querySelector("#filePaths"),
  filePathsPanel: document.querySelector("#filePathsPanel"),
  libraryList: document.querySelector("#libraryList"),
  libraryEmptyState: document.querySelector("#libraryEmptyState"),
  libraryEmptyText: document.querySelector("#libraryEmptyText"),
  libraryEmptyDigestButton: document.querySelector("#libraryEmptyDigestButton"),
  libraryDetail: document.querySelector("#libraryDetail"),
  detailTitle: document.querySelector("#detailTitle"),
  detailMeta: document.querySelector("#detailMeta"),
  detailSourceNotes: document.querySelector("#detailSourceNotes"),
  detailReason: document.querySelector("#detailReason"),
  detailNotes: document.querySelector("#detailNotes"),
  detailTags: document.querySelector("#detailTags"),
  detailSummary: document.querySelector("#detailSummary"),
  detailDirectives: document.querySelector("#detailDirectives"),
  detailPatterns: document.querySelector("#detailPatterns"),
  detailAvoid: document.querySelector("#detailAvoid"),
  detailCode: document.querySelector("#detailCode"),
  detailDigest: document.querySelector("#detailDigest"),
  libraryPrevButton: document.querySelector("#libraryPrevButton"),
  libraryNextButton: document.querySelector("#libraryNextButton"),
  libraryActionsMenu: document.querySelector("#libraryActionsMenu"),
  sendSelectionToDigestButton: document.querySelector(
    "#sendSelectionToDigestButton",
  ),
  useSelectionInStudioButton: document.querySelector(
    "#useSelectionInStudioButton",
  ),
  blueprintTitle: document.querySelector("#blueprintTitle"),
  blueprintThesis: document.querySelector("#blueprintThesis"),
  blueprintStackChoiceCard: document.querySelector("#blueprintStackChoiceCard"),
  blueprintStack: document.querySelector("#blueprintStack"),
  blueprintStackDecision: document.querySelector("#blueprintStackDecision"),
  blueprintStackPreview: document.querySelector("#blueprintStackPreview"),
  blueprintStackActions: document.querySelector("#blueprintStackActions"),
  usePreferredStackButton: document.querySelector("#usePreferredStackButton"),
  acceptSuggestedStackButton: document.querySelector(
    "#acceptSuggestedStackButton",
  ),
  blueprintLaunchSlice: document.querySelector("#blueprintLaunchSlice"),
  blueprintBuildLead: document.querySelector("#blueprintBuildLead"),
  blueprintPrinciples: document.querySelector("#blueprintPrinciples"),
  blueprintPlan: document.querySelector("#blueprintPlan"),
  blueprintGuardrailsDetails: document.querySelector(
    "#blueprintGuardrailsDetails",
  ),
  blueprintGuardrails: document.querySelector("#blueprintGuardrails"),
  blueprintEmptyState: document.querySelector("#blueprintEmptyState"),
  blueprintContent: document.querySelector("#blueprintContent"),
  studioActionsMenu: document.querySelector("#studioActionsMenu"),
  studioRefinementPanel: document.querySelector("#studioRefinementPanel"),
  adjustBlueprintStackSection: document.querySelector(
    "#adjustBlueprintStackSection",
  ),
  adjustBlueprintStackRationale: document.querySelector(
    "#adjustBlueprintStackRationale",
  ),
  starterPromptOutput: document.querySelector("#starterPromptOutput"),
  studioContextSummary: document.querySelector("#studioContextSummary"),
  studioContextModeButtons: [
    ...document.querySelectorAll("[data-studio-context-mode]"),
  ],
  studioContextSourcePanel: document.querySelector("#studioContextSourcePanel"),
  studioContextSourceHelper: document.querySelector(
    "#studioContextSourceHelper",
  ),
  studioContextStrip: document.querySelector("#studioContextStrip"),
  toggleStudioConstraintComposerButton: document.querySelector(
    "#toggleStudioConstraintComposerButton",
  ),
  studioConstraintPreview: document.querySelector("#studioConstraintPreview"),
  studioConstraintComposer: document.querySelector("#studioConstraintComposer"),
  constraintPresetButtons: [
    ...document.querySelectorAll("[data-constraint-preset]"),
  ],
  refinementPresetSelect: document.querySelector("#refinementPresetSelect"),
  refinementModeInput: document.querySelector("#refinementModeInput"),
  refinementQuickButtons: [
    ...document.querySelectorAll("[data-refinement-preset]"),
  ],
  refinementCustomButton: document.querySelector("#refinementCustomButton"),
  refinementCustomPanel: document.querySelector("#refinementCustomPanel"),
  refinementNotesInput: document.querySelector("#refinementNotesInput"),
  refinementHint: document.querySelector("#refinementHint"),
  applyRefinementButton: document.querySelector("#applyRefinementButton"),
  clearRefinementButton: document.querySelector("#clearRefinementButton"),
  refinementSummary: document.querySelector("#refinementSummary"),
  profileForm: document.querySelector("#profileForm"),
  profileName: document.querySelector("#profileName"),
  profileRole: document.querySelector("#profileRole"),
  profileHeadlineInput: document.querySelector("#profileHeadlineInput"),
  profileFocus: document.querySelector("#profileFocus"),
  profileStack: document.querySelector("#profileStack"),
  profileStackTemplate: document.querySelector("#profileStackTemplate"),
  profileStackOptionButtons: [
    ...document.querySelectorAll("[data-stack-option]"),
  ],
  profileDesignTaste: document.querySelector("#profileDesignTaste"),
  profileBuildNotes: document.querySelector("#profileBuildNotes"),
  exportSummary: document.querySelector("#exportSummary"),
  editorLineCount: document.querySelector("#editorLineCount"),
  editorCharCount: document.querySelector("#editorCharCount"),
  detectedLanguageChip: document.querySelector("#detectedLanguageChip"),
  toast: document.querySelector("#toast"),
  toastText: document.querySelector("#toastText"),
};

const appState = {
  activeView: "digest",
  libraryItems: [],
  filteredLibraryItems: [],
  libraryQuery: "",
  libraryFilters: {
    mode: "all",
    recency: "all",
    language: "all",
    tag: "all",
  },
  selectedSnippetId: null,
  selectedSnippet: null,
  latestDigestMarkdown: "",
  latestMemoryMarkdown: "",
  latestSnippet: null,
  latestDigestProfileImpact: null,
  latestBlueprint: null,
  blueprintMarkdown: "",
  lastRefinement: "",
  profile: null,
  profileHistory: null,
  profileHistoryWindow: "all",
  profileTimelineVisibleFacets: ["character", "preferences", "skillset"],
  profileTimelineFocusId: "",
  profileInclusionBusyId: null,
  promptKitMarkdown: "",
  memoryMarkdown: "",
  recentDigests: [],
  recentDigestFilter: "all",
  profileBusy: false,
  profileUndoBusy: false,
  librarySearchTimer: null,
  activeModalId: null,
  activeModalTrigger: null,
  toolsVisible: false,
  digestContextVisible: false,
  filePathsVisible: false,
  editorPreviewHtml: "",
  editorPreviewLanguage: "auto",
  previewLanguageSelection: "auto",
  previewStale: false,
  previewSource: "",
  lastClearedEditor: null,
  pendingDigestImport: null,
  queuedDigestPdfFile: null,
  digestImportedSource: null,
  studioContextMode: "profile",
  studioContext: null,
  studioConstraintComposerVisible: false,
  hasReviewedLibrarySelection: false,
  studioBusy: false,
  studioProgressActive: false,
  studioProgressStageIndex: -1,
  studioProgressStages: [],
  studioProgressTimers: [],
  studioProgressRequestId: 0,
  studioClarifyVisible: false,
  digestBusy: false,
  digestDraftSaveTimer: null,
  studioDraftSaveTimer: null,
  toastTimer: null,
  detailHighlightRequestId: 0,
};

const TAB_ACTIVE_CLASSES = [
  "border-slate-900",
  "bg-slate-900",
  "text-white",
  "shadow-sm",
];
const TAB_INACTIVE_CLASSES = [
  "border-transparent",
  "bg-transparent",
  "text-slate-500",
  "hover:border-slate-200",
  "hover:bg-slate-100",
  "hover:text-slate-900",
];
const VIEW_DESCRIPTIONS = {
  digest: "Turn one source into reusable signals.",
  knowledge: "Manage saved sources and the profile they shape.",
  studio: "Turn learned taste into a focused product direction.",
};
const SEGMENT_ACTIVE_CLASSES = ["bg-white", "text-slate-900", "shadow-sm"];
const SEGMENT_INACTIVE_CLASSES = ["text-slate-500", "hover:text-slate-900"];
const STATUS_BANNER_BASE_CLASSES = ["status-banner"];
const STATUS_TONE_CLASSES = {
  idle: ["border-slate-200", "bg-slate-50", "text-slate-600"],
  working: ["border-sky-200", "bg-sky-50", "text-sky-700"],
  success: ["border-emerald-200", "bg-emerald-50", "text-emerald-700"],
  error: ["border-rose-200", "bg-rose-50", "text-rose-700"],
};
const CHIP_PRIMARY_CLASSES = "chip-accent";
const CHIP_MUTED_CLASSES = "chip";
const STUDIO_PROGRESS_STEPS = [
  { key: "brief", label: "Brief", progress: 18 },
  { key: "context", label: "Context", progress: 42 },
  { key: "shape", label: "Blueprint", progress: 74 },
  { key: "finalize", label: "Finalize", progress: 92 },
];
const RECENT_ITEM_CLASSES =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left transition hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50/60";
const RECENT_TITLE_CLASSES =
  "block text-sm font-semibold leading-6 tracking-[-0.01em] text-slate-900";
const RECENT_META_CLASSES =
  "mt-2 block font-['IBM_Plex_Mono',monospace] text-[11px] text-slate-500";
const LIBRARY_EMPTY_CLASSES =
  "rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-600";
const LIBRARY_LINK_BASE_CLASSES =
  "w-full rounded-2xl border px-4 py-4 text-left transition";
const LIBRARY_LINK_IDLE_CLASSES =
  "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50/60";
const LIBRARY_LINK_SELECTED_CLASSES =
  "border-sky-300 bg-sky-50 shadow-[inset_0_0_0_1px_rgba(56,189,248,0.16)]";
const LIBRARY_TITLE_CLASSES =
  "block text-[15px] font-semibold leading-6 tracking-[-0.01em] text-slate-900";
const LIBRARY_META_CLASSES =
  "mt-2 block font-['IBM_Plex_Mono',monospace] text-[11px] text-slate-500";
const LIBRARY_SUMMARY_CLASSES = "mt-2 block text-sm leading-6 text-slate-700";
const LIBRARY_TAGS_CLASSES =
  "mt-3 block font-['IBM_Plex_Mono',monospace] text-[11px] text-slate-500";
const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
const TAB_NAVIGATION_KEYS = ["ArrowLeft", "ArrowRight", "Home", "End"];
const MAX_DIGEST_PDF_BYTES = 5_000_000;
const PROFILE_STACK_TEMPLATES = {
  custom: [],
  "next-supabase": [
    "TypeScript",
    "Next.js",
    "React",
    "Supabase",
    "PostgreSQL",
    "Tailwind CSS",
  ],
  t3: [
    "TypeScript",
    "Next.js",
    "React",
    "tRPC",
    "Prisma",
    "PostgreSQL",
    "Tailwind CSS",
  ],
  "python-fastapi": ["Python", "FastAPI", "PostgreSQL", "React"],
  "rails-hotwire": ["Ruby on Rails", "Hotwire", "PostgreSQL"],
};
const STUDIO_TOGGLE_ACTIVE_CLASSES = [
  "border-sky-300",
  "bg-sky-50",
  "text-sky-800",
  "shadow-[inset_0_0_0_1px_rgba(56,189,248,0.16)]",
];
const STUDIO_TOGGLE_INACTIVE_CLASSES = [
  "border-slate-200",
  "bg-white",
  "text-slate-600",
  "hover:border-slate-300",
  "hover:text-slate-900",
];
const PROFILE_FACET_ORDER = ["character", "preferences", "skillset"];
const PROFILE_FACET_META = {
  character: {
    label: "Character",
    stroke: "#0f766e",
    fill: "rgba(15,118,110,0.14)",
    dot: "#0f766e",
    summary:
      "Tracks how strongly each saved analysis shifted the overall profile character and voice.",
  },
  preferences: {
    label: "Preferences",
    stroke: "#0284c7",
    fill: "rgba(2,132,199,0.14)",
    dot: "#0284c7",
    summary:
      "Tracks how each saved analysis changed preferred patterns, directives, and working style.",
  },
  skillset: {
    label: "Skillset",
    stroke: "#7c3aed",
    fill: "rgba(124,58,237,0.14)",
    dot: "#7c3aed",
    summary:
      "Tracks how each saved analysis expanded or reinforced the visible technical skill profile.",
  },
};
const STUDIO_SCOPE_OPTIONS = {
  mvp: {
    label: "MVP",
    summary: "Keep the first release narrow, useful, and fast to ship.",
    constraint:
      "Keep the first release narrow and tightly scoped around the smallest useful workflow.",
  },
  balanced: {
    label: "Balanced",
    summary: "Balance clarity and capability in the first release.",
    constraint:
      "Balance a focused first release with enough capability to feel complete.",
  },
  ambitious: {
    label: "Ambitious",
    summary: "Allow a broader first release, but keep the experience coherent.",
    constraint:
      "Allow a more expansive first release, but keep the experience coherent and avoid feature sprawl.",
  },
};
const REFINEMENT_PRESET_SMALLER_MVP =
  "Shrink the first release into a smaller MVP.";
const REFINEMENT_PRESET_MORE_TECHNICAL =
  "Make the plan more technical and implementation-oriented.";
const REFINEMENT_PRESET_CLEANER_UX =
  "Strengthen the UX and interaction guidance.";
const LEGACY_REFINEMENT_PRESET_MORE_MINIMAL =
  "Make the product feel more minimal and focused.";
const BLUEPRINT_STACK_BUCKETS = [
  { key: "app", label: "App" },
  { key: "data", label: "Data" },
  { key: "infra", label: "Infra" },
];
const BLUEPRINT_STACK_VISIBLE_LIMIT = 5;
const DIGEST_DRAFT_STORAGE_KEY = "loopppp:digest-draft:v1";
const STUDIO_DRAFT_STORAGE_KEY = "loopppp:studio-draft:v1";
const DIGEST_AUTOSAVE_DELAY_MS = 280;
const STUDIO_AUTOSAVE_DELAY_MS = 280;
const MIN_LIBRARY_ITEMS_FOR_FILTERS = 6;
const DIGEST_SAMPLE_SOURCE = {
  title: "Search command palette",
  source: "quick-start/sample.ts",
  reason:
    "A compact sample that shows event handling, filtering, and state updates in one place.",
  notes:
    "Use this to understand the Analyze, Library, and Studio loop without preparing your own source first.",
  code: `type Command = { id: string; label: string; keywords: string[] };

const commands: Command[] = [
  { id: "open", label: "Open project", keywords: ["project", "workspace"] },
  { id: "search", label: "Search files", keywords: ["find", "files"] },
  { id: "deploy", label: "Deploy preview", keywords: ["ship", "preview"] },
];

export function filterCommands(query: string) {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return commands;
  }

  return commands.filter((command) => {
    const haystack = [command.label, ...command.keywords].join(" ").toLowerCase();
    return haystack.includes(normalized);
  });
}

export function nextCommand(currentId: string | null, query: string) {
  const filtered = filterCommands(query);

  if (!filtered.length) {
    return null;
  }

  if (!currentId) {
    return filtered[0];
  }

  const index = filtered.findIndex((command) => command.id === currentId);
  return filtered[(index + 1 + filtered.length) % filtered.length];
}`,
};

bindEvents();
void boot();

function bindEvents() {
  for (const tab of elements.tabs) {
    tab.addEventListener("click", () => {
      setActiveView(tab.dataset.viewTarget || "digest");
    });
  }

  for (const button of elements.viewOpenButtons) {
    button.addEventListener("click", () => {
      openView(button.dataset.openView || "digest", {
        focusTargetId: button.dataset.openViewFocus || "",
        openKnowledgeAdvanced: button.dataset.openKnowledgeAdvanced === "true",
        segmentGroup: button.dataset.openSegmentGroup || "",
        segmentTarget: button.dataset.openSegmentTarget || "",
      });
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

  for (const button of elements.profileGrowthWindowButtons) {
    button.addEventListener("click", () => {
      appState.profileHistoryWindow = button.dataset.profileWindow || "all";
      renderProfileHistory(appState.profileHistory);
    });
  }

  for (const button of elements.profileFacetButtons) {
    button.addEventListener("click", () => {
      const facet = button.dataset.profileFacet || "";

      if (!PROFILE_FACET_META[facet]) {
        return;
      }

      const visibleFacets = getVisibleProfileFacetKeys();

      if (visibleFacets.includes(facet)) {
        if (visibleFacets.length === 1) {
          return;
        }

        appState.profileTimelineVisibleFacets = visibleFacets.filter(
          (key) => key !== facet,
        );
      } else {
        appState.profileTimelineVisibleFacets = PROFILE_FACET_ORDER.filter(
          (key) => key === facet || visibleFacets.includes(key),
        );
      }

      renderProfileHistory(appState.profileHistory);
    });
  }

  for (const button of elements.profileLearningModeButtons) {
    button.addEventListener("click", () => {
      const nextMode = button.dataset.learningMode || "auto";

      if (appState.profileBusy || nextMode === getProfileLearningMode()) {
        return;
      }

      void updateLearningMode(nextMode);
    });
  }

  for (const button of elements.recentDigestFilterButtons) {
    button.addEventListener("click", () => {
      const nextFilter = button.dataset.recentDigestFilter || "all";

      if (appState.recentDigestFilter === nextFilter) {
        return;
      }

      appState.recentDigestFilter = nextFilter;
      renderRecentDigests(appState.recentDigests);
    });
  }

  elements.undoLastProfileChangeButton?.addEventListener("click", () => {
    if (appState.profileUndoBusy || appState.profileBusy) {
      return;
    }

    void undoLastProfileChange();
  });

  for (const button of elements.modalOpenButtons) {
    button.addEventListener("click", () => {
      const modalId = button.dataset.modalOpen;

      if (!modalId) {
        return;
      }

      if (button.dataset.segmentGroup && button.dataset.segmentTarget) {
        setSegment(button.dataset.segmentGroup, button.dataset.segmentTarget);
      }

      updateExportSummary();
      openModal(modalId, button);
    });
  }

  for (const button of elements.modalCloseButtons) {
    button.addEventListener("click", () => {
      closeModal();
    });
  }

  for (const modal of elements.modalRoots) {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal(modal.id);
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (!appState.activeModalId) {
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      closeModal();
      return;
    }

    if (event.key === "Tab") {
      trapModalFocus(event);
    }
  });

  elements.codeInput.addEventListener("input", () => {
    hideUndoClear();
    markPreviewStale();
    updateEditorMetrics();
    updateAutoImportPrompt();
    scheduleDigestDraftSave();
    updateExportSummary();
  });

  elements.digestPdfInput.addEventListener("change", () => {
    if (appState.pendingDigestImport) {
      appState.pendingDigestImport = null;
    }
    appState.queuedDigestPdfFile = elements.digestPdfInput.files?.[0] || null;
    updateDigestImportState();
    scheduleDigestDraftSave();
  });

  elements.editorLanguage.addEventListener("change", () => {
    markPreviewStale();
    updateEditorMetrics();
  });

  elements.toggleContextButton.addEventListener("click", () => {
    setContextVisible(!appState.digestContextVisible);
    if (elements.digestOptionsMenu) {
      elements.digestOptionsMenu.open = false;
    }
    scheduleDigestDraftSave();
  });

  elements.toggleToolsButton.addEventListener("click", () => {
    setToolsVisible(!appState.toolsVisible);
    if (elements.digestOptionsMenu) {
      elements.digestOptionsMenu.open = false;
    }
  });

  elements.digestButton.addEventListener("click", () => {
    void submitDigest();
  });

  elements.importPdfButton.addEventListener("click", () => {
    void importDigestPdf();
  });

  elements.digestAutoImportButton.addEventListener("click", () => {
    void importDetectedSourceFromEditor();
  });

  elements.applyImportReplaceButton.addEventListener("click", () => {
    applyPendingImportedSource("replace");
  });

  elements.applyImportAppendButton.addEventListener("click", () => {
    applyPendingImportedSource("append");
  });

  elements.dismissImportReviewButton.addEventListener("click", () => {
    dismissPendingImportReview();
  });

  elements.clearImportedSourceButton.addEventListener("click", () => {
    clearImportedSource({ keepContent: true });
  });

  elements.loadSampleSourceButton.addEventListener("click", () => {
    loadDigestSampleSource();
  });

  elements.generateButton.addEventListener("click", () => {
    void submitBlueprintRequest();
  });

  elements.profileForm.addEventListener("submit", (event) => {
    event.preventDefault();
    void submitProfileUpdate();
  });

  elements.profileStackTemplate?.addEventListener("change", () => {
    const nextTemplate = elements.profileStackTemplate.value || "custom";
    const templateItems = PROFILE_STACK_TEMPLATES[nextTemplate];

    if (!templateItems || nextTemplate === "custom") {
      renderProfileStackPicker();
      return;
    }

    elements.profileStack.value = templateItems.join(", ");
    renderProfileStackPicker();
  });

  elements.profileStack?.addEventListener("input", () => {
    renderProfileStackPicker();
  });

  for (const button of elements.profileStackOptionButtons) {
    button.addEventListener("click", () => {
      toggleProfileStackOption(button.dataset.stackOption || "");
    });
  }

  elements.usePreferredStackButton?.addEventListener("click", () => {
    void applyPreferredStackToBlueprint();
  });

  elements.acceptSuggestedStackButton?.addEventListener("click", () => {
    void adoptSuggestedStack();
  });

  elements.formatCodeButton.addEventListener("click", () => {
    void formatCurrentCode();
  });

  elements.highlightCodeButton.addEventListener("click", () => {
    void highlightCurrentCode();
  });

  elements.refreshPreviewButton.addEventListener("click", () => {
    void highlightCurrentCode();
  });

  elements.clearCodeButton.addEventListener("click", () => {
    clearEditor();
  });

  elements.undoClearButton.addEventListener("click", () => {
    restoreClearedEditor();
  });

  elements.restoreDigestDraftButton.addEventListener("click", () => {
    restoreSavedDigestDraft();
  });

  elements.copyCodeButton.addEventListener("click", () => {
    void copyText(
      elements.codeInput.value,
      "Content copied.",
      elements.copyCodeButton,
    );
  });

  elements.copyPreviewButton.addEventListener("click", () => {
    void copyText(
      elements.codePreviewContent.textContent || "",
      "Preview copied.",
      elements.copyPreviewButton,
    );
  });

  elements.copyPromptKitButton.addEventListener("click", () => {
    void copyText(
      appState.promptKitMarkdown,
      "Prompt kit copied.",
      elements.copyPromptKitButton,
    );
  });

  elements.copyWorkspaceMemoryButton.addEventListener("click", () => {
    void copyText(
      appState.memoryMarkdown,
      "Memory copied.",
      elements.copyWorkspaceMemoryButton,
    );
  });

  elements.copyMemoryButton.addEventListener("click", () => {
    void copyText(
      elements.memoryOutput.textContent || "",
      "Memory copied.",
      elements.copyMemoryButton,
    );
  });

  elements.copyDigestButton.addEventListener("click", () => {
    void copyText(
      appState.latestDigestMarkdown,
      "Latest analysis copied.",
      elements.copyDigestButton,
    );
  });

  elements.copyDigestArtifactButton.addEventListener("click", () => {
    void copyText(
      appState.latestDigestMarkdown,
      "Latest analysis copied.",
      elements.copyDigestArtifactButton,
    );
  });

  elements.copyLatestDigestButton.addEventListener("click", () => {
    void copyText(
      appState.latestDigestMarkdown,
      "Latest analysis copied.",
      elements.copyLatestDigestButton,
    );
  });

  elements.copySelectedCodeButton.addEventListener("click", () => {
    void copyText(
      appState.selectedSnippet?.code || "",
      "Selected content copied.",
      elements.copySelectedCodeButton,
    );
  });

  elements.copySelectedDigestButton.addEventListener("click", () => {
    void copyText(
      appState.selectedSnippet?.digestMarkdown || "",
      "Selected analysis copied.",
      elements.copySelectedDigestButton,
    );
  });

  elements.copyBlueprintButton.addEventListener("click", () => {
    void copyText(
      appState.blueprintMarkdown,
      "Blueprint copied.",
      elements.copyBlueprintButton,
    );
  });

  elements.copyPromptModalButton.addEventListener("click", () => {
    void copyText(
      elements.starterPromptOutput.textContent || "",
      "Starter prompt copied.",
      elements.copyPromptModalButton,
    );
  });

  elements.exportBlueprintButton.addEventListener("click", () => {
    exportByType("blueprint");
  });

  elements.useLatestInStudioButton.addEventListener("click", () => {
    useLatestDigestInStudio();
  });

  elements.openLatestInLibraryButton.addEventListener("click", () => {
    void openLatestSnippetInLibrary();
  });

  elements.digestProfileImpactActionButton.addEventListener("click", () => {
    const latestId = appState.latestSnippet?.id;

    if (!latestId) {
      showToast("Run an analysis first.");
      return;
    }

    const recentItem =
      appState.recentDigests.find((item) => item.id === latestId) || null;
    const target = recentItem || {
      id: latestId,
      title: appState.latestSnippet?.title || "Latest analysis",
      profileExcluded: Boolean(appState.latestSnippet?.profileExcluded),
    };

    void toggleSnippetProfileInclusion(target);
  });

  elements.toggleFilePathsButton.addEventListener("click", () => {
    setFilePathsVisible(!appState.filePathsVisible);
  });

  elements.librarySearchInput.addEventListener("input", () => {
    window.clearTimeout(appState.librarySearchTimer);
    appState.librarySearchTimer = window.setTimeout(() => {
      void loadLibrary(elements.librarySearchInput.value.trim());
    }, 180);
  });

  for (const [group, select] of [
    ["mode", elements.libraryModeSelect],
    ["recency", elements.libraryRecencySelect],
    ["language", elements.libraryLanguageSelect],
    ["tag", elements.libraryTagSelect],
  ]) {
    select.addEventListener("change", () => {
      appState.libraryFilters[group] = select.value;
      applyLibraryFilters();
    });
  }

  elements.clearLibraryFiltersButton.addEventListener("click", () => {
    resetLibraryFilters();
  });

  elements.libraryPrevButton.addEventListener("click", () => {
    void moveLibrarySelection(-1);
  });

  elements.libraryNextButton.addEventListener("click", () => {
    void moveLibrarySelection(1);
  });

  elements.libraryEmptyDigestButton.addEventListener("click", () => {
    setActiveView("digest");
    elements.codeInput.focus();
  });

  elements.sendSelectionToDigestButton.addEventListener("click", () => {
    sendSnippetToDigest(appState.selectedSnippet);
  });

  elements.useSelectionInStudioButton.addEventListener("click", () => {
    useSnippetInStudio(appState.selectedSnippet);
  });

  for (const button of elements.studioContextModeButtons) {
    button.addEventListener("click", () => {
      const nextMode = button.dataset.studioContextMode || "profile";

      if (nextMode === getStudioContextMode()) {
        return;
      }

      setStudioContextMode(nextMode);
    });
  }

  for (const field of [
    elements.studioAudienceInput,
    elements.studioProblemInput,
    elements.studioFirstReleaseInput,
  ]) {
    field.addEventListener("input", () => {
      handleStudioBriefInput();
    });
  }

  elements.toggleStudioConstraintComposerButton.addEventListener(
    "click",
    () => {
      setStudioConstraintComposerVisible(
        !appState.studioConstraintComposerVisible,
        {
          focus: !appState.studioConstraintComposerVisible,
        },
      );
    },
  );

  for (const button of elements.constraintPresetButtons) {
    button.addEventListener("click", () => {
      if (!appState.studioConstraintComposerVisible) {
        setStudioConstraintComposerVisible(true);
      }

      insertPresetText(
        elements.constraintsInput,
        button.dataset.constraintPreset,
      );
    });
  }

  elements.constraintsInput.addEventListener("input", () => {
    handleStudioBriefInput();
  });

  for (const button of elements.studioScopeButtons) {
    button.addEventListener("click", () => {
      setStudioScope(button.dataset.studioScope || "balanced");
    });
  }

  for (const button of elements.refinementQuickButtons) {
    button.addEventListener("click", () => {
      const preset = button.dataset.refinementPreset || "";
      const isActive =
        elements.refinementModeInput.value !== "custom" &&
        elements.refinementPresetSelect.value === preset;

      elements.refinementPresetSelect.value = isActive ? "" : preset;
      elements.refinementModeInput.value = isActive ? "" : "preset";
      elements.refinementNotesInput.value = "";
      scheduleStudioDraftSave();
      updateRefinementComposerState();
    });
  }

  elements.refinementCustomButton.addEventListener("click", () => {
    elements.refinementPresetSelect.value = "";
    elements.refinementModeInput.value = "custom";
    scheduleStudioDraftSave();
    updateRefinementComposerState();
    elements.refinementNotesInput.focus();
  });

  elements.refinementPresetSelect.addEventListener("change", () => {
    const preset = normalizeRefinementPreset(
      elements.refinementPresetSelect.value,
    );
    elements.refinementPresetSelect.value = preset;
    elements.refinementModeInput.value = preset ? "preset" : "";
    if (preset) {
      elements.refinementNotesInput.value = "";
    }
    scheduleStudioDraftSave();
    updateRefinementComposerState();
  });

  elements.refinementNotesInput.addEventListener("input", () => {
    if (elements.refinementNotesInput.value.trim()) {
      elements.refinementModeInput.value = "custom";
      elements.refinementPresetSelect.value = "";
    }
    scheduleStudioDraftSave();
    updateRefinementComposerState();
  });

  elements.refinementNotesInput.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
      event.preventDefault();
      void applyRefinement();
    }
  });

  elements.applyRefinementButton.addEventListener("click", () => {
    void applyRefinement();
  });

  elements.clearRefinementButton.addEventListener("click", () => {
    resetRefinementComposer();
  });

  for (const button of elements.exportButtons) {
    button.addEventListener("click", () => {
      exportByType(button.dataset.exportType || "");
    });
  }

  for (const field of [
    elements.snippetTitleInput,
    elements.snippetSourceInput,
    elements.snippetReasonInput,
    elements.snippetNotesInput,
  ]) {
    field.addEventListener("input", () => {
      scheduleDigestDraftSave();
    });
  }

  elements.restoreStudioDraftButton.addEventListener("click", () => {
    restoreSavedStudioDraft();
  });

  elements.digestEditorDropzone.addEventListener("dragenter", (event) => {
    if (!containsPdfFile(event.dataTransfer)) {
      return;
    }
    event.preventDefault();
    setDigestDropActive(true);
  });

  elements.digestEditorDropzone.addEventListener("dragover", (event) => {
    if (!containsPdfFile(event.dataTransfer)) {
      return;
    }
    event.preventDefault();
    setDigestDropActive(true);
  });

  elements.digestEditorDropzone.addEventListener("dragleave", (event) => {
    if (!elements.digestEditorDropzone.contains(event.relatedTarget)) {
      setDigestDropActive(false);
    }
  });

  elements.digestEditorDropzone.addEventListener("drop", (event) => {
    const pdfFile = getPdfFileFromDataTransfer(event.dataTransfer);

    if (!pdfFile) {
      return;
    }

    event.preventDefault();
    setDigestDropActive(false);
    queueDroppedDigestPdf(pdfFile);
  });

  document.addEventListener("click", (event) => {
    closeActionMenuOnOutsideClick(elements.digestOptionsMenu, event);
    closeActionMenuOnOutsideClick(elements.libraryActionsMenu, event);
    closeActionMenuOnOutsideClick(elements.studioActionsMenu, event);
    closeOpenInlineMenus(event);
  });
}

async function boot() {
  initializeAccessibleTabs();
  setSegment("results", "signals");
  setSegment("knowledge", "sources");
  setSegment("snippet", "overview");
  setSegment("editor", "write");
  setToolsVisible(false);
  setContextVisible(false);
  setFilePathsVisible(false);
  setDigestDropActive(false);
  syncPreviewState();
  setBlueprintReady(false);
  updateEditorMetrics();
  setCopyActionState();
  renderLibraryFilters([]);
  resetRefinementComposer();
  setStudioScope("balanced", { skipSave: true });
  clearStudioClarification();
  renderStudioConstraintComposer();
  renderStudioContext();
  renderProfileLearningMode();
  renderProfileHistory(null);
  updateDigestImportState();
  updateAutoImportPrompt();
  updateDraftRestoreControls();
  updateSampleSourceVisibility();
  await refreshState();
  await loadLibrary("");
  updateDraftRestoreControls();
  updateSampleSourceVisibility();
}

function initializeAccessibleTabs() {
  const mainTabList = elements.tabs[0]?.closest("nav");

  if (mainTabList) {
    mainTabList.setAttribute("role", "tablist");
  }

  for (const tab of elements.tabs) {
    tab.setAttribute("role", "tab");
    tab.addEventListener("keydown", handleTabKeydown);

    const viewName = tab.dataset.viewTarget || "";
    const panel = elements.views.find((view) => view.dataset.view === viewName);

    if (!panel) {
      continue;
    }

    if (!tab.id) {
      tab.id = `view-tab-${viewName}`;
    }

    if (!panel.id) {
      panel.id = `view-panel-${viewName}`;
    }

    tab.setAttribute("aria-controls", panel.id);
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", tab.id);
  }

  const segmentGroups = new Map();

  for (const button of elements.segmentButtons) {
    const groupName = button.dataset.segmentGroup || "";

    if (!segmentGroups.has(groupName)) {
      segmentGroups.set(groupName, []);
    }

    segmentGroups.get(groupName).push(button);
    button.setAttribute("role", "tab");
    button.addEventListener("keydown", handleTabKeydown);
  }

  for (const [groupName, buttons] of segmentGroups.entries()) {
    buttons[0]?.parentElement?.setAttribute("role", "tablist");

    for (const button of buttons) {
      const targetName = button.dataset.segmentTarget || "";
      const panel = elements.segmentPanels.find(
        (candidate) =>
          candidate.dataset.segmentGroup === groupName &&
          candidate.dataset.segmentPanel === targetName,
      );

      if (!panel) {
        continue;
      }

      if (!button.id) {
        button.id = `tab-${groupName}-${targetName}`;
      }

      if (!panel.id) {
        panel.id = `panel-${groupName}-${targetName}`;
      }

      button.setAttribute("aria-controls", panel.id);
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("aria-labelledby", button.id);
    }
  }
}

function handleTabKeydown(event) {
  if (!TAB_NAVIGATION_KEYS.includes(event.key)) {
    return;
  }

  const currentButton = event.currentTarget;
  const siblingButtons = currentButton.dataset.viewTarget
    ? elements.tabs
    : elements.segmentButtons.filter(
        (button) =>
          button.dataset.segmentGroup === currentButton.dataset.segmentGroup,
      );

  if (!siblingButtons.length) {
    return;
  }

  event.preventDefault();

  const currentIndex = siblingButtons.indexOf(currentButton);
  let nextIndex = currentIndex;

  if (event.key === "ArrowRight") {
    nextIndex = (currentIndex + 1) % siblingButtons.length;
  } else if (event.key === "ArrowLeft") {
    nextIndex =
      (currentIndex - 1 + siblingButtons.length) % siblingButtons.length;
  } else if (event.key === "Home") {
    nextIndex = 0;
  } else if (event.key === "End") {
    nextIndex = siblingButtons.length - 1;
  }

  const nextButton = siblingButtons[nextIndex];
  nextButton.focus();
  nextButton.click();
}

function setActiveView(viewName) {
  appState.activeView = viewName;

  for (const tab of elements.tabs) {
    const isMatch = tab.dataset.viewTarget === viewName;
    replaceStateClasses(tab, isMatch, TAB_ACTIVE_CLASSES, TAB_INACTIVE_CLASSES);
    tab.setAttribute("aria-selected", String(isMatch));
    tab.tabIndex = isMatch ? 0 : -1;
    if (isMatch) {
      tab.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }

  for (const view of elements.views) {
    view.classList.toggle("hidden", view.dataset.view !== viewName);
  }

  if (elements.activeViewDescription) {
    elements.activeViewDescription.textContent =
      VIEW_DESCRIPTIONS[viewName] || "";
  }
}

function openView(viewName, options = {}) {
  const {
    focusTargetId = "",
    openKnowledgeAdvanced = false,
    segmentGroup = "",
    segmentTarget = "",
  } = options;

  setActiveView(viewName);

  const nextSegmentGroup =
    segmentGroup || (viewName === "knowledge" ? "knowledge" : "");
  const nextSegmentTarget =
    segmentTarget ||
    (viewName === "knowledge" && openKnowledgeAdvanced ? "profile" : "");

  if (nextSegmentGroup && nextSegmentTarget) {
    setSegment(nextSegmentGroup, nextSegmentTarget);
  }

  if (viewName === "knowledge" && elements.knowledgeAdvancedSection) {
    elements.knowledgeAdvancedSection.open = openKnowledgeAdvanced
      ? true
      : elements.knowledgeAdvancedSection.open;
  }

  if (focusTargetId) {
    window.setTimeout(() => {
      document.getElementById(focusTargetId)?.focus();
    }, 0);
  }
}

function updateSampleSourceVisibility() {
  const shouldShow =
    !appState.libraryItems.length &&
    !appState.latestDigestMarkdown.trim() &&
    !elements.codeInput.value.trim();
  elements.loadSampleSourceButton.classList.toggle("hidden", !shouldShow);
}

function loadDigestSampleSource() {
  elements.codeInput.value = DIGEST_SAMPLE_SOURCE.code;
  elements.snippetTitleInput.value = DIGEST_SAMPLE_SOURCE.title;
  elements.snippetSourceInput.value = DIGEST_SAMPLE_SOURCE.source;
  elements.snippetReasonInput.value = DIGEST_SAMPLE_SOURCE.reason;
  elements.snippetNotesInput.value = DIGEST_SAMPLE_SOURCE.notes;
  elements.digestPdfInput.value = "";
  appState.queuedDigestPdfFile = null;
  appState.pendingDigestImport = null;
  appState.digestImportedSource = null;
  setContextVisible(true);
  setSegment("editor", "write");
  updateDigestImportState();
  updateAutoImportPrompt();
  updateEditorMetrics("typescript");
  scheduleDigestDraftSave();
  updateSampleSourceVisibility();
  elements.codeInput.focus();
  setDigestStatus("Sample source loaded into Analyze.", "success");
  showToast("Sample source loaded.");
}

function extractSingleImportableUrl(text) {
  const trimmed = String(text || "").trim();

  if (!trimmed || /\s/.test(trimmed)) {
    return "";
  }

  const normalized = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;

  try {
    const url = new URL(normalized);
    if (!/^https?:$/i.test(url.protocol)) {
      return "";
    }
    return url.toString();
  } catch {
    return "";
  }
}

function updateAutoImportPrompt() {
  const detectedUrl = extractSingleImportableUrl(elements.codeInput.value);
  const shouldShow =
    Boolean(detectedUrl) &&
    !appState.digestImportedSource &&
    !appState.pendingDigestImport &&
    !getQueuedDigestPdf();

  elements.digestAutoImportPrompt.classList.toggle("hidden", !shouldShow);
  if (!shouldShow) {
    return;
  }

  elements.digestAutoImportText.textContent = `This looks like ${isGitHubUrlClient(detectedUrl) ? "a GitHub repository" : "a website"} URL. Import it into the editor instead of analyzing the raw link.`;
}

async function importDetectedSourceFromEditor() {
  const detectedUrl = extractSingleImportableUrl(elements.codeInput.value);

  if (!detectedUrl) {
    updateAutoImportPrompt();
    return;
  }

  scheduleDigestDraftSave();
  await importDigestLink({ url: detectedUrl });
}

function getQueuedDigestPdf() {
  return (
    appState.queuedDigestPdfFile || elements.digestPdfInput.files?.[0] || null
  );
}

function containsPdfFile(dataTransfer) {
  if (getPdfFileFromDataTransfer(dataTransfer)) {
    return true;
  }

  return [...(dataTransfer?.items || [])].some(
    (item) =>
      item.kind === "file" && (!item.type || item.type === "application/pdf"),
  );
}

function getPdfFileFromDataTransfer(dataTransfer) {
  for (const item of [...(dataTransfer?.items || [])]) {
    const file = item.getAsFile?.();
    if (
      file &&
      (file.type === "application/pdf" || /\.pdf$/i.test(file.name))
    ) {
      return file;
    }
  }

  const files = [...(dataTransfer?.files || [])];
  return (
    files.find(
      (file) => file.type === "application/pdf" || /\.pdf$/i.test(file.name),
    ) || null
  );
}

function setDigestDropActive(isActive) {
  elements.digestDropOverlay.classList.toggle("hidden", !isActive);
  elements.digestEditorDropzone.classList.toggle("ring-4", isActive);
  elements.digestEditorDropzone.classList.toggle("ring-sky-200", isActive);
}

function queueDroppedDigestPdf(file) {
  appState.queuedDigestPdfFile = file;
  updateDigestImportState();
  scheduleDigestDraftSave();
  setDigestStatus(
    "PDF dropped into Analyze. Review the import before applying it.",
    "success",
  );
  showToast("PDF ready for import review.");
  void importDigestPdf();
}

function isGitHubUrlClient(url) {
  try {
    return new URL(url).hostname.toLowerCase() === "github.com";
  } catch {
    return false;
  }
}

function closeActionMenuOnOutsideClick(menu, event) {
  if (!menu?.open) {
    return;
  }

  if (!menu.contains(event.target)) {
    menu.open = false;
  }
}

function closeSecondaryActionMenus() {
  if (elements.digestOptionsMenu) {
    elements.digestOptionsMenu.open = false;
  }
  if (elements.libraryActionsMenu) {
    elements.libraryActionsMenu.open = false;
  }
  if (elements.studioActionsMenu) {
    elements.studioActionsMenu.open = false;
  }
  closeOpenInlineMenus();
}

function closeOpenInlineMenus(event = null) {
  for (const menu of document.querySelectorAll(
    "details[data-inline-menu][open]",
  )) {
    if (!event || !menu.contains(event.target)) {
      menu.open = false;
    }
  }
}

function createIcon(name, className = "icon") {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", className);
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  svg.setAttribute("viewBox", "0 0 24 24");

  const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
  use.setAttribute("href", `#icon-${name}`);
  svg.appendChild(use);

  return svg;
}

function setButtonContentWithIcon(button, iconName, label) {
  button.innerHTML = "";
  button.append(createIcon(iconName, "icon-sm"));
  button.append(document.createTextNode(label));
}

function getStudioBriefFields() {
  return {
    audience: elements.studioAudienceInput.value.trim(),
    problem: elements.studioProblemInput.value.trim(),
    firstRelease: elements.studioFirstReleaseInput.value.trim(),
    constraints: elements.constraintsInput.value.trim(),
    scope: normalizeStudioScope(elements.studioScopeInput.value),
  };
}

function normalizeStudioScope(scope) {
  return STUDIO_SCOPE_OPTIONS[scope] ? scope : "balanced";
}

function normalizeRefinementPreset(preset) {
  const value = String(preset || "").trim();

  switch (value) {
    case LEGACY_REFINEMENT_PRESET_MORE_MINIMAL:
      return REFINEMENT_PRESET_SMALLER_MVP;
    case REFINEMENT_PRESET_SMALLER_MVP:
    case REFINEMENT_PRESET_MORE_TECHNICAL:
    case REFINEMENT_PRESET_CLEANER_UX:
      return value;
    default:
      return "";
  }
}

function hasStudioBriefDraft() {
  const fields = getStudioBriefFields();
  return Boolean(
    fields.audience ||
    fields.problem ||
    fields.firstRelease ||
    fields.constraints ||
    fields.scope !== "balanced",
  );
}

function getStudioScopeMeta(scope) {
  return STUDIO_SCOPE_OPTIONS[normalizeStudioScope(scope)];
}

function setStudioScope(scope, options = {}) {
  const { skipSave = false } = options;
  const normalizedScope = normalizeStudioScope(scope);
  const meta = getStudioScopeMeta(normalizedScope);

  elements.studioScopeInput.value = normalizedScope;
  elements.studioScopeSummary.textContent = meta.summary;

  for (const button of elements.studioScopeButtons) {
    const isActive = button.dataset.studioScope === normalizedScope;
    replaceStateClasses(
      button,
      isActive,
      STUDIO_TOGGLE_ACTIVE_CLASSES,
      STUDIO_TOGGLE_INACTIVE_CLASSES,
    );
    button.setAttribute("aria-pressed", String(isActive));
  }

  if (!skipSave) {
    handleStudioBriefInput();
  }
}

function getStudioClarifyingQuestions(fields = getStudioBriefFields()) {
  const questions = [];
  const guidedCount = [
    fields.audience,
    fields.problem,
    fields.firstRelease,
  ].filter(Boolean).length;

  if (guidedCount === 3) {
    return [];
  }

  if (!fields.audience) {
    questions.push({
      element: elements.studioAudienceInput,
      text: "Who is the first release for?",
    });
  }
  if (!fields.problem) {
    questions.push({
      element: elements.studioProblemInput,
      text: "What painful workflow or problem should it improve?",
    });
  }
  if (!fields.firstRelease) {
    questions.push({
      element: elements.studioFirstReleaseInput,
      text: "What is the smallest useful thing the first release must let them do?",
    });
  }

  return questions.slice(0, 2);
}

function renderStudioClarifyingQuestions() {
  const questions = appState.studioClarifyVisible
    ? getStudioClarifyingQuestions()
    : [];

  elements.studioClarifyList.innerHTML = "";
  elements.studioClarifyCard.classList.toggle("hidden", !questions.length);

  for (const question of questions) {
    const item = document.createElement("li");
    item.textContent = question.text;
    elements.studioClarifyList.appendChild(item);
  }
}

function requestStudioClarification() {
  appState.studioClarifyVisible = true;
  renderStudioClarifyingQuestions();
}

function clearStudioClarification() {
  appState.studioClarifyVisible = false;
  renderStudioClarifyingQuestions();
}

function buildStudioProgressStages(options = {}) {
  const {
    refining = false,
    isUpdate = false,
    contextMode = getStudioContextMode(),
  } = options;
  const contextDetail =
    contextMode === "source"
      ? refining
        ? "Grounding the adjustment in the selected source..."
        : isUpdate
          ? "Refreshing the selected source context..."
          : "Grounding the brief in the selected source..."
      : refining
        ? "Pulling profile signals for this adjustment..."
        : isUpdate
          ? "Refreshing profile signals and saved preferences..."
          : "Pulling profile signals and saved preferences...";

  return STUDIO_PROGRESS_STEPS.map((step) => {
    switch (step.key) {
      case "brief":
        return {
          ...step,
          detail: refining
            ? "Reviewing the current blueprint and requested change..."
            : isUpdate
              ? "Reading the latest brief and scope changes..."
              : "Reading the brief and scope...",
        };
      case "context":
        return {
          ...step,
          detail: contextDetail,
        };
      case "shape":
        return {
          ...step,
          detail: refining
            ? "Reshaping the launch slice, principles, and plan..."
            : isUpdate
              ? "Updating the launch slice, principles, and plan..."
              : "Shaping the launch slice, principles, and plan...",
        };
      case "finalize":
        return {
          ...step,
          detail: refining
            ? "Finalizing the adjusted blueprint and starter prompt..."
            : isUpdate
              ? "Finalizing the updated blueprint and starter prompt..."
              : "Finalizing the blueprint and starter prompt...",
        };
      default:
        return step;
    }
  });
}

function clearStudioProgressTimers() {
  for (const timer of appState.studioProgressTimers) {
    window.clearTimeout(timer);
  }
  appState.studioProgressTimers = [];
}

function renderStudioProgress() {
  if (
    !elements.studioProgressPanel ||
    !elements.studioProgressBar ||
    !elements.studioProgressSteps
  ) {
    return;
  }

  const isVisible =
    appState.studioBusy &&
    appState.studioProgressActive &&
    appState.studioProgressStages.length > 0;

  elements.studioProgressPanel.classList.toggle("hidden", !isVisible);

  if (!isVisible) {
    elements.studioProgressBar.style.width = "0%";
    elements.studioProgressSteps.innerHTML = "";
    return;
  }

  const activeIndex = Math.max(appState.studioProgressStageIndex, 0);
  const currentStage =
    appState.studioProgressStages[
      Math.min(activeIndex, appState.studioProgressStages.length - 1)
    ];

  elements.studioProgressBar.style.width = `${currentStage.progress}%`;
  elements.studioProgressSteps.innerHTML = "";

  appState.studioProgressStages.forEach((stage, index) => {
    const chip = document.createElement("span");
    const isCurrent = index === activeIndex;
    const isComplete = index < activeIndex;

    chip.className = [
      "inline-flex",
      "items-center",
      "rounded-full",
      "border",
      "px-3",
      "py-1",
      "font-['IBM_Plex_Mono',monospace]",
      "text-[11px]",
      "font-medium",
      "transition",
      isCurrent
        ? "border-sky-300 bg-white text-sky-700"
        : isComplete
          ? "border-sky-200 bg-sky-100/80 text-sky-700"
          : "border-sky-100/80 bg-sky-50/40 text-slate-500",
    ].join(" ");
    chip.textContent = stage.label;
    elements.studioProgressSteps.appendChild(chip);
  });
}

function startStudioProgress(options = {}) {
  clearStudioProgressTimers();
  appState.studioProgressActive = true;
  appState.studioProgressStages = buildStudioProgressStages(options);
  appState.studioProgressStageIndex = 0;
  appState.studioProgressRequestId += 1;

  const requestId = appState.studioProgressRequestId;
  const stages = appState.studioProgressStages;
  const stageDelays = [900, 2200, 4200];

  renderStudioProgress();
  setStudioStatus(stages[0]?.detail || "Shaping the blueprint...", "working");

  stages.slice(1).forEach((stage, index) => {
    const timer = window.setTimeout(
      () => {
        if (
          requestId !== appState.studioProgressRequestId ||
          !appState.studioBusy ||
          !appState.studioProgressActive
        ) {
          return;
        }

        appState.studioProgressStageIndex = index + 1;
        renderStudioProgress();
        setStudioStatus(stage.detail, "working");
      },
      stageDelays[index] || stageDelays[stageDelays.length - 1],
    );

    appState.studioProgressTimers.push(timer);
  });
}

function clearStudioProgress() {
  clearStudioProgressTimers();
  appState.studioProgressActive = false;
  appState.studioProgressStageIndex = -1;
  appState.studioProgressStages = [];
  renderStudioProgress();
}

function buildStudioIdeaValue(fields = getStudioBriefFields()) {
  if (fields.audience && fields.problem && fields.firstRelease) {
    return `A product for ${fields.audience} that solves ${fields.problem} by helping them ${fields.firstRelease}`;
  }

  if (fields.firstRelease && fields.problem) {
    return `A product for ${fields.audience || "the target user"} that solves ${fields.problem} by helping them ${fields.firstRelease}`;
  }

  if (fields.firstRelease) {
    return `A product for ${fields.audience || "the target user"} that helps them ${fields.firstRelease}`;
  }

  if (fields.problem) {
    return `A product for ${fields.audience || "the target user"} that solves ${fields.problem}`;
  }

  if (fields.audience) {
    return `A product designed for ${fields.audience}`;
  }

  return "";
}

function renderStudioIdeaPreview(fields = getStudioBriefFields()) {
  const preview = buildStudioIdeaValue(fields);

  if (elements.ideaInput) {
    elements.ideaInput.value = preview;
  }

  if (!elements.studioIdeaPreview) {
    return;
  }

  elements.studioIdeaPreview.textContent = preview
    ? preview
    : "Fill the guided brief to generate a one-line product summary.";
}

function setStudioConstraintComposerVisible(isVisible, options = {}) {
  appState.studioConstraintComposerVisible = Boolean(isVisible);
  renderStudioConstraintComposer();

  if (options.focus && appState.studioConstraintComposerVisible) {
    elements.constraintsInput.focus();
  }
}

function renderStudioConstraintComposer() {
  const value = elements.constraintsInput.value.trim();
  const hasConstraints = Boolean(value);
  const previewText = hasConstraints
    ? trimClientText(value.replace(/\s*\n\s*/g, " · "), 180)
    : "";

  elements.studioConstraintComposer.classList.toggle(
    "hidden",
    !appState.studioConstraintComposerVisible,
  );
  elements.toggleStudioConstraintComposerButton.textContent =
    appState.studioConstraintComposerVisible
      ? "Hide constraints"
      : hasConstraints
        ? "Edit constraints"
        : "Add constraint";
  elements.toggleStudioConstraintComposerButton.setAttribute(
    "aria-expanded",
    String(appState.studioConstraintComposerVisible),
  );
  elements.studioConstraintPreview.classList.toggle("hidden", !hasConstraints);
  elements.studioConstraintPreview.textContent = hasConstraints
    ? `Current constraints: ${previewText}`
    : "";

  for (const button of elements.constraintPresetButtons) {
    const preset = button.dataset.constraintPreset || "";
    const isActive = hasConstraints && preset && value.includes(preset);
    replaceStateClasses(
      button,
      isActive,
      STUDIO_TOGGLE_ACTIVE_CLASSES,
      STUDIO_TOGGLE_INACTIVE_CLASSES,
    );
    button.setAttribute("aria-pressed", String(isActive));
  }
}

function buildStudioConstraintsValue(fields = getStudioBriefFields()) {
  const parts = [
    fields.audience ? `Primary users: ${fields.audience}` : "",
    fields.problem ? `Core problem: ${fields.problem}` : "",
    fields.firstRelease ? `First release should: ${fields.firstRelease}` : "",
    `Launch scope: ${getStudioScopeMeta(fields.scope).constraint}`,
    fields.constraints ? `Additional constraints: ${fields.constraints}` : "",
  ].filter(Boolean);

  return parts.join("\n");
}

function handleStudioBriefInput() {
  setStudioStatus("Ready.", "idle");
  renderStudioIdeaPreview();
  renderStudioConstraintComposer();
  scheduleStudioDraftSave();
  if (appState.studioClarifyVisible) {
    renderStudioClarifyingQuestions();
  }
}

function focusStudioBriefStart() {
  const fields = [
    elements.studioAudienceInput,
    elements.studioProblemInput,
    elements.studioFirstReleaseInput,
  ];
  const firstEmptyField = fields.find((field) => !field.value.trim());

  (firstEmptyField || elements.studioAudienceInput).focus();
}

function focusStudioContextSelection() {
  setStudioContextMode("source", { skipSave: true });
  const firstSourceButton = elements.studioContextStrip.querySelector("button");

  if (firstSourceButton) {
    firstSourceButton.focus();
    return;
  }

  elements.studioContextModeButtons
    .find((button) => button.dataset.studioContextMode === "source")
    ?.focus();
}

function setSegment(groupName, targetName) {
  if (
    groupName === "editor" &&
    targetName === "preview" &&
    elements.codeInput.value.trim() &&
    (!appState.editorPreviewHtml || appState.previewStale)
  ) {
    void highlightCurrentCode({ skipSegmentSwitch: true, silentToast: true });
  }

  for (const button of elements.segmentButtons) {
    if (button.dataset.segmentGroup !== groupName) {
      continue;
    }

    const isMatch = button.dataset.segmentTarget === targetName;
    replaceStateClasses(
      button,
      isMatch,
      SEGMENT_ACTIVE_CLASSES,
      SEGMENT_INACTIVE_CLASSES,
    );
    button.setAttribute("aria-selected", String(isMatch));
    button.tabIndex = isMatch ? 0 : -1;
  }

  for (const panel of elements.segmentPanels) {
    if (panel.dataset.segmentGroup !== groupName) {
      continue;
    }

    panel.classList.toggle("hidden", panel.dataset.segmentPanel !== targetName);
  }
}

function setToolsVisible(isVisible) {
  appState.toolsVisible = isVisible;
  elements.editorToolsPanel.classList.toggle("hidden", !isVisible);
  elements.toggleToolsButton.setAttribute("aria-expanded", String(isVisible));
  elements.toggleToolsButton.textContent = isVisible
    ? "Hide tools"
    : "Show tools";
}

function setContextVisible(isVisible) {
  appState.digestContextVisible = isVisible;
  elements.digestContextPanel.classList.toggle("hidden", !isVisible);
  elements.toggleContextButton.setAttribute("aria-expanded", String(isVisible));
  elements.toggleContextButton.textContent = isVisible
    ? "Hide context"
    : "Add context";
}

function setFilePathsVisible(isVisible) {
  appState.filePathsVisible = isVisible;
  elements.filePathsPanel.classList.toggle("hidden", !isVisible);
  elements.toggleFilePathsButton.setAttribute(
    "aria-expanded",
    String(isVisible),
  );
  elements.toggleFilePathsButton.textContent = isVisible
    ? "Hide file paths"
    : "Show file paths";
}

function markPreviewStale() {
  if (!appState.editorPreviewHtml) {
    syncPreviewState();
    return;
  }

  const currentCode = elements.codeInput.value;
  appState.previewStale =
    currentCode !== appState.previewSource ||
    elements.editorLanguage.value !== appState.previewLanguageSelection;
  syncPreviewState();
}

function syncPreviewState() {
  let label = "No preview yet";
  let className = "chip";
  let refreshText =
    "Open preview or run highlight to inspect the current content.";
  let showRefreshNotice = false;

  if (appState.editorPreviewHtml && appState.previewStale) {
    label = "Preview out of date";
    refreshText =
      "Preview is out of date. Refresh it to inspect the current content.";
    showRefreshNotice = true;
  } else if (appState.editorPreviewHtml) {
    label = `Preview ready · ${formatLanguageLabel(appState.editorPreviewLanguage)}`;
    className = "chip-accent";
  } else if (elements.codeInput.value.trim()) {
    refreshText =
      "Preview is not rendered yet. Open preview or run highlight to inspect the current content.";
    showRefreshNotice = true;
  }

  elements.previewStateChip.textContent = label;
  elements.previewStateChip.className = className;
  elements.previewRefreshText.textContent = refreshText;
  elements.previewRefreshNotice.classList.toggle("hidden", !showRefreshNotice);
  setCopyActionState();
}

function setBlueprintReady(isReady) {
  elements.blueprintEmptyState.classList.toggle("hidden", isReady);
  elements.blueprintContent.classList.toggle("hidden", !isReady);
  elements.studioRefinementPanel.classList.toggle("hidden", !isReady);
  elements.studioActionsMenu.classList.toggle("hidden", !isReady);
  if (!isReady) {
    elements.studioActionsMenu.open = false;
    elements.studioRefinementPanel.open = false;
    if (elements.blueprintGuardrailsDetails) {
      elements.blueprintGuardrailsDetails.open = false;
    }
  }
  if (!elements.generateButton.disabled) {
    elements.generateButton.textContent = isReady
      ? "Update blueprint"
      : "Shape product";
  }
  updateRefinementComposerState();
}

async function refreshState() {
  try {
    const response = await fetch("/api/state");
    const payload = await response.json();

    if (!response.ok) {
      throw new Error(payload.error || "Failed to load state.");
    }

    appState.profile = payload.profile;
    appState.profileHistory = payload.profileHistory || null;
    appState.promptKitMarkdown = payload.promptKitMarkdown;
    appState.memoryMarkdown = payload.memoryMarkdown;
    appState.recentDigests = payload.recentDigests;

    renderProfile(payload.profile);
    renderProfileHistory(payload.profileHistory);
    renderPromptKit(payload.promptKitMarkdown);
    renderMemory(payload.memoryMarkdown);
    renderRecentDigests(payload.recentDigests);
    renderStudioContext();
    updateExportSummary();
    renderDigestProfileImpact();
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to load app state.";
    elements.profileSummary.textContent = message;
    elements.profileGrowthSummary.textContent = message;
    elements.promptKitPreview.textContent = message;
    elements.memoryPreview.textContent = message;
    showToast(message);
  }
}

function buildDigestRequestBody() {
  return {
    title: elements.snippetTitleInput.value,
    source: elements.snippetSourceInput.value,
    reason: elements.snippetReasonInput.value,
    notes: elements.snippetNotesInput.value,
    code: elements.codeInput.value,
    assetType: appState.digestImportedSource?.assetType || "code",
    sourceKind: appState.digestImportedSource?.sourceKind || "code",
    importedSummary: appState.digestImportedSource?.importSummary || "",
  };
}

async function ensureDigestContentReady() {
  const trimmedContent = elements.codeInput.value.trim();
  const detectedUrl = extractSingleImportableUrl(trimmedContent);

  if (
    appState.pendingDigestImport?.payload &&
    (!trimmedContent || Boolean(detectedUrl))
  ) {
    return false;
  }

  if (detectedUrl && !appState.digestImportedSource) {
    await importDigestLink({
      url: detectedUrl,
      autoTriggered: true,
      applyStrategy: "replace",
    });
    const nextContent = elements.codeInput.value.trim();
    return Boolean(nextContent) && !extractSingleImportableUrl(nextContent);
  }

  if (trimmedContent) {
    return true;
  }

  if (getQueuedDigestPdf()) {
    await importDigestPdf({ autoTriggered: true, applyStrategy: "replace" });
    return Boolean(elements.codeInput.value.trim());
  }

  return false;
}

async function submitDigest() {
  const hasContent = await ensureDigestContentReady();

  if (!hasContent) {
    if (appState.pendingDigestImport?.payload) {
      setDigestStatus(
        "Review the imported source first. Replace the editor or append it before analyzing.",
        "error",
      );
      elements.applyImportReplaceButton.focus();
      return;
    }

    setDigestStatus(
      "Paste code or a URL into the editor, or choose a PDF before analyzing.",
      "error",
    );

    if (getQueuedDigestPdf()) {
      elements.importPdfButton.focus();
    } else {
      elements.codeInput.focus();
    }

    return;
  }

  const body = buildDigestRequestBody();
  const learningMode = getProfileLearningMode();

  setDigestBusy(true);
  setDigestStatus(
    learningMode === "review"
      ? "Analyzing content and saving it for profile review..."
      : "Analyzing content and updating the learned profile...",
    "working",
  );

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
      throw new Error(payload.error || "Analysis failed.");
    }

    renderAnalysis(payload);
    appState.profile = payload.profile;
    appState.promptKitMarkdown = payload.promptKitMarkdown;
    appState.memoryMarkdown = payload.memoryMarkdown;
    renderProfile(payload.profile);
    renderPromptKit(payload.promptKitMarkdown);
    renderMemory(payload.memoryMarkdown);
    await loadLibrary(elements.librarySearchInput.value.trim());
    await refreshState();
    focusResults();

    const message = payload.snippet.profileExcluded
      ? payload.snippet.analysis.mode === "ai"
        ? "Analysis complete. Saved for review before shaping the profile."
        : "Analysis complete in heuristic mode. Saved for review before shaping the profile."
      : payload.snippet.analysis.mode === "ai"
        ? "Analysis complete. AI updated the memory and profile."
        : "Analysis complete in heuristic mode. The profile and saved sources were still updated.";
    setDigestStatus(message, "success");
    showToast(message);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Analysis failed.";
    setDigestStatus(message, "error");
    showToast(message);
  } finally {
    setDigestBusy(false);
  }
}

async function importDigestLink(options = {}) {
  const {
    autoTriggered = false,
    applyStrategy = "",
    url: explicitUrl = "",
  } = options;
  const url = String(explicitUrl || "").trim();

  if (!url) {
    setDigestStatus(
      "Paste a website or GitHub repository URL into the editor first.",
      "error",
    );
    elements.codeInput.focus();
    return;
  }

  setDigestStatus(
    autoTriggered
      ? "Importing the linked source before analyzing..."
      : "Importing linked source...",
    "working",
  );

  try {
    const response = await fetch("/api/digest-source", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });
    const payload = await response.json();

    if (!response.ok) {
      throw new Error(payload.error || "Unable to import that link.");
    }

    if (autoTriggered || applyStrategy) {
      applyImportedSource(payload, {
        preservePdf: false,
        append: applyStrategy === "append",
      });
      setDigestStatus(
        `Imported ${formatImportedSourceType(payload.assetType)} content.`,
        "success",
      );
      if (!autoTriggered) {
        showToast("Linked source imported into Analyze.");
      }
      return;
    }

    setPendingImportPreview(payload, { preservePdf: false });
    setDigestStatus(
      "Import preview ready. Replace the editor or append it.",
      "success",
    );
    showToast("Import preview ready.");
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to import that link.";
    setDigestStatus(message, "error");
    showToast(message);
  } finally {
    updateDigestImportState();
  }
}

async function importDigestPdf(options = {}) {
  const { autoTriggered = false, applyStrategy = "" } = options;
  const file = getQueuedDigestPdf();

  if (!file) {
    setDigestStatus("Choose a PDF document first.", "error");
    elements.digestPdfInput.focus();
    return;
  }

  if (file.size > MAX_DIGEST_PDF_BYTES) {
    setDigestStatus(
      "PDF document is too large. Keep uploads under 5 MB.",
      "error",
    );
    elements.digestPdfInput.value = "";
    appState.queuedDigestPdfFile = null;
    updateDigestImportState();
    return;
  }

  elements.importPdfButton.disabled = true;
  setDigestStatus(
    autoTriggered
      ? "Importing the PDF before analyzing..."
      : "Importing PDF document...",
    "working",
  );

  try {
    const pdfBase64 = await readFileAsBase64(file);
    const response = await fetch("/api/digest-source", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pdfName: file.name,
        pdfBase64,
      }),
    });
    const payload = await response.json();

    if (!response.ok) {
      throw new Error(payload.error || "Unable to import that PDF.");
    }

    if (autoTriggered || applyStrategy) {
      applyImportedSource(payload, {
        preservePdf: true,
        append: applyStrategy === "append",
      });
      setDigestStatus("Imported PDF content.", "success");
      if (!autoTriggered) {
        showToast("PDF imported into Analyze.");
      }
      return;
    }

    setPendingImportPreview(payload, { preservePdf: true });
    setDigestStatus(
      "PDF import preview ready. Replace the editor or append it.",
      "success",
    );
    showToast("PDF preview ready.");
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to import that PDF.";
    setDigestStatus(message, "error");
    showToast(message);
  } finally {
    elements.importPdfButton.disabled = false;
    updateDigestImportState();
  }
}

function setPendingImportPreview(payload, options = {}) {
  appState.pendingDigestImport = {
    payload,
    preservePdf: Boolean(options.preservePdf),
  };
  updateDigestImportState();
  scheduleDigestDraftSave();
}

function dismissPendingImportReview() {
  appState.pendingDigestImport = null;
  updateDigestImportState();
  scheduleDigestDraftSave();
}

function applyPendingImportedSource(strategy = "replace") {
  const pending = appState.pendingDigestImport;

  if (!pending?.payload) {
    return;
  }

  applyImportedSource(pending.payload, {
    preservePdf: pending.preservePdf,
    append: strategy === "append",
  });
  const message =
    strategy === "append"
      ? "Imported content appended to the editor."
      : "Imported content replaced the editor draft.";
  setDigestStatus(message, "success");
  showToast(message);
}

function applyImportedSource(payload, options = {}) {
  const { preservePdf = false, append = false } = options;
  const nextCode =
    append && elements.codeInput.value.trim()
      ? `${elements.codeInput.value.trimEnd()}\n\n${payload.content || ""}`.trim()
      : payload.content || "";

  appState.pendingDigestImport = null;
  appState.digestImportedSource = {
    title: payload.title || "",
    source: payload.source || "",
    assetType: payload.assetType || "code",
    sourceKind: payload.sourceKind || payload.assetType || "code",
    importSummary: payload.importSummary || "",
  };
  elements.codeInput.value = nextCode;
  elements.editorLanguage.value =
    payload.assetType === "code" ? "auto" : "markdown";

  if (!append || !elements.snippetTitleInput.value.trim()) {
    elements.snippetTitleInput.value = payload.title || "";
  }

  if (!append || !elements.snippetSourceInput.value.trim()) {
    elements.snippetSourceInput.value = payload.source || "";
  }
  setContextVisible(true);
  appState.editorPreviewHtml = "";
  appState.editorPreviewLanguage = "auto";
  appState.previewLanguageSelection = elements.editorLanguage.value;
  appState.previewSource = "";
  appState.previewStale = false;
  elements.codePreviewContent.textContent =
    "Run highlight to preview the current content.";
  elements.codePreviewLabel.textContent = "Content preview";
  syncPreviewState();
  updateEditorMetrics();
  updateAutoImportPrompt();
  updateExportSummary();
  setSegment("editor", "write");
  updateDigestImportState();
  scheduleDigestDraftSave();
  elements.codeInput.focus();

  if (!preservePdf) {
    elements.digestPdfInput.value = "";
    appState.queuedDigestPdfFile = null;
  }
}

function clearImportedSource(options = {}) {
  const { keepContent = false } = options;
  appState.pendingDigestImport = null;
  appState.digestImportedSource = null;
  if (!keepContent) {
    elements.digestPdfInput.value = "";
    appState.queuedDigestPdfFile = null;
  }

  if (!keepContent) {
    elements.codeInput.value = "";
    elements.snippetSourceInput.value = "";
  }

  updateDigestImportState();
  updateAutoImportPrompt();
  updateEditorMetrics();
  scheduleDigestDraftSave();
  updateExportSummary();
}

function updateDigestImportState() {
  const imported = appState.digestImportedSource;
  const pending = appState.pendingDigestImport;
  const selectedPdf = getQueuedDigestPdf();
  const detectedUrl = extractSingleImportableUrl(elements.codeInput.value);

  elements.digestPdfInput.disabled = appState.digestBusy;
  elements.importPdfButton.disabled = appState.digestBusy || !selectedPdf;
  elements.digestImportReviewPanel.classList.toggle("hidden", !pending);
  elements.applyImportReplaceButton.disabled = appState.digestBusy || !pending;
  elements.applyImportAppendButton.disabled = appState.digestBusy || !pending;
  elements.dismissImportReviewButton.disabled = appState.digestBusy || !pending;

  if (pending?.payload) {
    elements.digestImportReviewTitle.textContent =
      pending.payload.title ||
      pending.payload.source ||
      "Imported source preview";
    elements.digestImportReviewMeta.textContent = buildImportReviewMeta(
      pending.payload,
    );
    elements.digestImportReviewSummary.textContent =
      pending.payload.importSummary || "Replace the editor or append it.";
  } else {
    elements.digestImportReviewTitle.textContent = "Review imported source";
    elements.digestImportReviewMeta.textContent = "";
    elements.digestImportReviewSummary.textContent = "";
  }

  if (imported) {
    elements.digestImportChip.textContent = formatImportedSourceType(
      imported.assetType,
    );
    elements.digestImportChip.className = CHIP_PRIMARY_CLASSES;
    elements.digestImportTitle.textContent =
      imported.title || imported.source || "Imported source";
    elements.digestImportSummary.textContent =
      imported.importSummary || "Imported content is ready.";
  } else if (pending?.payload) {
    elements.digestImportChip.textContent = "Review ready";
    elements.digestImportChip.className = CHIP_MUTED_CLASSES;
    elements.digestImportTitle.textContent =
      pending.payload.title ||
      pending.payload.source ||
      "Imported source preview";
    elements.digestImportSummary.textContent =
      "Review, then replace or append.";
  } else if (selectedPdf) {
    elements.digestImportChip.textContent = "PDF queued";
    elements.digestImportChip.className = CHIP_MUTED_CLASSES;
    elements.digestImportTitle.textContent = selectedPdf.name;
    elements.digestImportSummary.textContent = "Import to extract text.";
  } else if (detectedUrl) {
    elements.digestImportChip.textContent = "URL detected";
    elements.digestImportChip.className = CHIP_MUTED_CLASSES;
    elements.digestImportTitle.textContent = trimClientText(detectedUrl, 64);
    elements.digestImportSummary.textContent =
      "Import it to pull source content into the editor.";
  } else {
    elements.digestImportChip.textContent = "Editor ready";
    elements.digestImportChip.className = CHIP_MUTED_CLASSES;
    elements.digestImportTitle.textContent = "Paste directly into the editor";
    elements.digestImportSummary.textContent =
      "Paste code, notes, or a single URL. Drop a PDF when you want imported reference material.";
  }

  elements.clearImportedSourceButton.disabled =
    appState.digestBusy || !(imported || pending || selectedPdf);
  updateAutoImportPrompt();
  updateSampleSourceVisibility();
}

async function submitBlueprintRequest(refinement = "") {
  const isUpdate = Boolean(appState.latestBlueprint);
  const fields = getStudioBriefFields();
  const questions = refinement ? [] : getStudioClarifyingQuestions(fields);
  const body = {
    idea: buildStudioIdeaValue(fields),
    constraints: buildStudioConstraintsValue(fields),
    refinement,
    context: buildStudioContextPayload(),
  };

  if (questions.length) {
    requestStudioClarification();
    setStudioStatus(
      "Studio needs a bit more detail before shaping this.",
      "error",
    );
    questions[0].element.focus();
    return;
  }

  if (!body.idea.trim()) {
    setStudioStatus(
      "Fill the guided brief before shaping this product.",
      "error",
    );
    focusStudioBriefStart();
    return;
  }

  if (getStudioContextMode() === "source" && !body.context) {
    setStudioStatus(
      "Choose a saved source or switch back to Profile only before shaping this.",
      "error",
    );
    focusStudioContextSelection();
    return;
  }

  try {
    setStudioBusy(true, { refining: Boolean(refinement) });
    startStudioProgress({
      refining: Boolean(refinement),
      isUpdate,
      contextMode: getStudioContextMode(),
    });

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
    clearStudioClarification();
    if (!refinement) {
      elements.studioRefinementPanel.open = false;
    }

    if (refinement) {
      appState.lastRefinement = refinement.trim();
      renderRefinementSummary();
      resetRefinementComposer({ preserveSummary: true });
    } else {
      updateRefinementComposerState();
    }

    clearStudioProgress();
    const message =
      payload.mode === "ai"
        ? refinement
          ? "Blueprint adjusted with AI using the current context."
          : isUpdate
            ? "Blueprint updated with AI using the latest brief."
            : "Blueprint generated with AI using the learned taste profile."
        : refinement
          ? "Blueprint adjusted in heuristic mode using the current context."
          : isUpdate
            ? "Blueprint updated in heuristic mode using the latest brief."
            : "Blueprint generated in heuristic mode using the current learned profile.";
    setStudioStatus(message, "success");
    showToast(message);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Blueprint generation failed.";
    clearStudioProgress();
    setStudioStatus(message, "error");
    showToast(message);
  } finally {
    setStudioBusy(false);
  }
}

async function persistProfileUpdate(body, options = {}) {
  const {
    workingMessage = "Saving profile...",
    successMessage = "Profile saved.",
    fallbackErrorMessage = "Profile update failed.",
  } = options;
  setProfileBusy(true);
  setProfileStatus(workingMessage, "working");

  try {
    const response = await fetch("/api/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const payload = await response.json();

    if (!response.ok) {
      throw new Error(payload.error || "Profile update failed.");
    }

    appState.profile = payload.profile;
    appState.profileHistory = payload.profileHistory || null;
    appState.promptKitMarkdown = payload.promptKitMarkdown;
    appState.memoryMarkdown = payload.memoryMarkdown;
    appState.recentDigests = payload.recentDigests;

    renderProfile(payload.profile);
    renderProfileHistory(payload.profileHistory);
    renderPromptKit(payload.promptKitMarkdown);
    renderMemory(payload.memoryMarkdown);
    renderRecentDigests(payload.recentDigests);
    renderStudioContext();
    setProfileStatus(successMessage, "success");
    showToast(successMessage);
    return payload;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : fallbackErrorMessage;
    setProfileStatus(message, "error");
    showToast(message);
    return null;
  } finally {
    setProfileBusy(false);
  }
}

async function submitProfileUpdate() {
  const body = {
    manualProfile: {
      name: elements.profileName.value,
      role: elements.profileRole.value,
      headline: elements.profileHeadlineInput.value,
      focus: elements.profileFocus.value,
      preferredStack: formatProfileStackValue(
        parseProfileStackItems(elements.profileStack.value),
      ),
      designTaste: elements.profileDesignTaste.value,
      buildNotes: elements.profileBuildNotes.value,
    },
  };

  await persistProfileUpdate(body, {
    workingMessage: "Saving profile and regenerating profile context...",
    successMessage: "Profile saved.",
    fallbackErrorMessage: "Profile update failed.",
  });
}

async function updateLearningMode(mode) {
  const nextMode = mode === "review" ? "review" : "auto";

  await persistProfileUpdate(
    { learningMode: nextMode },
    {
      workingMessage:
        nextMode === "review"
          ? "Saving learning mode and holding new analyses for review..."
          : "Saving learning mode and restoring auto shaping...",
      successMessage:
        nextMode === "review"
          ? "Learning mode set to Review first."
          : "Learning mode set to Auto shape.",
      fallbackErrorMessage: "Learning mode update failed.",
    },
  );
}

function getProfileLearningMode(profile = appState.profile) {
  return profile?.learningMode === "review" ? "review" : "auto";
}

function renderProfileLearningMode(profile = appState.profile) {
  const learningMode = getProfileLearningMode(profile);

  if (elements.profileLearningModeSummary) {
    elements.profileLearningModeSummary.textContent =
      learningMode === "review"
        ? "Review first saves new analyses as sources in Knowledge, but keeps them out of the learned profile until you choose to use them."
        : "Auto shape makes new analyses update the learned profile immediately.";
  }

  for (const button of elements.profileLearningModeButtons) {
    const isActive = button.dataset.learningMode === learningMode;
    replaceStateClasses(
      button,
      isActive,
      STUDIO_TOGGLE_ACTIVE_CLASSES,
      STUDIO_TOGGLE_INACTIVE_CLASSES,
    );
    button.setAttribute("aria-pressed", String(isActive));
    button.disabled = appState.profileBusy;
  }
}

function renderProfileUndoAction(profile = appState.profile) {
  const change = profile?.lastProfileChange || null;

  if (!elements.profileUndoBar || !elements.undoLastProfileChangeButton) {
    return;
  }

  if (!change?.snippetId) {
    elements.profileUndoBar.classList.add("hidden");
    elements.undoLastProfileChangeButton.disabled = true;
    elements.undoLastProfileChangeButton.textContent = "Undo last change";
    if (elements.profileUndoSummary) {
      elements.profileUndoSummary.textContent =
        "Undo the most recent profile change.";
    }
    return;
  }

  elements.profileUndoBar.classList.remove("hidden");

  const actionText =
    change.action === "excluded"
      ? "stopped shaping the profile"
      : "started shaping the profile";

  if (elements.profileUndoSummary) {
    elements.profileUndoSummary.textContent = `${change.title || "Untitled analysis"} ${actionText} ${formatDateTime(change.timestamp)}.`;
  }

  elements.undoLastProfileChangeButton.disabled =
    appState.profileBusy ||
    appState.profileUndoBusy ||
    Boolean(appState.profileInclusionBusyId);
  elements.undoLastProfileChangeButton.textContent = appState.profileUndoBusy
    ? "Undoing..."
    : "Undo last change";
}

async function undoLastProfileChange() {
  const change = appState.profile?.lastProfileChange;

  if (!change?.snippetId) {
    showToast("No profile change available to undo.");
    return;
  }

  appState.profileUndoBusy = true;
  renderProfileUndoAction();
  renderRecentDigests(appState.recentDigests);

  try {
    const response = await fetch("/api/profile/undo-last-change", {
      method: "POST",
    });
    const payload = await response.json();

    if (!response.ok) {
      throw new Error(
        payload.error || "Unable to undo the last profile change.",
      );
    }

    appState.profile = payload.profile;
    appState.profileHistory = payload.profileHistory || null;
    appState.promptKitMarkdown = payload.promptKitMarkdown;
    appState.memoryMarkdown = payload.memoryMarkdown;
    appState.recentDigests = payload.recentDigests;

    renderProfile(payload.profile);
    renderProfileHistory(payload.profileHistory);
    renderPromptKit(payload.promptKitMarkdown);
    renderMemory(payload.memoryMarkdown);
    renderRecentDigests(payload.recentDigests);
    renderStudioContext();
    updateExportSummary();
    renderDigestProfileImpact();
    await loadLibrary(elements.librarySearchInput.value.trim());

    showToast("Last profile change undone.");
  } catch (error) {
    showToast(
      error instanceof Error
        ? error.message
        : "Unable to undo the last profile change.",
    );
  } finally {
    appState.profileUndoBusy = false;
    renderProfileUndoAction();
    renderRecentDigests(appState.recentDigests);
  }
}

async function formatCurrentCode() {
  const code = elements.codeInput.value;

  if (!code.trim()) {
    setDigestStatus("Add code-like content before formatting.", "error");
    elements.codeInput.focus();
    return;
  }

  elements.formatCodeButton.disabled = true;
  setDigestStatus("Formatting content...", "working");

  try {
    const response = await fetch("/api/format", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code,
        language: elements.editorLanguage.value,
      }),
    });
    const payload = await response.json();

    if (!response.ok) {
      throw new Error(payload.error || "Formatting failed.");
    }

    elements.codeInput.value = payload.code;
    appState.previewSource = "";
    appState.previewStale = Boolean(appState.editorPreviewHtml);
    updateEditorMetrics(payload.language || elements.editorLanguage.value);
    scheduleDigestDraftSave();
    syncPreviewState();
    updateExportSummary();

    const message = payload.unsupported
      ? "Formatting is not available for the selected language yet."
      : payload.changed
        ? "Content formatted."
        : "Content already looked formatted.";

    setDigestStatus(message, payload.unsupported ? "idle" : "success");
    flashButtonLabel(
      elements.formatCodeButton,
      payload.unsupported
        ? "Unavailable"
        : payload.changed
          ? "Formatted"
          : "No change",
    );
    showToast(message);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Formatting failed.";
    setDigestStatus(message, "error");
    showToast(message);
  } finally {
    elements.formatCodeButton.disabled = false;
  }
}

async function highlightCurrentCode(options = {}) {
  const code = elements.codeInput.value;
  const { skipSegmentSwitch = false, silentToast = false } = options;

  if (!code.trim()) {
    setDigestStatus("Add content before highlighting.", "error");
    elements.codeInput.focus();
    return;
  }

  elements.highlightCodeButton.disabled = true;
  setDigestStatus("Rendering syntax preview...", "working");

  try {
    const response = await fetch("/api/highlight", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code,
        language: elements.editorLanguage.value,
      }),
    });
    const payload = await response.json();

    if (!response.ok) {
      throw new Error(payload.error || "Highlight failed.");
    }

    appState.editorPreviewHtml = payload.html;
    appState.editorPreviewLanguage = payload.language;
    appState.previewLanguageSelection = elements.editorLanguage.value;
    appState.previewSource = code;
    appState.previewStale = false;
    elements.codePreviewContent.innerHTML = payload.html;
    elements.codePreviewLabel.textContent = `Content preview · ${formatLanguageLabel(payload.language)}`;
    updateEditorMetrics(payload.language);
    syncPreviewState();
    if (!skipSegmentSwitch) {
      setSegment("editor", "preview");
    }
    setDigestStatus("Preview updated.", "success");
    flashButtonLabel(elements.highlightCodeButton, "Updated");
    if (!silentToast) {
      showToast("Preview updated.");
    }
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Highlight failed.";
    setDigestStatus(message, "error");
    showToast(message);
  } finally {
    elements.highlightCodeButton.disabled = false;
  }
}

function clearEditor() {
  if (!hasDigestDraft()) {
    setDigestStatus("Editor is already clear.", "idle");
    return;
  }

  appState.lastClearedEditor = captureDigestDraft();
  clearImportedSource({ keepContent: true });
  elements.codeInput.value = "";
  elements.snippetTitleInput.value = "";
  elements.snippetSourceInput.value = "";
  elements.snippetReasonInput.value = "";
  elements.snippetNotesInput.value = "";
  elements.editorLanguage.value = "auto";
  elements.codePreviewContent.textContent =
    "Run highlight to preview the current content.";
  elements.codePreviewLabel.textContent = "Content preview";
  appState.editorPreviewHtml = "";
  appState.editorPreviewLanguage = "auto";
  appState.previewLanguageSelection = "auto";
  appState.previewSource = "";
  appState.previewStale = false;
  syncPreviewState();
  updateEditorMetrics();
  updateAutoImportPrompt();
  updateExportSummary();
  setSegment("editor", "write");
  setContextVisible(false);
  showUndoClear();
  setDigestStatus("Editor cleared.", "idle");
  scheduleDigestDraftSave();
  updateSampleSourceVisibility();
}

function findProfileTimelineSnapshotById(history, snippetId) {
  const timeline = Array.isArray(history?.timeline) ? history.timeline : [];
  return timeline.find((snapshot) => snapshot.id === snippetId) || null;
}

function getAllProfileFacets() {
  return PROFILE_FACET_ORDER.map((key) => ({
    key,
    ...PROFILE_FACET_META[key],
  }));
}

function buildDigestProfileImpactCacheFromSnapshot(snapshot) {
  if (!snapshot?.id) {
    return null;
  }

  return {
    id: snapshot.id,
    summary: snapshot.artifactSummary || snapshot.summary || "",
    sourceSignals: snapshot.sourceSignals || {},
    changes: buildProfileTimelineImpactItems(snapshot, getAllProfileFacets()),
  };
}

function buildDigestProfileImpactCacheFromSnippet(snippet) {
  if (!snippet?.id) {
    return null;
  }

  const analysis = snippet.analysis || {};
  const changes = [];

  if (analysis.tags?.length) {
    changes.push(
      `Character: Reinforced ${analysis.tags.slice(0, 2).join(" and ")} in the learned profile.`,
    );
  }

  if (analysis.inferredPreferences?.[0]) {
    changes.push(
      `Preferences: Added "${trimClientText(analysis.inferredPreferences[0], 92)}" as a working preference signal.`,
    );
  }

  if (analysis.buildDirectives?.[0]) {
    changes.push(
      `Preferences: Added "${trimClientText(analysis.buildDirectives[0], 92)}" as an actionable directive.`,
    );
  }

  if (analysis.language) {
    changes.push(
      `Skillset: Reinforced ${analysis.language} in the visible technical profile.`,
    );
  }

  return {
    id: snippet.id,
    summary: analysis.summary || "",
    sourceSignals: {
      tags: (analysis.tags || []).slice(0, 3),
      directives: (analysis.buildDirectives || []).slice(0, 1),
      preferences: (analysis.inferredPreferences || []).slice(0, 1),
    },
    changes,
  };
}

function buildRecentDigestSignalSummary(item) {
  const tags = (item?.tags || []).slice(0, 2);
  const preference =
    item?.inferredPreferences?.[0] || item?.preferences?.[0] || "";
  const directive = item?.buildDirectives?.[0] || item?.directives?.[0] || "";
  const fragments = [];

  if (tags.length) {
    fragments.push(formatReadableList(tags));
  }

  if (item?.language) {
    fragments.push(`${item.language} signals`);
  }

  if (preference) {
    fragments.push(`preference "${truncateInlineText(preference, 56)}"`);
  }

  if (directive) {
    fragments.push(`directive "${truncateInlineText(directive, 56)}"`);
  }

  return formatReadableList(fragments);
}

function buildRecentDigestImpactSummary(item) {
  if (!item?.id) {
    return "Profile impact unavailable.";
  }

  const snapshot = findProfileTimelineSnapshotById(
    appState.profileHistory,
    item.id,
  );

  if (!item.profileExcluded && snapshot) {
    const changes = buildProfileTimelineImpactItems(
      snapshot,
      getAllProfileFacets(),
    );

    if (changes.length) {
      return truncateInlineText(
        `Profile impact: ${changes.slice(0, 2).join(" ")}`,
        220,
      );
    }
  }

  const signalSummary = buildRecentDigestSignalSummary(item);

  if (item.profileExcluded) {
    return signalSummary
      ? truncateInlineText(
          `Not shaping the profile right now. Main signals: ${signalSummary}.`,
          220,
        )
      : "Not shaping the profile right now.";
  }

  if (signalSummary) {
    return truncateInlineText(
      `Profile impact: Main signals include ${signalSummary}.`,
      220,
    );
  }

  if (item.summary) {
    return truncateInlineText(`Profile impact: ${item.summary}`, 220);
  }

  return "Profile impact unavailable.";
}

function syncLatestDigestProfileImpact() {
  const latestId = appState.latestSnippet?.id;

  if (!latestId) {
    appState.latestDigestProfileImpact = null;
    return null;
  }

  const recentItem =
    appState.recentDigests.find((item) => item.id === latestId) || null;

  if (recentItem && appState.latestSnippet) {
    appState.latestSnippet = {
      ...appState.latestSnippet,
      profileExcluded: Boolean(recentItem.profileExcluded),
    };
  }

  const snapshot = findProfileTimelineSnapshotById(
    appState.profileHistory,
    latestId,
  );

  if (snapshot) {
    appState.latestDigestProfileImpact =
      buildDigestProfileImpactCacheFromSnapshot(snapshot);
    return appState.latestDigestProfileImpact;
  }

  if (
    !appState.latestDigestProfileImpact ||
    appState.latestDigestProfileImpact.id !== latestId
  ) {
    appState.latestDigestProfileImpact =
      buildDigestProfileImpactCacheFromSnippet(appState.latestSnippet);
  }

  return appState.latestDigestProfileImpact;
}

function renderDigestProfileImpact() {
  const latestId = appState.latestSnippet?.id;

  if (!latestId) {
    elements.digestProfileImpactCard.classList.add("hidden");
    elements.digestProfileImpactActionButton.disabled = true;
    return;
  }

  const impact = syncLatestDigestProfileImpact();

  if (!impact) {
    elements.digestProfileImpactCard.classList.add("hidden");
    elements.digestProfileImpactActionButton.disabled = true;
    return;
  }

  const recentItem =
    appState.recentDigests.find((item) => item.id === latestId) || null;
  const isExcluded = Boolean(
    recentItem?.profileExcluded ?? appState.latestSnippet?.profileExcluded,
  );
  const isReviewFirstSaved =
    isExcluded && getProfileLearningMode() === "review";
  const isBusy =
    appState.digestBusy || appState.profileInclusionBusyId === latestId;
  const signalChips = [
    ...(impact.sourceSignals?.tags || []).slice(0, 3),
    ...(impact.sourceSignals?.directives || [])
      .slice(0, 1)
      .map((value) => `Directive: ${truncateInlineText(value, 48)}`),
    ...(impact.sourceSignals?.preferences || [])
      .slice(0, 1)
      .map((value) => `Preference: ${truncateInlineText(value, 48)}`),
  ];
  const changeItems = impact.changes?.length
    ? impact.changes.slice(0, 4)
    : isReviewFirstSaved
      ? [
          "This source is saved in Knowledge, but Review first keeps it out of the learned profile until you choose to use it.",
        ]
      : isExcluded
        ? [
            "This source remains saved in Knowledge, but it no longer shapes the learned profile.",
          ]
        : ["This analysis is now an active source in the learned profile."];

  elements.digestProfileImpactCard.classList.remove("hidden");
  elements.digestProfileImpactKicker.textContent = isReviewFirstSaved
    ? "Saved for review first"
    : isExcluded
      ? "Profile change undone"
      : "Profile changed because...";
  elements.digestProfileImpactSummary.textContent = isReviewFirstSaved
    ? "This analysis is saved in Knowledge, but Review first keeps it out of the learned profile for now."
    : isExcluded
      ? "This analysis stays saved in Knowledge, but it no longer shapes the learned profile."
      : impact.summary
        ? `This analysis now shapes the learned profile. ${trimClientText(impact.summary, 180)}`
        : "This analysis is now shaping the learned profile.";
  renderChipRow(elements.digestProfileImpactSignals, signalChips, { limit: 5 });
  renderList(
    elements.digestProfileImpactList,
    changeItems,
    "Profile deltas will appear here after analyzing.",
    { limit: 4 },
  );
  elements.digestProfileImpactActionButton.disabled = isBusy;
  elements.digestProfileImpactActionButton.textContent = isBusy
    ? "Saving..."
    : isExcluded
      ? isReviewFirstSaved
        ? "Use to shape profile"
        : "Restore to profile"
      : "Undo profile change";
}

function renderAnalysis(payload) {
  const { snippet, memoryMarkdown, digestMarkdown, files, profileHistory } =
    payload;
  const { analysis } = snippet;
  const nextAction = buildNextAction(analysis);

  appState.latestSnippet = {
    ...snippet,
    profileExcluded: Boolean(snippet.profileExcluded),
  };
  appState.latestDigestMarkdown = digestMarkdown;
  appState.latestMemoryMarkdown = memoryMarkdown;
  appState.latestDigestProfileImpact =
    buildDigestProfileImpactCacheFromSnapshot(
      findProfileTimelineSnapshotById(profileHistory, snippet.id),
    ) || buildDigestProfileImpactCacheFromSnippet(snippet);

  elements.resultsSection.classList.remove("hidden");
  elements.languageLabel.textContent = `${analysis.language} · ${Math.round(
    analysis.languageConfidence * 100,
  )}% confidence`;
  elements.summaryText.textContent = trimClientText(analysis.summary, 220);

  renderChipRow(elements.tagList, analysis.tags, { limit: 4 });
  renderList(
    elements.styleList,
    analysis.styleObservations,
    "No style observations recorded.",
    { limit: 3 },
  );
  renderList(
    elements.preferencesList,
    analysis.inferredPreferences,
    "No preferences inferred yet.",
    { limit: 3 },
  );
  renderList(
    elements.directivesList,
    analysis.buildDirectives,
    "No build directives recorded yet.",
    { limit: 3 },
  );
  renderList(
    elements.patternsList,
    analysis.reusablePatterns,
    "No reusable patterns recorded.",
    { limit: 3 },
  );
  renderList(
    elements.avoidList,
    mergeUnique(analysis.antiPatternsToAvoid, analysis.risksOrTradeoffs),
    "No avoid signals recorded.",
    { limit: 3 },
  );

  elements.memoryOutput.textContent = memoryMarkdown;
  elements.digestOutput.textContent = digestMarkdown;
  elements.nextActionSummary.textContent = trimClientText(
    nextAction.summary,
    120,
  );
  elements.nextActionDetail.textContent = trimClientText(
    nextAction.detail,
    220,
  );

  elements.filePaths.innerHTML = "";
  for (const [label, filePath] of Object.entries(files)) {
    const chip = document.createElement("span");
    chip.className = CHIP_MUTED_CLASSES;
    chip.textContent = `${label}: ${filePath}`;
    elements.filePaths.appendChild(chip);
  }

  setCopyActionState();
  updateExportSummary();
  renderDigestProfileImpact();
}

function renderProfile(profile) {
  appState.profile = profile;

  const manual = profile.manualProfile || {};
  const profileIdentity = formatProfileIdentity(manual);
  const headerProfileStatus = buildHeaderProfileStatus(profile, manual);
  const profileHeadline =
    manual.headline ||
    manual.focus ||
    "Add product, design, and stack context below.";
  const manualItems = buildManualProfileItems(manual);

  if (elements.headerProfileStatus) {
    elements.headerProfileStatus.classList.toggle(
      "lg:block",
      Boolean(headerProfileStatus),
    );
    elements.headerProfileStatus.classList.toggle(
      "lg:hidden",
      !headerProfileStatus,
    );
  }
  elements.headerProfileBadge.textContent = headerProfileStatus;
  elements.quickProfileSummary.textContent = trimClientText(
    manual.focus || manual.designTaste || manual.buildNotes || profile.summary,
    84,
  );
  elements.quickProfileIdentity.textContent = profileIdentity;
  elements.profileIdentity.textContent = profileIdentity;
  elements.profileHeadline.textContent = profileHeadline;
  elements.profileSummary.textContent =
    profile.summary ||
    "Analyze more sources to build a learned profile summary.";
  renderProfileLearningMode(profile);
  renderProfileUndoAction(profile);

  renderTextList(
    elements.quickProfileMeta,
    manualItems,
    "Add focus, preferred stack, or design taste to make the profile more personal.",
    { limit: 2 },
  );
  renderTextList(
    elements.profileManualList,
    manualItems,
    "No profile basics configured yet.",
    { limit: 4 },
  );

  renderChipRow(
    elements.quickLanguageChips,
    profile.topLanguages.map(formatCountChip),
    {
      limit: 2,
    },
  );
  renderChipRow(elements.quickTagChips, profile.topTags.map(formatCountChip), {
    limit: 3,
  });

  renderProfileKnowledgeMetrics();
  hydrateProfileForm(profile.manualProfile);
  renderStudioContext();
  renderBlueprintStackDecision();
  setCopyActionState();
  updateExportSummary();
}

function formatProfileLastChangedMetric(value) {
  if (!value) {
    return "No changes yet";
  }

  try {
    return new Date(value).toLocaleString(undefined, {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  } catch {
    return String(value);
  }
}

function renderProfileKnowledgeMetrics(history = appState.profileHistory) {
  const activeCount =
    history?.activeDigests ?? appState.profile?.activeDigests ?? 0;
  const excludedCount =
    history?.excludedDigests ?? appState.profile?.excludedDigests ?? 0;
  const totalCount =
    appState.profile?.totalDigests ?? activeCount + excludedCount;
  const latestChange = appState.profile?.lastProfileChange || null;
  const latestSnapshot = Array.isArray(history?.timeline)
    ? history.timeline[history.timeline.length - 1] || null
    : null;

  if (elements.profileActiveMetric) {
    elements.profileActiveMetric.textContent = String(activeCount);
  }

  if (elements.profileActiveDetail) {
    elements.profileActiveDetail.textContent =
      activeCount === 0
        ? excludedCount
          ? `${excludedCount} saved source${excludedCount === 1 ? "" : "s"} are available, but none are shaping the profile yet.`
          : "Analyze a source to start shaping the profile."
        : excludedCount
          ? `${excludedCount} saved source${excludedCount === 1 ? "" : "s"} are currently not shaping the profile.`
          : totalCount
            ? `All ${totalCount} saved source${totalCount === 1 ? "" : "s"} are shaping the profile.`
            : "Analyze a source to start shaping the profile.";
  }

  if (
    !elements.profileLastChangedMetric ||
    !elements.profileLastChangedDetail
  ) {
    return;
  }

  if (latestChange?.timestamp) {
    const actionText =
      latestChange.action === "excluded"
        ? "Stopped shaping"
        : "Started shaping";
    elements.profileLastChangedMetric.textContent =
      formatProfileLastChangedMetric(latestChange.timestamp);
    elements.profileLastChangedDetail.textContent = `${actionText} "${truncateInlineText(latestChange.title || "Untitled analysis", 60)}".`;
    return;
  }

  if (latestSnapshot?.createdAt) {
    elements.profileLastChangedMetric.textContent =
      formatProfileLastChangedMetric(latestSnapshot.createdAt);
    elements.profileLastChangedDetail.textContent = `Most recent shaping source: "${truncateInlineText(latestSnapshot.title || "Untitled analysis", 60)}".`;
    return;
  }

  elements.profileLastChangedMetric.textContent = "No changes yet";
  elements.profileLastChangedDetail.textContent =
    "Analyze a source to create the first profile change.";
}

function renderProfileHistory(history) {
  appState.profileHistory = history || null;

  const availableWindow = appState.profileHistory?.windows?.[
    appState.profileHistoryWindow
  ]
    ? appState.profileHistoryWindow
    : "all";
  const windowData =
    appState.profileHistory?.windows?.[availableWindow] || null;
  const timelineSnapshots = getProfileTimelineSnapshots(
    appState.profileHistory,
    availableWindow,
  );
  const visibleFacetKeys = getVisibleProfileFacetKeys();

  appState.profileHistoryWindow = availableWindow;

  for (const button of elements.profileGrowthWindowButtons) {
    const isActive = button.dataset.profileWindow === availableWindow;
    replaceStateClasses(
      button,
      isActive,
      STUDIO_TOGGLE_ACTIVE_CLASSES,
      STUDIO_TOGGLE_INACTIVE_CLASSES,
    );
    button.setAttribute("aria-pressed", String(isActive));
  }

  for (const button of elements.profileFacetButtons) {
    const isActive = visibleFacetKeys.includes(
      button.dataset.profileFacet || "",
    );
    replaceStateClasses(
      button,
      isActive,
      STUDIO_TOGGLE_ACTIVE_CLASSES,
      STUDIO_TOGGLE_INACTIVE_CLASSES,
    );
    button.setAttribute("aria-pressed", String(isActive));
  }

  renderProfileKnowledgeMetrics(history);

  if (!windowData) {
    elements.profileGrowthSummary.textContent =
      "Analyze more sources to build a profile timeline.";
    elements.profileGrowthShift.textContent =
      "Trends will appear once the profile has active sources.";
    renderChipRow(elements.profileGrowthLanguages, []);
    renderChipRow(elements.profileGrowthTags, []);
    renderList(
      elements.profileGrowthDirectives,
      [],
      "No directive trends yet.",
    );
    elements.profileTimelineCaption.textContent = buildProfileTimelineCaption();
    renderProfileTimelineChart([]);
    renderProfileTimelineDetail(null);
    elements.profileKnowledgeSummary.textContent =
      "Review which saved sources shape the learned profile.";
    return;
  }

  elements.profileGrowthSummary.textContent = windowData.summary;
  elements.profileGrowthShift.textContent = windowData.shiftSummary;
  renderChipRow(
    elements.profileGrowthLanguages,
    windowData.topLanguages.map(formatCountChip),
    { limit: 4 },
  );
  renderChipRow(
    elements.profileGrowthTags,
    windowData.topTags.map(formatCountChip),
    { limit: 4 },
  );
  renderList(
    elements.profileGrowthDirectives,
    windowData.topDirectives.map((item) => item.value),
    "No directive signals in this window.",
    { limit: 4 },
  );

  elements.profileTimelineCaption.textContent = [
    windowData.label,
    buildProfileTimelineCaption(),
  ].join(" · ");

  if (
    timelineSnapshots.length &&
    !timelineSnapshots.some(
      (snapshot) => snapshot.id === appState.profileTimelineFocusId,
    )
  ) {
    appState.profileTimelineFocusId =
      timelineSnapshots[timelineSnapshots.length - 1]?.id || "";
  }

  renderProfileTimelineChart(timelineSnapshots);
  renderProfileTimelineDetail(
    timelineSnapshots.find(
      (snapshot) => snapshot.id === appState.profileTimelineFocusId,
    ) ||
      timelineSnapshots[timelineSnapshots.length - 1] ||
      null,
  );

  elements.profileKnowledgeSummary.textContent = history.excludedDigests
    ? `${history.activeDigests} active source${history.activeDigests === 1 ? "" : "s"} shape the profile. ${history.excludedDigests} saved source${history.excludedDigests === 1 ? "" : "s"} are not shaping the profile.`
    : `${history.activeDigests} active source${history.activeDigests === 1 ? "" : "s"} currently shape the learned profile.`;
}

function getVisibleProfileFacetKeys() {
  const selected = Array.isArray(appState.profileTimelineVisibleFacets)
    ? appState.profileTimelineVisibleFacets.filter(
        (key) => PROFILE_FACET_META[key],
      )
    : [];

  return selected.length
    ? PROFILE_FACET_ORDER.filter((key) => selected.includes(key))
    : [...PROFILE_FACET_ORDER];
}

function getVisibleProfileFacets() {
  return getVisibleProfileFacetKeys().map((key) => ({
    key,
    ...PROFILE_FACET_META[key],
  }));
}

function formatReadableList(values) {
  const items = values.filter(Boolean);

  if (!items.length) {
    return "";
  }

  if (items.length === 1) {
    return items[0];
  }

  if (items.length === 2) {
    return `${items[0]} and ${items[1]}`;
  }

  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

function buildProfileTimelineCaption() {
  const labels = getVisibleProfileFacets().map((facet) => facet.label);

  if (labels.length === 1) {
    return `Showing ${labels[0]} only. Turn on the other series to compare the same checkpoints on one chart.`;
  }

  return `Overlaying ${formatReadableList(labels)} on one chart. Toggle any series on or off and hover each checkpoint to inspect the active profile.`;
}

function buildProfileTimelineImpactItems(
  snapshot,
  facets = getVisibleProfileFacets(),
) {
  const prefixFacetLabel = facets.length > 1;

  return facets.flatMap((facet) => {
    const changes = snapshot?.changes?.[facet.key] || [];

    if (!prefixFacetLabel) {
      return changes;
    }

    return changes.map((change) => `${facet.label}: ${change}`);
  });
}

function getProfileTimelineSnapshots(history, windowName) {
  const timeline = Array.isArray(history?.timeline) ? history.timeline : [];

  if (windowName === "all") {
    return timeline;
  }

  const days = Number.parseInt(windowName, 10);

  if (!Number.isFinite(days) || days <= 0) {
    return timeline;
  }

  const threshold = Date.now() - days * 24 * 60 * 60 * 1000;
  return timeline.filter(
    (snapshot) => new Date(snapshot.createdAt).getTime() >= threshold,
  );
}

function renderProfileTimelineChart(snapshots) {
  elements.profileGrowthTimeline.innerHTML = "";
  const visibleFacets = getVisibleProfileFacets();

  if (!snapshots.length) {
    const emptyState = document.createElement("div");
    emptyState.className = LIBRARY_EMPTY_CLASSES;
    emptyState.textContent =
      "Timeline checkpoints appear as the active profile grows.";
    elements.profileGrowthTimeline.appendChild(emptyState);
    return;
  }

  const width = Math.max(720, snapshots.length * 92);
  const height = 280;
  const paddingLeft = 36;
  const paddingRight = 24;
  const paddingTop = 20;
  const paddingBottom = 42;
  const plotWidth = width - paddingLeft - paddingRight;
  const plotHeight = height - paddingTop - paddingBottom;
  const maxScore = Math.max(
    ...visibleFacets.flatMap((facet) =>
      snapshots.map(
        (snapshot) => Number(snapshot.impactScores?.[facet.key]) || 1,
      ),
    ),
    2,
  );
  const series = visibleFacets.map((facet) => {
    const points = snapshots.map((snapshot, index) => {
      const score = Number(snapshot.impactScores?.[facet.key]) || 1;
      const x =
        snapshots.length === 1
          ? paddingLeft + plotWidth / 2
          : paddingLeft + (plotWidth / (snapshots.length - 1)) * index;
      const y =
        paddingTop +
        plotHeight -
        ((score - 1) / Math.max(maxScore - 1, 1)) * plotHeight;

      return { snapshot, score, x, y };
    });

    return {
      facet,
      points,
      linePath: points
        .map(
          (point, index) =>
            `${index === 0 ? "M" : "L"}${point.x.toFixed(2)} ${point.y.toFixed(2)}`,
        )
        .join(" "),
    };
  });
  const tickValues = uniqNumbers([1, Math.ceil(maxScore / 2), maxScore]).sort(
    (left, right) => left - right,
  );
  const firstLabel = formatShortDate(snapshots[0]?.createdAt);
  const midLabel = formatShortDate(
    snapshots[Math.floor((snapshots.length - 1) / 2)]?.createdAt,
  );
  const lastLabel = formatShortDate(snapshots[snapshots.length - 1]?.createdAt);
  const activeIndex = snapshots.findIndex(
    (snapshot) => snapshot.id === appState.profileTimelineFocusId,
  );
  const activeX =
    activeIndex >= 0 ? (series[0]?.points?.[activeIndex]?.x ?? null) : null;
  const hitWidth =
    snapshots.length === 1
      ? Math.min(plotWidth, 72)
      : Math.max(
          28,
          Math.min(56, plotWidth / Math.max(snapshots.length - 1, 1)),
        );
  const activeBandX =
    Number.isFinite(activeX) && activeX !== null
      ? activeX - hitWidth / 2
      : null;
  const chartLabel = `${formatReadableList(
    visibleFacets.map((facet) => facet.label),
  )} overlay profile timeline chart`;

  elements.profileGrowthTimeline.innerHTML = `
    <div class="relative" style="width:${width}px;height:${height}px">
      <svg
        viewBox="0 0 ${width} ${height}"
        class="h-[280px] w-full overflow-visible"
        role="img"
        aria-label="${escapeHtml(chartLabel)}"
      >
        ${tickValues
          .map((tick) => {
            const y =
              paddingTop +
              plotHeight -
              ((tick - 1) / Math.max(maxScore - 1, 1)) * plotHeight;

            return `
              <line x1="${paddingLeft}" y1="${y}" x2="${width - paddingRight}" y2="${y}" stroke="rgba(148,163,184,0.22)" stroke-width="1" />
              <text x="${paddingLeft - 10}" y="${y + 4}" text-anchor="end" font-size="11" fill="#64748b">${tick}</text>
            `;
          })
          .join("")}
        ${
          activeBandX !== null
            ? `<rect x="${activeBandX}" y="${paddingTop}" width="${hitWidth}" height="${plotHeight}" rx="12" fill="rgba(14,165,233,0.06)"></rect>
               <line x1="${activeX}" y1="${paddingTop}" x2="${activeX}" y2="${paddingTop + plotHeight}" stroke="rgba(14,165,233,0.38)" stroke-width="1.5" stroke-dasharray="4 4"></line>`
            : ""
        }
        ${series
          .map(
            ({ facet, linePath }) => `
              <path d="${linePath}" fill="none" stroke="${facet.stroke}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
            `,
          )
          .join("")}
        ${series
          .map(({ facet, points }) =>
            points
              .map(
                (point) => `
                  <circle cx="${point.x}" cy="${point.y}" r="${
                    point.snapshot.id === appState.profileTimelineFocusId
                      ? 5.5
                      : 3.5
                  }" fill="${
                    point.snapshot.id === appState.profileTimelineFocusId
                      ? facet.dot
                      : "#ffffff"
                  }" stroke="${facet.stroke}" stroke-width="2"></circle>
                `,
              )
              .join(""),
          )
          .join("")}
        <text x="${paddingLeft}" y="${height - 10}" font-size="11" fill="#64748b">${escapeHtml(firstLabel)}</text>
        <text x="${width / 2}" y="${height - 10}" text-anchor="middle" font-size="11" fill="#64748b">${escapeHtml(midLabel)}</text>
        <text x="${width - paddingRight}" y="${height - 10}" text-anchor="end" font-size="11" fill="#64748b">${escapeHtml(lastLabel)}</text>
      </svg>
      ${snapshots
        .map((snapshot, index) => {
          const pointX = series[0]?.points?.[index]?.x ?? paddingLeft;
          const scoreLabel = visibleFacets
            .map(
              (facet) =>
                `${facet.label} ${Number(snapshot.impactScores?.[facet.key]) || 1}`,
            )
            .join(" · ");

          return `
            <button
              type="button"
              class="absolute rounded-xl border-0 bg-transparent transition focus:outline-none focus:ring-4 focus:ring-sky-500/15"
              data-profile-timeline-point="${escapeHtml(snapshot.id)}"
              aria-label="${escapeHtml(`Timeline checkpoint ${snapshot.index}: ${snapshot.title}. ${scoreLabel}`)}"
              title="${escapeHtml(`${snapshot.title} · ${scoreLabel}`)}"
              style="left:${pointX - hitWidth / 2}px;top:${paddingTop}px;width:${hitWidth}px;height:${plotHeight}px;"
            ></button>
          `;
        })
        .join("")}
    </div>
  `;

  for (const button of elements.profileGrowthTimeline.querySelectorAll(
    "[data-profile-timeline-point]",
  )) {
    const targetId = button.dataset.profileTimelinePoint || "";
    const targetSnapshot =
      snapshots.find((snapshot) => snapshot.id === targetId) || null;

    if (!targetSnapshot) {
      continue;
    }

    const activate = () => {
      appState.profileTimelineFocusId = targetId;
      renderProfileTimelineChart(snapshots);
      renderProfileTimelineDetail(targetSnapshot);
    };

    button.addEventListener("mouseenter", activate);
    button.addEventListener("focus", activate);
    button.addEventListener("click", activate);
  }
}

function renderProfileTimelineDetail(snapshot) {
  const visibleFacetKeys = getVisibleProfileFacetKeys();
  const visibleFacets = getVisibleProfileFacets();
  const visibleLabels = formatReadableList(
    visibleFacets.map((facet) => facet.label),
  );

  elements.profileTimelineCharacterSection.classList.toggle(
    "hidden",
    !visibleFacetKeys.includes("character"),
  );
  elements.profileTimelinePreferencesSection.classList.toggle(
    "hidden",
    !visibleFacetKeys.includes("preferences"),
  );
  elements.profileTimelineSkillsetSection.classList.toggle(
    "hidden",
    !visibleFacetKeys.includes("skillset"),
  );

  if (!snapshot) {
    elements.profileTimelineDetailKicker.textContent = "Hover a checkpoint";
    elements.profileTimelineDetailTitle.textContent = "Profile checkpoint";
    elements.profileTimelineDetailMeta.textContent = visibleLabels
      ? `Showing ${visibleLabels}`
      : "Timeline detail";
    elements.profileTimelineDetailSummary.textContent =
      "Move across the chart to inspect how each saved analysis shifted the learned profile.";
    renderChipRow(elements.profileTimelineContributors, []);
    renderList(
      elements.profileTimelineImpactList,
      [],
      "Timeline deltas will appear here.",
    );
    renderChipRow(elements.profileTimelineCharacter, []);
    renderList(
      elements.profileTimelinePreferences,
      [],
      "Preference signals will appear here.",
    );
    renderChipRow(elements.profileTimelineSkillset, []);
    return;
  }

  elements.profileTimelineDetailKicker.textContent = "Timeline checkpoint";
  elements.profileTimelineDetailTitle.textContent = snapshot.title;
  elements.profileTimelineDetailMeta.textContent = [
    `Analysis ${snapshot.index}`,
    visibleLabels ? `Showing ${visibleLabels}` : "",
    formatImportedSourceType(snapshot.sourceKind),
    snapshot.language,
    `${snapshot.activeDigests} active source${
      snapshot.activeDigests === 1 ? "" : "s"
    }`,
    formatDateTime(snapshot.createdAt),
  ]
    .filter(Boolean)
    .join(" · ");
  elements.profileTimelineDetailSummary.textContent = trimClientText(
    snapshot.artifactSummary || snapshot.summary,
    220,
  );
  renderChipRow(
    elements.profileTimelineContributors,
    [
      ...(snapshot.sourceSignals?.tags || []).slice(0, 3),
      ...(snapshot.sourceSignals?.directives || [])
        .slice(0, 1)
        .map((value) => `Directive: ${truncateInlineText(value, 46)}`),
      ...(snapshot.sourceSignals?.preferences || [])
        .slice(0, 1)
        .map((value) => `Preference: ${truncateInlineText(value, 46)}`),
    ],
    { limit: 5 },
  );
  renderList(
    elements.profileTimelineImpactList,
    buildProfileTimelineImpactItems(snapshot, visibleFacets),
    "No visible change details recorded for this checkpoint.",
  );
  renderChipRow(
    elements.profileTimelineCharacter,
    [
      ...(snapshot.profileSnapshot?.topTags || [])
        .slice(0, 4)
        .map(formatCountChip),
      ...(snapshot.profileSnapshot?.topAvoid || [])
        .slice(0, 1)
        .map((item) => `Avoid: ${truncateInlineText(item.value, 48)}`),
    ],
    { limit: 5 },
  );
  renderList(
    elements.profileTimelinePreferences,
    [
      ...(snapshot.profileSnapshot?.topPreferences || [])
        .slice(0, 3)
        .map(formatCountChip),
      ...(snapshot.profileSnapshot?.topDirectives || [])
        .slice(0, 2)
        .map((item) => trimClientText(item.value, 92)),
    ],
    "No preference signals recorded at this point.",
    { limit: 5 },
  );
  renderChipRow(
    elements.profileTimelineSkillset,
    [
      ...(snapshot.profileSnapshot?.topLanguages || [])
        .slice(0, 3)
        .map(formatCountChip),
      ...(snapshot.sourceSignals?.tags || []).slice(0, 2),
    ],
    { limit: 5 },
  );
}

function uniqNumbers(values) {
  return [...new Set(values.filter((value) => Number.isFinite(value)))];
}

function formatShortDate(value) {
  try {
    return new Date(value).toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
    });
  } catch {
    return String(value || "");
  }
}

function renderPromptKit(markdown) {
  appState.promptKitMarkdown = markdown || "";
  elements.promptKitPreview.textContent = markdown || "Prompt kit unavailable.";
}

function renderMemory(markdown) {
  appState.memoryMarkdown = markdown || "";
  elements.memoryPreview.textContent = markdown || "Style memory unavailable.";
  renderStudioContext();
}

function renderRecentDigests(items) {
  appState.recentDigests = items;
  elements.recentDigests.innerHTML = "";
  const activeFilter = ["all", "active", "excluded"].includes(
    appState.recentDigestFilter,
  )
    ? appState.recentDigestFilter
    : "all";
  const visibleItems = items.filter((item) => {
    if (activeFilter === "active") {
      return !item.profileExcluded;
    }

    if (activeFilter === "excluded") {
      return Boolean(item.profileExcluded);
    }

    return true;
  });

  for (const button of elements.recentDigestFilterButtons) {
    const isActive = button.dataset.recentDigestFilter === activeFilter;
    replaceStateClasses(
      button,
      isActive,
      STUDIO_TOGGLE_ACTIVE_CLASSES,
      STUDIO_TOGGLE_INACTIVE_CLASSES,
    );
    button.setAttribute("aria-pressed", String(isActive));
  }

  if (elements.recentDigestFilterSummary) {
    const totalLabel = `${items.length} recent source${items.length === 1 ? "" : "s"}`;
    elements.recentDigestFilterSummary.textContent =
      activeFilter === "active"
        ? `Showing ${visibleItems.length} shaping source${visibleItems.length === 1 ? "" : "s"} from ${totalLabel.toLowerCase()}.`
        : activeFilter === "excluded"
          ? `Showing ${visibleItems.length} source${visibleItems.length === 1 ? "" : "s"} not shaping the profile from ${totalLabel.toLowerCase()}.`
          : `Showing all ${totalLabel}.`;
  }

  if (!items.length) {
    const li = document.createElement("li");
    li.className = LIBRARY_EMPTY_CLASSES;
    li.textContent = "No analyses saved yet.";
    elements.recentDigests.appendChild(li);
    return;
  }

  if (!visibleItems.length) {
    const li = document.createElement("li");
    li.className = LIBRARY_EMPTY_CLASSES;
    li.textContent =
      activeFilter === "active"
        ? "No recent sources are shaping the profile right now."
        : "No recent sources are currently kept out of the profile.";
    elements.recentDigests.appendChild(li);
    return;
  }

  for (const item of visibleItems) {
    const li = document.createElement("li");
    li.className = "rounded-2xl border border-slate-200 bg-white px-4 py-4";

    const isBusy =
      Boolean(appState.profileInclusionBusyId) ||
      appState.profileUndoBusy ||
      appState.profileBusy;
    const toggleBusy = appState.profileInclusionBusyId === item.id;

    const topRow = document.createElement("div");
    topRow.className =
      "flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "min-w-0 flex-1 text-left";
    button.addEventListener("click", async () => {
      openView("knowledge", {
        segmentGroup: "knowledge",
        segmentTarget: "sources",
      });
      await loadSnippetDetail(item.id);
    });

    const title = document.createElement("span");
    title.className = RECENT_TITLE_CLASSES;
    title.textContent = item.title;

    const meta = document.createElement("span");
    meta.className = RECENT_META_CLASSES;
    meta.textContent = [
      item.profileExcluded ? "Not shaping profile" : "Shaping profile",
      item.sourceKind ? formatImportedSourceType(item.sourceKind) : "",
      item.language,
      formatDateTime(item.createdAt),
    ]
      .filter(Boolean)
      .join(" · ");

    button.append(title, meta);

    const actionColumn = document.createElement("div");
    actionColumn.className = "flex shrink-0 flex-wrap items-center gap-2";

    const stateChip = document.createElement("span");
    stateChip.className = item.profileExcluded
      ? CHIP_MUTED_CLASSES
      : CHIP_PRIMARY_CLASSES;
    stateChip.textContent = item.profileExcluded ? "Not shaping" : "Shaping";

    const toggleButton = document.createElement("button");
    toggleButton.type = "button";
    toggleButton.className = "subtle-button px-3 py-1.5 text-xs";
    toggleButton.disabled = isBusy;
    toggleButton.textContent = toggleBusy
      ? "Saving..."
      : item.profileExcluded
        ? "Use to shape profile"
        : "Stop shaping profile";
    toggleButton.addEventListener("click", (event) => {
      event.stopPropagation();
      void toggleSnippetProfileInclusion(item);
    });

    actionColumn.append(stateChip, toggleButton);
    topRow.append(button, actionColumn);
    li.appendChild(topRow);

    const impactSummary = document.createElement("p");
    impactSummary.className = "mt-3 text-sm leading-7 text-slate-800";
    impactSummary.textContent = buildRecentDigestImpactSummary(item);
    li.appendChild(impactSummary);

    if (item.summary) {
      const summary = document.createElement("p");
      summary.className = "mt-3 text-sm leading-7 text-slate-600";
      summary.textContent = trimClientText(item.summary, 160);
      li.appendChild(summary);
    }

    const signalChips = [
      ...(item.tags || []).slice(0, 3),
      ...(item.buildDirectives || item.directives || []).slice(0, 1),
    ];

    if (signalChips.length) {
      const signalRow = document.createElement("div");
      signalRow.className = "mt-4 flex flex-wrap gap-2";
      renderChipRow(signalRow, signalChips, { limit: 4 });
      li.appendChild(signalRow);
    }

    elements.recentDigests.appendChild(li);
  }
}

async function toggleSnippetProfileInclusion(item) {
  if (!item?.id) {
    showToast("Select a saved source first.");
    return;
  }

  const initialExcluded = Boolean(item.profileExcluded);
  const nextExcluded = !item.profileExcluded;
  appState.profileInclusionBusyId = item.id;
  if (appState.latestSnippet?.id === item.id) {
    appState.latestSnippet = {
      ...appState.latestSnippet,
      profileExcluded: nextExcluded,
    };
  }
  renderRecentDigests(appState.recentDigests);
  renderDigestProfileImpact();

  try {
    const response = await fetch(
      `/api/snippets/${encodeURIComponent(item.id)}/profile-inclusion`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ excluded: nextExcluded }),
      },
    );
    const payload = await response.json();

    if (!response.ok) {
      throw new Error(payload.error || "Unable to update profile sources.");
    }

    appState.profile = payload.profile;
    appState.profileHistory = payload.profileHistory || null;
    appState.promptKitMarkdown = payload.promptKitMarkdown;
    appState.memoryMarkdown = payload.memoryMarkdown;
    appState.recentDigests = payload.recentDigests;

    renderProfile(payload.profile);
    renderProfileHistory(payload.profileHistory);
    renderPromptKit(payload.promptKitMarkdown);
    renderMemory(payload.memoryMarkdown);
    renderRecentDigests(payload.recentDigests);
    renderStudioContext();
    updateExportSummary();
    renderDigestProfileImpact();
    await loadLibrary(elements.librarySearchInput.value.trim());

    showToast(
      nextExcluded
        ? "Source is no longer shaping the profile."
        : "Source is shaping the profile again.",
    );
  } catch (error) {
    if (appState.latestSnippet?.id === item.id) {
      appState.latestSnippet = {
        ...appState.latestSnippet,
        profileExcluded: initialExcluded,
      };
    }
    showToast(
      error instanceof Error
        ? error.message
        : "Unable to update profile sources.",
    );
  } finally {
    appState.profileInclusionBusyId = null;
    renderRecentDigests(appState.recentDigests);
    renderDigestProfileImpact();
  }
}

async function loadLibrary(query) {
  try {
    appState.libraryQuery = query;
    const url = query
      ? `/api/snippets?q=${encodeURIComponent(query)}`
      : "/api/snippets";
    const response = await fetch(url);
    const payload = await response.json();

    if (!response.ok) {
      throw new Error(payload.error || "Failed to load saved sources.");
    }

    appState.libraryItems = payload.items;

    if (!payload.items.some((item) => item.id === appState.selectedSnippetId)) {
      appState.selectedSnippetId = null;
      appState.selectedSnippet = null;
      clearLibraryDetail();
    }

    renderLibraryFilters(payload.items);
    applyLibraryFilters();
    updateSampleSourceVisibility();
    setCopyActionState();
    updateExportSummary();
  } catch (error) {
    appState.filteredLibraryItems = [];
    elements.libraryList.innerHTML = "";
    elements.librarySearchCount.textContent = "0 items";
    showLibraryEmptyState(
      error instanceof Error ? error.message : "Unable to load saved sources.",
    );
    clearLibraryDetail();
    updateSampleSourceVisibility();
  }
}

function renderLibraryList(items) {
  elements.libraryList.innerHTML = "";

  if (!items.length) {
    showLibraryEmptyState(
      appState.libraryItems.length === 0
        ? appState.libraryQuery
          ? "No saved sources match the current search."
          : "No saved sources yet. Run an analysis to start building knowledge."
        : "No saved sources match the current search and filters.",
    );
    return;
  }

  hideLibraryEmptyState();

  for (const item of items) {
    const isSelected = item.id === appState.selectedSnippetId;
    const row = document.createElement("tr");
    row.className = isSelected ? "bg-sky-50/70" : "hover:bg-slate-50/70";

    const openRow = async (trigger) => {
      await loadSnippetDetail(item.id, { trigger });
    };

    const sourceCell = document.createElement("td");
    sourceCell.className = "px-4 py-4 align-top";

    const sourceButton = document.createElement("button");
    sourceButton.type = "button";
    sourceButton.className = "block w-full text-left";
    sourceButton.setAttribute("aria-label", `Open details for ${item.title}`);
    sourceButton.addEventListener("click", async () => {
      await openRow(sourceButton);
    });

    const title = document.createElement("span");
    title.className =
      "block text-sm font-semibold leading-6 tracking-[-0.01em] text-slate-900";
    title.innerHTML = highlightMatchText(item.title, appState.libraryQuery);

    const summary = document.createElement("span");
    summary.className = "mt-1 block max-w-xl text-sm leading-6 text-slate-600";
    summary.innerHTML = highlightMatchText(item.summary, appState.libraryQuery);

    const meta = document.createElement("span");
    meta.className =
      "mt-2 block font-['IBM_Plex_Mono',monospace] text-[11px] text-slate-500";
    meta.textContent = [
      item.mode ? `mode ${item.mode}` : "",
      item.source ? trimClientText(item.source, 42) : "",
    ]
      .filter(Boolean)
      .join(" · ");

    sourceButton.append(title, summary, meta);
    sourceCell.appendChild(sourceButton);

    const kindCell = document.createElement("td");
    kindCell.className = "px-4 py-4 align-top text-sm leading-6 text-slate-600";
    kindCell.textContent = item.sourceKind
      ? formatImportedSourceType(item.sourceKind)
      : "Code";

    const languageCell = document.createElement("td");
    languageCell.className =
      "px-4 py-4 align-top text-sm leading-6 text-slate-600";
    languageCell.textContent = item.language || "Unknown";

    const tagsCell = document.createElement("td");
    tagsCell.className = "px-4 py-4 align-top text-sm leading-6 text-slate-600";
    const tagText = (item.tags || []).length
      ? `${(item.tags || []).slice(0, 3).join(", ")}${item.tags.length > 3 ? ` +${item.tags.length - 3}` : ""}`
      : "No tags";
    tagsCell.innerHTML = highlightMatchText(tagText, appState.libraryQuery);

    const savedCell = document.createElement("td");
    savedCell.className =
      "px-4 py-4 align-top text-sm leading-6 text-slate-600";
    savedCell.textContent = formatDateTime(item.createdAt);

    const actionCell = document.createElement("td");
    actionCell.className = "px-4 py-4 align-top text-right";

    const viewButton = document.createElement("button");
    viewButton.type = "button";
    viewButton.className = isSelected
      ? "subtle-button px-3 py-1.5 text-xs !border-sky-300 !bg-sky-100 !text-sky-800"
      : "subtle-button px-3 py-1.5 text-xs";
    viewButton.textContent = isSelected ? "Viewing" : "Open";
    viewButton.setAttribute("aria-label", `Open details for ${item.title}`);
    viewButton.addEventListener("click", async () => {
      await openRow(viewButton);
    });

    actionCell.appendChild(viewButton);
    row.append(
      sourceCell,
      kindCell,
      languageCell,
      tagsCell,
      savedCell,
      actionCell,
    );

    row.addEventListener("click", (event) => {
      if (event.target.closest("button, a, summary, details")) {
        return;
      }

      void openRow(viewButton);
    });

    elements.libraryList.appendChild(row);
  }
}

function showLibraryEmptyState(message) {
  elements.libraryEmptyText.textContent = message;
  elements.libraryEmptyState.classList.remove("hidden");
  elements.libraryTableWrap.classList.add("hidden");
}

function hideLibraryEmptyState() {
  elements.libraryEmptyState.classList.add("hidden");
  elements.libraryTableWrap.classList.remove("hidden");
}

async function loadSnippetDetail(id, options = {}) {
  const { trigger = null, openInModal = true } = options;

  try {
    const response = await fetch(`/api/snippets/${encodeURIComponent(id)}`);
    const payload = await response.json();

    if (!response.ok) {
      throw new Error(payload.error || "Failed to load saved source.");
    }

    appState.selectedSnippetId = id;
    appState.selectedSnippet = payload.snippet;
    appState.hasReviewedLibrarySelection = true;
    renderLibraryList(appState.filteredLibraryItems);
    renderSnippetDetail(payload.snippet);
    setSegment("snippet", "overview");
    updateLibrarySelectionControls();
    setCopyActionState();
    updateExportSummary();

    if (openInModal && appState.activeModalId !== "libraryDetailModal") {
      openModal("libraryDetailModal", trigger || appState.activeModalTrigger);
    }
  } catch (error) {
    appState.selectedSnippetId = null;
    appState.selectedSnippet = null;
    renderLibraryList(appState.filteredLibraryItems);
    clearLibraryDetail(
      error instanceof Error
        ? error.message
        : "Unable to load saved source detail.",
    );
    updateLibrarySelectionControls();
    setCopyActionState();
  }
}

function renderSnippetDetail(snippet) {
  elements.libraryDetail.classList.remove("hidden");

  elements.detailTitle.textContent = snippet.title;
  elements.detailMeta.textContent = [
    snippet.sourceKind ? formatImportedSourceType(snippet.sourceKind) : "",
    `${snippet.analysis.language} · ${Math.round(snippet.analysis.languageConfidence * 100)}% confidence`,
    snippet.source ? `source: ${snippet.source}` : "",
    formatDateTime(snippet.createdAt),
  ]
    .filter(Boolean)
    .join(" · ");
  elements.detailSummary.textContent = trimClientText(
    snippet.analysis.summary,
    240,
  );
  elements.detailReason.textContent = snippet.reason
    ? `Why saved: ${snippet.reason}`
    : "";
  elements.detailNotes.textContent = snippet.notes
    ? `Notes: ${snippet.notes}`
    : "";
  elements.detailSourceNotes.classList.toggle(
    "hidden",
    !String(snippet.reason || "").trim() && !String(snippet.notes || "").trim(),
  );
  renderChipRow(elements.detailTags, snippet.analysis.tags, { limit: 4 });
  renderList(
    elements.detailDirectives,
    snippet.analysis.buildDirectives,
    "No directives recorded.",
    { limit: 3 },
  );
  renderList(
    elements.detailPatterns,
    snippet.analysis.reusablePatterns,
    "No patterns recorded.",
    { limit: 3 },
  );
  renderList(
    elements.detailAvoid,
    snippet.analysis.antiPatternsToAvoid,
    "No avoid signals recorded.",
    { limit: 3 },
  );
  elements.detailDigest.textContent = snippet.digestMarkdown;
  void renderHighlightedCode(
    elements.detailCode,
    snippet.code,
    snippet.analysis.language,
    "detail",
  );
  updateLibrarySelectionControls();
}

function clearLibraryDetail() {
  appState.selectedSnippetId = null;
  appState.selectedSnippet = null;
  elements.libraryDetail.classList.add("hidden");
  elements.detailTitle.textContent = "Select a saved source";
  elements.detailMeta.textContent = "";
  elements.detailSourceNotes.classList.add("hidden");
  elements.detailReason.textContent = "";
  elements.detailNotes.textContent = "";
  elements.detailSummary.textContent = "";
  elements.detailTags.innerHTML = "";
  elements.detailDirectives.innerHTML = "";
  elements.detailPatterns.innerHTML = "";
  elements.detailAvoid.innerHTML = "";
  elements.detailCode.textContent = "";
  elements.detailDigest.textContent = "";
  if (appState.activeModalId === "libraryDetailModal") {
    closeModal("libraryDetailModal", { restoreFocus: false });
  }
  updateLibrarySelectionControls();
  setCopyActionState();
  updateExportSummary();
}

function renderBlueprint(blueprint) {
  const principlesItems = buildBlueprintDisplayItems([
    { label: "Product", items: blueprint.tasteAlignment },
    { label: "Experience", items: blueprint.experiencePrinciples },
  ]);
  const planItems = buildBlueprintDisplayItems([
    { label: "Architecture", items: blueprint.architectureDirection },
    { label: "Feature slice", items: blueprint.initialFeatures },
    { label: "Delivery", items: blueprint.buildOrder },
  ]);

  appState.latestBlueprint = blueprint;
  appState.blueprintMarkdown = buildBlueprintMarkdown(blueprint);
  setBlueprintReady(true);
  elements.blueprintTitle.textContent = blueprint.productName;
  elements.blueprintThesis.textContent = blueprint.thesis;
  renderBlueprintStackDecision(blueprint);
  elements.blueprintLaunchSlice.textContent =
    blueprint.initialFeatures[0] || "No launch slice proposed yet.";
  elements.blueprintBuildLead.textContent = buildBlueprintBuildLead(blueprint);
  if (elements.blueprintGuardrailsDetails) {
    elements.blueprintGuardrailsDetails.open = false;
  }
  renderBlueprintList(
    elements.blueprintPrinciples,
    principlesItems,
    "No principles recorded.",
  );
  renderBlueprintList(elements.blueprintPlan, planItems, "No plan recorded.");
  renderBlueprintList(
    elements.blueprintGuardrails,
    blueprint.guardrails,
    "No guardrails proposed.",
  );
  elements.starterPromptOutput.textContent = blueprint.starterPrompt;
  renderRefinementSummary();
  updateExportSummary();
  setCopyActionState();
}

function normalizeStackComparisonItems(items) {
  return uniqStrings(items)
    .map((item) =>
      String(item || "")
        .trim()
        .toLowerCase(),
    )
    .sort((left, right) => left.localeCompare(right));
}

function areStacksEquivalent(leftItems, rightItems) {
  const left = normalizeStackComparisonItems(leftItems);
  const right = normalizeStackComparisonItems(rightItems);

  if (left.length !== right.length) {
    return false;
  }

  return left.every((item, index) => item === right[index]);
}

function getBlueprintStackDecisionState(
  blueprint = appState.latestBlueprint,
  profile = appState.profile,
) {
  const recommendedItems = uniqStrings(blueprint?.recommendedStack || []);
  const preferredItems = parseProfileStackItems(
    profile?.manualProfile?.preferredStack || "",
  );
  const hasRecommended = Boolean(recommendedItems.length);
  const hasPreferred = Boolean(preferredItems.length);
  const isMismatch =
    hasRecommended &&
    hasPreferred &&
    !areStacksEquivalent(recommendedItems, preferredItems);

  return {
    recommendedItems,
    preferredItems,
    hasRecommended,
    hasPreferred,
    isMismatch,
  };
}

function renderBlueprintStackDecision(
  blueprint = appState.latestBlueprint,
  profile = appState.profile,
) {
  const {
    recommendedItems,
    preferredItems,
    hasRecommended,
    hasPreferred,
    isMismatch,
  } = getBlueprintStackDecisionState(blueprint, profile);
  const isStudioBusy = appState.studioBusy;
  const isProfileBusy = appState.profileBusy;
  const showPreferredAction = hasRecommended && isMismatch;
  const showSuggestedAction = hasRecommended && (!hasPreferred || isMismatch);
  const hasVisibleActions = showPreferredAction || showSuggestedAction;
  const stackPreview = getBlueprintBuildStackSummary(recommendedItems);

  renderAdjustBlueprintStack(blueprint, profile, {
    recommendedItems,
    preferredItems,
    hasRecommended,
    hasPreferred,
    isMismatch,
  });

  elements.blueprintStackChoiceCard.classList.toggle(
    "hidden",
    !hasVisibleActions,
  );
  elements.blueprintStackDecision.textContent = !hasRecommended
    ? ""
    : isMismatch
      ? "Suggested stack differs from your preferred stack. Choose which one should drive this blueprint."
      : "No preferred stack saved yet. Accept this suggestion to reuse it in future blueprints.";
  elements.blueprintStackPreview.classList.toggle(
    "hidden",
    !hasRecommended || !stackPreview,
  );
  elements.blueprintStackPreview.textContent = stackPreview
    ? `Suggested: ${stackPreview}`
    : "";

  elements.blueprintStackActions.classList.toggle("hidden", !hasVisibleActions);

  elements.usePreferredStackButton.classList.toggle(
    "hidden",
    !showPreferredAction,
  );
  elements.acceptSuggestedStackButton.classList.toggle(
    "hidden",
    !showSuggestedAction,
  );

  elements.usePreferredStackButton.disabled =
    !showPreferredAction || isStudioBusy;
  elements.acceptSuggestedStackButton.disabled =
    !showSuggestedAction || isProfileBusy;

  elements.usePreferredStackButton.textContent = isStudioBusy
    ? "Applying..."
    : "Use preferred stack";
  elements.acceptSuggestedStackButton.textContent = isProfileBusy
    ? "Accepting..."
    : "Accept suggested stack";
}

function renderAdjustBlueprintStack(
  blueprint = appState.latestBlueprint,
  profile = appState.profile,
  state = null,
) {
  const {
    recommendedItems,
    preferredItems,
    hasRecommended,
    hasPreferred,
    isMismatch,
  } = state || getBlueprintStackDecisionState(blueprint, profile);

  elements.adjustBlueprintStackSection.classList.toggle(
    "hidden",
    !hasRecommended,
  );

  if (!hasRecommended) {
    elements.adjustBlueprintStackRationale.textContent = "";
    elements.blueprintStack.innerHTML = "";
    return;
  }

  elements.adjustBlueprintStackRationale.textContent = isMismatch
    ? `Suggested for this blueprint even though your saved preferred stack is ${formatProfileStackValue(preferredItems)}.`
    : hasPreferred
      ? "Suggested stack already matches your saved preferred stack."
      : "Suggested for this blueprint. Accept it if you want to reuse the same stack in future blueprints.";
  renderBlueprintStack(elements.blueprintStack, recommendedItems);
}

async function applyPreferredStackToBlueprint() {
  const { preferredItems, isMismatch } = getBlueprintStackDecisionState();

  if (!isMismatch || !preferredItems.length) {
    return;
  }

  const preferredStack = formatProfileStackValue(preferredItems);
  await submitBlueprintRequest(
    `Use this preferred stack where reasonable: ${preferredStack}. Keep the launch slice, product direction, and overall scope intact.`,
  );
}

async function adoptSuggestedStack() {
  const { recommendedItems, hasRecommended, isMismatch } =
    getBlueprintStackDecisionState();

  if (!hasRecommended) {
    return;
  }

  const nextPreferredStack = formatProfileStackValue(recommendedItems);

  await persistProfileUpdate(
    {
      manualProfile: {
        preferredStack: nextPreferredStack,
      },
    },
    {
      workingMessage: isMismatch
        ? "Accepting the suggested stack for your profile..."
        : "Saving the suggested stack to your profile...",
      successMessage: "Suggested stack saved to your profile.",
      fallbackErrorMessage: "Unable to save the suggested stack.",
    },
  );
}

function getBlueprintBuildStackSummary(items) {
  const groups = groupBlueprintStackItems(items);
  const app = groups.find((group) => group.key === "app")?.items[0] || "";
  const data = groups.find((group) => group.key === "data")?.items[0] || "";
  const infra = groups.find((group) => group.key === "infra")?.items[0] || "";
  const summaryItems = [];

  if (app) {
    summaryItems.push(app);
  }

  if (data) {
    summaryItems.push(data);
  } else if (!summaryItems.length && infra) {
    summaryItems.push(infra);
  } else if (infra && summaryItems.length < 2) {
    summaryItems.push(infra);
  }

  if (!summaryItems.length) {
    return uniqStrings(items).slice(0, 2).join(" + ");
  }

  return summaryItems.slice(0, 2).join(" + ");
}

function buildBlueprintBuildLead(blueprint) {
  const buildLead = String(blueprint?.buildOrder?.[0] || "").trim();
  const stackSummary = getBlueprintBuildStackSummary(
    blueprint?.recommendedStack || [],
  );

  if (stackSummary && buildLead) {
    return `Build first with ${stackSummary}: ${buildLead}`;
  }

  if (buildLead) {
    return buildLead;
  }

  if (stackSummary) {
    return `Build first with ${stackSummary}.`;
  }

  return "No build order proposed yet.";
}

function getBlueprintStackBucket(item) {
  const value = String(item || "")
    .trim()
    .toLowerCase();

  if (!value) {
    return "app";
  }

  if (
    [
      "postgres",
      "postgresql",
      "mysql",
      "sqlite",
      "mongodb",
      "mongo",
      "redis",
      "prisma",
      "drizzle",
      "supabase",
      "firebase",
      "firestore",
      "planetscale",
      "dynamodb",
      "cockroach",
      "mariadb",
      "sql",
      "database",
      "db",
    ].some((keyword) => value.includes(keyword))
  ) {
    return "data";
  }

  if (
    [
      "vercel",
      "netlify",
      "cloudflare",
      "aws",
      "gcp",
      "azure",
      "docker",
      "kubernetes",
      "k8s",
      "railway",
      "render",
      "fly.io",
      "fly ",
      "github actions",
      "ci/cd",
      "continuous integration",
      "cdn",
      "hosting",
      "deploy",
      "deployment",
      "infrastructure",
    ].some((keyword) => value.includes(keyword))
  ) {
    return "infra";
  }

  return "app";
}

function groupBlueprintStackItems(items) {
  const groups = new Map(
    BLUEPRINT_STACK_BUCKETS.map((bucket) => [bucket.key, []]),
  );

  for (const item of items) {
    const label = String(item || "").trim();

    if (!label) {
      continue;
    }

    groups.get(getBlueprintStackBucket(label))?.push(label);
  }

  return BLUEPRINT_STACK_BUCKETS.map((bucket) => ({
    ...bucket,
    items: groups.get(bucket.key) || [],
  })).filter((bucket) => bucket.items.length);
}

function limitBlueprintStackGroups(
  groups,
  limit = BLUEPRINT_STACK_VISIBLE_LIMIT,
) {
  let remaining = limit;
  let hiddenCount = 0;
  const visibleGroups = [];

  for (const group of groups) {
    if (remaining <= 0) {
      hiddenCount += group.items.length;
      continue;
    }

    const visibleItems = group.items.slice(0, remaining);
    const overflowCount = Math.max(group.items.length - visibleItems.length, 0);

    if (visibleItems.length) {
      visibleGroups.push({
        ...group,
        items: visibleItems,
      });
      remaining -= visibleItems.length;
    }

    hiddenCount += overflowCount;
  }

  return {
    visibleGroups,
    hiddenCount,
  };
}

function renderBlueprintStack(container, items) {
  container.innerHTML = "";

  const groups = groupBlueprintStackItems(items);

  if (!groups.length) {
    const empty = document.createElement("p");
    empty.className = "text-sm leading-6 text-slate-500";
    empty.textContent = "No stack recommended.";
    container.appendChild(empty);
    return;
  }

  const { visibleGroups, hiddenCount } = limitBlueprintStackGroups(groups);

  for (const group of visibleGroups) {
    const section = document.createElement("section");
    section.className = "rounded-2xl border border-slate-200 bg-white p-3";

    const label = document.createElement("p");
    label.className = "section-label";
    label.textContent = group.label;

    const row = document.createElement("div");
    row.className = "mt-3 flex flex-wrap gap-2";
    renderChipRow(row, group.items);

    section.append(label, row);
    container.appendChild(section);
  }

  if (hiddenCount > 0) {
    const summary = document.createElement("span");
    summary.className = CHIP_MUTED_CLASSES;
    summary.textContent = "+ deployment details";
    container.appendChild(summary);
  }
}

function focusResults() {
  elements.resultsSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  window.setTimeout(() => {
    elements.languageLabel.focus();
  }, 120);
}

function buildNextAction(analysis) {
  const directive = analysis.buildDirectives[0];
  const pattern = analysis.reusablePatterns[0];
  const avoid = mergeUnique(
    analysis.antiPatternsToAvoid,
    analysis.risksOrTradeoffs,
  )[0];

  if (directive) {
    return {
      summary: `Carry this directive forward: ${directive}`,
      detail:
        pattern && avoid
          ? `Reuse this pattern next: ${pattern} Keep an eye on this tradeoff: ${avoid}`
          : pattern
            ? `Reuse this pattern next: ${pattern}`
            : avoid
              ? `Watch this tradeoff next: ${avoid}`
              : "Use the analysis as a concrete instruction set for the next build.",
    };
  }

  if (pattern) {
    return {
      summary: `Reuse this pattern next: ${pattern}`,
      detail: avoid
        ? `The strongest caution from this analysis is: ${avoid}`
        : "Open Studio if you want to turn this pattern into a product direction.",
    };
  }

  return {
    summary:
      "Use this analysis to inform the next Studio brief or saved source comparison.",
    detail:
      avoid ||
      "More saved sources will sharpen the guidance and next-step recommendations.",
  };
}

function hasDigestDraft() {
  return [
    elements.codeInput.value,
    elements.snippetTitleInput.value,
    elements.snippetSourceInput.value,
    elements.snippetReasonInput.value,
    elements.snippetNotesInput.value,
  ].some((value) => value.trim());
}

function captureDigestDraft() {
  return {
    code: elements.codeInput.value,
    language: elements.editorLanguage.value,
    title: elements.snippetTitleInput.value,
    source: elements.snippetSourceInput.value,
    reason: elements.snippetReasonInput.value,
    notes: elements.snippetNotesInput.value,
    importedSource: appState.digestImportedSource
      ? { ...appState.digestImportedSource }
      : null,
    pendingImport: appState.pendingDigestImport
      ? {
          payload: { ...appState.pendingDigestImport.payload },
          preservePdf: appState.pendingDigestImport.preservePdf,
        }
      : null,
    contextVisible: appState.digestContextVisible,
  };
}

function hasStudioDraft() {
  return (
    [
      elements.studioAudienceInput.value,
      elements.studioProblemInput.value,
      elements.studioFirstReleaseInput.value,
      elements.constraintsInput.value,
      elements.studioScopeInput.value !== "balanced"
        ? elements.studioScopeInput.value
        : "",
      elements.refinementPresetSelect.value,
      elements.refinementModeInput.value,
      elements.refinementNotesInput.value,
    ].some((value) => String(value || "").trim()) ||
    Boolean(appState.studioContext) ||
    getStudioContextMode() === "source"
  );
}

function captureStudioDraft() {
  return {
    idea: elements.ideaInput.value,
    audience: elements.studioAudienceInput.value,
    problem: elements.studioProblemInput.value,
    firstRelease: elements.studioFirstReleaseInput.value,
    constraints: elements.constraintsInput.value,
    scope: elements.studioScopeInput.value,
    refinementPreset: elements.refinementPresetSelect.value,
    refinementMode: elements.refinementModeInput.value,
    refinementNotes: elements.refinementNotesInput.value,
    contextMode: getStudioContextMode(),
    context: appState.studioContext ? { ...appState.studioContext } : null,
  };
}

function scheduleDigestDraftSave() {
  window.clearTimeout(appState.digestDraftSaveTimer);
  appState.digestDraftSaveTimer = window.setTimeout(() => {
    saveDigestDraft();
  }, DIGEST_AUTOSAVE_DELAY_MS);
}

function scheduleStudioDraftSave() {
  window.clearTimeout(appState.studioDraftSaveTimer);
  appState.studioDraftSaveTimer = window.setTimeout(() => {
    saveStudioDraft();
  }, STUDIO_AUTOSAVE_DELAY_MS);
}

function saveDigestDraft() {
  if (
    !hasDigestDraft() &&
    !appState.digestImportedSource &&
    !appState.pendingDigestImport
  ) {
    removeDraftStorage(DIGEST_DRAFT_STORAGE_KEY);
    updateDraftRestoreControls();
    return;
  }

  writeDraftStorage(DIGEST_DRAFT_STORAGE_KEY, {
    ...captureDigestDraft(),
    updatedAt: Date.now(),
  });
  updateDraftRestoreControls();
}

function saveStudioDraft() {
  if (!hasStudioDraft()) {
    removeDraftStorage(STUDIO_DRAFT_STORAGE_KEY);
    updateDraftRestoreControls();
    return;
  }

  writeDraftStorage(STUDIO_DRAFT_STORAGE_KEY, {
    ...captureStudioDraft(),
    updatedAt: Date.now(),
  });
  updateDraftRestoreControls();
}

function restoreSavedDigestDraft() {
  const snapshot = readDraftStorage(DIGEST_DRAFT_STORAGE_KEY);

  if (!snapshot) {
    updateDraftRestoreControls();
    return;
  }

  elements.codeInput.value =
    snapshot.code ||
    (!snapshot.code && snapshot.link ? String(snapshot.link) : "");
  elements.digestPdfInput.value = "";
  appState.queuedDigestPdfFile = null;
  elements.editorLanguage.value = snapshot.language || "auto";
  elements.snippetTitleInput.value = snapshot.title || "";
  elements.snippetSourceInput.value = snapshot.source || "";
  elements.snippetReasonInput.value = snapshot.reason || "";
  elements.snippetNotesInput.value = snapshot.notes || "";
  appState.digestImportedSource = snapshot.importedSource || null;
  appState.pendingDigestImport = snapshot.pendingImport || null;
  setContextVisible(
    Boolean(snapshot.contextVisible) ||
      [snapshot.title, snapshot.source, snapshot.reason, snapshot.notes].some(
        (value) => String(value || "").trim(),
      ),
  );
  appState.editorPreviewHtml = "";
  appState.editorPreviewLanguage = "auto";
  appState.previewLanguageSelection = elements.editorLanguage.value;
  appState.previewSource = "";
  appState.previewStale = false;
  elements.codePreviewContent.textContent =
    "Run highlight to preview the current content.";
  elements.codePreviewLabel.textContent = "Content preview";
  updateDigestImportState();
  updateAutoImportPrompt();
  updateEditorMetrics();
  updateExportSummary();
  updateSampleSourceVisibility();
  setSegment("editor", "write");
  elements.codeInput.focus();
  setDigestStatus("Analysis draft restored from local storage.", "success");
  showToast("Analysis draft restored.");
  updateDraftRestoreControls();
}

function restoreSavedStudioDraft() {
  const snapshot = readDraftStorage(STUDIO_DRAFT_STORAGE_KEY);

  if (!snapshot) {
    updateDraftRestoreControls();
    return;
  }

  elements.studioAudienceInput.value = snapshot.audience || "";
  elements.studioProblemInput.value = snapshot.problem || "";
  elements.studioFirstReleaseInput.value = snapshot.firstRelease || "";
  if (
    ![snapshot.audience, snapshot.problem, snapshot.firstRelease].some(
      (value) => String(value || "").trim(),
    ) &&
    snapshot.idea
  ) {
    elements.studioFirstReleaseInput.value = snapshot.idea || "";
  }
  elements.constraintsInput.value = snapshot.constraints || "";
  appState.studioConstraintComposerVisible = false;
  setStudioScope(snapshot.scope || "balanced", { skipSave: true });
  elements.refinementPresetSelect.value = normalizeRefinementPreset(
    snapshot.refinementPreset,
  );
  elements.refinementModeInput.value = snapshot.refinementMode || "";
  elements.refinementNotesInput.value = snapshot.refinementNotes || "";
  appState.studioContextMode = normalizeStudioContextMode(
    snapshot.contextMode || (snapshot.context ? "source" : "profile"),
  );
  appState.studioContext =
    appState.studioContextMode === "source" ? snapshot.context || null : null;
  clearStudioClarification();
  renderStudioIdeaPreview();
  renderStudioConstraintComposer();
  renderStudioContext();
  updateRefinementComposerState();
  setActiveView("studio");
  focusStudioBriefStart();
  setStudioStatus("Studio brief restored from local storage.", "success");
  showToast("Studio draft restored.");
  updateDraftRestoreControls();
}

function updateDraftRestoreControls() {
  const digestDraft = readDraftStorage(DIGEST_DRAFT_STORAGE_KEY);
  const studioDraft = readDraftStorage(STUDIO_DRAFT_STORAGE_KEY);
  const showDigestRestore =
    Boolean(digestDraft) &&
    !hasDigestDraft() &&
    !appState.digestImportedSource &&
    !appState.pendingDigestImport;
  const showStudioRestore = Boolean(studioDraft) && !hasStudioDraft();

  elements.restoreDigestDraftButton.classList.toggle(
    "hidden",
    !showDigestRestore,
  );
  elements.restoreStudioDraftButton.classList.toggle(
    "hidden",
    !showStudioRestore,
  );

  elements.digestDraftStatus.textContent = digestDraft?.updatedAt
    ? `Saved locally ${formatRelativeSavedTime(digestDraft.updatedAt)}.`
    : "Draft autosaves locally.";
  elements.studioDraftStatus.textContent = studioDraft?.updatedAt
    ? `Saved locally ${formatRelativeSavedTime(studioDraft.updatedAt)}.`
    : "Autosaves locally.";
}

function writeDraftStorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore local draft persistence failures.
  }
}

function readDraftStorage(key) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function removeDraftStorage(key) {
  try {
    window.localStorage.removeItem(key);
  } catch {
    // Ignore local draft persistence failures.
  }
}

function showUndoClear() {
  elements.undoClearButton.classList.remove("hidden");
}

function hideUndoClear() {
  elements.undoClearButton.classList.add("hidden");
  appState.lastClearedEditor = null;
}

function restoreClearedEditor() {
  const snapshot = appState.lastClearedEditor;

  if (!snapshot) {
    return;
  }

  elements.codeInput.value = snapshot.code || "";
  elements.digestPdfInput.value = "";
  elements.editorLanguage.value = snapshot.language || "auto";
  elements.snippetTitleInput.value = snapshot.title || "";
  elements.snippetSourceInput.value = snapshot.source || "";
  elements.snippetReasonInput.value = snapshot.reason || "";
  elements.snippetNotesInput.value = snapshot.notes || "";
  appState.digestImportedSource = snapshot.importedSource || null;
  appState.pendingDigestImport = snapshot.pendingImport || null;
  setContextVisible(
    Boolean(snapshot.contextVisible) ||
      [snapshot.title, snapshot.source, snapshot.reason, snapshot.notes].some(
        (value) => String(value || "").trim(),
      ),
  );
  appState.editorPreviewHtml = "";
  appState.previewSource = "";
  appState.previewStale = false;
  elements.codePreviewContent.textContent =
    "Run highlight to preview the current content.";
  elements.codePreviewLabel.textContent = "Content preview";
  syncPreviewState();
  updateDigestImportState();
  updateAutoImportPrompt();
  updateEditorMetrics();
  scheduleDigestDraftSave();
  updateSampleSourceVisibility();
  updateExportSummary();
  setSegment("editor", "write");
  hideUndoClear();
  setDigestStatus("Draft restored.", "success");
  showToast("Draft restored.");
}

function renderLibraryFilters(items) {
  const languages = countValues(
    items.map((item) => item.language),
    6,
  );
  const tags = countValues(
    items.flatMap((item) => item.tags || []),
    8,
  );

  renderLibraryFilterSelect(elements.libraryLanguageSelect, [
    { value: "all", label: "All languages" },
    ...languages.map((item) => ({
      value: item.value,
      label: `${item.value} (${item.count})`,
    })),
  ]);
  renderLibraryFilterSelect(elements.libraryTagSelect, [
    { value: "all", label: "All tags" },
    ...tags.map((item) => ({
      value: item.value,
      label: `${item.value} (${item.count})`,
    })),
  ]);
  elements.libraryModeSelect.value = appState.libraryFilters.mode;
  elements.libraryRecencySelect.value = appState.libraryFilters.recency;
  updateLibraryFilterControls();
}

function renderLibraryFilterSelect(select, options) {
  const currentValue = select.value || "all";
  select.innerHTML = "";

  for (const option of options) {
    const node = document.createElement("option");
    node.value = option.value;
    node.textContent = option.label;
    select.appendChild(node);
  }

  select.value = options.some((option) => option.value === currentValue)
    ? currentValue
    : "all";
}

function applyLibraryFilters() {
  const filtered = appState.libraryItems.filter((item) =>
    matchesLibraryFilters(item),
  );
  appState.filteredLibraryItems = filtered;

  if (!filtered.some((item) => item.id === appState.selectedSnippetId)) {
    clearLibraryDetail(buildLibraryEmptyDetailMessage(filtered.length));
  }

  renderLibraryList(filtered);
  elements.librarySearchCount.textContent = buildLibraryResultCountLabel(
    filtered.length,
    appState.libraryItems.length,
  );
  elements.libraryFilterSummary.textContent = buildLibraryFilterSummary(
    filtered.length,
  );
  updateLibrarySelectionControls();
  updateLibraryFilterControls();
}

function matchesLibraryFilters(item) {
  const { mode, recency, language, tag } = appState.libraryFilters;

  if (mode !== "all" && item.mode !== mode) {
    return false;
  }

  if (language !== "all" && item.language !== language) {
    return false;
  }

  if (tag !== "all" && !(item.tags || []).includes(tag)) {
    return false;
  }

  if (recency !== "all") {
    const maxAgeMs = Number(recency) * 24 * 60 * 60 * 1000;
    const createdAt = new Date(item.createdAt).getTime();

    if (Number.isFinite(createdAt) && Date.now() - createdAt > maxAgeMs) {
      return false;
    }
  }

  return true;
}

function buildLibraryFilterSummary(filteredCount) {
  const labels = [];
  const filtersVisible = shouldShowLibraryFilters();

  if (appState.libraryFilters.mode !== "all") {
    labels.push(`mode ${appState.libraryFilters.mode}`);
  }
  if (appState.libraryFilters.recency !== "all") {
    labels.push(`last ${appState.libraryFilters.recency} days`);
  }
  if (appState.libraryFilters.language !== "all") {
    labels.push(`language ${appState.libraryFilters.language}`);
  }
  if (appState.libraryFilters.tag !== "all") {
    labels.push(`tag ${appState.libraryFilters.tag}`);
  }

  if (!labels.length) {
    if (appState.libraryQuery && filteredCount === 0) {
      return "No matches. Broaden the search.";
    }
    if (!filtersVisible && appState.libraryItems.length) {
      return "Filters unlock with more saved sources.";
    }
    return filteredCount
      ? "Search first. Filter when needed."
      : "Run an analysis to start saving sources.";
  }

  return `Active filters: ${labels.join(", ")}.`;
}

function buildLibraryResultCountLabel(filteredCount, totalCount) {
  if (!totalCount && !appState.libraryQuery) {
    return "No saved sources yet";
  }

  if (!totalCount && appState.libraryQuery) {
    return "0 matching sources";
  }

  if (filteredCount === totalCount) {
    return `${totalCount} source${totalCount === 1 ? "" : "s"}`;
  }

  return `${filteredCount} of ${totalCount} source${totalCount === 1 ? "" : "s"}`;
}

function buildLibraryEmptyDetailMessage(filteredCount) {
  if (!appState.libraryItems.length && !appState.libraryQuery) {
    return "No saved sources yet. Run an analysis to start building knowledge.";
  }

  if (!filteredCount && appState.libraryQuery) {
    return "No saved sources match the current search. Try a broader term or clear the search.";
  }

  if (!filteredCount) {
    return "No saved sources match the current filters. Reset filters or widen the search.";
  }

  return "Select a saved source from the filtered results.";
}

function resetLibraryFilters() {
  appState.libraryFilters = {
    mode: "all",
    recency: "all",
    language: "all",
    tag: "all",
  };
  renderLibraryFilters(appState.libraryItems);
  applyLibraryFilters();
}

function hasActiveLibraryFilters() {
  return Object.values(appState.libraryFilters).some(
    (value) => value !== "all",
  );
}

function shouldShowLibraryFilters() {
  return (
    appState.libraryItems.length >= MIN_LIBRARY_ITEMS_FOR_FILTERS ||
    hasActiveLibraryFilters()
  );
}

function updateLibraryFilterControls() {
  const hasItems = appState.libraryItems.length > 0;
  const showFilters = shouldShowLibraryFilters();
  const hasLanguageChoices = elements.libraryLanguageSelect.options.length > 1;
  const hasTagChoices = elements.libraryTagSelect.options.length > 1;

  elements.libraryFiltersPanel.classList.toggle("hidden", !showFilters);
  elements.libraryModeSelect.disabled = !hasItems || !showFilters;
  elements.libraryRecencySelect.disabled = !hasItems || !showFilters;
  elements.libraryLanguageSelect.disabled =
    !hasItems || !showFilters || !hasLanguageChoices;
  elements.libraryTagSelect.disabled =
    !hasItems || !showFilters || !hasTagChoices;
  elements.clearLibraryFiltersButton.disabled =
    !hasItems || !showFilters || !hasActiveLibraryFilters();
}

function updateLibrarySelectionControls() {
  const currentIndex = appState.filteredLibraryItems.findIndex(
    (item) => item.id === appState.selectedSnippetId,
  );
  const hasSelection = currentIndex >= 0;

  elements.libraryPrevButton.disabled = !hasSelection || currentIndex === 0;
  elements.libraryNextButton.disabled =
    !hasSelection || currentIndex === appState.filteredLibraryItems.length - 1;
  elements.sendSelectionToDigestButton.disabled = !hasSelection;
  elements.useSelectionInStudioButton.disabled = !hasSelection;
}

async function moveLibrarySelection(step) {
  const currentIndex = appState.filteredLibraryItems.findIndex(
    (item) => item.id === appState.selectedSnippetId,
  );

  if (currentIndex < 0) {
    return;
  }

  const nextItem = appState.filteredLibraryItems[currentIndex + step];

  if (!nextItem) {
    return;
  }

  await loadSnippetDetail(nextItem.id);
}

function sendSnippetToDigest(snippet) {
  if (!snippet?.code?.trim()) {
    showToast("Select a saved source first.");
    return;
  }

  if (appState.activeModalId === "libraryDetailModal") {
    closeModal("libraryDetailModal", { restoreFocus: false });
  }

  appState.pendingDigestImport = null;
  appState.digestImportedSource =
    snippet.assetType && snippet.assetType !== "code"
      ? {
          title: snippet.title || "",
          source: snippet.source || "",
          assetType: snippet.assetType,
          sourceKind: snippet.sourceKind || snippet.assetType,
          importSummary: snippet.importedSummary || "",
        }
      : null;
  elements.codeInput.value = snippet.code;
  elements.snippetTitleInput.value = snippet.title || "";
  elements.snippetSourceInput.value = snippet.source || "";
  elements.snippetReasonInput.value = snippet.reason || "";
  elements.snippetNotesInput.value = snippet.notes || "";
  elements.digestPdfInput.value = "";
  appState.queuedDigestPdfFile = null;
  elements.editorLanguage.value = normalizeEditorLanguageSelection(
    snippet.assetType && snippet.assetType !== "code"
      ? "markdown"
      : snippet.analysis?.language || "",
  );
  setContextVisible(
    [snippet.title, snippet.source, snippet.reason, snippet.notes].some(
      (value) => String(value || "").trim(),
    ),
  );
  hideUndoClear();
  appState.editorPreviewHtml = "";
  appState.previewSource = "";
  appState.previewStale = false;
  elements.codePreviewContent.textContent =
    "Run highlight to preview the current content.";
  elements.codePreviewLabel.textContent = "Content preview";
  syncPreviewState();
  updateDigestImportState();
  updateAutoImportPrompt();
  updateEditorMetrics(snippet.analysis?.language || "");
  scheduleDigestDraftSave();
  updateExportSummary();
  updateSampleSourceVisibility();
  setActiveView("digest");
  setSegment("editor", "write");
  elements.codeInput.focus();
  setDigestStatus("Library source loaded into Analyze.", "success");
  showToast("Saved source loaded into Analyze.");
}

function useSnippetInStudio(snippet) {
  if (!snippet) {
    showToast("Select a saved source first.");
    return;
  }

  if (appState.activeModalId === "libraryDetailModal") {
    closeModal("libraryDetailModal", { restoreFocus: false });
  }

  setStudioContext(buildStudioContextFromSnippet(snippet));
  setActiveView("studio");
  focusStudioBriefStart();
  showToast("Saved source context sent to Studio.");
}

function useLatestDigestInStudio() {
  if (!appState.latestSnippet) {
    showToast("Run an analysis first.");
    return;
  }

  setStudioContext(buildStudioContextFromLatestDigest(appState.latestSnippet));
  setActiveView("studio");
  focusStudioBriefStart();
  showToast("Latest analysis sent to Studio.");
}

async function openLatestSnippetInLibrary() {
  if (!appState.latestSnippet?.id) {
    showToast("Run an analysis first.");
    return;
  }

  openView("knowledge", {
    segmentGroup: "knowledge",
    segmentTarget: "sources",
  });
  await loadSnippetDetail(appState.latestSnippet.id);
}

function buildStudioContextFromSnippet(snippet) {
  const summary =
    snippet.analysis?.summary ||
    snippet.summary ||
    "No saved source summary available.";
  const directives =
    snippet.analysis?.buildDirectives || snippet.buildDirectives || [];
  const tags = snippet.analysis?.tags || snippet.tags || [];
  const language = snippet.analysis?.language || snippet.language || "Unknown";
  const title = snippet.title || "Untitled source";

  return {
    id: snippet.id || "",
    type: "snippet",
    title,
    identity: `Saved source · ${title}`,
    summary,
    directives: directives.slice(0, 3),
    tags: tags.slice(0, 4),
    language,
    digestMarkdown: snippet.digestMarkdown || "",
    code: snippet.code || "",
  };
}

function buildStudioContextFromLatestDigest(snippet) {
  return {
    ...buildStudioContextFromSnippet(snippet),
    type: "latest-digest",
    identity: `Latest analysis · ${snippet.title}`,
  };
}

function normalizeStudioContextMode(mode) {
  return mode === "source" ? "source" : "profile";
}

function getStudioContextMode() {
  return normalizeStudioContextMode(
    appState.studioContextMode ||
      (appState.studioContext ? "source" : "profile"),
  );
}

function setStudioContextMode(mode, options = {}) {
  const { skipSave = false } = options;
  const normalizedMode = normalizeStudioContextMode(mode);
  appState.studioContextMode = normalizedMode;

  if (normalizedMode === "profile") {
    appState.studioContext = null;
  }

  renderStudioContext();

  if (!skipSave) {
    scheduleStudioDraftSave();
  }
}

function setStudioContext(context) {
  appState.studioContext = context;
  appState.studioContextMode = "source";
  renderStudioContext();
  scheduleStudioDraftSave();
}

function clearStudioContext(options = {}) {
  const { skipSave = false, silent = false } = options;
  appState.studioContext = null;
  appState.studioContextMode = "profile";
  renderStudioContext();

  if (!skipSave) {
    scheduleStudioDraftSave();
  }

  if (!silent) {
    showToast("Studio context cleared.");
  }
}

function resolveStudioContextSource(snippet) {
  if (!snippet?.id) {
    return snippet;
  }

  if (appState.latestSnippet?.id === snippet.id) {
    return appState.latestSnippet;
  }

  if (appState.selectedSnippet?.id === snippet.id) {
    return appState.selectedSnippet;
  }

  return snippet;
}

function getStudioRecentContextItems() {
  const items = Array.isArray(appState.recentDigests)
    ? appState.recentDigests.slice(0, 6)
    : [];

  if (
    appState.studioContext?.id &&
    !items.some((item) => item.id === appState.studioContext.id)
  ) {
    items.unshift({
      id: appState.studioContext.id,
      title: appState.studioContext.title,
      sourceKind:
        appState.studioContext.type === "latest-digest" ? "code" : "manual",
      language: appState.studioContext.language,
      summary: appState.studioContext.summary,
      buildDirectives: appState.studioContext.directives,
      tags: appState.studioContext.tags,
      createdAt: "",
      profileExcluded: false,
    });
  }

  return items.slice(0, 6);
}

function getStudioContextStripButtonClassName(isActive) {
  return [
    "flex",
    "w-[188px]",
    "shrink-0",
    "flex-col",
    "rounded-2xl",
    "border",
    "px-3",
    "py-3",
    "text-left",
    "transition",
    ...(isActive
      ? [
          "border-sky-300",
          "bg-sky-50",
          "shadow-[inset_0_0_0_1px_rgba(56,189,248,0.16)]",
        ]
      : ["border-slate-200", "bg-white", "hover:border-slate-300"]),
  ].join(" ");
}

function renderStudioContextStrip() {
  elements.studioContextStrip.innerHTML = "";

  const items = getStudioRecentContextItems();

  if (!items.length) {
    const empty = document.createElement("span");
    empty.className =
      "inline-flex items-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-3 py-3 text-sm text-slate-500";
    empty.textContent = "Analyze a source to add inline Studio context.";
    elements.studioContextStrip.appendChild(empty);
    return;
  }

  for (const item of items) {
    const resolved = resolveStudioContextSource(item);
    const isLatest = appState.latestSnippet?.id === item.id;
    const isActive = appState.studioContext?.id === item.id;
    const button = document.createElement("button");
    button.type = "button";
    button.className = getStudioContextStripButtonClassName(isActive);
    button.addEventListener("click", () => {
      const context = isLatest
        ? buildStudioContextFromLatestDigest(resolved)
        : buildStudioContextFromSnippet(resolved);
      setStudioContext(context);
    });

    const title = document.createElement("span");
    title.className = "truncate text-sm font-semibold text-slate-900";
    title.textContent = item.title || "Untitled source";

    const meta = document.createElement("span");
    meta.className =
      "mt-1 font-['IBM_Plex_Mono',monospace] text-[11px] text-slate-500";
    meta.textContent = [
      isLatest ? "Latest" : formatImportedSourceType(item.sourceKind),
      item.language || "Unknown",
      item.createdAt ? formatShortDate(item.createdAt) : "",
    ]
      .filter(Boolean)
      .join(" · ");

    const summary = document.createElement("span");
    summary.className = "mt-2 text-xs leading-5 text-slate-600";
    summary.textContent = trimClientText(
      item.summary ||
        item.buildDirectives?.[0] ||
        "Use this saved source as Studio context.",
      82,
    );

    button.append(title, meta, summary);
    elements.studioContextStrip.appendChild(button);
  }
}

function renderStudioContext() {
  const manual = appState.profile?.manualProfile || {};
  const preferredStack = manual.preferredStack || "";
  const contextMode = getStudioContextMode();
  renderStudioContextStrip();

  for (const button of elements.studioContextModeButtons) {
    const isActive = button.dataset.studioContextMode === contextMode;
    replaceStateClasses(
      button,
      isActive,
      STUDIO_TOGGLE_ACTIVE_CLASSES,
      STUDIO_TOGGLE_INACTIVE_CLASSES,
    );
    button.setAttribute("aria-pressed", String(isActive));
  }

  elements.studioContextSourcePanel?.classList.toggle(
    "hidden",
    contextMode !== "source",
  );

  if (contextMode === "source") {
    elements.studioContextSummary.textContent = appState.studioContext
      ? `Grounded in "${appState.studioContext.title}". Choose a different source below or switch back to Profile only.`
      : "Ground this brief in one saved source so the blueprint follows a concrete example.";

    if (elements.studioContextSourceHelper) {
      elements.studioContextSourceHelper.textContent = appState.studioContext
        ? "Selected source stays active until you switch back to Profile only or pick a different one."
        : "Choose one saved source below to ground the brief.";
    }

    return;
  }

  elements.studioContextSummary.textContent = preferredStack
    ? `Using profile memory only, with a preference for ${preferredStack}. Switch to Ground in source when you want the blueprint to follow a concrete example.`
    : "Using profile memory only. Switch to Ground in source when you want the blueprint to follow a concrete example.";
}

function buildStudioContextPayload() {
  if (!appState.studioContext) {
    return null;
  }

  return {
    type: appState.studioContext.type,
    title: appState.studioContext.title,
    summary: trimClientText(appState.studioContext.summary, 600),
    directives: appState.studioContext.directives,
    tags: appState.studioContext.tags,
    language: appState.studioContext.language,
    digestMarkdown: trimClientText(appState.studioContext.digestMarkdown, 2200),
    codeExcerpt: trimClientText(appState.studioContext.code, 1600),
  };
}

function insertPresetText(field, text) {
  if (!text) {
    return;
  }

  const nextValue = field.value.trim()
    ? field.value.includes(text)
      ? field.value
      : `${field.value.trim()}\n${text}`
    : text;
  field.value = nextValue;
  field.focus();
  field.dispatchEvent(new Event("input", { bubbles: true }));
}

function buildBlueprintMarkdown(blueprint) {
  if (!blueprint) {
    return "";
  }

  const listSection = (title, items) => [
    `## ${title}`,
    "",
    ...(items.length
      ? items.map((item) => `- ${item}`)
      : ["- No items recorded."]),
    "",
  ];

  return [
    `# ${blueprint.productName}`,
    "",
    `- Mode: ${blueprint.mode}`,
    `- Model: ${blueprint.model}`,
    `- Request ID: ${blueprint.requestId}`,
    "",
    "## Thesis",
    "",
    blueprint.thesis,
    "",
    "## Recommended Stack",
    "",
    ...(blueprint.recommendedStack.length
      ? blueprint.recommendedStack.map((item) => `- ${item}`)
      : ["- No stack recommended."]),
    "",
    ...listSection("Taste Alignment", blueprint.tasteAlignment),
    ...listSection("Experience Principles", blueprint.experiencePrinciples),
    ...listSection("Architecture Direction", blueprint.architectureDirection),
    ...listSection("Initial Features", blueprint.initialFeatures),
    ...listSection("Build Order", blueprint.buildOrder),
    ...listSection("Guardrails", blueprint.guardrails),
    "## Starter Prompt",
    "",
    blueprint.starterPrompt || "No starter prompt available.",
    "",
  ].join("\n");
}

function buildBlueprintDisplayItems(sectionGroups) {
  return sectionGroups.flatMap(({ label, items }) =>
    items
      .map((item) => String(item || "").trim())
      .filter(Boolean)
      .map((item) => `${label}: ${item}`),
  );
}

async function applyRefinement() {
  const refinement = getPendingRefinement();

  if (!refinement) {
    setStudioStatus(
      "Choose an adjustment or describe the change you want.",
      "error",
    );

    if (elements.refinementModeInput.value === "custom") {
      elements.refinementNotesInput.focus();
    } else {
      focusRefinementComposer();
    }

    return;
  }

  await submitBlueprintRequest(refinement);
}

function focusRefinementComposer() {
  elements.studioRefinementPanel.open = true;

  if (
    elements.refinementModeInput.value === "custom" &&
    !elements.refinementNotesInput.disabled
  ) {
    elements.refinementNotesInput.focus();
    return;
  }

  const activeQuickButton = elements.refinementQuickButtons.find(
    (button) =>
      button.dataset.refinementPreset === elements.refinementPresetSelect.value,
  );

  if (activeQuickButton && !activeQuickButton.disabled) {
    activeQuickButton.focus();
    return;
  }

  const firstQuickButton = elements.refinementQuickButtons.find(
    (button) => !button.disabled,
  );

  if (firstQuickButton) {
    firstQuickButton.focus();
    return;
  }

  if (!elements.refinementCustomButton.disabled) {
    elements.refinementCustomButton.focus();
  }
}

function resetRefinementComposer(options = {}) {
  const { preserveSummary = false } = options;
  elements.refinementModeInput.value = "";
  elements.refinementPresetSelect.value = "";
  elements.refinementNotesInput.value = "";

  if (!preserveSummary) {
    appState.lastRefinement = "";
    renderRefinementSummary();
  }

  updateRefinementComposerState();
  scheduleStudioDraftSave();
}

function renderRefinementSummary() {
  elements.refinementSummary.textContent = appState.lastRefinement
    ? `Last adjustment: ${trimClientText(appState.lastRefinement, 120)}`
    : "No adjustments applied yet.";
}

function getPendingRefinement() {
  const mode = elements.refinementModeInput.value.trim();
  const preset = normalizeRefinementPreset(
    elements.refinementPresetSelect.value,
  );
  const notes = elements.refinementNotesInput.value.trim();

  if (mode === "custom") {
    return notes;
  }

  if (mode === "preset") {
    return preset;
  }

  return notes || preset;
}

function getRefinementPlaceholder(preset) {
  const normalizedPreset = normalizeRefinementPreset(preset);
  const placeholderMap = {
    [REFINEMENT_PRESET_MORE_TECHNICAL]:
      "Ask for stricter architecture, clearer interfaces, or a more concrete implementation order.",
    [REFINEMENT_PRESET_SMALLER_MVP]:
      "Specify which features should move out of v1 and what the smallest useful release should include.",
    [REFINEMENT_PRESET_CLEANER_UX]:
      "Ask for clearer user flows, cleaner information hierarchy, or stronger interaction guidance.",
  };

  return (
    placeholderMap[normalizedPreset] ||
    "What should change in the next version?"
  );
}

function updateRefinementComposerState() {
  const hasBlueprint = Boolean(appState.latestBlueprint);
  const isBusy = appState.studioBusy;
  const preset = normalizeRefinementPreset(
    elements.refinementPresetSelect.value,
  );
  elements.refinementPresetSelect.value = preset;
  const notes = elements.refinementNotesInput.value.trim();
  const mode =
    elements.refinementModeInput.value.trim() ||
    (notes ? "custom" : preset ? "preset" : "");
  const isCustom = mode === "custom";
  const pending = getPendingRefinement();

  elements.refinementModeInput.value = mode;
  elements.refinementPresetSelect.disabled = !hasBlueprint || isBusy;
  elements.refinementCustomPanel.classList.toggle("hidden", !isCustom);
  elements.refinementNotesInput.disabled = !hasBlueprint || isBusy || !isCustom;
  elements.refinementNotesInput.placeholder = isCustom
    ? "Describe one specific change to the current blueprint."
    : getRefinementPlaceholder(preset);

  for (const button of elements.refinementQuickButtons) {
    const isActive =
      hasBlueprint && !isCustom && preset === button.dataset.refinementPreset;
    button.disabled = !hasBlueprint || isBusy;
    replaceStateClasses(
      button,
      isActive,
      STUDIO_TOGGLE_ACTIVE_CLASSES,
      STUDIO_TOGGLE_INACTIVE_CLASSES,
    );
    button.setAttribute("aria-pressed", String(isActive));
  }

  const isCustomActive = hasBlueprint && isCustom;
  elements.refinementCustomButton.disabled = !hasBlueprint || isBusy;
  replaceStateClasses(
    elements.refinementCustomButton,
    isCustomActive,
    STUDIO_TOGGLE_ACTIVE_CLASSES,
    STUDIO_TOGGLE_INACTIVE_CLASSES,
  );
  elements.refinementCustomButton.setAttribute(
    "aria-pressed",
    String(isCustomActive),
  );

  elements.applyRefinementButton.disabled = !hasBlueprint || isBusy || !pending;
  elements.clearRefinementButton.disabled =
    !hasBlueprint || isBusy || (!preset && !notes && !mode);
  elements.refinementHint.textContent = !hasBlueprint
    ? "Generate a blueprint first."
    : pending
      ? isCustom
        ? `Next custom adjustment: ${trimClientText(pending, 120)}`
        : `Next quick adjustment: ${trimClientText(pending, 120)}`
      : isCustom
        ? "Describe one specific change. Cmd/Ctrl + Enter applies it."
        : "Choose one of the three quick adjustments or open Custom for a more specific request.";

  if (isCustom && hasBlueprint) {
    elements.studioRefinementPanel.open = true;
  }
}

function renderChipRow(container, items, options = {}) {
  const { limit = 0 } = options;
  container.innerHTML = "";
  const normalizedItems = items.map((item) =>
    typeof item === "string" ? item : `${item.value} (${item.count})`,
  );

  if (!normalizedItems.length) {
    const chip = document.createElement("span");
    chip.className = CHIP_MUTED_CLASSES;
    chip.textContent = "No data yet";
    container.appendChild(chip);
    return;
  }

  const visibleItems = limit
    ? normalizedItems.slice(0, limit)
    : normalizedItems;
  const overflowItems = limit ? normalizedItems.slice(limit) : [];

  for (const item of visibleItems) {
    const chip = document.createElement("span");
    chip.className = CHIP_PRIMARY_CLASSES;
    chip.textContent = item;
    container.appendChild(chip);
  }

  if (!overflowItems.length) {
    return;
  }

  const details = document.createElement("details");
  details.className = "relative";
  details.dataset.inlineMenu = "chip-overflow";

  const summary = document.createElement("summary");
  summary.className =
    "chip cursor-pointer list-none select-none [&::-webkit-details-marker]:hidden";
  summary.textContent = `+${overflowItems.length} more`;

  const panel = document.createElement("div");
  panel.className =
    "absolute left-0 top-full z-20 mt-2 flex max-w-[320px] flex-wrap gap-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_14px_34px_rgba(15,23,42,0.12)]";

  for (const item of overflowItems) {
    const chip = document.createElement("span");
    chip.className = CHIP_PRIMARY_CLASSES;
    chip.textContent = item;
    panel.appendChild(chip);
  }

  details.append(summary, panel);
  container.appendChild(details);
}

function renderList(container, items, fallback, options = {}) {
  const { limit = 0 } = options;
  container.innerHTML = "";

  const safeItems = items.length ? items : [fallback];
  const visibleItems = limit ? safeItems.slice(0, limit) : safeItems;
  const overflowItems = limit ? safeItems.slice(limit) : [];

  for (const item of visibleItems) {
    const li = document.createElement("li");
    li.textContent = item;
    container.appendChild(li);
  }

  appendOverflowDisclosure(container, overflowItems, "Show more");
}

function renderBlueprintList(container, items, fallback) {
  container.innerHTML = "";

  const safeItems = items.length ? items : [fallback];

  for (const item of safeItems) {
    const li = document.createElement("li");
    li.textContent = item;
    container.appendChild(li);
  }
}

function renderTextList(container, items, fallback, options = {}) {
  const { limit = 0 } = options;
  container.innerHTML = "";

  const safeItems = items.length ? items : [fallback];
  const visibleItems = limit ? safeItems.slice(0, limit) : safeItems;
  const overflowItems = limit ? safeItems.slice(limit) : [];

  for (const item of visibleItems) {
    const li = document.createElement("li");
    li.textContent = item;
    container.appendChild(li);
  }

  appendOverflowDisclosure(container, overflowItems, "Show more");
}

function appendOverflowDisclosure(container, items, label) {
  if (!items.length) {
    return;
  }

  const li = document.createElement("li");
  li.className = "list-none";

  const details = document.createElement("details");
  details.className = "mt-2";

  const summary = document.createElement("summary");
  summary.className =
    "subtle-button inline-flex list-none px-3 py-1.5 text-xs [&::-webkit-details-marker]:hidden";
  summary.textContent = `${label} (${items.length})`;

  const list = document.createElement("ul");
  list.className = "mt-3 list-disc space-y-2 pl-5";

  for (const item of items) {
    const overflowItem = document.createElement("li");
    overflowItem.textContent = item;
    list.appendChild(overflowItem);
  }

  details.append(summary, list);
  li.appendChild(details);
  container.appendChild(li);
}

function hydrateProfileForm(manualProfile = {}) {
  elements.profileName.value = manualProfile.name || "";
  elements.profileRole.value = manualProfile.role || "";
  elements.profileHeadlineInput.value = manualProfile.headline || "";
  elements.profileFocus.value = manualProfile.focus || "";
  elements.profileStack.value = manualProfile.preferredStack || "";
  elements.profileDesignTaste.value = manualProfile.designTaste || "";
  elements.profileBuildNotes.value = manualProfile.buildNotes || "";
  renderProfileStackPicker();
}

function parseProfileStackItems(value) {
  const seen = new Set();

  return String(value || "")
    .split(/[\n,;]+/)
    .map((item) => item.trim())
    .filter(Boolean)
    .filter((item) => {
      const key = item.toLowerCase();

      if (seen.has(key)) {
        return false;
      }

      seen.add(key);
      return true;
    });
}

function formatProfileStackValue(items) {
  return parseProfileStackItems(items.join(", ")).join(", ");
}

function matchesProfileStackTemplate(items, templateItems) {
  if (items.length !== templateItems.length) {
    return false;
  }

  const normalizedItems = items.map((item) => item.toLowerCase()).sort();
  const normalizedTemplate = templateItems
    .map((item) => item.toLowerCase())
    .sort();

  return normalizedItems.every(
    (item, index) => item === normalizedTemplate[index],
  );
}

function renderProfileStackPicker() {
  const selectedItems = parseProfileStackItems(
    elements.profileStack?.value || "",
  );

  if (elements.profileStackTemplate) {
    const matchedTemplate =
      Object.entries(PROFILE_STACK_TEMPLATES).find(
        ([templateId, templateItems]) =>
          templateId !== "custom" &&
          matchesProfileStackTemplate(selectedItems, templateItems),
      )?.[0] || "custom";

    elements.profileStackTemplate.value = matchedTemplate;
  }

  for (const button of elements.profileStackOptionButtons) {
    const option = button.dataset.stackOption || "";
    const isActive = selectedItems.some(
      (item) => item.toLowerCase() === option.toLowerCase(),
    );

    replaceStateClasses(
      button,
      isActive,
      STUDIO_TOGGLE_ACTIVE_CLASSES,
      STUDIO_TOGGLE_INACTIVE_CLASSES,
    );
    button.setAttribute("aria-pressed", String(isActive));
  }
}

function toggleProfileStackOption(option) {
  if (!option || !elements.profileStack) {
    return;
  }

  const selectedItems = parseProfileStackItems(elements.profileStack.value);
  const existingIndex = selectedItems.findIndex(
    (item) => item.toLowerCase() === option.toLowerCase(),
  );

  if (existingIndex >= 0) {
    selectedItems.splice(existingIndex, 1);
  } else {
    selectedItems.push(option);
  }

  elements.profileStack.value = formatProfileStackValue(selectedItems);
  renderProfileStackPicker();
}

async function renderHighlightedCode(container, code, language, scope) {
  const requestId = ++appState.detailHighlightRequestId;
  container.textContent = code;

  try {
    const response = await fetch("/api/highlight", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code, language }),
    });
    const payload = await response.json();

    if (!response.ok) {
      throw new Error(payload.error || "Highlight failed.");
    }

    if (scope === "detail" && requestId !== appState.detailHighlightRequestId) {
      return;
    }

    container.innerHTML = payload.html;
  } catch {
    container.textContent = code;
  }
}

function updateEditorMetrics(detectedLanguage = "") {
  const code = elements.codeInput.value;
  const lineCount = code ? code.split(/\r?\n/).length : 0;
  const charCount = code.length;
  const selectedLanguage = elements.editorLanguage.value;
  const displayLanguage =
    detectedLanguage ||
    (selectedLanguage === "auto" ? "auto" : selectedLanguage);

  elements.editorLineCount.textContent = `${lineCount} line${lineCount === 1 ? "" : "s"}`;
  elements.editorCharCount.textContent = `${charCount} char${charCount === 1 ? "" : "s"}`;
  elements.detectedLanguageChip.textContent =
    formatLanguageLabel(displayLanguage);
}

function setCopyActionState() {
  const hasLatestDigest = Boolean(appState.latestDigestMarkdown.trim());
  const hasSelectedSnippet = Boolean(appState.selectedSnippet?.code?.trim());
  const hasSelectedDigest = Boolean(
    appState.selectedSnippet?.digestMarkdown?.trim(),
  );
  const hasBlueprint = Boolean(appState.blueprintMarkdown.trim());
  const hasStarterPrompt = Boolean(
    elements.starterPromptOutput.textContent?.trim(),
  );
  const hasFreshPreview =
    Boolean(appState.editorPreviewHtml.trim()) && !appState.previewStale;
  const hasLatestSnippet = Boolean(appState.latestSnippet?.id);

  elements.copyDigestButton.disabled = !hasLatestDigest;
  elements.copyDigestArtifactButton.disabled = !hasLatestDigest;
  elements.copyLatestDigestButton.disabled = !hasLatestDigest;
  elements.copyLatestDigestButton.classList.toggle("hidden", !hasLatestDigest);
  elements.copySelectedCodeButton.disabled = !hasSelectedSnippet;
  elements.copySelectedDigestButton.disabled = !hasSelectedDigest;
  elements.copyBlueprintButton.disabled = !hasBlueprint;
  elements.copyPreviewButton.disabled = !hasFreshPreview;
  elements.viewStarterPromptButton.disabled = !hasStarterPrompt;
  elements.copyPromptModalButton.disabled = !hasStarterPrompt;
  elements.exportBlueprintButton.disabled = !hasBlueprint;
  elements.useLatestInStudioButton.disabled = !hasLatestSnippet;
  elements.openLatestInLibraryButton.disabled = !hasLatestSnippet;
  elements.refreshPreviewButton.disabled = !elements.codeInput.value.trim();
  updateExportAvailability();
}

function updateExportSummary() {
  const available = [];

  if (elements.codeInput.value.trim()) available.push("current draft");
  if (appState.latestDigestMarkdown.trim()) available.push("latest analysis");
  if (appState.selectedSnippet?.code?.trim())
    available.push("selected source content");
  if (appState.promptKitMarkdown.trim()) available.push("prompt kit");
  if (appState.memoryMarkdown.trim()) available.push("memory");
  if (appState.profile) available.push("profile JSON");
  if (appState.blueprintMarkdown.trim()) available.push("blueprint");
  if (elements.starterPromptOutput.textContent?.trim())
    available.push("starter prompt");

  elements.exportSummary.textContent = available.length
    ? `Available: ${available.join(", ")}.`
    : "Nothing exportable yet.";
  updateExportAvailability();
}

function updateExportAvailability() {
  for (const button of elements.exportButtons) {
    const payload = getExportPayload(button.dataset.exportType || "");
    button.disabled = !payload || !payload.content.trim();
  }
}

async function copyText(text, successMessage, button = null) {
  if (!text.trim()) {
    showToast("Nothing to copy yet.");
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    closeSecondaryActionMenus();
    flashButtonLabel(button, "Copied");
    showToast(successMessage);
  } catch {
    flashButtonLabel(button, "Failed");
    showToast("Clipboard access failed.");
  }
}

function exportByType(type) {
  const payload = getExportPayload(type);

  if (!payload || !payload.content.trim()) {
    showToast("Nothing available for that export yet.");
    return;
  }

  const blob = new Blob([payload.content], {
    type: payload.mime || "text/plain;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = payload.filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  closeSecondaryActionMenus();
  showToast(`${payload.label} exported.`);
}

function getExportPayload(type) {
  const selectedTitle = slugifyClient(
    appState.selectedSnippet?.title || "selected-snippet",
  );
  const latestTitle = slugifyClient(
    appState.latestSnippet?.title || "latest-analysis",
  );
  const currentSnippetExtension = extensionForLanguage(
    elements.editorLanguage.value === "auto"
      ? ""
      : elements.editorLanguage.value,
    "txt",
  );
  const selectedSnippetExtension = extensionForLanguage(
    appState.selectedSnippet?.analysis?.language || "",
    "txt",
  );

  const exportMap = {
    "current-snippet": {
      label: "Current draft",
      filename: `analysis-draft.${currentSnippetExtension}`,
      content: elements.codeInput.value,
      mime: "text/plain;charset=utf-8",
    },
    "latest-digest": {
      label: "Latest analysis",
      filename: `${latestTitle}.md`,
      content: appState.latestDigestMarkdown,
      mime: "text/markdown;charset=utf-8",
    },
    "selected-snippet-code": {
      label: "Selected source content",
      filename: `${selectedTitle}.${selectedSnippetExtension}`,
      content: appState.selectedSnippet?.code || "",
      mime: "text/plain;charset=utf-8",
    },
    "selected-snippet-digest": {
      label: "Selected source analysis",
      filename: `${selectedTitle}.md`,
      content: appState.selectedSnippet?.digestMarkdown || "",
      mime: "text/markdown;charset=utf-8",
    },
    "prompt-kit": {
      label: "Prompt kit",
      filename: "prompt-kit.md",
      content: appState.promptKitMarkdown,
      mime: "text/markdown;charset=utf-8",
    },
    memory: {
      label: "Memory",
      filename: "style-memory.md",
      content: appState.memoryMarkdown,
      mime: "text/markdown;charset=utf-8",
    },
    profile: {
      label: "Profile JSON",
      filename: "profile.json",
      content: JSON.stringify(appState.profile || {}, null, 2),
      mime: "application/json;charset=utf-8",
    },
    "starter-prompt": {
      label: "Starter prompt",
      filename: "starter-prompt.md",
      content: elements.starterPromptOutput.textContent || "",
      mime: "text/markdown;charset=utf-8",
    },
    blueprint: {
      label: "Blueprint",
      filename: `${slugifyClient(appState.latestBlueprint?.productName || "product-blueprint")}.md`,
      content: appState.blueprintMarkdown,
      mime: "text/markdown;charset=utf-8",
    },
  };

  return exportMap[type] || null;
}

function openModal(modalId, trigger = null) {
  const modal = document.getElementById(modalId);

  if (!modal) {
    return;
  }

  closeSecondaryActionMenus();

  if (appState.activeModalId && appState.activeModalId !== modalId) {
    closeModal(appState.activeModalId, { restoreFocus: false });
  }

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("overflow-hidden");
  appState.activeModalId = modalId;
  appState.activeModalTrigger = trigger;

  const initialFocus = getInitialFocusTarget(modalId, modal, trigger);
  window.setTimeout(() => {
    initialFocus?.focus();
  }, 0);
}

function closeModal(modalId = appState.activeModalId, options = {}) {
  if (!modalId) {
    return;
  }

  const modal = document.getElementById(modalId);

  if (!modal) {
    return;
  }

  modal.classList.remove("flex", "block");
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");

  const shouldRestoreFocus = options.restoreFocus !== false;
  const trigger = appState.activeModalTrigger;

  if (appState.activeModalId === modalId) {
    appState.activeModalId = null;
    appState.activeModalTrigger = null;
  }

  if (!appState.activeModalId) {
    document.body.classList.remove("overflow-hidden");
  }

  if (shouldRestoreFocus) {
    trigger?.focus?.();
  }
}

function trapModalFocus(event) {
  const modal = document.getElementById(appState.activeModalId || "");

  if (!modal) {
    return;
  }

  const focusables = [...modal.querySelectorAll(FOCUSABLE_SELECTOR)].filter(
    (node) => !node.hasAttribute("hidden") && !node.closest(".hidden"),
  );

  if (!focusables.length) {
    event.preventDefault();
    return;
  }

  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  const activeElement = document.activeElement;

  if (event.shiftKey && activeElement === first) {
    event.preventDefault();
    last.focus();
    return;
  }

  if (!event.shiftKey && activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function getInitialFocusTarget(modalId, modal, trigger = null) {
  const triggerTargetId = trigger?.dataset.focusTarget;

  if (triggerTargetId) {
    const triggerTarget = modal.querySelector(`#${triggerTargetId}`);

    if (triggerTarget) {
      return triggerTarget;
    }
  }

  const explicitTargets = {
    libraryDetailModal: modal.querySelector(
      "[data-segment-group='snippet'][data-segment-target='overview']",
    ),
    promptModal: elements.copyPromptModalButton,
    helpModal: modal.querySelector("[data-modal-close]"),
  };

  return explicitTargets[modalId] || modal.querySelector(FOCUSABLE_SELECTOR);
}

function replaceStateClasses(
  element,
  isActive,
  activeClasses,
  inactiveClasses,
) {
  element.classList.remove(...activeClasses, ...inactiveClasses);
  element.classList.add(...(isActive ? activeClasses : inactiveClasses));
}

function getLibraryLinkClassName(isSelected) {
  return [
    LIBRARY_LINK_BASE_CLASSES,
    isSelected ? LIBRARY_LINK_SELECTED_CLASSES : LIBRARY_LINK_IDLE_CLASSES,
  ].join(" ");
}

function setDigestBusy(isBusy) {
  appState.digestBusy = isBusy;
  elements.digestButton.disabled = isBusy;
  elements.digestButton.textContent = isBusy
    ? "Analyzing..."
    : "Analyze source";
  updateDigestImportState();
  renderDigestProfileImpact();
}

function setStudioBusy(isBusy, options = {}) {
  const { refining = false } = options;
  appState.studioBusy = isBusy;
  elements.generateButton.disabled = isBusy;
  elements.generateButton.textContent = isBusy
    ? refining
      ? "Refining..."
      : appState.latestBlueprint
        ? "Updating..."
        : "Shaping..."
    : appState.latestBlueprint
      ? "Update blueprint"
      : "Shape product";
  if (isBusy) {
    elements.applyRefinementButton.textContent = refining
      ? "Applying..."
      : "Apply adjustment";
  } else {
    elements.applyRefinementButton.textContent = "Apply adjustment";
  }
  updateRefinementComposerState();
  if (!isBusy) {
    clearStudioProgress();
  } else {
    renderStudioProgress();
  }
  renderBlueprintStackDecision();
}

function setProfileBusy(isBusy) {
  appState.profileBusy = isBusy;
  elements.saveProfileButton.disabled = isBusy;
  elements.saveProfileButton.textContent = isBusy
    ? "Saving..."
    : "Save profile";
  renderProfileLearningMode();
  renderProfileUndoAction();
  renderBlueprintStackDecision();
}

function setDigestStatus(message, tone) {
  elements.statusText.textContent = message;
  setBannerTone(elements.statusBanner, tone);
}

function setStudioStatus(message, tone) {
  elements.studioStatus.textContent = message;
  setBannerTone(elements.studioStatusBanner, tone);
  const shouldShow =
    Boolean(message.trim()) && (tone === "working" || tone === "error");
  elements.studioStatusBanner.classList.toggle("hidden", !shouldShow);
  if (tone !== "working") {
    elements.studioProgressPanel?.classList.add("hidden");
  } else {
    renderStudioProgress();
  }
}

function setProfileStatus(message, tone) {
  elements.profileStatus.textContent = message;
  setBannerTone(elements.profileStatusBanner, tone);
}

function setBannerTone(element, tone) {
  const toneClasses = STATUS_TONE_CLASSES[tone] || STATUS_TONE_CLASSES.idle;

  element.classList.remove(
    ...STATUS_TONE_CLASSES.idle,
    ...STATUS_TONE_CLASSES.working,
    ...STATUS_TONE_CLASSES.success,
    ...STATUS_TONE_CLASSES.error,
  );
  element.classList.add(...STATUS_BANNER_BASE_CLASSES, ...toneClasses);
}

function showToast(message) {
  window.clearTimeout(appState.toastTimer);
  elements.toastText.textContent = message;
  elements.toast.classList.remove("hidden");
  appState.toastTimer = window.setTimeout(() => {
    elements.toast.classList.add("hidden");
  }, 2200);
}

function formatCountChip(item) {
  return `${item.value} (${item.count})`;
}

function buildImportReviewMeta(payload) {
  const content = String(payload?.content || "");
  const lineCount = content ? content.split(/\r?\n/).length : 0;
  const charCount = content.length;
  return [
    formatImportedSourceType(
      payload?.assetType || payload?.sourceKind || "code",
    ),
    lineCount ? `${lineCount} line${lineCount === 1 ? "" : "s"}` : "",
    charCount ? `${formatCompactNumber(charCount)} chars` : "",
  ]
    .filter(Boolean)
    .join(" · ");
}

function formatCompactNumber(value) {
  if (!Number.isFinite(value)) {
    return "0";
  }

  if (value >= 1000) {
    return `${Math.round(value / 100) / 10}k`;
  }

  return String(value);
}

function formatRelativeSavedTime(value) {
  try {
    return new Date(value).toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });
  } catch {
    return "recently";
  }
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

function uniqStrings(values) {
  return [...new Set((values || []).map((value) => String(value || "").trim()))]
    .map((value) => value.trim())
    .filter(Boolean);
}

function formatLanguageLabel(value) {
  if (!value || value === "auto") {
    return "auto";
  }

  return value
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace("Tsx", "TSX")
    .replace("Ts", "TS")
    .replace("Js", "JS")
    .replace("Json", "JSON")
    .replace("Sql", "SQL")
    .replace("Xml", "HTML");
}

function formatImportedSourceType(value) {
  const labelMap = {
    code: "Code snippet",
    manual: "Manual input",
    website: "Website reference",
    "github-repo": "GitHub repository",
    pdf: "PDF document",
  };

  return labelMap[String(value || "").toLowerCase()] || "Imported source";
}

async function readFileAsBase64(file) {
  const dataUrl = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () =>
      reject(new Error("Unable to read the selected file."));
    reader.readAsDataURL(file);
  });

  return dataUrl.replace(/^data:application\/pdf;base64,/i, "");
}

function formatProfileIdentity(profile) {
  const values = [profile.name, profile.role].filter(Boolean);
  return values.length ? values.join(" · ") : "Profile not configured";
}

function buildHeaderProfileStatus(profile, manualProfile = {}) {
  const preferredStack = String(manualProfile.preferredStack || "").trim();
  const focus = String(manualProfile.focus || "").trim();
  const activeDigests = Number(profile?.activeDigests || 0);
  const topLanguage = String(profile?.topLanguages?.[0]?.value || "").trim();

  if (preferredStack) {
    return `Prefers ${trimClientText(preferredStack, 40)}`;
  }

  if (focus) {
    return trimClientText(focus, 56);
  }

  if (activeDigests > 0) {
    return `${activeDigests} shaping source${activeDigests === 1 ? "" : "s"}`;
  }

  if (topLanguage) {
    return `Signals in ${topLanguage}`;
  }

  return "";
}

function flashButtonLabel(button, temporaryLabel, duration = 1400) {
  if (!button) {
    return;
  }

  const originalLabel =
    button.dataset.originalLabel || button.textContent || "";
  button.dataset.originalLabel = originalLabel;
  window.clearTimeout(Number(button.dataset.resetTimer || 0));
  button.textContent = temporaryLabel;

  const timer = window.setTimeout(() => {
    button.textContent = button.dataset.originalLabel || originalLabel;
    delete button.dataset.resetTimer;
  }, duration);

  button.dataset.resetTimer = String(timer);
}

function buildManualProfileItems(profile) {
  return [
    profile.focus ? `Focus: ${profile.focus}` : "",
    profile.preferredStack ? `Preferred stack: ${profile.preferredStack}` : "",
    profile.designTaste ? `Design taste: ${profile.designTaste}` : "",
    profile.buildNotes ? `Build notes: ${profile.buildNotes}` : "",
  ].filter(Boolean);
}

function normalizeEditorLanguageSelection(language) {
  const normalized = String(language || "").toLowerCase();
  const aliasMap = {
    "tsx / react": "tsx",
    typescript: "typescript",
    javascript: "javascript",
    python: "python",
    go: "go",
    rust: "rust",
    json: "json",
    html: "html",
    css: "css",
    markdown: "markdown",
    sql: "sql",
  };

  return aliasMap[normalized] || "auto";
}

function countValues(values, limit = 6) {
  const counts = new Map();

  for (const value of values) {
    const key = String(value || "").trim();

    if (!key) {
      continue;
    }

    counts.set(key, (counts.get(key) || 0) + 1);
  }

  return [...counts.entries()]
    .map(([value, count]) => ({ value, count }))
    .sort(
      (left, right) =>
        right.count - left.count || left.value.localeCompare(right.value),
    )
    .slice(0, limit);
}

function highlightMatchText(text, query) {
  const safeText = escapeHtml(text || "");
  const terms = String(query || "")
    .trim()
    .split(/\s+/)
    .filter((term) => term.length > 1)
    .map((term) => escapeRegExp(term));

  if (!terms.length || !safeText) {
    return safeText || "untitled";
  }

  const pattern = new RegExp(`(${terms.join("|")})`, "gi");
  return safeText.replace(
    pattern,
    '<mark class="rounded bg-amber-100 px-1 text-amber-900">$1</mark>',
  );
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeRegExp(value) {
  return String(value || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function trimClientText(value, limit) {
  const safeValue = String(value || "").trim();
  return safeValue.length > limit
    ? `${safeValue.slice(0, limit).trimEnd()}\n…`
    : safeValue;
}

function truncateInlineText(value, limit) {
  const safeValue = String(value || "").trim();
  return safeValue.length > limit
    ? `${safeValue.slice(0, limit).trimEnd()}…`
    : safeValue;
}

function slugifyClient(value) {
  return (
    (value || "export")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 64) || "export"
  );
}

function extensionForLanguage(language, fallback = "txt") {
  const normalized = String(language || "").toLowerCase();
  const extensionMap = {
    tsx: "tsx",
    "tsx / react": "tsx",
    typescript: "ts",
    javascript: "js",
    jsx: "jsx",
    python: "py",
    go: "go",
    rust: "rs",
    json: "json",
    html: "html",
    css: "css",
    markdown: "md",
    sql: "sql",
  };

  return extensionMap[normalized] || fallback;
}
