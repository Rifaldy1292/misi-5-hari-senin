import NavbarBeranda from "../components/navbar-beranda";
import Jumbotron from "../components/Jumbotron-beranda";
import Carousel from "../components/caresoul-lanscape";
import FooterBeranda from "../components/footer";
import CarouseIsilFilm from "../components/caresoul-isi-film";

const BerandaPage = () => {
  return (
    <>
      <div>
        <NavbarBeranda />
        <Jumbotron />
        <Carousel />
        <CarouseIsilFilm category="trending" />
        <CarouseIsilFilm category="newRelease" />
        <CarouseIsilFilm category="top" />
        <FooterBeranda />{" "}
      </div>
    </>
  );
};

export default BerandaPage;
