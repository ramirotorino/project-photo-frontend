import "./ClientGallery.css";
import { useEffect, useState } from "react";

function ClientGallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Simulación de llamada a la API (esto se reemplazará por el fetch real)
    setPhotos([
      {
        id: 1,
        url: "https://res.cloudinary.com/dtvqrjjav/image/upload/vXXXXXXXX/photo1.jpg",
        name: "Foto 1",
      },
      {
        id: 2,
        url: "https://res.cloudinary.com/dtvqrjjav/image/upload/vXXXXXXXX/photo2.jpg",
        name: "Foto 2",
      },
    ]);
  }, []);

  const handleDownloadAll = () => {
    alert(
      "Funcionalidad de descarga ZIP pendiente (se implementa con backend)"
    );
    // En backend real usarías zip-stream o similar para enviar todas las imágenes comprimidas
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

      <div className="client-gallery__grid">
        {photos.map((photo) => (
          <div key={photo.id} className="client-gallery__card">
            <img src={photo.url} alt={photo.name} />
            <p>{photo.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClientGallery;
