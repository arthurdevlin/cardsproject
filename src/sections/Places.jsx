import cardsData from "../data/cardsData";
import Card from "../components/cards/Card";
import CardBody from "../components/cards/CardBody";
import CardFooter from "../components/cards/CardFooter";
import CardImage from "../components/cards/CardImage";
import CardHeader from "../components/cards/CardHeader";
import CardTitle from "../components/cards/CardTitle";

const Blantyre = () => {
  return (
    <div className="min-h-screen bg-transparent px-4 py-8 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="section-shell relative overflow-hidden px-5 py-8 sm:px-6 md:px-8">
        <div className="flex w-full flex-col items-start justify-center pb-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Highlights
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
            Choose a setting that matches your mood
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            A small collection of inspiring destinations, presented with clarity
            and calm.
          </p>
        </div>
        <ul className="grid gap-4 md:grid-cols-2">
          {cardsData.map((item) => (
            <li key={item.id}>
              <Card className="m-0 gap-6 p-5">
                <CardTitle>{item.category}</CardTitle>
                <CardImage src={item.image}></CardImage>

                <CardFooter>
                  {item.CardFooter}
                  <CardHeader>{item.title}</CardHeader>
                  <CardBody>{item.description}</CardBody>
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blantyre;
