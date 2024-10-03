import logoChill from "../image/logo-chill.png"; // Pastikan jalur gambar benar
import React from "react";

const ContainerLoginDaftar = ({ className, children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen pt-10 pb-10">
      <div
        className={`w-[529px] px-[80px] h-[663px] bg-[#181a1cd6] rounded-[16px] text-white flex flex-col items-center ${className} lg:scale-100 scale-[0.6] `}
      >
        <span className="flex justify-center ">
          <img
            src={logoChill}
            alt="Logo chill"
            className="w-[163px] mt-10 scale-[0.7]"
          />
        </span>
        {children} {/* Menyisipkan children di sini */}
      </div>
    </div>
  );
};

export default ContainerLoginDaftar;
