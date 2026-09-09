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
    <article className="group h-full overflow-hidden rounded-3xl glass-card transition duration-300 hover:-translate-y-1 hover:border-ocean/35 hover:shadow-glow">
      {image ? (
        <div className="aspect-[1200/630] overflow-hidden border-b border-white/10 bg-black/20">
          <img src={image} alt={imageAlt} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
        </div>
      ) : null}
      <div className="p-6">
        {meta ? <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-ocean">{meta}</p> : null}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold tracking-tight text-slate-50">{title}</h3>
          {href ? <ArrowUpRight className="mt-1 shrink-0 text-slate-500 transition group-hover:text-ocean" size={18} /> : null}
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-400">{description}</p>
        {tags.length ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="pill">{tag}</span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );

  if (href) return <Link href={href}>{content}</Link>;
  return content;
}
