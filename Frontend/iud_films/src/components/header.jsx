export function Header() {
  return (
    <header className="header ">
      <div className="header__container container">
        <h1 className="header__logo">
          <span className="header__logoRed">IUD</span> FILMS
        </h1>
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__li">
              <a href="#" className="header__links">
                Inicio
              </a>
            </li>
            <li className="header__li">
              <a href="#" className="header__links">
                Películas
              </a>
            </li>
            <li className="header__li">
              <a href="#" className="header__links">
                Series
              </a>
            </li>
          </ul>
        </nav>
        <a href="#" className="header__linkAdmin">
          Administrador
        </a>
      </div>
    </header>
  );
}
