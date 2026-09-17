function HomeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M3 11.5 12 4l9 7.5v8a.5.5 0 0 1-.5.5H15v-6H9v6H3.5a.5.5 0 0 1-.5-.5v-8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Breadcrumb({
  selectedProfession,
  selectedCampaign,
  selectedArmor,
  onHomeClick,
  onProfessionClick,
  onCampaignClick,
  onArmorClick,
}) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="breadcrumb__list">
        <li className="breadcrumb__item">
          <button
            type="button"
            className="breadcrumb__control breadcrumb__home"
            aria-label="Return to home"
            aria-current={!selectedProfession ? "page" : undefined}
            title="Home"
            onClick={onHomeClick}
          >
            <HomeIcon />
          </button>
        </li>

        {selectedProfession && (
          <li
            className={`breadcrumb__item breadcrumb__item--profession breadcrumb__item--${selectedProfession.id}`}
          >
            <button
              type="button"
              className="breadcrumb__control"
              aria-current={!selectedCampaign ? "page" : undefined}
              onClick={onProfessionClick}
            >
              <img
                className="breadcrumb__profession-icon"
                src={selectedProfession.icon}
                alt=""
              />

              <span>{selectedProfession.name}</span>
            </button>
          </li>
        )}

        {selectedCampaign && (
          <li className="breadcrumb__item">
            <button
              type="button"
              className="breadcrumb__control"
              aria-current={!selectedArmor ? "page" : undefined}
              onClick={onCampaignClick}
            >
              <span>{selectedCampaign.name}</span>
            </button>
          </li>
        )}

        {selectedArmor && (
          <li className="breadcrumb__item">
            <button
              type="button"
              className="breadcrumb__control"
              aria-current="page"
              onClick={onArmorClick}
            >
              <span>{selectedArmor.name}</span>
            </button>
          </li>
        )}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
