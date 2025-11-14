"use client";

import DriverDirectory from "@/components/DriverDirectory";
import { drivers } from "@/data/drivers";
import { motion } from "framer-motion";

export default function DriversPage() {
  return (
    <div className="space-y-12">
      <motion.header
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-semibold text-[#1a1a1a]">
          Driver contacts
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-[#6b6b6b]">
          Every driver on this roster has completed route orientation, document
          verification, and safety drills. Use the request button to notify our
          dispatch desk about your preference.
        </p>
      </motion.header>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <DriverDirectory drivers={drivers} />
      </motion.div>
    </div>
  );
}

