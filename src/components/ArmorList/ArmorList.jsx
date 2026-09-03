import ArmorCard from "../ArmorCard/ArmorCard";

function ArmorList({ armors, onSelectArmor }) {
  return (
    <section className="armor-list">
      <h2>Choose an armor</h2>

      {armors.length > 0 ? (
        <div className="armor-list__grid">
          {armors.map((armor) => (
            <ArmorCard
              key={armor.id}
              armor={armor}
              onSelectArmor={onSelectArmor}
            />
          ))}
        </div>
      ) : (
        <p>No armor is available for this selection.</p>
      )}
    </section>
  );
}

export default ArmorList;
