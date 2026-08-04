import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-12 max-w-xl">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-warm sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-3 text-warm">{description}</p>}
    </Reveal>
  );
}
