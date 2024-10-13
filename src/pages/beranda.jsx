import React, { useState, useEffect } from "react";
import NavbarBeranda from "../components/navbar-beranda";
import Jumbotron from "../components/Jumbotron-beranda";
import Carousel from "../components/caresoul-lanscape";
import FooterBeranda from "../components/footer";
import CarouseIsilFilm from "../components/caresoul-isi-film";
import FavoriteMovies from "../components/favorit";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD2wRyHPEtAnIoXs3I75cs874Y-vou7_tI",
  authDomain: "hari-senin-fe.firebaseapp.com",
  projectId: "hari-senin-fe",
  storageBucket: "hari-senin-fe.appspot.com",
  messagingSenderId: "42519443895",
  appId: "1:42519443895:web:27b29a943d761ea1acd032",
  measurementId: "G-ZEXPD471TN",
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const BerandaPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [notification, setNotification] = useState(null); // Tambahkan notifikasi

  // Muat data dari Firestore saat komponen pertama kali dimuat
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "favorites"));
        const favoritesData = [];
        querySnapshot.forEach((doc) => {
          favoritesData.push({ id: doc.id, ...doc.data() });
        });
        setFavorites(favoritesData);
      } catch (error) {
        console.error("Error fetching favorites: ", error);
      }
    };

    fetchFavorites();
  }, []);

  const addToFavorites = async (slide) => {
    // Cek apakah film sudah ada di favorit
    if (
      !favorites.some((favoritesFilm) => favoritesFilm.title === slide.title)
    ) {
      const updatedFavorites = [...favorites, slide];
      setFavorites(updatedFavorites); // Update state favorit

      try {
        // Simpan film ke Firestore
        await addDoc(collection(db, "favorites"), slide);
        // Tampilkan notifikasi bahwa film berhasil ditambahkan
        setNotification(
          `${slide.title} berhasil ditambahkan ke daftar favorit`
        );
      } catch (e) {
        console.error("Error adding document: ", e);
        setNotification(`Terjadi kesalahan saat menambahkan ${slide.title}`);
      }

      console.log("Film favorit saat ini:", updatedFavorites);
      console.log("Jumlah film favorit:", updatedFavorites.length);
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
