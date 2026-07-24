import Card from "./Card";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import Button from "../../Button";
import { FaCocktail, FaHiking } from "react-icons/fa";
import { FaPersonSwimming } from "react-icons/fa6";

const iconMap = {
  FaCocktail: (cls) => <FaCocktail className={cls} />,
  FaPersonSwimming: (cls) => <FaPersonSwimming className={cls} />,
  FaHiking: (cls) => <FaHiking className={cls} />,
};

const ServiceCard = ({ item }) => {
  const iconClass = "scale-150 md:scale-200 mb-3 relative text-emerald-600";
  const Icon = iconMap[item.icon];

  return (
    <Card
      variant="primary"
      className="w-full flex-col items-center justify-center p-6"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
        {Icon ? Icon(iconClass) : null}
      </div>
      <CardHeader className="flex w-full justify-center text-center text-slate-900">
        {item.title}
      </CardHeader>
      <CardBody className="flex flex-col items-center justify-center px-2 text-center">
        <p className="text-center text-sm leading-7 text-slate-600">
          {item.description}
        </p>
        <Button variant="secondary" className="mt-4 text-sm">
          {item.buttonText}
        </Button>
      </CardBody>
    </Card>
  );
};

export default ServiceCard;
