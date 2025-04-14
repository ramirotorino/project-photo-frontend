import "./ClientGallery.css";
import { useEffect, useState } from "react";
import { getPhotos } from "../../utils/cloudinaryApi.js";

function ClientGallery() {
  const [photos, setPhotos] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3); // ✅ Para botón "Mostrar más"
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPhotos()
      .then((data) => {
        console.log("Fotos recibidas desde Cloudinary:", data);
        setPhotos(data);
      })
      .catch((err) => {
        setError("Lo sentimos, hubo un error al cargar las fotos.");
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const handleDownloadAll = () => {
    alert(
      "Funcionalidad de descarga ZIP pendiente (se implementa con backend)"
    );
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className="client-gallery">
      <div className="client-gallery__top">
        <h2>Mis Fotos</h2>
        <button
          className="client-gallery__download"
          onClick={handleDownloadAll}
        >
          Descargar todas
        </button>
      </div>

      {isLoading && <p>Cargando fotos...</p>}
      {error && <p>{error}</p>}

      {!isLoading && !error && (
        <>
          <div className="client-gallery__grid">
            {photos.slice(0, visibleCount).map((photo) => (
              <div key={photo.id} className="client-gallery__card">
                <img src={photo.url} alt={photo.name} />
                <p>{photo.name}</p>
              </div>
            ))}
          </div>
          {visibleCount < photos.length && (
            <button onClick={handleShowMore}>Mostrar más</button>
          )}
        </>
      )}
    </section>
  );
}

export default ClientGallery;
