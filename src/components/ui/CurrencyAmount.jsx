function CurrencyAmount({ goldAmount }) {
  const platinum = Math.floor(goldAmount / 1000);
  const gold = goldAmount % 1000;

  const accessibleAmount = [
    platinum > 0 && `${platinum} platinum`,
    (gold > 0 || platinum === 0) && `${gold} gold`,
  ]
    .filter(Boolean)
    .join(" and ");

  return (
    <span className="currency-amount" role="img" aria-label={accessibleAmount}>
      {platinum > 0 && (
        <span className="currency-amount__unit" aria-hidden="true">
          {platinum}
          <img src="/images/materials/Platinum.png" alt="" />
        </span>
      )}

      {(gold > 0 || platinum === 0) && (
        <span className="currency-amount__unit" aria-hidden="true">
          {gold}
          <img src="/images/materials/Gold.png" alt="" />
        </span>
      )}
    </span>
  );
}

export default CurrencyAmount;
