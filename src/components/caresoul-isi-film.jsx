import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import tranding1 from "../image/beranda/tranding1.png";
import tranding2 from "../image/beranda/tranding2.png";
import tranding3 from "../image/beranda/tranding3.png";
import tranding4 from "../image/beranda/tranding4.png";
import newRelease1 from "../image/beranda/rilis1.png";
import newRelease2 from "../image/beranda/rilis2.png";
import newRelease3 from "../image/beranda/rilis3.png";
import newRelease4 from "../image/beranda/rilis4.png";
import top1 from "../image/beranda/top1.png";
import top2 from "../image/beranda/top2.png";
import top3 from "../image/beranda/top3.png";
import top4 from "../image/beranda/top4.png";
import PanahKiri from "../image/beranda/panah-kiri.png";
import PanahKanan from "../image/beranda/panah-kanan.png";

const CarouseIsilFilm = ({ category, addToFavorites }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  const slidesData = {
    trending: [
      { id: 1, image: tranding1, title: "Trending Film 1" },
      { id: 2, image: tranding2, title: "Trending Film 2" },
      { id: 3, image: tranding3, title: "Trending Film 3" },
      { id: 4, image: tranding4, title: "Trending Film 4" },
      { id: 5, image: newRelease1, title: "Trending Film 5" },
      { id: 6, image: top1, title: "Trending Film 6" },
      { id: 7, image: newRelease3, title: "Trending Film 7" },
      { id: 8, image: top3, title: "Trending Film 8" },
    ],
    newRelease: [
      { id: 9, image: newRelease1, title: "New Release 1" },
      { id: 10, image: newRelease2, title: "New Release 2" },
      { id: 11, image: newRelease3, title: "New Release 3" },
      { id: 12, image: newRelease4, title: "New Release 4" },
      { id: 13, image: top2, title: "New Release 5" },
      { id: 14, image: tranding1, title: "New Release 6" },
      { id: 15, image: tranding3, title: "New Release 7" },
      { id: 16, image: top4, title: "New Release 8" },
    ],
    top: [
      { id: 17, image: top1, title: "Top Film 1" },
      { id: 18, image: top2, title: "Top Film 2" },
      { id: 19, image: top3, title: "Top Film 3" },
      { id: 20, image: top4, title: "Top Film 4" },
      { id: 21, image: newRelease2, title: "Top Film 5" },
      { id: 22, image: tranding2, title: "Top Film 6" },
      { id: 23, image: tranding4, title: "Top Film 7" },
      { id: 24, image: newRelease4, title: "Top Film 8" },
    ],
  };

  const slides = slidesData[category] || [];

  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < slides.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (startX - endX > 50) {
      nextSlide();
    } else if (endX - startX > 50) {
      prevSlide();
    }
  };

  if (isDesktop) {
    return (
      <div className="relative w-[1440px] mx-auto mt-[30px] mb-[30px] overflow-hidden">
        <div className="text-white text-[32px] font-bold mb-[80px] ml-[80px]">
          {category === "trending" && "Top Rating Film dan Series Hari ini"}
          {category === "newRelease" && "Film Trending"}
          {category === "top" && "Rilis Baru"}
        </div>

        {}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`absolute left-0 top-[50%] transform -translate-y-1/2 p-3 bg-gray-700 text-white rounded-full z-10 ${
            currentIndex === 0 ? "opacity-50 " : ""
          }`}
        >
          <img src={PanahKiri} alt="Panah Kiri" className="w-8 h-8" />
        </button>

        <div
          className="flex transition-transform duration-500 w-[1280px] h-[365px] mx-auto mb-[40px]"
          style={{ transform: `translateX(-${currentIndex * 24}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="w-[22.33%] flex-shrink-0 px-2 relative"
            >
              <button
                onClick={() => addToFavorites(slide)}
                className="absolute top-5 right-10 bg-white rounded-full p-1 shadow-md w-[50px] h-[50px] "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-yellow-500 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.01 6.165a1 1 0 00.95.69h6.487c.969 0 1.371 1.24.588 1.81l-5.252 3.752a1 1 0 00-.364 1.118l2.01 6.165c.3.921-.755 1.688-1.54 1.118l-5.252-3.752a1 1 0 00-1.176 0l-5.252 3.752c-.785.57-1.84-.197-1.54-1.118l2.01-6.165a1 1 0 00-.364-1.118L2.013 11.592c-.784-.57-.38-1.81.588-1.81h6.487a1 1 0 00.95-.69l2.01-6.165z"
                  />
                </svg>
              </button>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-[234px] h-[365px] object-cover rounded-lg mx-auto cursor-pointer "
              />
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentIndex === slides.length - 5}
          className={`absolute right-0 top-[50%] transform -translate-y-1/2 p-3 bg-gray-700 text-white rounded-full z-10 ${
            currentIndex === slides.length - 5 ? "opacity-50 " : ""
          }`}
        >
          <img src={PanahKanan} alt="Panah Kanan" className="w-8 h-8" />
        </button>
      </div>
    );
  }

  return (
    <div
      className="relative w-[320px] mx-auto mt-[30px] mb-[30px] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="text-white text-[19px] font-bold mb-[30px]">
        {category === "trending" && "Top Rating Film dan Series Hari ini"}
        {category === "newRelease" && "Film Trending"}
        {category === "top" && "Rilis Baru"}
      </div>
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-[33.33%] flex-shrink-0 px-2 relative"
          >
            <button
              onClick={() => addToFavorites(slide)}
              className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-yellow-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.01 6.165a1 1 0 00.95.69h6.487c.969 0 1.371 1.24.588 1.81l-5.252 3.752a1 1 0 00-.364 1.118l2.01 6.165c.3.921-.755 1.688-1.54 1.118l-5.252-3.752a1 1 0 00-1.176 0l-5.252 3.752c-.785.57-1.84-.197-1.54-1.118l2.01-6.165a1 1 0 00-.364-1.118L2.013 11.592c-.784-.57-.38-1.81.588-1.81h6.487a1 1 0 00.95-.69l2.01-6.165z"
                />
              </svg>
            </button>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-[95px] h-[145px] object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouseIsilFilm;
