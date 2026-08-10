function ArmorCard({ armor, onSelectArmor }) {
  return (
    <button type="button" onClick={() => onSelectArmor(armor)}>
      {armor.name}
    </button>
  );
}

export default ArmorCard;
