export const CardTitle = ({ children, className = "" }) => {
  return (
    <h3 className={`text-xl font-semibold mb-2 text-white ${className}`}>
      {children}
    </h3>
  );
};

export default CardTitle;
