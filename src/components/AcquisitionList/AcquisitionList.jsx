function AcquisitionList({ acquisitionNeeds, materials, acquisitionMethods }) {
  function getMaterialById(materialId) {
    return materials.find((material) => material.id === materialId);
  }

  function getAcquisitionMethodById(methodId) {
    return acquisitionMethods.find((method) => method.id === methodId);
  }

  if (acquisitionNeeds.length === 0) {
    return null;
  }

  return (
    <section>
      <h3>Acquisition</h3>

      {acquisitionNeeds.map(({ materialId, missing }) => {
        const material = getMaterialById(materialId);

        return (
          <article key={materialId}>
            <h4>
              {material.name}: {missing} missing
            </h4>

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

            <a
              href={material.wikiUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Guild Wars Wiki
            </a>
          </article>
        );
      })}
    </section>
  );
}

export default AcquisitionList;
