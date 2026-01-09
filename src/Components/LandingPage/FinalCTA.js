"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#fdf6f2] via-[#e6f6f6] to-[#cfecee] pt-28">
      
      {/* Grid Background (Right Side) */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[linear-gradient(#0fa3a320_1px,transparent_1px),linear-gradient(90deg,#0fa3a320_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative  mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

        {/* LEFT – DOCTORS IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-start"
        >
          <motion.img
            src="/cta.png"
            alt="Medical Team"
            className="h-full drop-shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 120 }}
          />
        </motion.div>

        {/* RIGHT – CTA CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-xl"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f3d3e] leading-tight">
            We’re with you{" "}
            <span className="italic underline underline-offset-8 decoration-2 decoration-[#0fa3a3]">
              every
            </span>
            <br />
            step of the way
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Contact us today to schedule an appointment and experience
            the difference of expert diagnostics and compassionate care.
          </p>

          <motion.a
            href="tel:7065070650"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 inline-flex mb-10 items-center rounded-full bg-[#0fa3a3] px-10 py-4 text-white font-medium shadow-lg hover:bg-[#0c8c8c] transition"
          >
            Call us now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
