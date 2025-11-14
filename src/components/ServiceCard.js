"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ServiceCard({ title, description, cta, href, Illustration }) {
  return (
    <motion.article
      className="flex flex-col gap-5 rounded-3xl border border-[#e0e0e2] bg-gradient-to-b from-white to-[#f7f7f8] p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex h-40 items-center justify-center rounded-2xl bg-[#f0f0f2]">
        {Illustration ? <Illustration className="h-28 w-auto" /> : null}
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold text-[#1a1a1a]">{title}</h3>
        <p className="text-base leading-relaxed text-[#6b6b6b]">
          {description}
        </p>
      </div>
      <Link
        href={href}
        className="inline-flex w-fit items-center gap-2 rounded-full bg-[#1a1a1a] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#353535]"
      >
        {cta}
        <span aria-hidden="true">→</span>
      </Link>
    </motion.article>
  );
}

