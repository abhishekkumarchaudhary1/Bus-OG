import ServiceCard from "@/components/ServiceCard";
import {
  BusIllustration,
  CanterIllustration,
  CarIllustration,
} from "@/components/VehicleIllustrations";
import { services } from "@/data/services";

const illustrationMap = {
  car: CarIllustration,
  bus: BusIllustration,
  canter: CanterIllustration,
};

export const metadata = {
  title: "Services | Bus OG Vehicle Rentals",
  description:
    "Compare Bus OG rental services for cars, buses, and canters, each with vetted drivers and dispatch support.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-16">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold text-[#1a1a1a]">Our services</h1>
        <p className="max-w-3xl text-base leading-relaxed text-[#6b6b6b]">
          Each booking includes vetted drivers, live dispatch updates, and
          flexible scheduling. Choose the service that matches your trip and we
          will finalize the rest.
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

      <section className="space-y-5 rounded-3xl border border-[#e0e0e2] bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-[#1a1a1a]">
          Personal concierge for every booking
        </h2>
        <p className="text-base leading-relaxed text-[#6b6b6b]">
          Need to split passengers, add extra stops, or load stage equipment?
          Your Bus OG coordinator will tailor manifests, confirm the right
          drivers, and share service updates on WhatsApp or email—whichever you
          prefer.
        </p>
      </section>
    </div>
  );
}

