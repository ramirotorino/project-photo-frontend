import { Routes, Route } from "react-router-dom";
import Main from "../../pages/Main/Main";
import GalleryPublic from "../../pages/GalleryPublic/GalleryPublic";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ClientGallery from "../../pages/ClientGallery/ClientGallery"; // ✅

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/galeria" element={<GalleryPublic />} />
        <Route path="/mis-fotos" element={<ClientGallery />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
