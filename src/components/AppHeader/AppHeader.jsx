function AppHeader() {
  return (
    <header className="app-header">
      <img
        className="app-header__logo"
        src="/images/branding/guild-wars-reforged-logo.png"
        alt="Guild Wars Reforged"
      />

      <div className="app-header__content">
        <h1>Armor Planner</h1>

        <p>Plan your armor and the materials required to craft it.</p>
      </div>
    </header>
  );
}

export default AppHeader;
