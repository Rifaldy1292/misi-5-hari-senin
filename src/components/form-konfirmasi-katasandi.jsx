import React, { useState } from "react";
import eyeIcon from "../image/eye-off.png"; // Ikon mata tetap sama

const FormKonfirmasiPassword = ({ children }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      <span className="w-[449px] mt-[25px] ">Konfirmasi kata sandi</span>
      <div className="mt-[6px] relative w-[449px] h-[50px] border-2 border-[rgba(231, 227, 252, 0.23)] rounded-[24px]">
        <input
          type={isPasswordVisible ? "text" : "password"}
          placeholder="Masukan password"
          className="w-full h-full bg-transparent border-none outline-none text-[22px] text-[#ffffffd6] pl-[20px] placeholder:text-[#ffffffd6]"
        />
        {/* Ikon mata untuk menampilkan/menyembunyikan password */}
        <img
          src={eyeIcon}
          alt="Eye Icon"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          style={{ width: "24px", height: "24px" }}
        />
      </div>
      <div className="flex justify-between items-center w-[449px] mt-[12px]">
        {children} {/* Menyisipkan children di sini */}
      </div>
    </>
  );
};

export default FormKonfirmasiPassword;
