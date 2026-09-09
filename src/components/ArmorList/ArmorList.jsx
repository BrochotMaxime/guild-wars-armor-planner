import ArmorCard from "../ArmorCard/ArmorCard";

function ArmorList({ armors, selectedArmor, onSelectArmor }) {
  return (
    <div
      className={`armor-list ${
        selectedArmor ? "armor-list--has-selection" : ""
      }`}
    >
      {armors.length > 0 ? (
        <div className="armor-list__grid">
          {armors.map((armor) => (
            <ArmorCard
              key={armor.id}
              armor={armor}
              isSelected={selectedArmor?.id === armor.id}
              onSelectArmor={onSelectArmor}
            />
          ))}
        </div>
      ) : (
        <p>No armor is available for this selection.</p>
      )}
    </div>
  );
}

export default ArmorList;
