import Button from "../Button";
import GlassCard from "../components/cards/GlassCard";

const Hero = () => {
  return (
    <div className='flex bg-[url("./images/beach2.jpg")] bg-cover bg-no-repeat bg-center w-full '>
      <div className=" bg-black/50 w-full min-h-screen text-white ">
        {/**Hero wrpper*/}
        <div className="flex-col md:justify-center items-center mt-30 mx-8 ">
          {/**Hero text stuff */}
          <h1 className="font-bold text-3xl sm:text-3xl md:text-5xl">
            Welcome. <br />{" "}
            <span className=" text-gray-300 font-bold">Takulandirani</span>
            <span className="text-sm md:text-xl sm:text-lg font-bold">
              <h1>Xplore Malawi with our team</h1>
            </span>
          </h1>
          ---------------------------
        </div>{" "}
        {/**mabatan here bottom*/}{" "}
        <div className="flex-row md:flex-col m-4 justify-between max-w-11/12">
          {" "}
          {/**Hero lg screen */}
          <div className="relative  sm:mt-10 md:30  m-4">
            <p className="text-justify hidden md:flex italic">
              Discover the beauty of Malawi with our expert guides and
              unforgettable experiences. <br />
              Make every second count with adventure and fun
            </p>
            <div className="hidden  justify-between md:flex">
              <div className="hidden md:flex flex-row gap-4 m-8">
                <Button>Discover</Button>
                <Button variant="secondary">Sign Up</Button>
              </div>

              <div>
                <GlassCard></GlassCard>
              </div>
            </div>
          </div>
          {/* mobile glasscard */}
          <div className="md:hidden justify-center flex items-center">
            <GlassCard className="justify-center items-center flex">
              <div className="flex flex-col gap-4 m-4">
                <p className="text-justify ">
                  Discover the beauty of Malawi with our expert guides and
                  unforgettable experiences. <br />
                  Make every second count with adventure and fun
                </p>
              </div>
              <Button className="w-4/5 scale-80">Discover</Button>
              <Button variant="secondary" className="w-4/5 scale-80">
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
