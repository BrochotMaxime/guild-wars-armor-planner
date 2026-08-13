function ArmorRequirements({ armor, materials, onMaterialClick, onPlanArmor }) {
  function getMaterialById(materialId) {
    return materials.find((material) => material.id === materialId);
  }

  const commonMaterials = armor.cost.materials.filter(
    ({ materialId }) => getMaterialById(materialId)?.type === "common",
  );

  const rareMaterials = armor.cost.materials.filter(
    ({ materialId }) => getMaterialById(materialId)?.type === "rare",
  );

  function renderMaterial({ materialId, quantity }) {
    const material = getMaterialById(materialId);

    return (
      <button
        key={materialId}
        type="button"
        className="material-chip"
        onClick={() => onMaterialClick(material)}
      >
        <span>{material.name}</span>
        <strong>× {quantity}</strong>
      </button>
    );
  }

  return (
    <section className="armor-requirements">
      <h3>Requirements</h3>

      <p className="armor-requirements__gold">
        Gold: <strong>{armor.cost.gold}</strong>
      </p>

      <div className="armor-requirements__group">
        <h4>Common materials</h4>
        <div className="material-list">
          {commonMaterials.map(renderMaterial)}
        </div>
      </div>

      <div className="armor-requirements__group">
        <h4>Rare materials</h4>
        <div className="material-list">{rareMaterials.map(renderMaterial)}</div>
      </div>

      <button type="button" className="plan-armor-button" onClick={onPlanArmor}>
        Plan this armor
      </button>
    </section>
  );
}

export default ArmorRequirements;
