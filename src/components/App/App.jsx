import { Routes, Route } from "react-router-dom";
import Main from "../../pages/Main/Main";
import GalleryPublic from "../../pages/GalleryPublic/GalleryPublic";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ClientGallery from "../../pages/ClientGallery/ClientGallery"; // ✅
import Login from "../Login/Login";
import Register from "../Register/Register";
import React, { useState, useEffect } from "react";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  function openLoginPopup() {
    setIsLoginOpen(true);
  }

  function openRegisterPopup() {
    setIsRegisterOpen(true);
  }

  function closeAllPopups() {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  }

  function showTooltip(msg) {
    setTooltipMessage(msg);
    setIsTooltipOpen(true);
  }

  function handleLogin({ token, email }) {
    localStorage.setItem("jwt", token);
    localStorage.setItem("userEmail", email);
    setCurrentUser({ email });
    setLoggedIn(true);
    closeAllPopups();
  }

  function handleLogout() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("userEmail");
    setLoggedIn(false);
    setCurrentUser(null);
  }

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      const userEmail = localStorage.getItem("userEmail");
      if (userEmail) {
        setCurrentUser({ email: userEmail });
        setLoggedIn(true);
      }
    }
  }, []);

  return (
    <>
      <Header
        onLoginClick={openLoginPopup}
        onRegisterClick={openRegisterPopup}
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      <Login
        isOpen={isLoginOpen}
        onClose={closeAllPopups}
        onLogin={handleLogin}
      />

      <Register
        isOpen={isRegisterOpen}
        onClose={closeAllPopups}
        onSuccess={showTooltip}
      />

      <InfoTooltip
        isOpen={isTooltipOpen}
        onClose={() => setIsTooltipOpen(false)}
        message={tooltipMessage}
      />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/galeria" element={<GalleryPublic />} />
        <Route
          path="/mis-fotos"
          element={
            <ProtectedRoute element={ClientGallery} loggedIn={loggedIn} />
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
