function ActualMaterialNeeds({ actualMaterialNeeds, materials }) {
  function getMaterialById(materialId) {
    return materials.find((material) => material.id === materialId);
  }

  if (actualMaterialNeeds.length === 0) {
    return null;
  }

  return (
    <section>
      <h3>Actual material needs</h3>

      <table>
        <thead>
          <tr>
            <th>Material</th>
            <th>Total required</th>
            <th>Owned</th>
            <th>Missing</th>
          </tr>
        </thead>

        <tbody>
          {actualMaterialNeeds.map(
            ({ materialId, required, owned, missing }) => {
              const material = getMaterialById(materialId);

              return (
                <tr key={materialId}>
                  <td>{material.name}</td>
                  <td>{required}</td>
                  <td>{owned}</td>
                  <td>{missing}</td>
                </tr>
              );
            },
          )}
        </tbody>
      </table>
    </section>
  );
}

export default ActualMaterialNeeds;
