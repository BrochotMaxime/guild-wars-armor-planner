import ArmorCard from "../ArmorCard/ArmorCard";

function ArmorList({ armors, onSelectArmor }) {
  return (
    <section>
      <h2>Choose an armor</h2>

      <div>
        {armors.map((armor) => (
          <ArmorCard
            key={armor.id}
            armor={armor}
            onSelectArmor={onSelectArmor}
          />
        ))}
      </div>
    </section>
  );
}

export default ArmorList;
