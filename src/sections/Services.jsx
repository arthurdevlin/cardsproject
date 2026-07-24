import cardsInfo from "../data/cardsInfo";
import ServiceCard from "../components/cards/ServiceCard";

const Services = () => {
  return (
    <section
      id="services"
      className="flex min-h-screen flex-col items-center overflow-hidden px-4 py-8 text-slate-700 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-12 lg:py-20 xl:px-16 2xl:px-20"
    >
      <div className="section-shell mb-6 flex w-full max-w-7xl flex-col items-start justify-center px-5 py-6 sm:px-6 md:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
          Services
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
          Thoughtful experiences with a clear point of view
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          From relaxed escapes to curated adventures, each offering is designed
          to feel effortless and refined.
        </p>
      </div>

      <div className="grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cardsInfo.map((item) => (
          <ServiceCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Services;
