import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Lanjut1 from "../image/beranda/lanjut1.png";
import Lanjut2 from "../image/beranda/lanjut2.png";
import Lanjut3 from "../image/beranda/lanjut3.png";
import Lanjut4 from "../image/beranda/lanjut4.png";

import PanahKiri from "../image/beranda/panah-kiri.png";
import PanahKanan from "../image/beranda/panah-kanan.png";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" }); // Menentukan ukuran layar mobile

  const slides = [
    {
      id: 1,
      image: Lanjut1,
    },
    {
      id: 2,
      image: Lanjut2,
    },
    {
      id: 3,
      image: Lanjut3,
    },
    {
      id: 4,
      image: Lanjut4,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  if (isDesktop) {
    // Menampilkan layout desktop dengan list film
    return (
      <div className="relative w-[1440px] h-[309px] mt-[31px] text-[32px] mx-auto">
        <div className=" ml-[80px] mt-[40px] text-white  font-bold ]">
          Melanjutkan Tonton Film
        </div>

        {/* Panah Kiri */}
        <div className="absolute top-[115px] left-[53px]">
          <img src={PanahKiri} alt="Panah Kiri" />
        </div>

        {/* Panah Kanan */}
        <div className="absolute top-[115px] right-[53px]">
          <img src={PanahKanan} alt="Panah Kanan" />
        </div>

        {/* List Film */}
        <div className=" w-[1280px] h-[309px] mx-auto">
          <div className="flex mt-[15px] ml-[10px]">
            {slides.map((slide, index) => (
              <img
                key={index}
                className="w-[302px] h-[162px] mr-[17px] rounded-lg"
                src={slide.image}
                alt={`Film ${index + 1}`}
              />
            ))}
          </div>{" "}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-[320px] mx-auto mt-[20px] te">
      <span className="text-white text-[20px] font-bold">
        Melanjutkan Nonton Film
      </span>
      <div className="overflow-hidden mt-[20px]">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="w-[309px] h-[151px] bg-slate-500 mx-auto rounded-[9px]"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-2 top-[120px] transform -translate-y-1/2 rounded-full p-2 shadow bg-slate-500"
      >
        &#8249; {/* Tombol Kembali */}
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-[120px] transform -translate-y-1/2 rounded-full p-2 shadow bg-slate-500"
      >
        &#8250; {/* Tombol Selanjutnya */}
      </button>
    </div>
  );
};

export default Carousel;
