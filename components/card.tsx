import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type CardProps = {
  title: string;
  description: string;
  tags?: string[];
  href?: string;
};

export function Card({ title, description, tags = [], href }: CardProps) {
  const content = (
    <article className="group h-full rounded-3xl glass-card p-6 transition duration-300 hover:-translate-y-1 hover:border-ocean/35 hover:shadow-glow">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold tracking-tight text-slate-50">{title}</h3>
        {href ? <ArrowUpRight className="mt-1 text-slate-500 transition group-hover:text-ocean" size={18} /> : null}
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-400">{description}</p>
      {tags.length ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="pill">{tag}</span>
          ))}
        </div>
      ) : null}
    </article>
  );

  if (href) return <Link href={href}>{content}</Link>;
  return content;
}
