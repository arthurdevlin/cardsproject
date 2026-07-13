import cardsInfo from "../data/cardsInfo";
import ServiceCard from "../components/cards/ServiceCard";

const Services = () => {
  return (
    <section className="min-h-screen flex text-gray-900 items-center flex-col overflow-hidden mt-15 md:m-10 py-8">
      <div className="flex flex-col items-center justify-center mt-8 animate-fadeIn">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800">
          Xplore our Services
        </h1>
        <span className="text-center text-sm">experience Malawi with us</span>
        <span className="text-center text-sm md:text-lg text-gray-600 max-w-xl">
          ...from a wild friday night to soul-soothing beaches of Lake Malawi...
        </span>
      </div>

      <div className="w-full max-w-6xl px-4 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">
          {cardsInfo.map((item) => (
            <ServiceCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
