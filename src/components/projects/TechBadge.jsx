export default function TechBadge({ children }) {
  return (
    <span
      className="
      rounded-full
      border
      border-primary/40
      bg-primary/10
      px-4
      py-2
      text-sm
      font-medium
      text-primary
      transition
      hover:bg-primary
      hover:text-white
      "
    >
      {children}
    </span>
  );
}