import GlassCard from "../components/cards/GlassCard";
import CardHeader from "../components/cards/CardHeader";
import CardBody from "../components/cards/CardBody";
import Button from "../components/Button";

import { FaCocktail } from "react-icons/fa";
import { FaPersonSwimming } from "react-icons/fa6";
import { FaHiking } from "react-icons/fa";

const Services = () => {
  return (
    <div className="min-h-screen flex text-gray-900 items-center flex-col overflow-hidden  m-10 md:m-10 ">
      {/**Text stuff */}
      <div className="flex flex-col items-center justify-center gap-4">
        <h1
          className="
       text-2xl md:text-4xl "
        >
          <h1> --- Quickly Xplore ---</h1>
        </h1>
        Xperience Malawi with us
        <p className="">
          ...from a wild friday night to soul-soothing beaches of Lake Malawi
        </p>
      </div>
      {/**Service cards */}
      <div className="flex flex-col sm:flex-row sm:mx-2 items-center justify-center gap-4 mt-10">
        <GlassCard>
          <FaCocktail className="scale-150 opacity-70" />

          <CardBody>
            <p className="text-justify">
              {" "}
              from dusk till dawn! Xplore nights out with the best kids in
              town.Best spots to ease the pressure with the best drinks MADE in
              MALAWI
            </p>
            <Button
              variant="secondary"
              className="mt-4 border border-gray-300 text-sm opacity-70"
            >
              Learn More
            </Button>
          </CardBody>
        </GlassCard>
        <GlassCard>
          <FaPersonSwimming className="scale-150 opacity-70" />
          <CardBody>
            <p className="text-justify">
              {" "}
              from dusk till dawn! Xplore nights out with the best kids in
              town.Best spots to ease the pressure with the best drinks MADE in
              MALAWI
            </p>
            <Button
              variant="secondary"
              className="mt-4 border border-gray-300 text-sm opacity-70"
            >
              Learn More
            </Button>
          </CardBody>
        </GlassCard>
        <GlassCard>
          <FaHiking className="scale-150 opacity-70" />
          <CardBody>
            <p className="text-justify">
              {" "}
              from dusk till dawn! Xplore nights out with the best kids in
              town.Best spots to ease the pressure with the best drinks MADE in
              MALAWI
            </p>
            <Button
              variant="secondary"
              className="mt-4 border border-gray-300 text-sm opacity-70"
            >
              Learn More
            </Button>
          </CardBody>
        </GlassCard>
      </div>
    </div>
  );
};

export default Services;
