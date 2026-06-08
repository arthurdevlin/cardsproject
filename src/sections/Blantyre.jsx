import cardsData from "../data/cardsData";
import Card from "../components/cards/Card";
import CardBody from "../components/cards/CardBody";
import CardFooter from "../components/cards/CardFooter";
import CardImage from "../components/cards/CardImage";
import CardHeader from "../components/cards/CardHeader";
import CardTitle from "../components/cards/CardTitle";

const Blantyre = () => {
  return (
    <div>
      <div className="max-h-screen relative bg-white md:w-full">
        <ul className="grid md:grid-cols-2">
          {cardsData.map((item) => (
            <li key={item.id}>
              {" "}
              <Card className=" gap-10 m-4">
                <CardTitle>{item.category}</CardTitle>
                <CardHeader>{item.title}</CardHeader>

                <CardBody>{item.description}</CardBody>
                <CardImage src={item.image}></CardImage>
                <CardFooter>{item.CardFooter}</CardFooter>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blantyre;
