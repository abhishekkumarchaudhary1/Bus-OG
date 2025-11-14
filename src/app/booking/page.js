"use client";

import BookingForm from "@/components/BookingForm";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

export default function BookingPage() {
  const searchParams = useSearchParams();
  const vehicle = searchParams?.get("vehicle") || "";

  return (
    <div className="space-y-10">
      <motion.header
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-semibold text-[#1a1a1a]">Booking</h1>
        <p className="max-w-3xl text-base leading-relaxed text-[#6b6b6b]">
          Fill in the trip details and our coordinators will confirm your vehicle
          assignment within the hour. We will reach out if any additional
          information is required for dispatch.
        </p>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <BookingForm defaultVehicle={vehicle} />
      </motion.div>
    </div>
  );
}

