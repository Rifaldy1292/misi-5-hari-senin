import React, { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
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

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);
  const [notification, setNotification] = useState(""); // State untuk notifikasi

  // Muat data dari Firestore saat komponen pertama kali dimuat
  useEffect(() => {
    const fetchFavorites = async () => {
      const favoritesCollection = collection(db, "favorites"); // Ganti dengan nama koleksi kamu
      const favoritesSnapshot = await getDocs(favoritesCollection);
      const favoritesList = favoritesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setFavorites(favoritesList); // Update state dengan data dari Firestore
    };

    fetchFavorites();
  }, []);

  const removeFromFavorites = async (id) => {
    try {
      await deleteDoc(doc(db, "favorites", id)); // Ganti "favorites" dengan nama koleksi kamu
      const updatedFavorites = favorites.filter((movie) => movie.id !== id);
      setFavorites(updatedFavorites);

      // Setel notifikasi
      setNotification("Film berhasil dihapus dari daftar favorit!");

      // Hilangkan notifikasi setelah 3 detik
      setTimeout(() => {
        setNotification("");
      }, 3000);
    } catch (error) {
      console.error("Error removing document: ", error);
      setNotification("Terjadi kesalahan saat menghapus film!");
      setTimeout(() => {
        setNotification("");
      }, 3000);
    }
  };

  return (
    <div className="mx-auto w-[320px] text-white md:w-[1440px] md:pr-[30px] md:pl-[30px]">
      <div className="text-xl md:text-[32px] font-bold mb-4 md:mb-[40px]">
        Daftar saya
      </div>

      {/* Tampilkan notifikasi jika ada */}
      {notification && (
        <div className="fixed top-5 right-5 bg-[#3D4142] text-white p-2 rounded-md shadow-lg text-sm z-20">
          {notification}
        </div>
      )}

      {favorites.length > 0 ? (
        <div className="grid grid-cols-3 gap-5 md:grid-cols-6">
          {favorites.map((movie) => (
            <div key={movie.id} className="relative text-white">
              <p>{movie.description}</p>
              {movie.image && (
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-[95px] h-[143px] rounded md:w-[200px] md:h-[300px]"
                />
              )}
              {/* Tombol silang untuk menghapus film */}
              <button
                onClick={() => removeFromFavorites(movie.id)} // Gunakan id dari Firestore
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Anda belum menambahkan film ke daftar favorit.</p>
      )}
    </div>
  );
};

export default Favorite;
