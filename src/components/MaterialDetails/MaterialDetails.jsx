function MaterialDetails({ material, acquisitionMethods, onClose }) {
  if (!material) {
    return null;
  }

  function getAcquisitionMethodById(methodId) {
    return acquisitionMethods.find((method) => method.id === methodId);
  }

  return (
    <section className="material-details">
      <div className="material-details__header">
        <div>
          <h4>{material.name}</h4>
          <p>
            {material.type === "rare" ? "Rare material" : "Common material"}
          </p>
        </div>

        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>

      <div>
        <h5>Acquisition</h5>

        <ul>
          {material.acquisitionMethodIds.map((methodId) => {
            const method = getAcquisitionMethodById(methodId);

            return (
              <li key={methodId}>
                {method.name}

                {!method.availableInMelandrusAccord && (
                  <span> — Not available in Melandru&apos;s Accord</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <a href={material.wikiUrl} target="_blank" rel="noopener noreferrer">
        View on Guild Wars Wiki
      </a>
    </section>
  );
}

export default MaterialDetails;
