const Button = ({
  children,
  className = "",
  onClick,
  type = "button",
  variant = "primary",
  ...props
}) => {
  const baseStyles =
    "px-6 py-2 cursor-pointer rounded-full border transition-all duration-200 whitespace-nowrap font-medium tracking-[0.02em] focus:outline-none focus:ring-1 focus:ring-emerald-400/50 hover:-translate-y-0.5";

  const variants = {
    primary:
      "border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-700",
    secondary:
      "border-emerald-200 bg-white text-emerald-700 hover:bg-emerald-50",
    wierd: "border-amber-300 bg-amber-50 text-amber-800 hover:bg-amber-100",
    variant:
      "border-emerald-400 bg-emerald-50 text-emerald-700 hover:bg-emerald-100",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] ?? variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
