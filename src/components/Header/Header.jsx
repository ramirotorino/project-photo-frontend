import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="page header__inner">
        <a href="/" className="header__logo">
          📷 The Manco Fotógrafo
        </a>
        <nav className="header__nav">
          <a href="/galeria" className="header__link">
            Galería
          </a>
          <a href="/login" className="header__link">
            Acceso Clientes
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
