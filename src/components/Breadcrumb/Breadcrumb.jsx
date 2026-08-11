function Breadcrumb({
  selectedProfession,
  selectedCampaign,
  selectedArmor,
  onProfessionClick,
  onCampaignClick,
}) {
  if (!selectedProfession) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb">
      <button type="button" onClick={onProfessionClick}>
        {selectedProfession.name}
      </button>

      {selectedCampaign && (
        <>
          <span> &gt; </span>

          <button type="button" onClick={onCampaignClick}>
            {selectedCampaign.name}
          </button>
        </>
      )}

      {selectedArmor && (
        <>
          <span> &gt; </span>
          <span>{selectedArmor.name}</span>
        </>
      )}
    </nav>
  );
}

export default Breadcrumb;
