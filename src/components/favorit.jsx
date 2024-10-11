import React, { useState, useEffect } from "react";

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);
  const [notification, setNotification] = useState(""); // State untuk notifikasi

  // Muat data dari LocalStorage saat komponen pertama kali dimuat
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites)); // Parse data dari string ke array
    }
  }, []);

  const removeFromFavorites = (index) => {
    const updatedFavorites = favorites.filter((_, i) => i !== index);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Simpan kembali ke LocalStorage

    // Setel notifikasi
    setNotification("Film berhasil dihapus dari daftar favorit!");

    // Hilangkan notifikasi setelah 3 detik
    setTimeout(() => {
      setNotification("");
    }, 3000);
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
          {favorites.map((movie, index) => (
            <div key={index} className="relative text-white">
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
                onClick={() => removeFromFavorites(index)}
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
