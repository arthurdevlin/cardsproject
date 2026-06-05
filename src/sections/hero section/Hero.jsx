import Button from "../../components/Button";
import heroImage from "../../assets/lakemalawihero.png";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col items-center min-h-screen justify-center w-full text-center gap-6 py-20 px-4 bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black/60 before:pointer-events-none"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center gap-2">
        <h1 className="text-6xl font-bold text-gray-100 ">
          Discover. <span className="text-gray-400 text-3xl ">Malawi</span>
        </h1>
        <h2 className="text-2xl font-semibold text-white max-w-3xl">
          the <span className="text-gray-400 pr-2">Warm Heart</span> of
          <span className="text-5xl ml-2">Africa</span>
        </h2>
        <p className="font-extralight text-justify w-full text-sm relative text-white max-w-2xl">
          From the towering peaks of Mulanje Mountain, the crystal waters of
          Lake Malawi, and the vibrant nightlife of Blantyre City, to serene
          forest retreats and unforgettable wildlife safaris — Malawi invites
          you to explore adventure, relaxation, and culture all in one
          destination.
        </p>
        <Button className="text-xl" variant="">
          Explore Malawi
        </Button>
      </div>
    </div>
  );
};

export default Hero;
