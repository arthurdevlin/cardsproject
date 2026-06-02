import Button from "../Button";
import heroImage from "../../assets/lakemalawihero.png";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center text-center gap-6 py-20 px-4 bg-cover w-full bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black/50 before:pointer-events-none"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-white">Discover Malawi</h1>
        <h2 className="text-2xl font-semibold text-white max-w-3xl">
          The Warm Heart of Africa
        </h2>
        <p className="text-sm max-w-2xl text-white">
          From the towering peaks of Mulanje Mountain, the crystal waters of Lake
          Malawi, and the vibrant nightlife of Blantyre City, to serene forest
          retreats and unforgettable wildlife safaris — Malawi invites you to
          explore adventure, relaxation, and culture all in one destination.
        </p>
        <Button>Explore Malawi</Button>
      </div>
    </div>
  );
};

export default Hero;
