function CampaignSelector({ campaigns, selectedCampaign, onSelectCampaign }) {
  return (
    <section className="selector-section">
      <h2>Choose a campaign</h2>

      <div className="selector-grid selector-grid--campaigns">
        {campaigns.map((campaign) => {
          const isSelected = selectedCampaign?.id === campaign.id;

          return (
            <button
              key={campaign.id}
              type="button"
              className={isSelected ? "selected" : ""}
              onClick={() => onSelectCampaign(campaign)}
            >
              {campaign.name}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default CampaignSelector;
