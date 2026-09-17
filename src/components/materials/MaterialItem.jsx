function MaterialItem({ material, quantity, onDetailsClick }) {
  return (
    <div className="material-item">
      <img
        className="material-item__icon"
        src={material.icon}
        alt=""
        loading="lazy"
        decoding="async"
      />

      <span className="material-item__name">{material.name}</span>

      <strong className="material-item__quantity">× {quantity}</strong>

      <button
        type="button"
        className="button-secondary material-item__details"
        onClick={onDetailsClick}
        aria-label={`View details for ${material.name}`}
      >
        Details
      </button>
    </div>
  );
}

export default MaterialItem;
