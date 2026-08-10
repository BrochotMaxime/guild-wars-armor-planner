function ProfessionSelector({
  professions,
  selectedProfession,
  onSelectProfession,
}) {
  return (
    <section>
      <h2>Choose a profession</h2>

      <div>
        {professions.map((profession) => {
          const isSelected = selectedProfession?.id === profession.id;

          return (
            <button
              key={profession.id}
              type="button"
              className={isSelected ? "selected" : ""}
              onClick={() => onSelectProfession(profession)}
            >
              {profession.name}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default ProfessionSelector;
