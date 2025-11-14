export const metadata = {
  title: "About Us | Bus OG",
  description:
    "Learn about Bus OG, our mission, and how we support corporate and individual clients with reliable transport and logistics.",
};

const pillars = [
  {
    title: "Mission",
    description:
      "Deliver seamless mobility for teams and individuals by matching every trip with the right vehicle, vetted driver, and real-time support.",
  },
  {
    title: "Fleet coverage",
    description:
      "Executive cars, 26–56 seater buses, and canters up to 4 tonnes—available for recurring routes, events, and urgent assignments.",
  },
  {
    title: "Reliability",
    description:
      "24/7 dispatch, proactive driver substitutions, and transparent pricing keep your calendars and cargo on time.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold text-[#1a1a1a]">About Bus OG</h1>
        <p className="max-w-3xl text-base leading-relaxed text-[#6b6b6b]">
          Bus OG was founded to make corporate and personal transport simple,
          punctual, and accountable. Our coordinators combine deep route
          knowledge with a dependable driver network so you can move people and
          cargo without surprises.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="space-y-3 rounded-3xl border border-[#e0e0e2] bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-[#1a1a1a]">
              {pillar.title}
            </h2>
            <p className="text-sm leading-relaxed text-[#6b6b6b]">
              {pillar.description}
            </p>
          </div>
        ))}
      </section>

      <section className="space-y-4 rounded-3xl border border-[#e0e0e2] bg-[#f7f7f8] p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-[#1a1a1a]">
          Why partners rely on us
        </h2>
        <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-[#6b6b6b]">
          <li>Dedicated account managers for enterprise and event partners.</li>
          <li>Real-time tracking and updates via WhatsApp, SMS, or email.</li>
          <li>Standby drivers for last-minute trips and contingencies.</li>
          <li>Regular safety briefings and health checks for every driver.</li>
        </ul>
      </section>
    </div>
  );
}

