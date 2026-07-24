const CardBody = ({ children, className = "" }) => {
  return (
    <div
      className={`text-sm md:text-[15px] leading-7 text-slate-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default CardBody;
