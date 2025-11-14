import HeroBanner from "@/components/HeroBanner";
import ServiceCard from "@/components/ServiceCard";
import {
  BusIllustration,
  CanterIllustration,
  CarIllustration,
} from "@/components/VehicleIllustrations";
import { serviceHighlights, services } from "@/data/services";
import Link from "next/link";

const illustrationMap = {
  car: CarIllustration,
  bus: BusIllustration,
  canter: CanterIllustration,
};

const currentYear = new Date().getUTCFullYear();

export default function Home() {
  return (
    <div className="space-y-24">
      <HeroBanner
        eyebrow="Skip the traffic, take your trip."
        title="Ride as you like it."
        subtitle="Reserve cars, buses, and canters with trusted drivers for corporate runs, private travel, and light logistics. We coordinate the fleet so you can focus on the destination."
        primaryCta={{ label: "Book car", href: "/booking?vehicle=car" }}
        secondaryCta={{ label: "Explore services", href: "/services" }}
        illustration={
          <div className="mx-auto flex h-64 w-64 items-center justify-center rounded-full bg-[#efefef]">
            <CarIllustration className="h-40 w-auto" />
          </div>
        }
      />

      <section className="space-y-10">
        <header className="space-y-3">
          <h2 className="text-3xl font-semibold text-[#1a1a1a]">
            Vehicles ready for your next assignment.
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-[#6b6b6b]">
            Each service includes vetted drivers, route planning support, and
            a responsive dispatch team. Choose the vehicle that fits your
            journey and we will handle the rest.
          </p>
        </header>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              cta={service.cta}
              href={service.href}
              Illustration={illustrationMap[service.id]}
            />
          ))}
        </div>
      </section>

      <section className="grid gap-8 rounded-3xl border border-[#e0e0e2] bg-white p-10 shadow-sm md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          <span className="inline-flex items-center rounded-full bg-[#efefef] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#6b6b6b]">
            Dispatch advantage
          </span>
          <h2 className="text-2xl font-semibold text-[#1a1a1a]">
            Coordinated moves for teams, guests, and cargo.
          </h2>
          <p className="text-base leading-relaxed text-[#6b6b6b]">
            From sunrise site visits to late-night airport transfers, Bus OG
            keeps the wheels turning. Our coordinators balance routes, verify
            drivers, and monitor each trip until the final drop-off.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {serviceHighlights.map((highlight) => (
              <div
                key={highlight.label}
                className="rounded-2xl bg-[#f7f7f8] p-4 text-sm"
              >
                <p className="text-xs uppercase tracking-wide text-[#6b6b6b]">
                  {highlight.label}
                </p>
                <p className="mt-1 text-base font-semibold text-[#1a1a1a]">
                  {highlight.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-6 rounded-3xl bg-gradient-to-b from-[#f7f7f8] to-white p-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">
              Driver network on standby
            </h3>
            <p className="text-sm leading-relaxed text-[#6b6b6b]">
              Access experienced chauffeurs, bus captains, and canter crews that
              already know Nairobi, Mombasa, and Kisumu traffic patterns.
            </p>
          </div>
          <Link
            href="/drivers"
            className="inline-flex items-center justify-center rounded-full border border-[#1a1a1a] px-5 py-3 text-sm font-semibold text-[#1a1a1a] transition hover:bg-[#efefef]"
          >
            View driver contacts
          </Link>
        </div>
      </section>

      <section className="grid gap-10 rounded-3xl border border-[#e0e0e2] bg-[#f7f7f8] p-10 shadow-sm md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1a1a1a]">
            Ready to plan your itinerary?
          </h2>
          <p className="text-base leading-relaxed text-[#6b6b6b]">
            Tell us about your pickup points, headcount, or cargo specs. We will
            recommend the right vehicles and drivers, then send a schedule for
            approval within the hour.
          </p>
        </div>
        <div className="grid gap-3 text-sm text-[#6b6b6b]">
          <div className="rounded-2xl bg-white px-5 py-4 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-[#8aa6ff]">
              Book car
            </p>
            <p className="text-base font-semibold text-[#1a1a1a]">
              Executive sedans and SUVs for airport, board meetings, and guest
              transport.
            </p>
          </div>
          <div className="rounded-2xl bg-white px-5 py-4 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-[#8aa6ff]">
              Book bus
            </p>
            <p className="text-base font-semibold text-[#1a1a1a]">
              26–56 seater options with daily log sheets and onboard support.
            </p>
          </div>
          <div className="rounded-2xl bg-white px-5 py-4 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-[#8aa6ff]">
              Book canter
            </p>
            <p className="text-base font-semibold text-[#1a1a1a]">
              Light trucks for containers, exhibitions, and time-sensitive cargo.
            </p>
          </div>
        </div>
      </section>

      <footer className="grid gap-4 border-t border-[#ececee] pt-8 text-sm text-[#6b6b6b] sm:grid-cols-[1fr_auto] sm:items-center">
        <p>© {currentYear} Bus OG. Vehicles and drivers that keep you moving.</p>
        <div className="flex gap-5">
          <Link href="/services" className="hover:text-[#1a1a1a]">
            Services
          </Link>
          <Link href="/booking" className="hover:text-[#1a1a1a]">
            Booking
          </Link>
          <a href="mailto:hello@busog.city" className="hover:text-[#1a1a1a]">
            hello@busog.city
          </a>
        </div>
      </footer>
    </div>
  );
}
