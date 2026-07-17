import Button from "../Button";
import { FaLocationDot } from "react-icons/fa6";
import GlassCard from "../components/cards/GlassCard";

const Hero = () => {
  return (
    <div className='flex bg-[url("./images/beach2.jpg")] bg-cover bg-no-repeat bg-center w-full '>
      <div className=" bg-black/50 w-full min-h-screen text-white ">
        {/**Hero wrpper*/}
        <div className="flex-col md:justify-center items-center mt-30 mx-8 ">
          {/**Hero text stuff */}
          <h1 className="font-semibold text-3xl sm:text-3xl md:text-5xl leading-tight">
            Welcome. <br />{" "}
            <span className="block text-green-400 font-medium mt-2">
              Takulandirani
            </span>
            <span className="block text-sm md:text-xl sm:text-lg font-semibold mt-3">
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
            <p className="hidden md:flex font-medium text-base leading-7 text-gray-100">
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
              <div className="bg-amber-50/20 hidden sm:flex flex-col absolute right-0 rounded-3xl px-4 text-sm p-2">
                <h1 className="justify-center w-50 flex font-bold">
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
