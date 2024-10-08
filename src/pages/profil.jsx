import NavbarBeranda from "../components/navbar-beranda";
import MyProfil from "../components/my-profil";
import FooterBeranda from "../components/footer";
import Favorite from "../components/favorit";
const BerandaPage = () => {
  return (
    <>
      <div>
        <NavbarBeranda />
        <MyProfil />
        <Favorite />
        <FooterBeranda />
      </div>
    </>
  );
};

export default BerandaPage;
