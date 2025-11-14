import Link from "next/link";

export default function HeroBanner({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  illustration,
}) {
  return (
    <section className="grid gap-10 rounded-3xl bg-gradient-to-br from-white to-[#f7f7f8] p-10 shadow-sm md:grid-cols-[1.1fr_1fr] md:items-center">
      <div className="flex flex-col gap-6">
        {eyebrow ? (
          <span className="inline-flex w-fit items-center rounded-full bg-[#e7e7e9] px-4 py-1 text-sm font-medium text-[#1a1a1a]">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="text-4xl font-semibold leading-tight text-[#1a1a1a] sm:text-5xl">
          {title}
        </h1>
        <p className="text-lg leading-relaxed text-[#6b6b6b]">{subtitle}</p>
        <div className="flex flex-col gap-4 sm:flex-row">
          {primaryCta ? (
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-[#1a1a1a] px-6 py-3 text-base font-medium text-white transition hover:bg-[#353535]"
            >
              {primaryCta.label}
            </Link>
          ) : null}
          {secondaryCta ? (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-[#1a1a1a] px-6 py-3 text-base font-medium text-[#1a1a1a] transition hover:bg-[#efefef]"
            >
              {secondaryCta.label}
            </Link>
          ) : null}
        </div>
      </div>
      <div className="flex items-center justify-center">
        {illustration ? (
          <div className="relative w-full max-w-[320px]">
            {illustration}
          </div>
        ) : null}
      </div>
    </section>
  );
}

