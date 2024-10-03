import React from "react";
import logoNavbardevice from "../image/beranda/Logonavbardevice.png";
import logoFooter from "../image/beranda/logo-footer.png";

const FooterBeranda = () => {
  return (
    <div className="p-6 w-[360px] h-[194px] mx-auto border-t border-gray-400 mt-[27px] text-white mb-[20px] md:w-[1440px] md:h-[284px]">
      <div className="flex items-center mb-4">
        {/* Ganti ikon dengan teks atau gambar sesuai kebutuhan */}
        <span className=" mr-2">
          <img src={logoFooter} alt="" className=" w-[84px] h-[25px]" />
        </span>{" "}
      </div>
      <div className="mb-8">
        <p className="text-gray-400">@2023 Chill All Rights Reserved</p>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-xl">Genre</span>
          <span className="text-xl">➔</span> {/* Ganti dengan simbol panah */}
        </div>
        <div className="flex justify-between items-center ">
          <span className="text-xl">Bantuan</span>
          <span className="text-xl">➔</span> {/* Ganti dengan simbol panah */}
        </div>
      </div>
    </div>
  );
};

export default FooterBeranda;
