"use client";

import ServiceCard from "@/components/ServiceCard";
import {
  BusIllustration,
  CanterIllustration,
  CarIllustration,
} from "@/components/VehicleIllustrations";
import { services } from "@/data/services";
import { motion } from "framer-motion";

const illustrationMap = {
  car: CarIllustration,
  bus: BusIllustration,
  canter: CanterIllustration,
};

export default function ServicesPage() {
  return (
    <div className="space-y-16">
      <motion.header
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-semibold text-[#1a1a1a]">Our services</h1>
        <p className="max-w-3xl text-base leading-relaxed text-[#6b6b6b]">
          Each booking includes vetted drivers, live dispatch updates, and
          flexible scheduling. Choose the service that matches your trip and we
          will finalize the rest.
        </p>
      </motion.header>

      <motion.div
        className="grid gap-8 md:grid-cols-3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ServiceCard
              title={service.title}
              description={service.description}
              cta={service.cta}
              href={service.href}
              Illustration={illustrationMap[service.id]}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.section
        className="space-y-5 rounded-3xl border border-[#e0e0e2] bg-white p-8 shadow-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-semibold text-[#1a1a1a]">
          Personal concierge for every booking
        </h2>
        <p className="text-base leading-relaxed text-[#6b6b6b]">
          Need to split passengers, add extra stops, or load stage equipment?
          Your Bus OG coordinator will tailor manifests, confirm the right
          drivers, and share service updates on WhatsApp or email—whichever you
          prefer.
        </p>
      </motion.section>
    </div>
  );
}

