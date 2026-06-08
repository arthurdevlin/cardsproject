import Button from "../../components/Button";
import heroImage from "../../assets/lakemalawihero.png";
import GlassCard from "../../components/cards/GlassCard";

const Hero = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden flex-wrap:wrap px-4 py-30">
      <img
        src={heroImage}
        alt="Lake Malawi"
        className="absolute inset-0 w-full h-full object-cover object-center md:object-right"
      />
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

        <div className="relative flex-1 flex flex-col md:justify-between w-full text-center md:text-left z-10">
        {/**All Hero textx */}
          <div className="relative mx-auto px-6">
            <h1 className="text-xl font-bold text-gray-100 ">
            Discover. <span className="text-gray-400 text-4xl ">Malawi</span>
            </h1>
          <h2 className="text-2xl font-semibold text-white max-w-3xl">
            the <span className="text-gray-300 pr-2">Warm Heart</span> of
            <span className="text-3xl ml-2">Africa</span>
          </h2>
        </div>

        {/**All foot features container*/}
        <div className=" md:absolute  flex flex-col md:flex-row md:justify-between md:gap-30 md:p-6 mx-4 md:mx-auto md:my-60 w-full mt-auto">
          <div className=" w-full right-0 px-2 py-3 justify-center flex-row border-white md:w-1/2">
            <p className="text-white text-wrap md:text-justify text-sm">
              From the serene shores of Lake Malawi to the lively nights of
              Blantyre. Discover hidden gems and unforgettable adventures.
            </p>
            <Button className="md:mt-6" variant="secondary">
              Explore Now
            </Button>
          </div>

          <div className="relative md:w-full justify-center flex flex-col md:flex-row gap-4 mt-6 md:mt-0 items-center">
              {" "}
              <GlassCard className="flex-col"><h1>ICON HERE</h1><p className="text-white">Experience the best of Malawi</p></GlassCard>
              <GlassCard><h1>ICON HERE</h1><p className="text-white">Experience the best of Malawi</p></GlassCard>
              <GlassCard><h1>ICON HERE</h1><p className="text-white">Experience the best of Malawi</p></GlassCard>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
