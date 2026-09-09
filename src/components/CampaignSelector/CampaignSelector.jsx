function CampaignSelector({ campaigns, selectedCampaign, onSelectCampaign }) {
  return (
    <div
      className={`selector-grid selector-grid--campaigns ${
        selectedCampaign ? "selector-grid--has-selection" : ""
      }`}
    >
      {campaigns.map((campaign) => {
        const isSelected = selectedCampaign?.id === campaign.id;

        return (
          <button
            key={campaign.id}
            type="button"
            className={`campaign-card ${
              isSelected ? "campaign-card--selected" : ""
            }`}
            aria-pressed={isSelected}
            onClick={() => onSelectCampaign(campaign)}
          >
            <img
              className="campaign-card__image"
              src={campaign.image}
              alt=""
              loading="lazy"
              decoding="async"
            />

            <span className="campaign-card__content">
              <span className="campaign-card__name">{campaign.name}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default CampaignSelector;
