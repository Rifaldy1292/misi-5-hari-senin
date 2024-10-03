import Jumbotron from "../image/beranda/jumbotron-hp.png";
import Logo18 from "../image/beranda/18.png";
import InformationOutline from "../image/beranda/information-outline.png";
import IconSpeaker from "../image/beranda/volume.png";

const JumbotronBeranda = () => {
  return (
    <>
      <div className="relative w-[360px] h-[225px] mx-auto md:w-[1440px] md:h-[587px]">
        <img src={Jumbotron} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center md:mt-[274px]">
          <div className="text-white w-[320px] h-[118px] md:w-[1280px] md:h-[233px]">
            <div className="  text-lg font-bold text-[29px] md:text-[48px]">
              Duty After school
            </div>
            <div className="w-[320px] h-[40px] text-[13px]  md:mt-[20px] md:text-[18px] md:w-[700px] md:h-[75px] line-clamp-2 overflow-hidden md:line-clamp-none md:overflow-visible">
              Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
              Departemen Pertahanan mulai merekrut lebih banyak tentara,
              termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang
              garis depan dalam perang.
            </div>{" "}
            <div className=" flex mt-[15px] w-[320px] h-[25px] md:mt-[40px] md:w-[1280px] md:h-[45px]">
              <button className="text-[12px] md:text-[16px] w-[55px] h-[25px] md:w-[93px] md:h-[45px] bg-[#0F1E93] rounded-[48px] text-white flex items-center justify-center">
                Mulai
              </button>
              <button className="ml-[8px] md:text-[16px] text-[12px] w-[120px] h-[25px] md:w-[185px] md:h-[45px] bg-[#22282A] rounded-[48px] text-white flex items-center justify-center">
                <img
                  src={InformationOutline}
                  alt=""
                  className="w-[12px] h-[12px] md:w-[24px] md:h-[24px] mb-[2px] mr-[3px] md:ml-[10px]"
                />
                Selengkapnya
              </button>{" "}
              <img
                src={Logo18}
                alt=""
                className="w-[30px] h-[25px] ml-[8px] md:ml-[10px] md:w-[52px] md:h-[45px]"
              />
              <img
                src={IconSpeaker}
                alt=""
                className="w-[25px] h-[25px] ml-auto md:w-[44px] md:h-[44px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JumbotronBeranda;
