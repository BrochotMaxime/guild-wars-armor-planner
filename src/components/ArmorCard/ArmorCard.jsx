function ArmorCard({ armor, onSelectArmor }) {
  return (
    <button
      type="button"
      className="armor-card"
      onClick={() => onSelectArmor(armor)}
    >
      <span className="armor-card__previews" aria-hidden="true">
        <img src={armor.images.male} alt="" loading="lazy" decoding="async" />

        <img src={armor.images.female} alt="" loading="lazy" decoding="async" />
      </span>

      <span className="armor-card__content">
        <span className="armor-card__name">{armor.name}</span>

        {armor.prestige && (
          <span className="armor-card__prestige">Prestige</span>
        )}
      </span>
    </button>
  );
}

export default ArmorCard;
