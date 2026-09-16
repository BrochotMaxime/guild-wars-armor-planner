function WorkflowPanel({
  id,
  title,
  summary,
  isExpanded,
  isAvailable = true,
  onToggle,
  children,
}) {
  const contentId = `${id}-content`;

  return (
    <section
      id={id}
      className={`workflow-panel ${
        isExpanded ? "workflow-panel--expanded" : "workflow-panel--collapsed"
      } ${!isAvailable ? "workflow-panel--unavailable" : ""}`}
    >
      <h2 className="workflow-panel__heading">
        <button
          type="button"
          className="workflow-panel__trigger"
          aria-expanded={isExpanded}
          aria-controls={contentId}
          disabled={!isAvailable}
          onClick={onToggle}
        >
          <span className="workflow-panel__title">{title}</span>

          <span className="workflow-panel__summary">
            {summary || "Not selected"}
          </span>

          <span className="workflow-panel__chevron" aria-hidden="true">
            ▼
          </span>
        </button>
      </h2>

      <div
        id={contentId}
        className="workflow-panel__content"
        aria-hidden={!isExpanded}
        inert={!isExpanded}
      >
        <div className="workflow-panel__content-inner">{children}</div>
      </div>
    </section>
  );
}

export default WorkflowPanel;
