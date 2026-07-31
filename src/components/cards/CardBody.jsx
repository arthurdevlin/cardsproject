const CardBody = ({ children, className = "" }) => {
  return (
    <div
      className={`text-sm leading-7 text-slate-600 md:text-[15px] ${className}`}
    >
      {children}
    </div>
  );
};

export default CardBody;
