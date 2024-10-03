// src/App.jsx
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; // Import BrowserRouter, Routes, dan Route
import LoginPage from "./login";
import RegisterPage from "./pages/daftar"; // Pastikan kamu memiliki halaman ini
import BerandaPage from "./pages/beranda";
import "./App.css";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  useEffect(() => {
    // Menghapus semua class body sebelum menerapkan yang baru

    document.body.className = "";

    // Tambahkan class berdasarkan route yang aktif
    if (location.pathname === "/") {
      document.body.classList.add("default-background");
    } else if (location.pathname === "/register") {
      document.body.classList.add("default-background");
    } else if (location.pathname === "/beranda") {
      document.body.classList.add("beranda-background");
    } else {
      document.body.classList.add("default-background");
    }
  }, [location]);
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} /> {/* Halaman Login */}
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/beranda" element={<BerandaPage />} />
    </Routes>
  );
}

export default App;
