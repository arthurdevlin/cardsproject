import Button from "../Button";
import { FaLocationDot } from "react-icons/fa6";
import GlassCard from "../components/cards/GlassCard";

const Hero = () => {
  return (
    <div className='flex bg-[url("./images/beach2.jpg")] bg-cover bg-no-repeat bg-center w-full '>
      <div className="w-full min-h-screen bg-slate-950/60 text-white backdrop-brightness-75">
        {/**Hero wrpper*/}
        <div className="flex-col md:justify-center items-center mt-30 mx-8 ">
          {/**Hero text stuff */}
          <h1 className="text-3xl font-semibold leading-tight sm:text-3xl md:text-5xl">
            Welcome. <br />{" "}
            <span className="mt-2 block font-medium text-emerald-300">
              Takulandirani
            </span>
            <span className="mt-3 block text-sm font-semibold text-slate-100 sm:text-lg md:text-xl">
              Xplore Malawi with our team
            </span>
          </h1>
          ---------------------------
        </div>{" "}
        {/**mabatan here bottom*/}{" "}
        <div className="flex-row md:flex-col m-4 justify-between max-w-11/12">
          {" "}
          {/**Hero lg screen */}
          <div className="relative  sm:mt-10 md:30  m-4">
            <p className="hidden md:flex text-base font-medium leading-7 text-slate-200">
              Discover the beauty of Malawi with our expert guides and
              unforgettable experiences. <br />
              Make every second count with adventure and fun
            </p>
            <div className="hidden  justify-between md:flex">
              <div className="hidden  md:flex flex-row gap-4 m-8">
                <div className="relative m-4 space-x-8">
                  <Button>Discover</Button>
                  <Button variant="secondary">Sign Up</Button>
                </div>
              </div>
              <div className="absolute right-0 hidden flex-col rounded-[1.4rem] border border-white/10 bg-slate-900/70 px-4 p-2 text-sm shadow-[0_20px_60px_rgba(2,8,23,0.35)] sm:flex">
                <h1 className="flex w-50 justify-center font-semibold text-amber-200">
                  TRENDING EVENTS
                </h1>

                <h1 className="flex gap-3 p-2">
                  <FaLocationDot /> Blues Bar & Restuarant
                </h1>
                <p>
                  {" "}
                  <span className="font-bold">EVENT:</span> KucheKuche Launch
                </p>
              </div>
            </div>
          </div>
          {/* mobile glasscard hero CTA */}
          <div className="md:hidden justify-center flex items-center">
            <GlassCard className="justify-center items-center flex sm:w-0">
              <div className="flex flex-col gap-4 m-4">
                <p className="text-center text-sm text-gray-200">
                  Discover the beauty of Malawi with our expert guides and
                  unforgettable experiences. <br />
                  Make every second count with adventure and fun
                </p>
              </div>
              <Button className="w-3/4 scale-80 overlay">Discover</Button>
              <Button variant="secondary" className="w-3/4  scale-80">
                Sign Up
              </Button>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
