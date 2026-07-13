import GlassCard from "./GlassCard";
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
  const iconClass = "scale-150 md:scale-200 mb-4 opacity-80 text-indigo-600";
  const Icon = iconMap[item.icon];

  return (
    <GlassCard >
      {Icon ? Icon(iconClass) : null}
      <CardHeader>{item.title}</CardHeader>
      <CardBody className="flex flex-col items-center justify-center px-4">
        <p className="text-justify text-sm text-gray-700">{item.description}</p>
        <Button
          variant="variant"
          className="mt-4 border border-gray-300 text-sm opacity-90"
        >
          {item.buttonText}
        </Button>
      </CardBody>
    </GlassCard>
  );
};

export default ServiceCard;
