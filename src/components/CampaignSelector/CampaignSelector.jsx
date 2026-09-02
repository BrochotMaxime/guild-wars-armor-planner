function CampaignSelector({ campaigns, selectedCampaign, onSelectCampaign }) {
  return (
    <section className="selector-section selector-section--campaigns">
      <h2>Choose a campaign</h2>

      <div className="selector-grid selector-grid--campaigns">
        {campaigns.map((campaign) => {
          const isSelected = selectedCampaign?.id === campaign.id;

          return (
            <button
              key={campaign.id}
              type="button"
              className={`campaign-card${isSelected ? " selected" : ""}`}
              aria-pressed={isSelected}
              onClick={() => onSelectCampaign(campaign)}
            >
              <img
                className="campaign-card__image"
                src={campaign.image}
                alt=""
              />

              <span className="campaign-card__content">
                <span className="campaign-card__name">{campaign.name}</span>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default CampaignSelector;
