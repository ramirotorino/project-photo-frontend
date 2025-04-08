import "./Main.css";
import { Link } from "react-router-dom";

function Main() {
  return (
    <main className="main">
      {/* Carrusel tipo portada */}
      <section className="main__hero">
        <div className="main__reel">
          <img src="/assets/1.jpg" alt="Portada 1" />
          <img src="/assets/2.jpg" alt="Portada 2" />
          <img src="/assets/3.jpg" alt="Portada 3" />
          <img src="/assets/4.jpg" alt="Portada 4" />
          <img src="/assets/5.jpg" alt="Portada 5" />
          <img src="/assets/6.jpg" alt="Portada 6" />
          <img src="/assets/7.jpg" alt="Portada 7" />
          <img src="/assets/8.jpg" alt="Portada 8" />
          <img src="/assets/9.jpg" alt="Portada 9" />
        </div>
        <h1 className="main__title">
          Fotografía profesional que cuenta historias
        </h1>
      </section>

      {/* Tipos de servicios */}
      <section className="main__services">
        <h2>Tipos de sesiones</h2>
        <div className="main__cards">
          <div className="main__card">
            <img src="/assets/outsesion.jfif" alt="Al aire libre" />
            <h3>Al aire libre</h3>
            <p>
              Sesiones naturales en entornos abiertos, ideales para familias y
              parejas.
            </p>
          </div>
          <div className="main__card">
            <img src="/assets/wedding.jfif" alt="Casamientos" />
            <h3>Casamientos</h3>
            <p>
              Cubrimos tu día especial con pasión y estilo, desde la ceremonia
              hasta la fiesta.
            </p>
          </div>
          <div className="main__card">
            <img src="/assets/family.jfif" alt="Retratos" />
            <h3>Retratos</h3>
            <p>
              Capturamos tu esencia con retratos únicos en estudio o locación.
            </p>
          </div>
        </div>
      </section>

      {/* Acceso cliente */}
      <section className="main__access">
        <Link to="/login" className="main__cta">
          Acceso Clientes – Ver mis fotos
        </Link>
      </section>

      {/* Contacto */}
      <section className="main__contact">
        <h2>Contacto</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Tu correo" required />
          <textarea placeholder="Mensaje..." required></textarea>
          <div className="main__actions">
            <button type="submit">Enviar mensaje</button>
            <a
              href="https://wa.me/549XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="main__whatsapp"
            >
              WhatsApp
            </a>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Main;
