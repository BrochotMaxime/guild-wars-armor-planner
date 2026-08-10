function CampaignSelector({ campaigns, selectedCampaign, onSelectCampaign }) {
  return (
    <section>
      <h2>Choose a campaign</h2>

      <div>
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
