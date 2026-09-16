function ProfessionSelector({
  professions,
  selectedProfession,
  onSelectProfession,
}) {
  return (
    <div
      className={`selector-grid selector-grid--professions ${
        selectedProfession ? "selector-grid--has-selection" : ""
      }`}
    >
      {professions.map((profession) => {
        const isSelected = selectedProfession?.id === profession.id;

        return (
          <button
            key={profession.id}
            type="button"
            className={`profession-card ${
              isSelected ? "profession-card--selected" : ""
            }`}
            aria-pressed={isSelected}
            onClick={() => onSelectProfession(profession)}
          >
            <img
              className="profession-card__character"
              src={profession.image}
              alt=""
              loading="lazy"
              decoding="async"
            />

            <span className="profession-card__content">
              <img
                className="profession-card__icon"
                src={profession.icon}
                alt=""
              />

              <span className="profession-card__name">{profession.name}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default ProfessionSelector;
