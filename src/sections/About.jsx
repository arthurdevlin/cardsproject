import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const highlights = [
  {
    title: "Curated stays",
    description:
      "Refined retreats and elegant spaces that feel calm, considered, and quietly luxurious.",
    tag: "Featured",
    link: "https://a0.muscache.com/im/pictures/miso/Hosting-661408212506670424/original/b00eee37-8417-4ce1-b0cb-ea99116800cc.jpeg?im_w=720",
  },

  {
    title: "Local insight",
    description:
      "Every recommendation is shaped by the people, places, and stories that make the destination real.",
    tag: "Story",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO1NlCkpQAoCV3d6-e_mU7e8HWMYC8VyIpLABg5KxH_OtJpnn1naH03xI&s=10",
  },
  {
    title: "Thoughtful travel",
    description:
      "A more polished way to experience the journey, with comfort and clarity at the center.",
    tag: "Approach",
    link: "https://d2vbr83hnyiux1.cloudfront.net/image/975050285728/image_6rokdd6sm92598400ro86b5v3q/-FWEBP-Ro:5,w:1920,h:1440,n:default",
  },
];

const About = () => {
  return (
    <section id="about" className="relative mt-24 px-4 py-12 sm:px-6 lg:px-8">
      <div className="section-shell mx-auto flex max-w-7xl flex-col gap-6 p-6 md:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
              About us
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              A refined approach to memorable travel
            </h2>
            <p className="text-base leading-7 text-slate-600 sm:text-lg">
              We create experiences that feel calm, polished, and deeply
              connected to place.
            </p>
          </div>

          <div className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
            Designed with intention
          </div>
        </div>

        <div className="rounded-3xl border border-emerald-100 bg-white p-4 sm:p-6">
          <Carousel className="w-full">
            <CarouselContent className="gap-0">
              {highlights.map((item, index) => (
                <CarouselItem
                  key={item.title}
                  baseClass="px-0 sm:px-2"
                  className="py-2"
                >
                  <div className="min-h-60 rounded-[1.25rem] border border-emerald-100 bg-emerald-50/60 p-6">
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <span className="rounded-full border border-emerald-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-700">
                        {item.tag}
                      </span>
                      <span>0{index + 1}</span>
                    </div>

                    <div className={`mt-6 space-y-2 `}>
                      <h3 className="text-2xl font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="max-w-md text-sm leading-7 text-slate-600 sm:text-base">
                        {item.description}
                      </p>
                      <img
                        src={item.link}
                        alt={item.title}
                        className="h-56 w-full rounded-2xl object-cover sm:h-64 lg:h-72"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Swipe through the highlights
              </div>

              <div className="flex items-center gap-2">
                <CarouselPrevious className="rounded-full border border-emerald-200 bg-white text-slate-700 hover:bg-emerald-50" />
                <CarouselNext className="rounded-full border border-emerald-200 bg-white text-slate-700 hover:bg-emerald-50" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default About;
