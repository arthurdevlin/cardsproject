import cardsInfo from "../data/cardsInfo";
import ServiceCard from "../components/cards/ServiceCard";

const Services = () => {
  return (
    <section className="min-h-screen flex  text-gray-900 items-center flex-col overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="flex flex-col items-center justify-center pt-4 py-4 px-2 sm:px-4 md:px-6 animate-fadeIn bg-blue-950 rounded-2xl shadow-lg shadow-blue-400/50  mb-5 md:mb-10">
        <h1 className="text-lg sm:text-2xl md:text-4xl font-bold text-center text-white  mb-1">
          Xplore our Services
        </h1>

        <span className="text-center text-sm md:text-lg font-thin  text-white max-w-md">
          ...from a wild friday night to soul-soothing beaches of Lake Malawi...
        </span>
      </div>
      {/* Service cards wrapper */}
      <div className=" w-full flex flex-col justify-center items-center md:px-3  sm:rounded-2xl transition-all duration-300 ">
        <div className="flex-col justify-center rounded-2xl  p-4 sm:p-6 w-full">
          <h1 className="text-2xl font-semibold">Give it a short!</h1>
          <p>chose from our range of services:</p>
        </div>
        {/* widescreen grabber hidden */}

        <div className="text-xl  justify-center items-center font-bold hidden  py-2 px-4 rounded-2xl flex-col text-white mb-4">
          Give it a short!
          <p>chose from our range of services:</p>
        </div>
        <div className="place-items-center grid grid-cols-1 sm:grid-cols-3  gap-2 sm:gap-3 md:gap-4 items-stretch ">
          {cardsInfo.map((item) => (
            <ServiceCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
