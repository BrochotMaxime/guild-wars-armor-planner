function ProfessionSelector({
  professions,
  selectedProfession,
  onSelectProfession,
}) {
  return (
    <section className="selector-section selector-section--professions">
      <h2>Choose a profession</h2>

      <div className="selector-grid selector-grid--professions">
        {professions.map((profession) => {
          const isSelected = selectedProfession?.id === profession.id;

          return (
            <button
              key={profession.id}
              type="button"
              className={`profession-card${isSelected ? " selected" : ""}`}
              aria-pressed={isSelected}
              onClick={() => onSelectProfession(profession)}
            >
              <img
                className="profession-card__character"
                src={profession.image}
                alt=""
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
    </section>
  );
}

export default ProfessionSelector;
