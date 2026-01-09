"use client";

import { motion } from "framer-motion";

export default function MissionStatement() {
  return (
    <section
      className="relative h-[520px] flex items-center justify-center bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,61,62,0.65), rgba(15,61,62,0.65)), url('/bg.png')",
      }}
    >
      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-5xl px-6 text-center text-white"
      >
        {/* TOP LINE */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <span className="h-px w-24 bg-white/60" />
          <span className="text-4xl text-[#3fd1d6] leading-none">“</span>
          <span className="h-px w-24 bg-white/60" />
        </div>

        {/* TEXT */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-loose">
          Our mission is to provide accurate and timely
          medical diagnostic services to help you take control
          of your health.
        </h2>

        {/* BOTTOM LINE */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <span className="h-px w-24 bg-white/60" />
          <span className="text-4xl text-[#3fd1d6] leading-none">”</span>
          <span className="h-px w-24 bg-white/60" />
        </div>
      </motion.div>
    </section>
  );
}
