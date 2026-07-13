export const CardHeader = ({ children, className = "" }) => {
  return <div className={`mb-4 font-bold opacity-80 ${className}`}>{children}</div>;
};

export default CardHeader;
