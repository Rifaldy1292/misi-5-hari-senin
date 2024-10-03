// src/LoginPage.jsx
import React from "react";
import ContainerLoginDaftar from "./components/container-login-daftar";
import FormUsername from "./components/form-username";
import FormPassword from "./components/form-password";
import ButtonMasukDaftar from "./components/button-masuk-daftar";
import ButtonMasukGoogle from "./components/button-masuk-google";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <ContainerLoginDaftar>
      <div className="text-[32px] mt-[25px]">Masuk</div>
      <span>Selamat datang kembali!</span>
      <FormUsername />
      <FormPassword>
        <span>
          Belum punya akun? <Link to="/register">Daftar</Link>
        </span>
        <span className="cursor-pointer">Lupa kata sandi?</span>
      </FormPassword>
      <ButtonMasukDaftar>
        <Link to="/beranda">Masuk</Link>
      </ButtonMasukDaftar>{" "}
      <span className=" mt-[8px]">Atau</span>
      <ButtonMasukGoogle> Masuk dengan Google </ButtonMasukGoogle>{" "}
    </ContainerLoginDaftar>
  );
};

export default LoginPage;
