import {
  createContext,
  useContext,
  useEffect,
  useState,
  Children,
} from "react";

const CarouselContext = createContext({
  activeIndex: 0,
  setActiveIndex: () => {},
  totalItems: 0,
  setTotalItems: () => {},
});

export const Carousel = ({ children, className = "" }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    if (totalItems > 0 && activeIndex >= totalItems) {
      setActiveIndex(totalItems - 1);
    }
  }, [activeIndex, totalItems]);

  return (
    <CarouselContext.Provider
      value={{ activeIndex, setActiveIndex, totalItems, setTotalItems }}
    >
      <div className={`relative overflow-hidden ${className}`}>{children}</div>
    </CarouselContext.Provider>
  );
};

export const CarouselContent = ({ children, className = "" }) => {
  const { activeIndex, setTotalItems } = useContext(CarouselContext);

  useEffect(() => {
    const count = Children.toArray(children).length;
    setTotalItems(count);
  }, [children, setTotalItems]);

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {Children.map(children, (child, index) => (
          <div key={index} className="min-w-full">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export const CarouselItem = ({
  children,
  className = "",
  baseClass = "m-4",
}) => {
  return (
    <div className={`min-w-full ${className} ${baseClass}`}>{children}</div>
  );
};

export const CarouselPrevious = ({ className = "" }) => {
  const { activeIndex, setActiveIndex } = useContext(CarouselContext);

  return (
    <button
      type="button"
      onClick={() => setActiveIndex((current) => Math.max(current - 1, 0))}
      disabled={activeIndex <= 0}
      className={`rounded-full px-3 py-2 text-sm text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40 ${className}`}
      aria-label="Previous slide"
    >
      ←
    </button>
  );
};

export const CarouselNext = ({ className = "" }) => {
  const { activeIndex, setActiveIndex, totalItems } =
    useContext(CarouselContext);

  return (
    <button
      type="button"
      onClick={() =>
        setActiveIndex((current) => Math.min(current + 1, totalItems - 1))
      }
      disabled={activeIndex >= totalItems - 1}
      className={`rounded-full px-3 py-2 text-sm text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40 ${className}`}
      aria-label="Next slide"
    >
      →
    </button>
  );
};
