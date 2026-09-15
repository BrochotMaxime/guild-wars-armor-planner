import ArmorCard from "../ArmorCard/ArmorCard";

function ArmorList({ armors, selectedArmor, onSelectArmor }) {
  const standardArmors = armors.filter((armor) => !armor.prestige);
  const prestigeArmors = armors.filter((armor) => armor.prestige);

  function renderArmorCard(armor) {
    return (
      <ArmorCard
        key={armor.id}
        armor={armor}
        isSelected={selectedArmor?.id === armor.id}
        onSelectArmor={onSelectArmor}
      />
    );
  }

  return (
    <div
      className={`armor-list ${
        selectedArmor ? "armor-list--has-selection" : ""
      }`}
    >
      {armors.length > 0 ? (
        <div className="armor-list__groups">
          {standardArmors.length > 0 && (
            <div className="armor-list__grid">
              {standardArmors.map(renderArmorCard)}
            </div>
          )}

          {prestigeArmors.length > 0 && (
            <div className="armor-list__grid">
              {prestigeArmors.map(renderArmorCard)}
            </div>
          )}
        </div>
      ) : (
        <p>No armor is available for this selection.</p>
      )}
    </div>
  );
}

export default ArmorList;
