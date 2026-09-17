function ArmorPlannerRow({ row, onInventoryChange, onCraftingToggle }) {
  const {
    material,
    required,
    missing,
    depth,
    armorQuantity,
    craftQuantity,
    canCraft,
    isCrafting,
    inventoryValue,
  } = row;

  function renderNeed() {
    if (armorQuantity > 0 && craftQuantity > 0) {
      return (
        <>
          {armorQuantity} + <br className="armor-planner__need-break" />
          {craftQuantity} = <br className="armor-planner__need-break" />
          {required}
        </>
      );
    }

    if (craftQuantity > 0) {
      return `+${craftQuantity}`;
    }

    return armorQuantity;
  }

  return (
    <tr>
      <td>
        <div
          className="armor-planner__material"
          style={{ "--material-depth": depth }}
        >
          <span>{material.name}</span>

          {canCraft && missing > 0 && (
            <label className="armor-planner__craft-option">
              <input
                type="checkbox"
                checked={isCrafting}
                onChange={() => onCraftingToggle(material.id)}
              />
              Craft missing
            </label>
          )}
        </div>
      </td>

      <td>{renderNeed()}</td>

      <td>
        <input
          type="number"
          min="0"
          step="1"
          value={inventoryValue}
          aria-label={`Owned ${material.name}`}
          onChange={(event) =>
            onInventoryChange(material.id, event.target.value)
          }
        />
      </td>

      <td>
        {isCrafting && missing > 0 ? (
          <span className="armor-planner__crafted-status">Via craft</span>
        ) : (
          missing
        )}
      </td>
    </tr>
  );
}

export default ArmorPlannerRow;
