export default function Button({
  children,
  className = "",
  ...props
}) {
  return (
    <button
      className={`btn btn-primary rounded-xl ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}