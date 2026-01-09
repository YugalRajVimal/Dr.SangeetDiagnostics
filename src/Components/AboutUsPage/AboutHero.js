"use client";

import { motion } from "framer-motion";


export default function AboutHero() {
  return (
    <section className="w-full">

      {/* TOP HEADER STRIP */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#bfe3e6] via-[#e6f6f6] to-[#fdf6f2]">
        
        {/* Right Grid Pattern */}
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[linear-gradient(#0fa3a320_1px,transparent_1px),linear-gradient(90deg,#0fa3a320_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative max-w-7xl mx-auto px-6 pt-24 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#0f3d3e]">
              About our clinic
            </h1>

            <p className="mt-4 text-gray-600 max-w-xl">
              Get the answers you need for a healthier you at our medical
              diagnostic center.
            </p>
          </motion.div>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="w-full "
      >
        <img
          src="/about.png"
          alt="Clinic reception"
          className="w-full  object-cover"
        />
      </motion.div>
      
    </section>
  );
}
