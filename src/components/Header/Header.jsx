import "./Header.css";

function Header() {
  return (
    <header className="header">
      <a href="/" className="header__logo">
        📷 Fotógrafo Pro
      </a>
      <nav className="header__nav">
        <a href="/galeria" className="header__link">
          Galería
        </a>
        <a href="/login" className="header__link">
          Ingresar
        </a>
      </nav>
    </header>
  );
}

export default Header;
