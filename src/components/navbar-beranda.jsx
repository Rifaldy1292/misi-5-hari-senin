import logoNavbardevice from "../image/beranda/Logonavbardevice.png";
import logoAvatar from "../image/beranda/avatar-navbar.png";
import ArrowDown from "../image/beranda/arrow-down.png";
import { useState } from "react";
import Logout from "../image/beranda/log-out.png";
import Star from "../image/beranda/star.png";
import ProfilLogin from "../image/beranda/login-variant.png";

const NavbarBeranda = () => {
  const [isRotated, setIsRotated] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false); // State untuk mengontrol visibilitas div

  const handleArrowClick = () => {
    setIsRotated(!isRotated); // Toggle rotasi
    setDropdownVisible(!isDropdownVisible); // Toggle visibilitas dropdown
  };

  return (
    <>
      <nav className="w-[360px] h-[56px] mx-auto flex items-center md:w-[1440px] md:h-[94px] md:justify-between ">
        <div className="text-[14px]  md:text-[18px] w-[268px] h-[44px] flex text-white items-center justify-between space-x-4 px-[25px] md:w-[520px] md:h-[44px]">
          <img
            src={logoNavbardevice}
            alt=""
            className="w-[20px] h-[44px] md:w-[50px] md:h-[100px]"
          />
          <span className="cursor-pointer ">Series</span>
          <span className="cursor-pointer ">Film</span>
          <span className="cursor-pointer ">Daftar Saya</span>
        </div>
        <div className="w-[40px] h-[20px] mx-auto flex items-center justify-center md:mx-0 ">
          <img
            src={logoAvatar}
            alt=""
            className="w-[20px] h-[20px] md:w-[76px] md:h-[40px]"
          />
          <img
            src={ArrowDown}
            alt="Arrow Down"
            className={`w-[16px] h-[16px] md:w-[32px] md:h-[32px]  cursor-pointer transition-transform duration-300 ${
              isRotated ? "rotate-180" : ""
            }`}
            onClick={handleArrowClick} // Tambahkan onClick untuk mengatur visibilitas
          />
        </div>
      </nav>
      {isDropdownVisible && ( // Pastikan ini sesuai dengan state
        <div className=" relative w-[300px] md:w-[1400px] mx-auto z-10">
          <div className="absolute right-0 mt-2px text-white shadow-sm text-[11px] md:text-[20px] w-[113px] h-[104px] md:w-[226px] md:h-[208px] bg-[#181A1C] rounded-[4px] flex flex-col justify-between ml-auto mt-2 p-2 ">
            <div className="cursor-pointer flex items-center space-x-1">
              <img
                src={ProfilLogin}
                alt=""
                className="w-[16px] h-[16px] md:w-[32px] md:h-[32px]"
              />
              <span>Profil Saya</span>
            </div>
            <div className="cursor-pointer flex items-center space-x-1">
              <img
                src={Star}
                alt=""
                className="w-[16px] h-[16px] md:w-[32px] md:h-[32px]"
              />
              <span>Ubah premium</span>
            </div>
            <div className="cursor-pointer flex items-center space-x-1">
              <img
                src={Logout}
                alt=""
                className="w-[16px] h-[16px] md:w-[32px] md:h-[32px]"
              />
              <span>Keluar</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarBeranda;
