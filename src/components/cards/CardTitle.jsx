export const CardTitle = ({ children, className = "" }) => {
  return (
    <h3 className={`mb-2 text-xl font-semibold text-slate-900 ${className}`}>
      {children}
    </h3>
  );
};

export default CardTitle;
