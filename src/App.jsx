// src/App.jsx
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; // Import BrowserRouter, Routes, dan Route
import LoginPage from "./login";
import RegisterPage from "./pages/daftar"; // Pastikan kamu memiliki halaman ini
import BerandaPage from "./pages/beranda";
import Profil from "./pages/profil";
// import "./App.css";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  useEffect(() => {
    console.log("Current Path:", location.pathname); // Debugging: Lihat jalur saat ini
    console.log("Class Sebelum:", document.body.className);
    // Hapus class default-background dari elemen body
    document.body.classList.remove("default-background");

    // Tambahkan class baru berdasarkan path yang diakses
    if (location.pathname === "/") {
      document.body.classList.add("default-background");
    } else if (location.pathname === "/register") {
      document.body.classList.add("default-background");
    } else if (location.pathname === "/beranda") {
      document.body.classList.add("beranda-background");
    } else if (location.pathname === "/profil") {
      document.body.classList.add("beranda-background");
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} /> {/* Halaman Login */}
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/beranda" element={<BerandaPage />} />
      <Route path="/profil" element={<Profil />} />
    </Routes>
  );
}

export default App;
