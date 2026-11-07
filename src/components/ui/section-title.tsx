
interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionTitleProps) {
  return (
    <div
      className={`
        flex flex-col gap-3
        ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}
      `}
    >
      {eyebrow && (
        <span className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-brand-rose">
          {eyebrow}
        </span>
      )}

      <h2 className="font-heading text-3xl font-semibold text-brand-rose sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="max-w-2xl font-sans text-base leading-relaxed text-brand-rose/80 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
