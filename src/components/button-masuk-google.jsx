import logoGoogle from "../image/logo-google.png";

const ButtonMasukGoogle = ({ children }) => {
  return (
    <>
      <div className="cursor-pointer tombol-masuk-google flex w-[449px] h-[50px] rounded-[24px] mt-[8px] border border-[rgba(231, 227, 252, 0.23)] justify-center items-center text-[22px] ">
        <img
          src={logoGoogle}
          width="18"
          alt="Logo Google"
          className="m-[14.5px]"
        />
        {children} {/* Menyisipkan children di sini */}
      </div>
    </>
  );
};

export default ButtonMasukGoogle;
