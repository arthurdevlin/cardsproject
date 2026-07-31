import { useEffect, useState } from "react";
import Button from "../Button";
import { FaLocationDot } from "react-icons/fa6";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import GlassCard from "../components/cards/GlassCard";

const events = [
  {
    title: "Blues Bar & Restaurant",
    subtitle: "KucheKuche Launch",
    description:
      "Live music, artisan drinks, and a relaxed evening by the city lights.",
  },
  {
    title: "Sunbird Nkopola",
    subtitle: "Weekend Escape",
    description:
      "A scenic coastal retreat with sunset dining and lakeside activities.",
  },
  {
    title: "Lake Malawi Cruise",
    subtitle: "Sunset Sail",
    description:
      "A calm voyage with golden-hour views and fresh local flavors.",
  },
];

const Hero = () => {
  const [activeEvent, setActiveEvent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveEvent((current) => (current + 1) % events.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setActiveEvent((current) => (current - 1 + events.length) % events.length);
  };

  const goToNext = () => {
    setActiveEvent((current) => (current + 1) % events.length);
  };

  return (
    <section className="flex w-full bg-[url('./images/beach2.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="w-full min-h-screen bg-slate-950/70 text-white backdrop-brightness-75">
        <div className="mx-auto flex max-w-7xl flex-col px-6 pt-20 sm:px-8 md:pt-32 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-1 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">
              Discover Malawi
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Welcome.
              <span className="mt-1 block font-medium text-emerald-300">
                Takulandirani
              </span>
              <span className="mt-1 block sm:text-lg font-semibold text-slate-100 md:text-2xl">
                Xplore Malawi with our team
              </span>
            </h1>
          </div>

          <div className="mt-6 flex-col  lg:flex-row lg:items-end lg:justify-between">
            <div className="relative sm:w-1/2 bg-white/15 rounded-3xl p-4  border-b-emerald-400 mt-1 mb-2  hover:border-emerald-300/30 hover:shadow-[0_20px_50px_rgba(16,185,129,0.12)]">
              {" "}
              <p className="sm:w-full flex p-1 mb-1">
                Discover the beauty of Malawi with our expert guides and
                unforgettable experiences.
              </p>{" "}
              <div className="relative flex gap-3">
                {" "}
                <Button variant="secondary">Browse</Button>
                <Button> Sign Up</Button>{" "}
              </div>
            </div>

            <div className="flex sm:absolute sm:top-57 sm:right-3 flex-col rounded-[1.4rem] border border-white/10 bg-slate-900/75 px-4 py-4 text-sm shadow-[0_20px_60px_rgba(2,8,23,0.35)] sm:max-w-xs">
              <div className=" flex items-center justify-between">
                <h2 className="text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-200">
                  Trending events
                </h2>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={goToPrevious}
                    className="rounded-full border border-white/10 bg-white/10 p-2 text-white transition hover:bg-green-300 hover:text-taupe-950"
                    aria-label="Previous event"
                  >
                    <LuChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={goToNext}
                    className="rounded-full border border-white/10 bg-white/10 p-2 text-white transition hover:bg-green-300 hover:text-taupe-950"
                    aria-label="Next event"
                  >
                    <LuChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <GlassCard className="flex items-start gap-2 rounded-2xl border border-white/10 bg-slate-800/70 p-3 text-slate-100">
                <FaLocationDot className="mt-1 shrink-0 text-emerald-300" />
                <div className="space-y-1">
                  <p className="font-semibold text-white">
                    {events[activeEvent].title}
                  </p>
                  <p className="text-emerald-300">
                    {events[activeEvent].subtitle}
                  </p>
                  <p className="text-sm leading-6 text-slate-300">
                    {events[activeEvent].description}
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
