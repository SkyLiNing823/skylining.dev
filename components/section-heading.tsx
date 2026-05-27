type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl fade-up">
      {eyebrow ? <p className="text-sm font-medium uppercase tracking-[0.22em] text-ocean">{eyebrow}</p> : null}
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-50 md:text-6xl">{title}</h1>
      {description ? <p className="mt-6 text-lg leading-8 text-slate-300">{description}</p> : null}
    </div>
  );
}
