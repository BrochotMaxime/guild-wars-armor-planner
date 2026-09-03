function MaterialDetails({ material, acquisitionMethods, onClose }) {
  if (!material) {
    return null;
  }

  function getAcquisitionMethodById(methodId) {
    return acquisitionMethods.find((method) => method.id === methodId);
  }

  return (
    <section className="material-details">
      <header className="material-details__header">
        <div>
          <h3>{material.name}</h3>

          <p className="material-details__type">
            {material.type === "rare" ? "Rare material" : "Common material"}
          </p>
        </div>

        <button
          type="button"
          className="material-details__close"
          onClick={onClose}
        >
          Close
        </button>
      </header>

      <div className="material-details__acquisition">
        <h4>Acquisition</h4>

        <ul>
          {material.acquisitionMethodIds.map((methodId) => {
            const method = getAcquisitionMethodById(methodId);

            if (!method) {
              return null;
            }

            return (
              <li key={methodId}>
                {method.name}

                {!method.availableInMelandrusAccord && (
                  <span className="material-details__warning">
                    Not available in Melandru&apos;s Accord
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <a
        className="material-details__wiki-link"
        href={material.wikiUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        View on Guild Wars Wiki
      </a>
    </section>
  );
}

export default MaterialDetails;
