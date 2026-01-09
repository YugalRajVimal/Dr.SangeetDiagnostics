"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaRegEnvelope, FaRegClock, FaHome, FaRobot, FaFilePdf, FaHouseUser } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#fdf6f2] via-[#e9f6f7] to-[#cfecee] min-h-[90vh] flex">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(#00000010_1px,transparent_1px),linear-gradient(90deg,#00000010_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      <div className="relative mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 pt-20 md:px-20">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Diagnostic Name Heading */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0fa3a3] uppercase tracking-widest leading-tight">
              DR.
            </h2>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0f3d3e] tracking-widest leading-tight">
              SANGEET
            </h2>
            <h2 className="text-xl md:text-2xl font-bold text-[#0fa3a3] uppercase tracking-widest leading-tight">
              DIAGNOSTICS
            </h2>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#0f3d3e] leading-tight">
            Prayas Hamara,<br />
            <span className="italic">Vishwas Aapka</span>
          </h1>

          <p className="text-gray-600 max-w-md">
            Accurate pathology & imaging services with ethical reporting, same-day results, and home sample collection.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <motion.a
              href="tel:8448863291"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center rounded-full bg-[#0fa3a3] px-4 py-1 text-white font-medium text-base shadow hover:bg-[#0c8c8c] transition"
            >
              <FaPhoneAlt className="mr-2 text-lg" />
              Call Us
            </motion.a>
            <motion.a
              href="https://wa.me/917065070650"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-4 py-1 text-white font-medium text-base shadow hover:bg-[#1da851] transition"
            >
              <FaWhatsapp className="mr-2 text-lg" />
              WhatsApp
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center rounded-full border border-[#0fa3a3] bg-white px-4 py-1 text-[#0fa3a3] font-medium text-base shadow-sm hover:bg-[#e6f6f6] transition"
            >
              <FaRegEnvelope className="mr-2 text-lg" />
              Contact Us
            </motion.a>
          </div>

          {/* Trust Highlights */}
          <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <TrustHighlight icon={<FaRegClock className="text-[#0fa3a3]" />} text="Same Day Routine Reports" />
              <TrustHighlight icon={<FaRobot className="text-[#0fa3a3]" />} text="AI-Based Investigation Reports" />
              <TrustHighlight icon={<FaFilePdf className="text-[#25D366]" />} text="WhatsApp PDF Reports" />
              <TrustHighlight icon={<FaHouseUser className="text-[#0fa3a3]" />} text="Home Sample Collection Available" />
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="relative flex h-full justify-center items-center"
        >
          {/* Badge */}
          {/* <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute -top-10 right-20 w-28 h-28 rounded-full border-2 border-[#0f3d3e] flex items-center justify-center text-xs font-semibold text-[#0f3d3e] uppercase tracking-widest"
          >
            Medical Center
          </motion.div> */}

          {/* Doctor Image */}
          <motion.img
            src="/hero.png"
            alt="Doctors"
            className="relative z-10  h-full drop-shadow-2xl object-contain"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 120 }}
          />
        </motion.div>
      </div>
    </section>
  );
}

// Trust highlight item component
function TrustHighlight({ icon, text }) {
  return (
    <div className="flex items-center gap-2 bg-white/80 rounded-xl px-4 py-2 shadow text-[#0f3d3e] text-sm font-medium">
      <span className="text-lg">{icon}</span>
      <span>{text}</span>
    </div>
  );
}