export default function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <div className="mb-14">

      <p className="text-primary font-semibold uppercase tracking-widest">
        {subtitle}
      </p>

      <h2 className="text-4xl font-bold mt-3">
        {title}
      </h2>

    </div>
  );
}