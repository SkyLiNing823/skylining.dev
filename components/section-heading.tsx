type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-4xl fade-up">
      {eyebrow ? (
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-gradient-to-r from-sky-700/60 to-sky-700/5" aria-hidden="true" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-sky-900/55 sm:text-xs">{eyebrow}</p>
        </div>
      ) : null}
      <h1 className="font-display mt-5 text-[clamp(2.75rem,7vw,5rem)] font-normal leading-[1.02] tracking-[-0.047em] text-sky-950 text-balance">
        {title}
      </h1>
      {description ? (
        <p className="mt-6 max-w-3xl text-base leading-7 text-sky-950/60 sm:mt-7 sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
