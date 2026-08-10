function MaterialTable({
  requirements,
  materials,
  inventory,
  onInventoryChange,
}) {
  function getMaterialById(materialId) {
    return materials.find((material) => material.id === materialId);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Material</th>
          <th>Required</th>
          <th>Owned</th>
        </tr>
      </thead>

      <tbody>
        {requirements.map(({ materialId, quantity }) => {
          const material = getMaterialById(materialId);

          return (
            <tr key={materialId}>
              <td>{material.name}</td>
              <td>{quantity}</td>
              <td>
                <input
                  type="number"
                  min="0"
                  step="1"
                  value={inventory[materialId] ?? ""}
                  onChange={(event) =>
                    onInventoryChange(materialId, event.target.value)
                  }
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default MaterialTable;
