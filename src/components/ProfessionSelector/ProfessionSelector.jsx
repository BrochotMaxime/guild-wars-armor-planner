function ProfessionSelector({ professions, onSelectProfession }) {
  return (
    <section className="selector-section selector-section--professions">
      <h2>Choose a profession</h2>

      <div className="selector-grid selector-grid--professions">
        {professions.map((profession) => (
          <button
            key={profession.id}
            type="button"
            className="profession-card"
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
        ))}
      </div>
    </section>
  );
}

export default ProfessionSelector;
