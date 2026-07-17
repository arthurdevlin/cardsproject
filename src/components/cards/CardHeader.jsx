export const CardHeader = ({ children, className = "" }) => {
  return <div className={`mb-2 font-bold block opacity-80 ${className}`}>{children}</div>;
};

export default CardHeader;
