

const CardBody = ({ children, className = "" }) => {
  return <div className={`text-sm md:text-lg text-gray-600  ${className}`}>{children}</div>;
};

export default CardBody;

