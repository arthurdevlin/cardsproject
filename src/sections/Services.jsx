import cardsInfo from "../data/cardsInfo";
import ServiceCard from "../components/cards/ServiceCard";

const Services = () => {
  return (
    <section className="min-h-screen flex text-gray-900 items-center flex-col overflow-hidden  sm:m-10 py-10 sm:py-20 ">
      <div className="flex flex-col items-center justify-center  mb-4 animate-fadeIn">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800">
          Xplore our Services
        </h1>
        <span className="text-center text-sm">experience Malawi with us</span>
        <span className="text-center text-sm md:text-lg text-gray-600 max-w-xl">
          ...from a wild friday night to soul-soothing beaches of Lake Malawi...
        </span>
      </div>
      {/* Service cards wrapper */}
      <div className=" w-full flex flex-col justify-center p-6 m-4 sm:items-start md:px-3 sm:rounded-2xl bg-blue-950 transition-all duration-300">
        <div className="text-xl sm:hidden font-bold text-left  text-white mb-4">
          <h1 className="text-2xl font-semibold">Give it a short!</h1>
          <p>chose from our range of services:</p>
        </div>
        {/* widescreen grabber hidden */}
        <div className="flex flex-col justify-center items-center w-full border border-blue-200    shadow-xl bg-white rounded-lg p-2 pb-8">
          <div className="text-xl  items-center font-bold hidden bg-blue-950 py-2 px-4 rounded-2xl sm:flex flex-col text-white mb-4">
            Give it a short!
            <p>chose from our range of services:</p>
          </div>
          <div className="place-items-center grid grid-cols-1 sm:grid-cols-3  gap-2 sm:gap-3 md:gap-4 items-stretch ">
            {cardsInfo.map((item) => (
              <ServiceCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
