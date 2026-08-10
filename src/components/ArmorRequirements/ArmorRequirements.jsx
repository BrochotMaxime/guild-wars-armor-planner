function ArmorRequirements({ armor, materials }) {
  function getMaterialById(materialId) {
    return materials.find((material) => material.id === materialId);
  }

  const commonMaterials = armor.cost.materials.filter(
    ({ materialId }) => getMaterialById(materialId)?.type === "common",
  );

  const rareMaterials = armor.cost.materials.filter(
    ({ materialId }) => getMaterialById(materialId)?.type === "rare",
  );

  return (
    <section>
      <h3>Requirements</h3>

      <p>Gold: {armor.cost.gold}</p>

      <h4>Common materials</h4>
      <ul>
        {commonMaterials.map(({ materialId, quantity }) => {
          const material = getMaterialById(materialId);

          return (
            <li key={materialId}>
              {material.name}: {quantity}
            </li>
          );
        })}
      </ul>

      <h4>Rare materials</h4>
      <ul>
        {rareMaterials.map(({ materialId, quantity }) => {
          const material = getMaterialById(materialId);

          return (
            <li key={materialId}>
              {material.name}: {quantity}
            </li>
          );
        })}
      </ul>

      <button type="button">Check my materials</button>
    </section>
  );
}

export default ArmorRequirements;
