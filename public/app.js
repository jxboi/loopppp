const elements = {
  tabs: [...document.querySelectorAll("[data-view-target]")],
  views: [...document.querySelectorAll("[data-view]")],
  segmentButtons: [...document.querySelectorAll("[data-segment-target]:not([data-modal-open])")],
  segmentPanels: [...document.querySelectorAll("[data-segment-panel]")],
  modalOpenButtons: [...document.querySelectorAll("[data-modal-open]")],
  modalCloseButtons: [...document.querySelectorAll("[data-modal-close]")],
  modalRoots: [...document.querySelectorAll("[data-modal-root]")],
  exportButtons: [...document.querySelectorAll("[data-export-type]")],
  flowGuideTitle: document.querySelector("#flowGuideTitle"),
  flowProgressLabel: document.querySelector("#flowProgressLabel"),
  flowProgressDescription: document.querySelector("#flowProgressDescription"),
  flowProgressMeter: document.querySelector("#flowProgressMeter"),
  flowProgressBar: document.querySelector("#flowProgressBar"),
  flowPrimaryActionButton: document.querySelector("#flowPrimaryActionButton"),
  flowSteps: document.querySelector("#flowSteps"),
  digestButton: document.querySelector("#digestButton"),
  generateButton: document.querySelector("#generateButton"),
  saveProfileButton: document.querySelector("#saveProfileButton"),
  copyPromptKitButton: document.querySelector("#copyPromptKitButton"),
  copyWorkspaceMemoryButton: document.querySelector("#copyWorkspaceMemoryButton"),
  copyMemoryButton: document.querySelector("#copyMemoryButton"),
  copyDigestButton: document.querySelector("#copyDigestButton"),
  copyDigestArtifactButton: document.querySelector("#copyDigestArtifactButton"),
  copyCodeButton: document.querySelector("#copyCodeButton"),
  copyPreviewButton: document.querySelector("#copyPreviewButton"),
  copyLatestDigestButton: document.querySelector("#copyLatestDigestButton"),
  copySelectedCodeButton: document.querySelector("#copySelectedCodeButton"),
  copySelectedDigestButton: document.querySelector("#copySelectedDigestButton"),
  copyBlueprintButton: document.querySelector("#copyBlueprintButton"),
  copyStarterPromptButton: document.querySelector("#copyStarterPromptButton"),
  copyPromptModalButton: document.querySelector("#copyPromptModalButton"),
  exportBlueprintButton: document.querySelector("#exportBlueprintButton"),
  formatCodeButton: document.querySelector("#formatCodeButton"),
  highlightCodeButton: document.querySelector("#highlightCodeButton"),
  refreshPreviewButton: document.querySelector("#refreshPreviewButton"),
  clearCodeButton: document.querySelector("#clearCodeButton"),
  undoClearButton: document.querySelector("#undoClearButton"),
  toggleToolsButton: document.querySelector("#toggleToolsButton"),
  toggleContextButton: document.querySelector("#toggleContextButton"),
  toggleFilePathsButton: document.querySelector("#toggleFilePathsButton"),
  editorToolsPanel: document.querySelector("#editorToolsPanel"),
  digestContextPanel: document.querySelector("#digestContextPanel"),
  digestSourceModeSelect: document.querySelector("#digestSourceModeSelect"),
  digestManualPanel: document.querySelector("#digestManualPanel"),
  digestLinkPanel: document.querySelector("#digestLinkPanel"),
  digestPdfPanel: document.querySelector("#digestPdfPanel"),
  digestLinkInput: document.querySelector("#digestLinkInput"),
  digestPdfInput: document.querySelector("#digestPdfInput"),
  importLinkButton: document.querySelector("#importLinkButton"),
  importPdfButton: document.querySelector("#importPdfButton"),
  clearImportedSourceButton: document.querySelector("#clearImportedSourceButton"),
  digestImportChip: document.querySelector("#digestImportChip"),
  digestImportTitle: document.querySelector("#digestImportTitle"),
  digestImportSummary: document.querySelector("#digestImportSummary"),
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
  constraintsInput: document.querySelector("#constraintsInput"),
  librarySearchInput: document.querySelector("#librarySearchInput"),
  librarySearchCount: document.querySelector("#librarySearchCount"),
  libraryFilterSummary: document.querySelector("#libraryFilterSummary"),
  clearLibraryFiltersButton: document.querySelector("#clearLibraryFiltersButton"),
  libraryModeSelect: document.querySelector("#libraryModeSelect"),
  libraryRecencySelect: document.querySelector("#libraryRecencySelect"),
  libraryLanguageSelect: document.querySelector("#libraryLanguageSelect"),
  libraryTagSelect: document.querySelector("#libraryTagSelect"),
  statusBanner: document.querySelector("#statusBanner"),
  statusText: document.querySelector("#statusText"),
  studioStatusBanner: document.querySelector("#studioStatusBanner"),
  studioStatus: document.querySelector("#studioStatus"),
  profileStatusBanner: document.querySelector("#profileStatusBanner"),
  profileStatus: document.querySelector("#profileStatus"),
  metricTotal: document.querySelector("#metricTotal"),
  metricLanguage: document.querySelector("#metricLanguage"),
  metricTag: document.querySelector("#metricTag"),
  metricDirective: document.querySelector("#metricDirective"),
  headerProfileBadge: document.querySelector("#headerProfileBadge"),
  workspaceSummary: document.querySelector("#workspaceSummary"),
  quickProfileSummary: document.querySelector("#quickProfileSummary"),
  quickProfileIdentity: document.querySelector("#quickProfileIdentity"),
  quickProfileMeta: document.querySelector("#quickProfileMeta"),
  quickLanguageChips: document.querySelector("#quickLanguageChips"),
  quickTagChips: document.querySelector("#quickTagChips"),
  profileSummary: document.querySelector("#profileSummary"),
  profileIdentity: document.querySelector("#profileIdentity"),
  profileHeadline: document.querySelector("#profileHeadline"),
  profileManualList: document.querySelector("#profileManualList"),
  topLanguages: document.querySelector("#topLanguages"),
  topTags: document.querySelector("#topTags"),
  topDirectives: document.querySelector("#topDirectives"),
  recentDigests: document.querySelector("#recentDigests"),
  promptKitPreview: document.querySelector("#promptKitPreview"),
  memoryPreview: document.querySelector("#memoryPreview"),
  resultsSection: document.querySelector("#resultsSection"),
  languageLabel: document.querySelector("#languageLabel"),
  summaryText: document.querySelector("#summaryText"),
  nextActionSummary: document.querySelector("#nextActionSummary"),
  nextActionDetail: document.querySelector("#nextActionDetail"),
  useLatestInStudioButton: document.querySelector("#useLatestInStudioButton"),
  openLatestInLibraryButton: document.querySelector("#openLatestInLibraryButton"),
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
  sendSelectionToDigestButton: document.querySelector("#sendSelectionToDigestButton"),
  useSelectionInStudioButton: document.querySelector("#useSelectionInStudioButton"),
  blueprintTitle: document.querySelector("#blueprintTitle"),
  blueprintThesis: document.querySelector("#blueprintThesis"),
  blueprintStack: document.querySelector("#blueprintStack"),
  blueprintTaste: document.querySelector("#blueprintTaste"),
  blueprintExperience: document.querySelector("#blueprintExperience"),
  blueprintArchitecture: document.querySelector("#blueprintArchitecture"),
  blueprintFeatures: document.querySelector("#blueprintFeatures"),
  blueprintBuildOrder: document.querySelector("#blueprintBuildOrder"),
  blueprintGuardrails: document.querySelector("#blueprintGuardrails"),
  blueprintEmptyState: document.querySelector("#blueprintEmptyState"),
  blueprintContent: document.querySelector("#blueprintContent"),
  studioRefinementPanel: document.querySelector("#studioRefinementPanel"),
  starterPromptOutput: document.querySelector("#starterPromptOutput"),
  studioContextIdentity: document.querySelector("#studioContextIdentity"),
  studioContextSummary: document.querySelector("#studioContextSummary"),
  studioContextSignals: document.querySelector("#studioContextSignals"),
  ideaPresetSelect: document.querySelector("#ideaPresetSelect"),
  constraintPresetSelect: document.querySelector("#constraintPresetSelect"),
  refinementPresetSelect: document.querySelector("#refinementPresetSelect"),
  refinementNotesInput: document.querySelector("#refinementNotesInput"),
  refinementHint: document.querySelector("#refinementHint"),
  applyRefinementButton: document.querySelector("#applyRefinementButton"),
  clearRefinementButton: document.querySelector("#clearRefinementButton"),
  refinementSummary: document.querySelector("#refinementSummary"),
  useLatestDigestContextButton: document.querySelector("#useLatestDigestContextButton"),
  clearStudioContextButton: document.querySelector("#clearStudioContextButton"),
  profileForm: document.querySelector("#profileForm"),
  profileName: document.querySelector("#profileName"),
  profileRole: document.querySelector("#profileRole"),
  profileHeadlineInput: document.querySelector("#profileHeadlineInput"),
  profileFocus: document.querySelector("#profileFocus"),
  profileStack: document.querySelector("#profileStack"),
  profileDesignTaste: document.querySelector("#profileDesignTaste"),
  profileBuildNotes: document.querySelector("#profileBuildNotes"),
  exportSummary: document.querySelector("#exportSummary"),
  manageProfileButton: document.querySelector("#manageProfileButton"),
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
  latestBlueprint: null,
  blueprintMarkdown: "",
  lastRefinement: "",
  profile: null,
  promptKitMarkdown: "",
  memoryMarkdown: "",
  recentDigests: [],
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
  digestImportedSource: null,
  studioContext: null,
  hasReviewedLibrarySelection: false,
  currentFlowStepId: "capture",
  studioBusy: false,
  digestBusy: false,
  digestSourceMode: "manual",
  toastTimer: null,
  detailHighlightRequestId: 0,
};

const TAB_ACTIVE_CLASSES = ["border-sky-600", "text-slate-900"];
const TAB_INACTIVE_CLASSES = [
  "border-transparent",
  "text-slate-500",
  "hover:text-slate-900",
];
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
const RECENT_ITEM_CLASSES =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left transition hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50/60";
const RECENT_TITLE_CLASSES = "block text-sm font-semibold text-slate-900";
const RECENT_META_CLASSES = "mt-1 block text-xs text-slate-500";
const LIBRARY_EMPTY_CLASSES =
  "rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-600";
const LIBRARY_LINK_BASE_CLASSES =
  "w-full rounded-2xl border px-4 py-4 text-left transition";
const LIBRARY_LINK_IDLE_CLASSES =
  "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50/60";
const LIBRARY_LINK_SELECTED_CLASSES =
  "border-sky-300 bg-sky-50 shadow-[inset_0_0_0_1px_rgba(56,189,248,0.16)]";
const LIBRARY_TITLE_CLASSES = "block text-sm font-semibold text-slate-900";
const LIBRARY_META_CLASSES = "mt-1 block text-xs text-slate-500";
const LIBRARY_SUMMARY_CLASSES = "mt-2 block text-sm leading-6 text-slate-600";
const LIBRARY_TAGS_CLASSES =
  "mt-2 block font-['IBM_Plex_Mono',monospace] text-[11px] text-slate-500";
const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
const TAB_NAVIGATION_KEYS = ["ArrowLeft", "ArrowRight", "Home", "End"];
const MAX_DIGEST_PDF_BYTES = 5_000_000;
const FLOW_STEP_BASE_CLASSES =
  "w-full rounded-2xl border px-4 py-4 text-left transition";
const FLOW_STEP_CURRENT_CLASSES =
  "border-sky-300 bg-sky-50 shadow-[inset_0_0_0_1px_rgba(56,189,248,0.16)]";
const FLOW_STEP_COMPLETE_CLASSES =
  "border-emerald-200 bg-emerald-50/80 hover:border-emerald-300";
const FLOW_STEP_PENDING_CLASSES =
  "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50";

bindEvents();
void boot();

function bindEvents() {
  elements.flowPrimaryActionButton.addEventListener("click", () => {
    void handleFlowPrimaryAction();
  });

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

  for (const button of elements.modalOpenButtons) {
    button.addEventListener("click", () => {
      const modalId = button.dataset.modalOpen;

      if (!modalId) {
        return;
      }

      if (button.dataset.segmentGroup && button.dataset.segmentTarget) {
        setSegment(button.dataset.segmentGroup, button.dataset.segmentTarget);
      }

      if (modalId === "profileModal") {
        hydrateProfileForm(appState.profile?.manualProfile);
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
    updateExportSummary();
    updateFlowGuide();
  });

  elements.digestSourceModeSelect.addEventListener("change", () => {
    setDigestSourceMode(elements.digestSourceModeSelect.value, { focusField: true });
  });

  elements.digestLinkInput.addEventListener("input", () => {
    updateDigestImportState();
  });

  elements.digestLinkInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      void importDigestLink();
    }
  });

  elements.digestPdfInput.addEventListener("change", () => {
    updateDigestImportState();
  });

  elements.editorLanguage.addEventListener("change", () => {
    markPreviewStale();
    updateEditorMetrics();
  });

  elements.toggleContextButton.addEventListener("click", () => {
    setContextVisible(!appState.digestContextVisible);
  });

  elements.toggleToolsButton.addEventListener("click", () => {
    setToolsVisible(!appState.toolsVisible);
  });

  elements.digestButton.addEventListener("click", () => {
    void submitDigest();
  });

  elements.importLinkButton.addEventListener("click", () => {
    void importDigestLink();
  });

  elements.importPdfButton.addEventListener("click", () => {
    void importDigestPdf();
  });

  elements.clearImportedSourceButton.addEventListener("click", () => {
    clearImportedSource();
  });

  elements.generateButton.addEventListener("click", () => {
    void submitBlueprintRequest();
  });

  elements.profileForm.addEventListener("submit", (event) => {
    event.preventDefault();
    void submitProfileUpdate();
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

  elements.copyCodeButton.addEventListener("click", () => {
    void copyText(elements.codeInput.value, "Content copied.", elements.copyCodeButton);
  });

  elements.copyPreviewButton.addEventListener("click", () => {
    void copyText(
      elements.codePreviewContent.textContent || "",
      "Preview copied.",
      elements.copyPreviewButton,
    );
  });

  elements.copyPromptKitButton.addEventListener("click", () => {
    void copyText(appState.promptKitMarkdown, "Prompt kit copied.", elements.copyPromptKitButton);
  });

  elements.copyWorkspaceMemoryButton.addEventListener("click", () => {
    void copyText(appState.memoryMarkdown, "Memory copied.", elements.copyWorkspaceMemoryButton);
  });

  elements.copyMemoryButton.addEventListener("click", () => {
    void copyText(elements.memoryOutput.textContent || "", "Memory copied.", elements.copyMemoryButton);
  });

  elements.copyDigestButton.addEventListener("click", () => {
    void copyText(appState.latestDigestMarkdown, "Latest digest copied.", elements.copyDigestButton);
  });

  elements.copyDigestArtifactButton.addEventListener("click", () => {
    void copyText(
      appState.latestDigestMarkdown,
      "Latest digest copied.",
      elements.copyDigestArtifactButton,
    );
  });

  elements.copyLatestDigestButton.addEventListener("click", () => {
    void copyText(
      appState.latestDigestMarkdown,
      "Latest digest copied.",
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
      "Selected digest copied.",
      elements.copySelectedDigestButton,
    );
  });

  elements.copyBlueprintButton.addEventListener("click", () => {
    void copyText(appState.blueprintMarkdown, "Blueprint copied.", elements.copyBlueprintButton);
  });

  elements.copyStarterPromptButton.addEventListener("click", () => {
    void copyText(
      elements.starterPromptOutput.textContent || "",
      "Starter prompt copied.",
      elements.copyStarterPromptButton,
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

  elements.clearStudioContextButton.addEventListener("click", () => {
    clearStudioContext();
  });

  elements.useLatestDigestContextButton.addEventListener("click", () => {
    useLatestDigestInStudio();
  });

  elements.ideaPresetSelect.addEventListener("change", () => {
    insertPresetText(elements.ideaInput, elements.ideaPresetSelect.value);
    elements.ideaPresetSelect.value = "";
  });

  elements.ideaInput.addEventListener("input", () => {
    updateFlowGuide();
  });

  elements.constraintPresetSelect.addEventListener("change", () => {
    insertPresetText(elements.constraintsInput, elements.constraintPresetSelect.value);
    elements.constraintPresetSelect.value = "";
  });

  elements.refinementPresetSelect.addEventListener("change", () => {
    updateRefinementComposerState();
  });

  elements.refinementNotesInput.addEventListener("input", () => {
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
}

async function boot() {
  initializeAccessibleTabs();
  setSegment("knowledge", "profile");
  setSegment("results", "signals");
  setSegment("blueprint", "summary");
  setSegment("snippet", "overview");
  setSegment("editor", "write");
  setDigestSourceMode("manual");
  setToolsVisible(false);
  setContextVisible(false);
  setFilePathsVisible(false);
  syncPreviewState();
  setBlueprintReady(false);
  updateEditorMetrics();
  setCopyActionState();
  renderLibraryFilters([]);
  resetRefinementComposer();
  renderStudioContext();
  updateDigestImportState();
  updateFlowGuide();
  await refreshState();
  await loadLibrary("");
  updateFlowGuide();
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
        (button) => button.dataset.segmentGroup === currentButton.dataset.segmentGroup,
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
    nextIndex = (currentIndex - 1 + siblingButtons.length) % siblingButtons.length;
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
  }

  for (const view of elements.views) {
    view.classList.toggle("hidden", view.dataset.view !== viewName);
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

function buildFlowSteps() {
  const hasSnippetSource = Boolean(elements.codeInput.value.trim()) || appState.libraryItems.length > 0;
  const hasDigest = Boolean(appState.latestDigestMarkdown.trim()) || appState.libraryItems.length > 0;
  const hasLibraryReview = Boolean(appState.selectedSnippetId || appState.hasReviewedLibrarySelection);
  const hasBlueprint = Boolean(appState.blueprintMarkdown.trim());
  const hasRefinement = Boolean(appState.lastRefinement.trim());
  const hasIdeaDraft = Boolean(elements.ideaInput.value.trim());
  const pendingRefinement = getPendingRefinement();

  return [
    {
      id: "capture",
      icon: "code",
      number: 1,
      title: "Add source",
      description: hasSnippetSource
        ? "A source is ready in the workflow."
        : "Paste code, or import a website, repo, or PDF into Digest.",
      complete: hasSnippetSource,
    },
    {
      id: "digest",
      icon: "sparkles",
      number: 2,
      title: "Run digest",
      description: hasDigest
        ? "Digest signals and guidance are ready to reuse."
        : "Generate directives, patterns, and memory from the source.",
      complete: hasDigest,
    },
    {
      id: "library",
      icon: "folder",
      number: 3,
      title: "Review in Library",
      description: hasLibraryReview
        ? appState.selectedSnippet?.title
          ? `Reviewed: ${trimClientText(appState.selectedSnippet.title, 42)}`
          : "A saved source has been reviewed."
        : "Inspect a saved source before sending it forward.",
      complete: hasLibraryReview,
    },
    {
      id: "studio",
      icon: "compass",
      number: 4,
      title: "Shape in Studio",
      description: hasBlueprint
        ? "Blueprint generated and ready to iterate."
        : hasIdeaDraft
          ? "Your brief is ready. Shape it into a blueprint."
          : "Turn the digest into a product direction in Studio.",
      complete: hasBlueprint,
    },
    {
      id: "refine",
      icon: "sliders",
      number: 5,
      title: "Refine blueprint",
      description: hasRefinement
        ? `Last refinement: ${trimClientText(appState.lastRefinement, 54)}`
        : pendingRefinement
          ? `Pending: ${trimClientText(pendingRefinement, 54)}`
          : "Tighten the blueprint with one focused change request.",
      complete: hasRefinement,
    },
  ];
}

function updateFlowGuide() {
  const steps = buildFlowSteps();
  const completedCount = steps.filter((step) => step.complete).length;
  const currentIndex = steps.findIndex((step) => !step.complete);
  const allComplete = currentIndex === -1;
  const activeIndex = allComplete ? steps.length - 1 : currentIndex;
  const activeStep = steps[activeIndex];
  const progressPercent = allComplete
    ? 100
    : Math.max(8, Math.round((completedCount / steps.length) * 100));
  const action = getFlowPrimaryAction(activeStep?.id || "capture", allComplete);

  appState.currentFlowStepId = action.stepId;
  elements.flowProgressLabel.textContent = allComplete
    ? "Flow complete"
    : `Step ${activeStep.number} of ${steps.length}`;
  elements.flowGuideTitle.textContent = allComplete
    ? "Primary journey complete."
    : `${activeStep.title}.`;
  elements.flowProgressDescription.textContent = allComplete
    ? "You can keep iterating in Studio, reopen Library selections, or export from Workspace when you need artifacts."
    : activeStep.description;
  elements.flowProgressBar.style.width = `${progressPercent}%`;
  elements.flowProgressMeter.setAttribute("aria-valuenow", String(progressPercent));
  setButtonContentWithIcon(elements.flowPrimaryActionButton, action.icon, action.label);
  renderFlowSteps(steps, activeIndex, allComplete);
}

function renderFlowSteps(steps, activeIndex, allComplete) {
  elements.flowSteps.innerHTML = "";

  for (const [index, step] of steps.entries()) {
    const status = step.complete ? "done" : index === activeIndex ? "current" : "pending";
    const button = document.createElement("button");
    button.type = "button";
    button.className = [
      FLOW_STEP_BASE_CLASSES,
      status === "done"
        ? FLOW_STEP_COMPLETE_CLASSES
        : status === "current"
          ? FLOW_STEP_CURRENT_CLASSES
          : FLOW_STEP_PENDING_CLASSES,
    ].join(" ");
    button.setAttribute("aria-current", status === "current" && !allComplete ? "step" : "false");
    button.addEventListener("click", () => {
      void jumpToFlowStep(step.id);
    });

    const topRow = document.createElement("div");
    topRow.className = "flex items-center justify-between gap-3";

    const number = document.createElement("span");
    number.className = "section-label";
    number.textContent = `Step ${step.number}`;

    const badge = document.createElement("span");
    badge.className =
      status === "done"
        ? "inline-flex items-center rounded-full border border-emerald-200 bg-emerald-100 px-2.5 py-1 font-['IBM_Plex_Mono',monospace] text-[11px] font-medium text-emerald-700"
        : status === "current"
          ? "inline-flex items-center rounded-full border border-sky-200 bg-sky-100 px-2.5 py-1 font-['IBM_Plex_Mono',monospace] text-[11px] font-medium text-sky-700"
          : "inline-flex items-center rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 font-['IBM_Plex_Mono',monospace] text-[11px] font-medium text-slate-500";
    badge.textContent = status === "done" ? "Done" : status === "current" ? "Now" : "Later";

    const title = document.createElement("p");
    title.className = "text-sm font-semibold text-slate-900";
    title.textContent = step.title;

    const description = document.createElement("p");
    description.className = "mt-2 text-sm leading-6 text-slate-600";
    description.textContent = step.description;

    const titleRow = document.createElement("div");
    titleRow.className = "mt-3 flex items-start gap-3";

    const iconBadge = document.createElement("span");
    iconBadge.className =
      status === "done"
        ? "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-200 bg-white text-emerald-700"
        : status === "current"
          ? "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-sky-200 bg-white text-sky-700"
          : "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-500";
    iconBadge.appendChild(createIcon(step.icon, "icon"));

    const titleBlock = document.createElement("div");
    titleBlock.className = "min-w-0";
    titleBlock.append(title);

    topRow.append(number, badge);
    titleRow.append(iconBadge, titleBlock);
    button.append(topRow, titleRow, description);
    elements.flowSteps.appendChild(button);
  }
}

function getFlowPrimaryAction(stepId, allComplete = false) {
  if (allComplete) {
    return {
      stepId: "complete",
      icon: "compass",
      label: "Review Studio",
    };
  }

  if (stepId === "digest") {
    return {
      stepId,
      icon: "sparkles",
      label: elements.codeInput.value.trim() ? "Digest source" : "Go to Digest",
    };
  }

  if (stepId === "library") {
    return {
      stepId,
      icon: "folder",
      label: "Open Library review",
    };
  }

  if (stepId === "studio") {
    return {
      stepId,
      icon: "compass",
      label: elements.ideaInput.value.trim() ? "Shape product" : "Open Studio",
    };
  }

  if (stepId === "refine") {
    return {
      stepId,
      icon: "sliders",
      label: getPendingRefinement() ? "Apply refinement" : "Refine in Studio",
    };
  }

  return {
    stepId: "capture",
    icon: "code",
    label: "Go to Digest",
  };
}

async function handleFlowPrimaryAction() {
  switch (appState.currentFlowStepId) {
    case "digest":
      if (!elements.codeInput.value.trim()) {
        await jumpToFlowStep("capture");
        return;
      }

      setActiveView("digest");
      setSegment("editor", "write");
      void submitDigest();
      return;
    case "library":
      await jumpToFlowStep("library");
      return;
    case "studio":
      setActiveView("studio");
      if (!elements.ideaInput.value.trim()) {
        elements.ideaInput.focus();
        return;
      }

      void submitBlueprintRequest();
      return;
    case "refine":
      setActiveView("studio");
      if (!appState.latestBlueprint) {
        elements.generateButton.focus();
        return;
      }

      if (getPendingRefinement()) {
        void applyRefinement();
        return;
      }

      elements.refinementPresetSelect.focus();
      return;
    case "complete":
      setActiveView("studio");
      elements.blueprintTitle.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    case "capture":
    default:
      await jumpToFlowStep("capture");
  }
}

async function jumpToFlowStep(stepId) {
  if (stepId === "library") {
    setActiveView("library");
    const targetId =
      appState.selectedSnippetId ||
      appState.latestSnippet?.id ||
      appState.filteredLibraryItems[0]?.id ||
      appState.libraryItems[0]?.id;

    if (targetId) {
      await loadSnippetDetail(targetId);
    }

    return;
  }

  if (stepId === "studio" || stepId === "refine" || stepId === "complete") {
    setActiveView("studio");

    if (stepId === "refine" && appState.latestBlueprint) {
      elements.refinementPresetSelect.focus();
      return;
    }

    if (appState.latestBlueprint) {
      elements.blueprintTitle.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    elements.ideaInput.focus();
    return;
  }

  setActiveView("digest");

  if (stepId === "digest" && appState.latestDigestMarkdown) {
    focusResults();
    return;
  }

  setSegment("editor", "write");
  elements.codeInput.focus();
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
  elements.toggleToolsButton.textContent = isVisible ? "Hide tools" : "Show tools";
}

function setContextVisible(isVisible) {
  appState.digestContextVisible = isVisible;
  elements.digestContextPanel.classList.toggle("hidden", !isVisible);
  elements.toggleContextButton.setAttribute("aria-expanded", String(isVisible));
  elements.toggleContextButton.textContent = isVisible ? "Hide context" : "Add context";
}

function setDigestSourceMode(mode, options = {}) {
  const { focusField = false } = options;
  appState.digestSourceMode = normalizeDigestSourceMode(mode);
  updateDigestImportState();

  if (!focusField || appState.digestBusy) {
    return;
  }

  if (appState.digestSourceMode === "link") {
    elements.digestLinkInput.focus();
    return;
  }

  if (appState.digestSourceMode === "pdf") {
    elements.digestPdfInput.focus();
    return;
  }

  elements.codeInput.focus();
}

function setFilePathsVisible(isVisible) {
  appState.filePathsVisible = isVisible;
  elements.filePathsPanel.classList.toggle("hidden", !isVisible);
  elements.toggleFilePathsButton.setAttribute("aria-expanded", String(isVisible));
  elements.toggleFilePathsButton.textContent = isVisible ? "Hide file paths" : "Show file paths";
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
  let refreshText = "Open preview or run highlight to inspect the current content.";
  let showRefreshNotice = false;

  if (appState.editorPreviewHtml && appState.previewStale) {
    label = "Preview out of date";
    refreshText = "Preview is out of date. Refresh it to inspect the current content.";
    showRefreshNotice = true;
  } else if (appState.editorPreviewHtml) {
    label = `Preview ready · ${formatLanguageLabel(appState.editorPreviewLanguage)}`;
    className = "chip-accent";
  } else if (elements.codeInput.value.trim()) {
    refreshText = "Preview is not rendered yet. Open preview or run highlight to inspect the current content.";
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
  if (!elements.generateButton.disabled) {
    elements.generateButton.textContent = isReady ? "Update blueprint" : "Shape product";
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
    appState.promptKitMarkdown = payload.promptKitMarkdown;
    appState.memoryMarkdown = payload.memoryMarkdown;
    appState.recentDigests = payload.recentDigests;

    renderProfile(payload.profile);
    renderPromptKit(payload.promptKitMarkdown);
    renderMemory(payload.memoryMarkdown);
    renderRecentDigests(payload.recentDigests);
    renderStudioContext();
    updateExportSummary();
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to load app state.";
    elements.profileSummary.textContent = message;
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
  if (elements.codeInput.value.trim()) {
    return true;
  }

  if (appState.digestSourceMode === "link" && elements.digestLinkInput.value.trim()) {
    await importDigestLink({ autoTriggered: true });
    return Boolean(elements.codeInput.value.trim());
  }

  if (appState.digestSourceMode === "pdf" && elements.digestPdfInput.files?.[0]) {
    await importDigestPdf({ autoTriggered: true });
    return Boolean(elements.codeInput.value.trim());
  }

  return false;
}

async function submitDigest() {
  const hasContent = await ensureDigestContentReady();

  if (!hasContent) {
    setDigestStatus(
      "Paste code, import a website or GitHub repository, or upload a PDF before digesting.",
      "error",
    );

    if (appState.digestSourceMode === "link") {
      elements.importLinkButton.focus();
    } else if (appState.digestSourceMode === "pdf") {
      elements.importPdfButton.focus();
    } else {
      elements.codeInput.focus();
    }

    return;
  }

  const body = buildDigestRequestBody();

  setDigestBusy(true);
  setDigestStatus("Digesting content and updating the learned profile...", "working");

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
    appState.profile = payload.profile;
    appState.promptKitMarkdown = payload.promptKitMarkdown;
    appState.memoryMarkdown = payload.memoryMarkdown;
    renderProfile(payload.profile);
    renderPromptKit(payload.promptKitMarkdown);
    renderMemory(payload.memoryMarkdown);
    await loadLibrary(elements.librarySearchInput.value.trim());
    await refreshState();
    focusResults();

    const message =
      payload.snippet.analysis.mode === "ai"
        ? "Digest complete. AI updated the memory and profile."
        : "Digest complete in heuristic mode. The profile and library were still updated.";
    setDigestStatus(message, "success");
    showToast(message);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Digest failed.";
    setDigestStatus(message, "error");
    showToast(message);
  } finally {
    setDigestBusy(false);
  }
}

async function importDigestLink(options = {}) {
  const { autoTriggered = false } = options;
  const url = elements.digestLinkInput.value.trim();

  if (!url) {
    setDigestStatus("Paste a website or GitHub repository URL first.", "error");
    elements.digestLinkInput.focus();
    return;
  }

  elements.importLinkButton.disabled = true;
  setDigestStatus(
    autoTriggered ? "Importing the linked source before digesting..." : "Importing linked source...",
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

    applyImportedSource(payload, { preserveUrl: true, preservePdf: false });
    setDigestStatus(`Imported ${formatImportedSourceType(payload.assetType)} content.`, "success");

    if (!autoTriggered) {
      showToast("Linked source imported into Digest.");
    }
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to import that link.";
    setDigestStatus(message, "error");
    showToast(message);
  } finally {
    elements.importLinkButton.disabled = false;
    updateDigestImportState();
  }
}

async function importDigestPdf(options = {}) {
  const { autoTriggered = false } = options;
  const file = elements.digestPdfInput.files?.[0];

  if (!file) {
    setDigestStatus("Choose a PDF document first.", "error");
    elements.digestPdfInput.focus();
    return;
  }

  if (file.size > MAX_DIGEST_PDF_BYTES) {
    setDigestStatus("PDF document is too large. Keep uploads under 5 MB.", "error");
    elements.digestPdfInput.value = "";
    updateDigestImportState();
    return;
  }

  elements.importPdfButton.disabled = true;
  setDigestStatus(
    autoTriggered ? "Importing the PDF before digesting..." : "Importing PDF document...",
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

    applyImportedSource(payload, { preserveUrl: false, preservePdf: true });
    setDigestStatus("Imported PDF content.", "success");

    if (!autoTriggered) {
      showToast("PDF imported into Digest.");
    }
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

function applyImportedSource(payload, options = {}) {
  const { preserveUrl = false, preservePdf = false } = options;

  appState.digestImportedSource = {
    title: payload.title || "",
    source: payload.source || "",
    assetType: payload.assetType || "code",
    sourceKind: payload.sourceKind || payload.assetType || "code",
    importSummary: payload.importSummary || "",
  };
  elements.codeInput.value = payload.content || "";
  elements.editorLanguage.value = payload.assetType === "code" ? "auto" : "markdown";

  if (!elements.snippetTitleInput.value.trim()) {
    elements.snippetTitleInput.value = payload.title || "";
  }

  elements.snippetSourceInput.value = payload.source || "";
  setContextVisible(true);
  setDigestSourceMode(getDigestSourceModeForAssetType(payload.assetType));
  appState.editorPreviewHtml = "";
  appState.editorPreviewLanguage = "auto";
  appState.previewLanguageSelection = elements.editorLanguage.value;
  appState.previewSource = "";
  appState.previewStale = false;
  elements.codePreviewContent.textContent = "Run highlight to preview the current content.";
  elements.codePreviewLabel.textContent = "Content preview";
  syncPreviewState();
  updateEditorMetrics();
  updateExportSummary();
  setSegment("editor", "write");
  updateDigestImportState();
  updateFlowGuide();

  if (!preserveUrl) {
    elements.digestLinkInput.value = "";
  }

  if (!preservePdf) {
    elements.digestPdfInput.value = "";
  }
}

function clearImportedSource(options = {}) {
  const { keepContent = false } = options;
  appState.digestImportedSource = null;
  if (!keepContent) {
    elements.digestLinkInput.value = "";
    elements.digestPdfInput.value = "";
  }

  if (!keepContent) {
    elements.codeInput.value = "";
    elements.snippetSourceInput.value = "";
  }

  updateDigestImportState();
  updateEditorMetrics();
  updateExportSummary();
  updateFlowGuide();
}

function updateDigestImportState() {
  const mode = normalizeDigestSourceMode(appState.digestSourceMode);
  const imported = appState.digestImportedSource;
  const selectedPdf = elements.digestPdfInput.files?.[0];
  const queuedLink = elements.digestLinkInput.value.trim();

  elements.digestSourceModeSelect.value = mode;
  elements.digestManualPanel.classList.toggle("hidden", mode !== "manual");
  elements.digestLinkPanel.classList.toggle("hidden", mode !== "link");
  elements.digestPdfPanel.classList.toggle("hidden", mode !== "pdf");
  elements.digestSourceModeSelect.disabled = appState.digestBusy;
  elements.digestLinkInput.disabled = appState.digestBusy || mode !== "link";
  elements.digestPdfInput.disabled = appState.digestBusy || mode !== "pdf";
  elements.importLinkButton.disabled =
    appState.digestBusy || mode !== "link" || !queuedLink;
  elements.importPdfButton.disabled =
    appState.digestBusy || mode !== "pdf" || !selectedPdf;

  if (imported) {
    elements.digestImportChip.textContent = formatImportedSourceType(imported.assetType);
    elements.digestImportChip.className = CHIP_PRIMARY_CLASSES;
    elements.digestImportTitle.textContent = imported.title || imported.source || "Imported source";
    elements.digestImportSummary.textContent =
      imported.importSummary || "Imported content is ready in the digest editor.";
  } else if (mode === "pdf" && selectedPdf) {
    elements.digestImportChip.textContent = "PDF queued";
    elements.digestImportChip.className = CHIP_MUTED_CLASSES;
    elements.digestImportTitle.textContent = selectedPdf.name;
    elements.digestImportSummary.textContent =
      "Import the selected PDF to extract its text into the digest editor.";
  } else if (mode === "link" && queuedLink) {
    elements.digestImportChip.textContent = "Link queued";
    elements.digestImportChip.className = CHIP_MUTED_CLASSES;
    elements.digestImportTitle.textContent = trimClientText(queuedLink, 64);
    elements.digestImportSummary.textContent =
      "Import the link to pull its website or repository content into the digest editor.";
  } else if (mode === "pdf") {
    elements.digestImportChip.textContent = "PDF mode";
    elements.digestImportChip.className = CHIP_MUTED_CLASSES;
    elements.digestImportTitle.textContent = "Choose a PDF document";
    elements.digestImportSummary.textContent =
      "Upload a PDF and import it when you are ready to extract the document text.";
  } else if (mode === "link") {
    elements.digestImportChip.textContent = "Link mode";
    elements.digestImportChip.className = CHIP_MUTED_CLASSES;
    elements.digestImportTitle.textContent = "Paste a website or GitHub repository";
    elements.digestImportSummary.textContent =
      "Digest will pull readable page or repository content into the editor before analysis.";
  } else {
    elements.digestImportChip.textContent = "Manual input";
    elements.digestImportChip.className = CHIP_MUTED_CLASSES;
    elements.digestImportTitle.textContent = "Paste directly into the editor";
    elements.digestImportSummary.textContent =
      "Use manual mode when you already have the content you want to digest.";
  }

  elements.clearImportedSourceButton.disabled =
    appState.digestBusy ||
    !(imported || (mode === "pdf" && selectedPdf) || (mode === "link" && queuedLink));
}

async function submitBlueprintRequest(refinement = "") {
  const isUpdate = Boolean(appState.latestBlueprint);
  const body = {
    idea: elements.ideaInput.value,
    constraints: elements.constraintsInput.value,
    refinement,
    context: buildStudioContextPayload(),
  };

  if (!body.idea.trim()) {
    setStudioStatus("Describe a product idea first.", "error");
    elements.ideaInput.focus();
    return;
  }

  setStudioBusy(true, { refining: Boolean(refinement) });
  setStudioStatus(
    refinement
      ? "Refining the current blueprint with the selected adjustment..."
      : isUpdate
        ? "Updating the blueprint with the latest brief..."
        : "Shaping a product using the learned profile...",
    "working",
  );

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

    if (refinement) {
      appState.lastRefinement = refinement.trim();
      renderRefinementSummary();
      resetRefinementComposer({ preserveSummary: true });
    } else {
      updateRefinementComposerState();
    }

    const message =
      payload.mode === "ai"
        ? refinement
          ? "Blueprint refined with AI using the current context."
          : isUpdate
            ? "Blueprint updated with AI using the latest brief."
            : "Blueprint generated with AI using the learned taste profile."
        : refinement
          ? "Blueprint refined in heuristic mode using the current context."
          : isUpdate
            ? "Blueprint updated in heuristic mode using the latest brief."
            : "Blueprint generated in heuristic mode using the current learned profile.";
    setStudioStatus(message, "success");
    showToast(message);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Blueprint generation failed.";
    setStudioStatus(message, "error");
    showToast(message);
  } finally {
    setStudioBusy(false);
  }
}

async function submitProfileUpdate() {
  const body = {
    manualProfile: {
      name: elements.profileName.value,
      role: elements.profileRole.value,
      headline: elements.profileHeadlineInput.value,
      focus: elements.profileFocus.value,
      preferredStack: elements.profileStack.value,
      designTaste: elements.profileDesignTaste.value,
      buildNotes: elements.profileBuildNotes.value,
    },
  };

  setProfileBusy(true);
  setProfileStatus("Saving profile and regenerating workspace context...", "working");

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
    appState.promptKitMarkdown = payload.promptKitMarkdown;
    appState.memoryMarkdown = payload.memoryMarkdown;
    appState.recentDigests = payload.recentDigests;

    renderProfile(payload.profile);
    renderPromptKit(payload.promptKitMarkdown);
    renderMemory(payload.memoryMarkdown);
    renderRecentDigests(payload.recentDigests);
    renderStudioContext();
    setProfileStatus("Profile saved.", "success");
    showToast("Profile saved.");
    closeModal("profileModal");
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Profile update failed.";
    setProfileStatus(message, "error");
    showToast(message);
  } finally {
    setProfileBusy(false);
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
      payload.unsupported ? "Unavailable" : payload.changed ? "Formatted" : "No change",
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
  elements.codePreviewContent.textContent = "Run highlight to preview the current content.";
  elements.codePreviewLabel.textContent = "Content preview";
  appState.editorPreviewHtml = "";
  appState.editorPreviewLanguage = "auto";
  appState.previewLanguageSelection = "auto";
  appState.previewSource = "";
  appState.previewStale = false;
  syncPreviewState();
  updateEditorMetrics();
  updateExportSummary();
  setSegment("editor", "write");
  setContextVisible(false);
  showUndoClear();
  setDigestStatus("Editor cleared.", "idle");
  updateFlowGuide();
}

function renderAnalysis(payload) {
  const { snippet, memoryMarkdown, digestMarkdown, files } = payload;
  const { analysis } = snippet;
  const nextAction = buildNextAction(analysis);

  appState.latestSnippet = snippet;
  appState.latestDigestMarkdown = digestMarkdown;
  appState.latestMemoryMarkdown = memoryMarkdown;

  elements.resultsSection.classList.remove("hidden");
  elements.languageLabel.textContent = `${analysis.language} · ${Math.round(
    analysis.languageConfidence * 100,
  )}% confidence`;
  elements.summaryText.textContent = analysis.summary;

  renderChipRow(elements.tagList, analysis.tags);
  renderList(
    elements.styleList,
    analysis.styleObservations,
    "No style observations recorded.",
  );
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

  elements.memoryOutput.textContent = memoryMarkdown;
  elements.digestOutput.textContent = digestMarkdown;
  elements.nextActionSummary.textContent = nextAction.summary;
  elements.nextActionDetail.textContent = nextAction.detail;

  elements.filePaths.innerHTML = "";
  for (const [label, filePath] of Object.entries(files)) {
    const chip = document.createElement("span");
    chip.className = CHIP_MUTED_CLASSES;
    chip.textContent = `${label}: ${filePath}`;
    elements.filePaths.appendChild(chip);
  }

  setCopyActionState();
  updateExportSummary();
  updateFlowGuide();
}

function renderProfile(profile) {
  appState.profile = profile;

  elements.metricTotal.textContent = String(profile.totalDigests);
  elements.metricLanguage.textContent = profile.topLanguages[0]?.value || "None yet";
  elements.metricTag.textContent = profile.topTags[0]?.value || "None yet";
  elements.metricDirective.textContent =
    profile.topDirectives[0]?.value || "Collect more signals";

  const manual = profile.manualProfile || {};
  const profileIdentity = formatProfileIdentity(manual);
  const profileHeadline =
    manual.headline ||
    manual.focus ||
    "Use the profile editor to add product, design, and stack context.";
  const manualItems = buildManualProfileItems(manual);

  elements.headerProfileBadge.textContent =
    manual.name || manual.role || profile.topLanguages[0]?.value || "Profile not configured";
  elements.workspaceSummary.textContent =
    manual.focus || manual.designTaste || profile.summary;
  elements.quickProfileSummary.textContent =
    manual.designTaste || manual.buildNotes || profile.summary;
  elements.quickProfileIdentity.textContent = profileIdentity;
  elements.profileIdentity.textContent = profileIdentity;
  elements.profileHeadline.textContent = profileHeadline;
  elements.profileSummary.textContent = profile.summary;

  renderTextList(
    elements.quickProfileMeta,
    manualItems,
    "Add focus, preferred stack, or design taste to make the workspace more personal.",
  );
  renderTextList(
    elements.profileManualList,
    manualItems,
    "No manual profile fields configured yet.",
  );

  renderChipRow(elements.quickLanguageChips, profile.topLanguages.map(formatCountChip));
  renderChipRow(elements.quickTagChips, profile.topTags.map(formatCountChip));
  renderChipRow(elements.topLanguages, profile.topLanguages.map(formatCountChip));
  renderChipRow(elements.topTags, profile.topTags.map(formatCountChip));
  renderList(
    elements.topDirectives,
    profile.topDirectives.map((item) => item.value),
    "No build directives learned yet.",
  );

  hydrateProfileForm(profile.manualProfile);
  renderStudioContext();
  setCopyActionState();
  updateExportSummary();
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

  if (!items.length) {
    const li = document.createElement("li");
    li.className = LIBRARY_EMPTY_CLASSES;
    li.textContent = "No digests saved yet.";
    elements.recentDigests.appendChild(li);
    return;
  }

  for (const item of items) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = RECENT_ITEM_CLASSES;
    button.addEventListener("click", async () => {
      closeModal("workspaceModal");
      setActiveView("library");
      await loadSnippetDetail(item.id);
    });

    const title = document.createElement("span");
    title.className = RECENT_TITLE_CLASSES;
    title.textContent = item.title;

    const meta = document.createElement("span");
    meta.className = RECENT_META_CLASSES;
    meta.textContent = [
      item.sourceKind ? formatImportedSourceType(item.sourceKind) : "",
      item.language,
      formatDateTime(item.createdAt),
    ]
      .filter(Boolean)
      .join(" · ");

    button.append(title, meta);
    li.appendChild(button);
    elements.recentDigests.appendChild(li);
  }
}

async function loadLibrary(query) {
  try {
    appState.libraryQuery = query;
    const url = query ? `/api/snippets?q=${encodeURIComponent(query)}` : "/api/snippets";
    const response = await fetch(url);
    const payload = await response.json();

    if (!response.ok) {
      throw new Error(payload.error || "Failed to load library.");
    }

    appState.libraryItems = payload.items;

    if (!payload.items.some((item) => item.id === appState.selectedSnippetId)) {
      appState.selectedSnippetId = null;
      appState.selectedSnippet = null;
      clearLibraryDetail();
    }

    renderLibraryFilters(payload.items);
    applyLibraryFilters();
    setCopyActionState();
    updateExportSummary();
    updateFlowGuide();
  } catch (error) {
    appState.filteredLibraryItems = [];
    elements.libraryList.innerHTML = "";
    const li = document.createElement("li");
    li.className = LIBRARY_EMPTY_CLASSES;
    li.textContent =
      error instanceof Error ? error.message : "Unable to load library.";
    elements.libraryList.appendChild(li);
    elements.librarySearchCount.textContent = "0 items";
    clearLibraryDetail();
    updateFlowGuide();
  }
}

function renderLibraryList(items) {
  elements.libraryList.innerHTML = "";

  if (!items.length) {
    const li = document.createElement("li");
    li.className = LIBRARY_EMPTY_CLASSES;
    li.textContent =
      appState.libraryItems.length === 0
        ? appState.libraryQuery
          ? "No saved sources match the current search."
          : "No saved sources yet. Run a digest to start building the library."
        : "No saved sources match the current search and filters.";
    elements.libraryList.appendChild(li);
    return;
  }

  for (const item of items) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    const isSelected = item.id === appState.selectedSnippetId;
    button.type = "button";
    button.className = getLibraryLinkClassName(isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
    button.addEventListener("click", async () => {
      await loadSnippetDetail(item.id);
    });

    const title = document.createElement("span");
    title.className = LIBRARY_TITLE_CLASSES;
    title.innerHTML = highlightMatchText(item.title, appState.libraryQuery);

    const meta = document.createElement("span");
    meta.className = LIBRARY_META_CLASSES;
    meta.textContent = [
      item.sourceKind ? formatImportedSourceType(item.sourceKind) : "",
      item.language,
      formatDateTime(item.createdAt),
    ]
      .filter(Boolean)
      .join(" · ");

    const summary = document.createElement("span");
    summary.className = LIBRARY_SUMMARY_CLASSES;
    summary.innerHTML = highlightMatchText(item.summary, appState.libraryQuery);

    const tags = document.createElement("span");
    tags.className = LIBRARY_TAGS_CLASSES;
    tags.innerHTML = highlightMatchText(
      (item.tags || []).slice(0, 4).join(" · ") || "untagged",
      appState.libraryQuery,
    );

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
      throw new Error(payload.error || "Failed to load saved source.");
    }

    appState.selectedSnippetId = id;
    appState.selectedSnippet = payload.snippet;
    appState.hasReviewedLibrarySelection = true;
    renderLibraryList(appState.libraryItems);
    renderSnippetDetail(payload.snippet);
    setSegment("snippet", "overview");
    updateLibrarySelectionControls();
    setCopyActionState();
    updateExportSummary();
    updateFlowGuide();
  } catch (error) {
    appState.selectedSnippetId = null;
    appState.selectedSnippet = null;
    renderLibraryList(appState.libraryItems);
    clearLibraryDetail(
      error instanceof Error ? error.message : "Unable to load saved source detail.",
    );
    updateLibrarySelectionControls();
    setCopyActionState();
    updateFlowGuide();
  }
}

function renderSnippetDetail(snippet) {
  elements.libraryEmptyState.classList.add("hidden");
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
  elements.detailDigest.textContent = snippet.digestMarkdown;
  void renderHighlightedCode(
    elements.detailCode,
    snippet.code,
    snippet.analysis.language,
    "detail",
  );
  updateLibrarySelectionControls();
}

function clearLibraryDetail(
  message = "Select a saved source to inspect its content, digest, and learned signals.",
) {
  appState.selectedSnippetId = null;
  appState.selectedSnippet = null;
  elements.libraryEmptyText.textContent = message;
  elements.libraryEmptyState.classList.remove("hidden");
  elements.libraryDetail.classList.add("hidden");
  elements.detailTitle.textContent = "Select a saved source";
  elements.detailMeta.textContent = "";
  elements.detailCode.textContent = "";
  elements.detailDigest.textContent = "";
  updateLibrarySelectionControls();
  setCopyActionState();
  updateExportSummary();
  updateFlowGuide();
}

function renderBlueprint(blueprint) {
  appState.latestBlueprint = blueprint;
  appState.blueprintMarkdown = buildBlueprintMarkdown(blueprint);
  setBlueprintReady(true);
  elements.blueprintTitle.textContent = `${blueprint.productName} · ${blueprint.mode}`;
  elements.blueprintThesis.textContent = blueprint.thesis;
  renderChipRow(elements.blueprintStack, blueprint.recommendedStack);
  renderList(
    elements.blueprintTaste,
    blueprint.tasteAlignment,
    "No taste alignment notes.",
  );
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
  renderRefinementSummary();
  updateExportSummary();
  setCopyActionState();
  updateFlowGuide();
}

function focusResults() {
  elements.resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
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
              : "Use the digest as a concrete instruction set for the next build.",
    };
  }

  if (pattern) {
    return {
      summary: `Reuse this pattern next: ${pattern}`,
      detail: avoid
        ? `The strongest caution from this digest is: ${avoid}`
        : "Open Studio if you want to turn this pattern into a product direction.",
    };
  }

  return {
    summary: "Use this digest to inform the next Studio brief or saved source comparison.",
    detail: avoid || "More saved sources will sharpen the guidance and next-step recommendations.",
  };
}

function hasDigestDraft() {
  return [
    elements.codeInput.value,
    elements.digestLinkInput.value,
    elements.snippetTitleInput.value,
    elements.snippetSourceInput.value,
    elements.snippetReasonInput.value,
    elements.snippetNotesInput.value,
  ].some((value) => value.trim());
}

function captureDigestDraft() {
  return {
    code: elements.codeInput.value,
    sourceMode: appState.digestSourceMode,
    link: elements.digestLinkInput.value,
    language: elements.editorLanguage.value,
    title: elements.snippetTitleInput.value,
    source: elements.snippetSourceInput.value,
    reason: elements.snippetReasonInput.value,
    notes: elements.snippetNotesInput.value,
    importedSource: appState.digestImportedSource
      ? { ...appState.digestImportedSource }
      : null,
    contextVisible: appState.digestContextVisible,
  };
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
  appState.digestSourceMode = normalizeDigestSourceMode(
    snapshot.sourceMode || getDigestSourceModeForAssetType(snapshot.importedSource?.assetType),
  );
  elements.digestLinkInput.value = snapshot.link || "";
  elements.digestPdfInput.value = "";
  elements.editorLanguage.value = snapshot.language || "auto";
  elements.snippetTitleInput.value = snapshot.title || "";
  elements.snippetSourceInput.value = snapshot.source || "";
  elements.snippetReasonInput.value = snapshot.reason || "";
  elements.snippetNotesInput.value = snapshot.notes || "";
  appState.digestImportedSource = snapshot.importedSource || null;
  setContextVisible(
    Boolean(snapshot.contextVisible) ||
      [snapshot.title, snapshot.source, snapshot.reason, snapshot.notes].some((value) =>
        String(value || "").trim(),
      ),
  );
  appState.editorPreviewHtml = "";
  appState.previewSource = "";
  appState.previewStale = false;
  elements.codePreviewContent.textContent = "Run highlight to preview the current content.";
  elements.codePreviewLabel.textContent = "Content preview";
  syncPreviewState();
  updateDigestImportState();
  updateEditorMetrics();
  updateExportSummary();
  setSegment("editor", "write");
  hideUndoClear();
  setDigestStatus("Draft restored.", "success");
  showToast("Draft restored.");
  updateFlowGuide();
}

function renderLibraryFilters(items) {
  const languages = countValues(items.map((item) => item.language), 6);
  const tags = countValues(items.flatMap((item) => item.tags || []), 8);

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
  const filtered = appState.libraryItems.filter((item) => matchesLibraryFilters(item));
  appState.filteredLibraryItems = filtered;

  if (!filtered.some((item) => item.id === appState.selectedSnippetId)) {
    clearLibraryDetail(buildLibraryEmptyDetailMessage(filtered.length));
  }

  renderLibraryList(filtered);
  elements.librarySearchCount.textContent = buildLibraryResultCountLabel(
    filtered.length,
    appState.libraryItems.length,
  );
  elements.libraryFilterSummary.textContent = buildLibraryFilterSummary(filtered.length);
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
      return "No saved sources match the current search. Try a broader term or clear the search.";
    }
    return filteredCount
      ? "Search first, then narrow by mode, recency, language, or tag."
      : "No saved sources yet. Run a digest to start building the library.";
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
    return "No saved sources yet. Run a digest to start building the library.";
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
  return Object.values(appState.libraryFilters).some((value) => value !== "all");
}

function updateLibraryFilterControls() {
  const hasItems = appState.libraryItems.length > 0;
  const hasLanguageChoices = elements.libraryLanguageSelect.options.length > 1;
  const hasTagChoices = elements.libraryTagSelect.options.length > 1;

  elements.libraryModeSelect.disabled = !hasItems;
  elements.libraryRecencySelect.disabled = !hasItems;
  elements.libraryLanguageSelect.disabled = !hasItems || !hasLanguageChoices;
  elements.libraryTagSelect.disabled = !hasItems || !hasTagChoices;
  elements.clearLibraryFiltersButton.disabled = !hasItems || !hasActiveLibraryFilters();
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
  elements.digestLinkInput.value = "";
  elements.digestPdfInput.value = "";
  elements.editorLanguage.value = normalizeEditorLanguageSelection(
    snippet.assetType && snippet.assetType !== "code"
      ? "markdown"
      : snippet.analysis?.language || "",
  );
  appState.digestSourceMode = getDigestSourceModeForAssetType(
    snippet.assetType && snippet.assetType !== "code" ? snippet.assetType : "manual",
  );
  setContextVisible(
    [snippet.title, snippet.source, snippet.reason, snippet.notes].some((value) =>
      String(value || "").trim(),
    ),
  );
  hideUndoClear();
  appState.editorPreviewHtml = "";
  appState.previewSource = "";
  appState.previewStale = false;
  elements.codePreviewContent.textContent = "Run highlight to preview the current content.";
  elements.codePreviewLabel.textContent = "Content preview";
  syncPreviewState();
  updateDigestImportState();
  updateEditorMetrics(snippet.analysis?.language || "");
  updateExportSummary();
  setActiveView("digest");
  setSegment("editor", "write");
  elements.codeInput.focus();
  setDigestStatus("Library source loaded into Digest.", "success");
  showToast("Saved source loaded into Digest.");
  updateFlowGuide();
}

function useSnippetInStudio(snippet) {
  if (!snippet) {
    showToast("Select a saved source first.");
    return;
  }

  setStudioContext(buildStudioContextFromSnippet(snippet));
  setActiveView("studio");
  elements.ideaInput.focus();
  showToast("Saved source context sent to Studio.");
}

function useLatestDigestInStudio() {
  if (!appState.latestSnippet) {
    showToast("Run a digest first.");
    return;
  }

  setStudioContext(buildStudioContextFromLatestDigest(appState.latestSnippet));
  setActiveView("studio");
  elements.ideaInput.focus();
  showToast("Latest digest sent to Studio.");
}

async function openLatestSnippetInLibrary() {
  if (!appState.latestSnippet?.id) {
    showToast("Run a digest first.");
    return;
  }

  setActiveView("library");
  await loadSnippetDetail(appState.latestSnippet.id);
}

function buildStudioContextFromSnippet(snippet) {
  return {
    type: "snippet",
    title: snippet.title,
    identity: `Library source · ${snippet.title}`,
    summary: snippet.analysis?.summary || "No saved source summary available.",
    directives: (snippet.analysis?.buildDirectives || []).slice(0, 3),
    tags: (snippet.analysis?.tags || []).slice(0, 4),
    language: snippet.analysis?.language || "Unknown",
    digestMarkdown: snippet.digestMarkdown || "",
    code: snippet.code || "",
  };
}

function buildStudioContextFromLatestDigest(snippet) {
  return {
    ...buildStudioContextFromSnippet(snippet),
    type: "latest-digest",
    identity: `Latest digest · ${snippet.title}`,
  };
}

function setStudioContext(context) {
  appState.studioContext = context;
  renderStudioContext();
}

function clearStudioContext() {
  appState.studioContext = null;
  renderStudioContext();
  showToast("Studio context cleared.");
}

function renderStudioContext() {
  const manual = appState.profile?.manualProfile || {};
  const profileIdentity = formatProfileIdentity(manual);
  const preferredStack = manual.preferredStack
    ? `Preferred stack: ${manual.preferredStack}`
    : "";
  const topDirectives = (appState.profile?.topDirectives || [])
    .slice(0, 2)
    .map((item) => item.value);

  elements.studioContextSignals.innerHTML = "";

  if (appState.studioContext) {
    elements.studioContextIdentity.textContent = appState.studioContext.identity;
    elements.studioContextSummary.textContent = `${appState.studioContext.summary} Studio will combine this with ${profileIdentity === "Profile not configured" ? "the learned workspace profile" : profileIdentity}.`;
    elements.clearStudioContextButton.classList.remove("hidden");
    elements.useLatestDigestContextButton.classList.add("hidden");
    renderChipRow(
      elements.studioContextSignals,
      [
        appState.studioContext.language,
        ...appState.studioContext.tags,
        ...appState.studioContext.directives.slice(0, 2),
      ].filter(Boolean),
    );
    return;
  }

  elements.studioContextIdentity.textContent =
    profileIdentity === "Profile not configured"
      ? "No library or digest context selected yet."
      : `Profile context only · ${profileIdentity}`;
  elements.studioContextSummary.textContent = preferredStack
    ? `${preferredStack} Studio will use your profile, prompt kit, and learned memory until you send a digest or library selection here.`
    : "Studio will use your profile, prompt kit, and learned memory until you send a digest or library selection here.";
  elements.clearStudioContextButton.classList.add("hidden");
  elements.useLatestDigestContextButton.classList.toggle(
    "hidden",
    !appState.latestSnippet,
  );
  renderChipRow(
    elements.studioContextSignals,
    topDirectives.length ? topDirectives : ["Profile and learned memory"],
  );
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
    ...(items.length ? items.map((item) => `- ${item}`) : ["- No items recorded."]),
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

async function applyRefinement() {
  const refinement = getPendingRefinement();

  if (!refinement) {
    setStudioStatus("Choose a refinement goal or describe the change you want.", "error");

    if (elements.refinementPresetSelect.value) {
      elements.refinementNotesInput.focus();
    } else {
      elements.refinementPresetSelect.focus();
    }

    return;
  }

  await submitBlueprintRequest(refinement);
}

function resetRefinementComposer(options = {}) {
  const { preserveSummary = false } = options;
  elements.refinementPresetSelect.value = "";
  elements.refinementNotesInput.value = "";

  if (!preserveSummary) {
    appState.lastRefinement = "";
    renderRefinementSummary();
  }

  updateRefinementComposerState();
}

function renderRefinementSummary() {
  elements.refinementSummary.textContent = appState.lastRefinement
    ? `Last applied: ${trimClientText(appState.lastRefinement, 120)}`
    : "No refinement applied yet.";
}

function getPendingRefinement() {
  const preset = elements.refinementPresetSelect.value.trim();
  const notes = elements.refinementNotesInput.value.trim();
  return [preset, notes].filter(Boolean).join(" ");
}

function getRefinementPlaceholder(preset) {
  const placeholderMap = {
    "Make the plan more technical and implementation-oriented.":
      "Ask for stricter architecture, clearer interfaces, or a more concrete implementation order.",
    "Make the product feel more minimal and focused.":
      "Call out what should be removed, compressed, or deferred to keep the product tighter.",
    "Shrink the first release into a smaller MVP.":
      "Specify which features should move out of v1 and what the smallest useful release should include.",
    "Strengthen the UX and interaction guidance.":
      "Ask for clearer user flows, cleaner information hierarchy, or stronger interaction guidance.",
  };

  return (
    placeholderMap[preset] ||
    "What should change in the next version?"
  );
}

function updateRefinementComposerState() {
  const hasBlueprint = Boolean(appState.latestBlueprint);
  const isBusy = appState.studioBusy;
  const preset = elements.refinementPresetSelect.value.trim();
  const notes = elements.refinementNotesInput.value.trim();
  const pending = getPendingRefinement();

  elements.refinementPresetSelect.disabled = !hasBlueprint || isBusy;
  elements.refinementNotesInput.disabled = !hasBlueprint || isBusy;
  elements.refinementNotesInput.placeholder = getRefinementPlaceholder(preset);
  elements.applyRefinementButton.disabled = !hasBlueprint || isBusy || !pending;
  elements.clearRefinementButton.disabled = !hasBlueprint || isBusy || (!preset && !notes);
  elements.refinementHint.textContent = pending
    ? `Next update: ${trimClientText(pending, 140)}`
    : hasBlueprint
      ? "Choose a goal or describe a specific change. Press Cmd/Ctrl + Enter to apply it."
      : "Generate a blueprint first, then refine it with a preset or a specific change request.";
  updateFlowGuide();
}

function renderChipRow(container, items) {
  container.innerHTML = "";

  if (!items.length) {
    const chip = document.createElement("span");
    chip.className = CHIP_MUTED_CLASSES;
    chip.textContent = "No data yet";
    container.appendChild(chip);
    return;
  }

  for (const item of items) {
    const chip = document.createElement("span");
    chip.className = CHIP_PRIMARY_CLASSES;
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

function renderTextList(container, items, fallback) {
  container.innerHTML = "";

  const safeItems = items.length ? items : [fallback];

  for (const item of safeItems) {
    const li = document.createElement("li");
    li.textContent = item;
    container.appendChild(li);
  }
}

function hydrateProfileForm(manualProfile = {}) {
  elements.profileName.value = manualProfile.name || "";
  elements.profileRole.value = manualProfile.role || "";
  elements.profileHeadlineInput.value = manualProfile.headline || "";
  elements.profileFocus.value = manualProfile.focus || "";
  elements.profileStack.value = manualProfile.preferredStack || "";
  elements.profileDesignTaste.value = manualProfile.designTaste || "";
  elements.profileBuildNotes.value = manualProfile.buildNotes || "";
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
  const displayLanguage = detectedLanguage || (selectedLanguage === "auto" ? "auto" : selectedLanguage);

  elements.editorLineCount.textContent = `${lineCount} line${lineCount === 1 ? "" : "s"}`;
  elements.editorCharCount.textContent = `${charCount} char${charCount === 1 ? "" : "s"}`;
  elements.detectedLanguageChip.textContent = formatLanguageLabel(displayLanguage);
}

function setCopyActionState() {
  const hasLatestDigest = Boolean(appState.latestDigestMarkdown.trim());
  const hasSelectedSnippet = Boolean(appState.selectedSnippet?.code?.trim());
  const hasSelectedDigest = Boolean(appState.selectedSnippet?.digestMarkdown?.trim());
  const hasBlueprint = Boolean(appState.blueprintMarkdown.trim());
  const hasStarterPrompt = Boolean(elements.starterPromptOutput.textContent?.trim());
  const hasFreshPreview = Boolean(appState.editorPreviewHtml.trim()) && !appState.previewStale;
  const hasLatestSnippet = Boolean(appState.latestSnippet?.id);

  elements.copyDigestButton.disabled = !hasLatestDigest;
  elements.copyDigestArtifactButton.disabled = !hasLatestDigest;
  elements.copyLatestDigestButton.disabled = !hasLatestDigest;
  elements.copySelectedCodeButton.disabled = !hasSelectedSnippet;
  elements.copySelectedDigestButton.disabled = !hasSelectedDigest;
  elements.copyBlueprintButton.disabled = !hasBlueprint;
  elements.copyPreviewButton.disabled = !hasFreshPreview;
  elements.copyStarterPromptButton.disabled = !hasStarterPrompt;
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
  if (appState.latestDigestMarkdown.trim()) available.push("latest digest");
  if (appState.selectedSnippet?.code?.trim()) available.push("selected library content");
  if (appState.promptKitMarkdown.trim()) available.push("prompt kit");
  if (appState.memoryMarkdown.trim()) available.push("memory");
  if (appState.profile) available.push("profile JSON");
  if (appState.blueprintMarkdown.trim()) available.push("blueprint");
  if (elements.starterPromptOutput.textContent?.trim()) available.push("starter prompt");

  elements.exportSummary.textContent = available.length
    ? `Available now: ${available.join(", ")}.`
    : "Nothing exportable yet. Add a source, generate a digest, or save a profile first.";
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
  showToast(`${payload.label} exported.`);
}

function getExportPayload(type) {
  const selectedTitle = slugifyClient(appState.selectedSnippet?.title || "selected-snippet");
  const latestTitle = slugifyClient(appState.latestSnippet?.title || "latest-digest");
  const currentSnippetExtension = extensionForLanguage(
    elements.editorLanguage.value === "auto" ? "" : elements.editorLanguage.value,
    "txt",
  );
  const selectedSnippetExtension = extensionForLanguage(
    appState.selectedSnippet?.analysis?.language || "",
    "txt",
  );

  const exportMap = {
    "current-snippet": {
      label: "Current draft",
      filename: `digest-draft.${currentSnippetExtension}`,
      content: elements.codeInput.value,
      mime: "text/plain;charset=utf-8",
    },
    "latest-digest": {
      label: "Latest digest",
      filename: `${latestTitle}.md`,
      content: appState.latestDigestMarkdown,
      mime: "text/markdown;charset=utf-8",
    },
    "selected-snippet-code": {
      label: "Selected library content",
      filename: `${selectedTitle}.${selectedSnippetExtension}`,
      content: appState.selectedSnippet?.code || "",
      mime: "text/plain;charset=utf-8",
    },
    "selected-snippet-digest": {
      label: "Selected library digest",
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

  if (appState.activeModalId && appState.activeModalId !== modalId) {
    closeModal(appState.activeModalId, { restoreFocus: false });
  }

  modal.classList.remove("hidden");
  modal.classList.add(modalId === "workspaceModal" ? "block" : "flex");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("overflow-hidden");
  appState.activeModalId = modalId;
  appState.activeModalTrigger = trigger;

  const initialFocus = getInitialFocusTarget(modalId, modal);
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

function getInitialFocusTarget(modalId, modal) {
  const explicitTargets = {
    profileModal: elements.profileName,
    workspaceModal: modal.querySelector("[data-segment-group='knowledge'][data-segment-target='profile']"),
    promptModal: elements.copyPromptModalButton,
    helpModal: modal.querySelector("[data-modal-close]"),
  };

  return explicitTargets[modalId] || modal.querySelector(FOCUSABLE_SELECTOR);
}

function replaceStateClasses(element, isActive, activeClasses, inactiveClasses) {
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
  elements.digestButton.textContent = isBusy ? "Digesting..." : "Digest source";
  updateDigestImportState();
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
    elements.applyRefinementButton.textContent = refining ? "Applying..." : "Apply refinement";
  } else {
    elements.applyRefinementButton.textContent = "Apply refinement";
  }
  updateRefinementComposerState();
}

function setProfileBusy(isBusy) {
  elements.saveProfileButton.disabled = isBusy;
  elements.saveProfileButton.textContent = isBusy ? "Saving..." : "Save profile";
}

function setDigestStatus(message, tone) {
  elements.statusText.textContent = message;
  setBannerTone(elements.statusBanner, tone);
}

function setStudioStatus(message, tone) {
  elements.studioStatus.textContent = message;
  setBannerTone(elements.studioStatusBanner, tone);
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

function normalizeDigestSourceMode(value) {
  const safeValue = String(value || "").trim().toLowerCase();

  if (safeValue === "link" || safeValue === "pdf" || safeValue === "manual") {
    return safeValue;
  }

  if (safeValue === "website" || safeValue === "github-repo") {
    return "link";
  }

  if (safeValue === "code" || safeValue === "snippet") {
    return "manual";
  }

  return "manual";
}

function getDigestSourceModeForAssetType(value) {
  return normalizeDigestSourceMode(value);
}

async function readFileAsBase64(file) {
  const dataUrl = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Unable to read the selected file."));
    reader.readAsDataURL(file);
  });

  return dataUrl.replace(/^data:application\/pdf;base64,/i, "");
}

function formatProfileIdentity(profile) {
  const values = [profile.name, profile.role].filter(Boolean);
  return values.length ? values.join(" · ") : "Profile not configured";
}

function flashButtonLabel(button, temporaryLabel, duration = 1400) {
  if (!button) {
    return;
  }

  const originalLabel = button.dataset.originalLabel || button.textContent || "";
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
    .sort((left, right) => right.count - left.count || left.value.localeCompare(right.value))
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
  return safeValue.length > limit ? `${safeValue.slice(0, limit).trimEnd()}\n…` : safeValue;
}

function slugifyClient(value) {
  return (value || "export")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64) || "export";
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
