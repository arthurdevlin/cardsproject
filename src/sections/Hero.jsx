import Button from "../components/Button";
import GlassCard from "../components/cards/GlassCard";

const Hero = () => {
  return (
    <div className='flex bg-[url("./images/beach2.jpg")] bg-cover bg-no-repeat bg-center w-full'>
      <div className=" relative bg-black/50 w-full min-h-screen text-white ">
        {/**Hero wrpper*/}
        <div className="relative mt-30 sm:mt-40 md:mt-50 m-8 text-xl sm:text-2xl md:text-4xl">
          {/**Hero text stuff */}
          <h1 className="font-semibold  ">
            Welcome. <br />{" "}
            <span className="md:text-2xl sm:text-xl text-gray-300 font-bold">
              Takulandirani
            </span>
            <span className="text-sm md:text-xl sm:text-lg font-bold">
              <h1>Xplore Malawi with our team</h1>
            </span>
          </h1>
          ---------------------------
          <p>
            Discover the beauty of Malawi with our expert guides and
            unforgettable experiences. <br />
            Make every second count with adventure and fun
          </p>
          {/**mabatan her bottom*/}
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
