// Jika React versi di bawah 17, tambahkan impor berikut:
// import React from 'react';

const FormUsername = () => {
  return (
    <>
      <span className="w-[449px] mt-[37px]">Username</span>
      <div className="relative  w-[449px] h-[50px] mt-[6px] border-2 border-[rgba(231, 227, 252, 0.23)] rounded-[24px]">
        <input
          type="text"
          placeholder="Masukan username"
          className="w-full h-full bg-transparent border-none outline-none text-[22px] text-[#ffffffd6] ml-[20px] placeholder:text-[#ffffffd6]"
        />
      </div>
    </>
  );
};

export default FormUsername;
