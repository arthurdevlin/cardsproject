export const CardHeader = ({ children, className = "" }) => {
  return (
    <div
      className={`mb-2 font-semibold tracking-[0.02em] text-slate-900 ${className}`}
    >
      {children}
    </div>
  );
};

export default CardHeader;
