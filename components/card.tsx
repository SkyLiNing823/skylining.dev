import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type CardProps = {
  title: string;
  description: string;
  tags?: string[];
  href?: string;
  image?: string;
  imageAlt?: string;
  meta?: string;
};

export function Card({ title, description, tags = [], href, image, imageAlt = "", meta }: CardProps) {
  const content = (
    <article className="group/card h-full overflow-hidden rounded-[1.75rem] glass-card transition duration-500 hover:-translate-y-1 sm:rounded-[2rem]">
      {image ? (
        <div className="relative aspect-[1200/630] overflow-hidden border-b border-white/35 bg-white/20">
          <img src={image} alt={imageAlt} className="h-full w-full object-cover transition duration-700 group-hover/card:scale-[1.035]" />
          <div className="absolute inset-0 bg-gradient-to-t from-sky-950/20 via-transparent to-white/10" />
          {meta ? (
            <p className="absolute left-4 top-4 rounded-full border border-white/55 bg-white/55 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-sky-950/65 shadow-sm backdrop-blur-xl sm:left-5 sm:top-5">
              {meta}
            </p>
          ) : null}
        </div>
      ) : null}
      <div className="p-5 sm:p-7">
        {meta && !image ? <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-900/50">{meta}</p> : null}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold leading-snug tracking-[-0.02em] text-sky-950">{title}</h3>
          {href ? (
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/60 bg-white/35 text-sky-900/45 transition duration-300 group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5 group-hover/card:bg-white/65 group-hover/card:text-sky-800">
              <ArrowUpRight size={16} />
            </span>
          ) : null}
        </div>
        <p className="mt-4 text-sm leading-7 text-sky-950/60">{description}</p>
        {tags.length ? (
          <div className="mt-6 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span key={tag} className="pill">{tag}</span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );

  if (href) return <Link href={href} className="block h-full rounded-[2rem] outline-none focus-visible:ring-2 focus-visible:ring-sky-700/35">{content}</Link>;
  return content;
}
