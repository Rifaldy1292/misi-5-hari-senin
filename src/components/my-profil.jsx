import React from "react";
import imagesData from "../assets/data.json";

const warningImage = imagesData.images.warning.warning;

const MyProfil = ({}) => {
  return (
    <>
      {" "}
      <div className="mx-auto md:w-[1440px] md:h-[649px] w-[320px] md:flex md:justify-between  md:p-[30px]">
        <div className="flex flex-col md:w-[558px] md:h-[193px] w-[320px] h-[191px] rounded-[12px] bg-[#3D4142] mt-[20px] md:mt-[78px] p-[24px] md:order-2">
          <div className="mx-auto w-[272px] h-[94px] text-white flex p-[4px] md:w-[450px] md:h-[120pxpx]">
            {/* Bagian 1: Gambar */}
            <div className="w-[78px] h-[78px] flex-shrink-0 md:w-[78px] md:h-[78px]">
              <img
                className="w-full h-full object-cover"
                src={warningImage}
                alt=""
              />
            </div>
            <div className="flex-1 flex flex-col justify-between pl-2">
              <span className="text-[18x] md:text-[24px]">Berlangganan</span>

              <div className="text-[14px] md:text-[18px] mt-[4px]">
                Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan
                Kamu!
              </div>
            </div>
          </div>{" "}
          <button className="self-end mt-[20px]   md:mt-[10px] md:text-[16px] text-[12px] w-[154px] h-[29px] md:w-[185px] md:h-[40px] bg-[#22282A] rounded-[48px] text-white flex items-center justify-center">
            Mulai Berlangganan
          </button>{" "}
        </div>
        <div className=" text-white  rounded-lg  w-80 mt-[20px] md:w-[700px] relative md:order-1 ">
          {" "}
          <div>
            <h1 className="text-xl font-bold mb-4 md:mb-[32px] md:text-[32px]">
              Profil Saya
            </h1>{" "}
          </div>
          <div className="flex   mb-4">
            <img
              alt="Profile picture of a person wearing a blue cap"
              className="rounded-full mb-2 w-[80px] h-[80px]"
              src="https://placehold.co/100x100"
            />{" "}
            <div className=" ml-[28px]">
              <button className="w-[90px] h-[36px] bg-transparent border border-blue-500 text-blue-500 px-2 py-1 rounded-full mb-1 text-[14px]">
                Ubah Foto
              </button>{" "}
              <p className="text-gray-400 text-sm flex items-center mt-[5px]">
                &#x1F4CE; {/* Ganti dengan emoji clip */}
                <span className="ml-1">Maksimal 2MB</span>
              </p>
            </div>
          </div>{" "}
          <div>
            <div className="mb-[34px]">
              <div className="bg-[#22282A] p-2 rounded-lg w-[320px]  md:w-[642px] ">
                <label className="block text-gray-400 text-[14px] mb-1 md:text-[18px]">
                  Nama Pengguna
                </label>
                <div className="flex items-center justify-between h-[32px]">
                  <span className="text-white md:text-[18px]">William</span>
                  <span className="text-gray-400 cursor-pointer" title="Edit">
                    ✎
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-[34px]">
              <div className="bg-[#22282A] p-2 rounded-lg w-[320px] md:w-[642px]  ">
                <label className="block text-gray-400 text-[14px] mb-1 md:text-[18px]">
                  Email
                </label>
                <div className="flex items-center justify-between ">
                  <span className="text-white md:text-[18px]">
                    william1980@gmail.com
                  </span>
                  <span className="text-gray-400 cursor-pointer" title="Edit">
                    ✎
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-[34px]">
              <div className="bg-[#22282A] p-2 rounded-lg w-[320px] md:w-[642px] ">
                <label className="block text-gray-400 text-[14px] mb-1 md:text-[18px]">
                  Kata Sandi
                </label>
                <div className="flex items-center justify-between ">
                  <span className="text-white md:text-[18px]">
                    ************
                  </span>
                  <span className="text-gray-400 cursor-pointer" title="Edit">
                    ✎
                  </span>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>{" "}
    </>
  );
};

export default MyProfil;
