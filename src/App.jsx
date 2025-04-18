import { Routes, Route } from "react-router-dom";
import Main from "../../pages/Main/Main";
import "./App.css";
import ClientGallery from "../../pages/ClientGallery/ClientGallery";
import GalleryPublic from "../../pages/GalleryPublic/GalleryPublic";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/galeria" element={<GalleryPublic />} />
        <Route path="/mis-fotos" element={<ClientGallery />} />
        {/* Podés agregar más rutas después como /login o /register */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
