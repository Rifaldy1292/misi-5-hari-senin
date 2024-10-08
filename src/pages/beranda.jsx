import React, { useState, useEffect } from "react";
import NavbarBeranda from "../components/navbar-beranda";
import Jumbotron from "../components/Jumbotron-beranda";
import Carousel from "../components/caresoul-lanscape";
import FooterBeranda from "../components/footer";
import CarouseIsilFilm from "../components/caresoul-isi-film";
import FavoriteMovies from "../components/favorit";

const BerandaPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [notification, setNotification] = useState(null); // Tambahkan notifikasi

  // Muat data dari LocalStorage saat komponen pertama kali dimuat
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites)); // Parse data dari string ke array
    }
  }, []);

  // Simpan data ke LocalStorage setiap kali daftar favorit berubah
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites)); // Simpan dalam format string JSON
  }, [favorites]);

  const addToFavorites = (slide) => {
    // Cek apakah film sudah ada di favorit
    if (!favorites.some((f) => f.title === slide.title)) {
      const updatedFavorites = [...favorites, slide];
      setFavorites(updatedFavorites); // Update state favorit

      // Tampilkan notifikasi bahwa film berhasil ditambahkan
      setNotification(`${slide.title} berhasil ditambahkan ke daftar favorit`);

      console.log("Film favorit saat ini:", updatedFavorites); // Konsol daftar favorit
      console.log("Jumlah film favorit:", updatedFavorites.length); // Konsol jumlah favorit
    } else {
      // Tampilkan notifikasi bahwa film sudah ada di daftar favorit
      setNotification(`${slide.title} sudah ada di daftar favorit`);
      console.log(`${slide.title} sudah ada di daftar favorit`);
    }

    // Hilangkan notifikasi setelah 3 detik
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <>
      <div>
        <NavbarBeranda />
        <Jumbotron />

        {notification && (
          <div className="fixed top-5 right-5 bg-[#3D4142] text-white p-2 rounded-md shadow-lg text-sm z-20">
            {notification}
          </div>
        )}

        <Carousel />
        <CarouseIsilFilm category="trending" addToFavorites={addToFavorites} />
        <CarouseIsilFilm
          category="newRelease"
          addToFavorites={addToFavorites}
        />
        <CarouseIsilFilm category="top" addToFavorites={addToFavorites} />
        <FooterBeranda />
      </div>
    </>
  );
};

export default BerandaPage;
