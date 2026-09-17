function AppFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="app-footer__content">
        <div className="app-footer__project">
          <p>
            © {currentYear} <strong>Guild Wars Armor Planner</strong>
          </p>

          <p>Fan-made armor planning tool.</p>
        </div>

        <div className="app-footer__legal">
          <p>
            Guild Wars and all related names, trademarks, and visual assets
            belong to their respective owners, including ArenaNet and NCSOFT.
          </p>

          <p>
            This project is not affiliated with, endorsed by, or sponsored by
            ArenaNet or NCSOFT.
          </p>
        </div>

        <nav className="app-footer__links" aria-label="Official resources">
          <a href="https://www.guildwars.com/en/">
            Official Guild Wars Reforged website
          </a>

          <a href="https://www.arena.net/en">ArenaNet</a>
        </nav>
      </div>
    </footer>
  );
}

export default AppFooter;
