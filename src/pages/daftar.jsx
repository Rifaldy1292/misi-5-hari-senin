import ContainerLoginDaftar from "../components/container-login-daftar";
import FormUsername from "../components/form-username";
import FormPassword from "../components/form-password";
import FormKonfirmasiPassword from "../components/form-konfirmasi-katasandi";
import { Link } from "react-router-dom";
import ButtonMasukDaftar from "../components/button-masuk-daftar";
import ButtonMasukGoogle from "../components/button-masuk-google";

const RegisterPage = () => {
  return (
    <>
      {" "}
      <ContainerLoginDaftar className="  h-[778px]">
        <div className="text-[32px] mt-[25px]">Daftar</div>
        <span>Selamat datang!</span>
        <FormUsername />
        <FormPassword />
        <FormKonfirmasiPassword>
          <span>
            Sudah punya akun? <Link to="/">Masuk</Link>
          </span>
        </FormKonfirmasiPassword>
        <ButtonMasukDaftar>Daftar</ButtonMasukDaftar>{" "}
        <span className=" mt-[8px]">Atau</span>
        <ButtonMasukGoogle> Daftar dengan Google </ButtonMasukGoogle>
      </ContainerLoginDaftar>
    </>
  );
};

export default RegisterPage;
