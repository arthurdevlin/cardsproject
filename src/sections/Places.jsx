import cardsData from "../data/cardsData";
import Card from "../components/cards/Card";
import CardBody from "../components/cards/CardBody";
import CardFooter from "../components/cards/CardFooter";
import CardImage from "../components/cards/CardImage";
import CardHeader from "../components/cards/CardHeader";
import CardTitle from "../components/cards/CardTitle";

const Blantyre = () => {
  return (
    <div className="bg-blue-950 min-h-screen">
      <div className=" items-center relative min-h-screen md:w-full">
        <div className="justify-center relative items-center flex flex-col pt-25 pb-4  text-white w-full px-4">
          <h1 className="sm:text-3xl text-xl md:text-4xl flex">
            Quick Pick Your first activity
          </h1>
          <p>chose out of the box activities</p>
        </div>
        <ul className="grid md:grid-cols-2">
          {cardsData.map((item) => (
            <li key={item.id}>
              {" "}
              <Card className=" gap-10 m-4">
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
