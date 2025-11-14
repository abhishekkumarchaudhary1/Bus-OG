"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamPage() {
  return (
    <div className="space-y-24">
      <motion.header
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-semibold text-[#1a1a1a]">Our team</h1>
        <p className="max-w-3xl text-base leading-relaxed text-[#6b6b6b]">
          Meet the leadership team driving Bus OG forward with innovation and
          excellence.
        </p>
      </motion.header>

      {/* CEO Hero Section - Content first, then photo */}
      <motion.section
        className="grid gap-10 rounded-3xl bg-gradient-to-br from-white to-[#f7f7f8] p-10 shadow-sm md:grid-cols-[1.1fr_1fr] md:items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-flex w-fit items-center rounded-full bg-[#e7e7e9] px-4 py-1 text-sm font-medium text-[#1a1a1a]">
            Leadership
          </span>
          <h2 className="text-4xl font-semibold leading-tight text-[#1a1a1a] sm:text-5xl">
            Vivek Verma
          </h2>
          <p className="text-lg font-medium text-[#6b6b6b]">CEO</p>
          <p className="text-base leading-relaxed text-[#6b6b6b]">
            With a vision to transform corporate and personal transportation, Vivek
            leads Bus OG with strategic insight and a commitment to excellence. His
            leadership drives innovation in fleet management and customer service,
            ensuring every journey is seamless and reliable.
          </p>
        </motion.div>
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative h-80 w-full max-w-[320px] overflow-hidden rounded-3xl bg-gradient-to-br from-[#e7e7e9] to-[#efefef]">
            <Image
              src="https://media.licdn.com/dms/image/v2/D5603AQEdHENOcMo3SQ/profile-displayphoto-crop_800_800/B56ZflMTGVHQAc-/0/1751896898860?e=1764806400&v=beta&t=gu6h_KpzMrSMkRlbtZFMBFsq2BLFwfSnkhEwr4FAFcQ"
              alt="Vivek Verma - CEO"
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* CTO Hero Section - Photo first, then content (alternate style) */}
      <motion.section
        className="grid gap-10 rounded-3xl bg-gradient-to-br from-white to-[#f7f7f8] p-10 shadow-sm md:grid-cols-[1fr_1.1fr] md:items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="flex items-center justify-center order-2 md:order-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative h-80 w-full max-w-[320px] overflow-hidden rounded-3xl bg-gradient-to-br from-[#e7e7e9] to-[#efefef]">
            <Image
              src="https://www.abhishek-chaudhary.com/_next/image?url=%2Fprofile-image.jpg&w=1920&q=75"
              alt="Abhishek Kumar Chaudhary - CTO"
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col gap-6 order-1 md:order-2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="inline-flex w-fit items-center rounded-full bg-[#e7e7e9] px-4 py-1 text-sm font-medium text-[#1a1a1a]">
            Technology
          </span>
          <h2 className="text-4xl font-semibold leading-tight text-[#1a1a1a] sm:text-5xl">
            Abhishek Kumar Chaudhary
          </h2>
          <p className="text-lg font-medium text-[#6b6b6b]">CTO</p>
          <p className="text-base leading-relaxed text-[#6b6b6b]">
            Abhishek brings technical expertise and innovation to Bus OG,
            overseeing the development of cutting-edge solutions for fleet
            management and customer experience. His passion for technology drives
            continuous improvement in our digital platforms and operational
            efficiency.
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
}

