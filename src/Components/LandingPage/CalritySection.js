"use client";

import { motion } from "framer-motion";

export default function ClaritySection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#bfe3e6] via-[#e8f5f6] to-[#fdf7f2] py-24">

      <div className="relative max-w-7xl mx-auto px-6 mb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT – IMAGES */}
        <div className="relative flex justify-center gap-8">
          <div className="absolute inset-0 scale-[1.1] bg-[linear-gradient(#0f929620_1px,transparent_2px),linear-gradient(90deg,#0f929620_1px,transparent_2px)] bg-[size:48px_48px]" />

          {/* Image 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-[1/1] h-full "
          >
            <motion.img
              src="/clarity1.png"
              alt="Diagnostic imaging"
              className="w-full h-full object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          {/* Image 2 */}
          {/* <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="relative w-64 h-[460px] rounded-full overflow-hidden shadow-2xl mt-10"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d"
              alt="Doctor portrait"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div> */}
        </div>

        {/* RIGHT – CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-xl"
        >
          {/* Section Title */}
          <div className="flex items-center gap-3">
            <span className="text-3xl">🧪</span>
            <h3 className="text-lg font-semibold text-[#0fa3a3] tracking-wider uppercase">About Us</h3>
          </div>

          {/* About Heading */}
          <h2 className="mt-3 text-3xl md:text-4xl font-bold font-serif text-[#0f3d3e] leading-tight">
            About Dr. Sangeet Diagnostics
          </h2>

          {/* About Paragraph */}
          <p className="mt-6 text-gray-700 leading-relaxed">
            Dr. Sangeet Diagnostics is built on trust, precision, and ethics.<br className="hidden md:inline" />
            We combine experienced doctors, modern equipment, and AI-supported reporting to ensure every report is accurate and clinically reliable.
          </p>

          {/* Why Patients Choose Us */}
          <h4 className="mt-8 mb-4 text-xl font-semibold text-[#0fa3a3]">Why Patients Choose Us</h4>
          <ul className="space-y-3 text-gray-800 text-base pl-5 list-disc marker:text-[#0fa3a3]">
            <li>Experienced senior doctors</li>
            <li>Ethical &amp; transparent reporting</li>
            <li>Strict quality control</li>
            <li>Affordable &amp; indicative pricing</li>
          </ul>
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT – OUR DOCTORS */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-xl"
        >
          {/* Section Title */}
          <div className="flex items-center gap-3">
            <span className="text-3xl">👨‍⚕️</span>
            <h3 className="text-lg font-semibold text-[#0fa3a3] tracking-wider uppercase">Our Doctors</h3>
          </div>

          {/* Dr. Sangeet Kumar */}
          <div className="mt-6">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-[#0f3d3e]">
              Lt Col (Dr) Sangeet Kumar (Retd.)
            </h2>
            <div className="text-[#0fa3a3] font-medium mb-2">Senior Consultant Radiologist</div>
            <ul className="list-disc marker:text-[#0fa3a3] ml-6 space-y-1 text-gray-800">
              <li>MBBS (AFMC), DNB, MNAMS</li>
              <li>EDiR, DICRI</li>
              <li>Ex-HOD, Military Hospital Dehradun</li>
              <li>Known for discipline, accuracy &amp; ethical reporting</li>
            </ul>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-gray-200"></div>

          {/* Dr. Nupur Garg */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold font-serif text-[#0f3d3e]">
              Dr. Nupur Garg
            </h2>
            <div className="text-[#0fa3a3] font-medium mb-2">Consultant Pathologist</div>
            <ul className="list-disc marker:text-[#0fa3a3] ml-6 space-y-1 text-gray-800">
              <li>MBBS, MD</li>
              <li>Associate Professor – Pathology</li>
              <li>10+ years of experience</li>
              <li>Ensures quality-controlled, reliable pathology reports</li>
            </ul>
          </div>
        </motion.div>
         {/* RIGHT – Images */}
        <div className="relative flex justify-center lg:justify-evenly gap-8">
          <div className="absolute inset-0 bg-[linear-gradient(#0f929620_1px,transparent_2px),linear-gradient(90deg,#0f929620_1px,transparent_2px)] bg-[size:48px_48px]" />

          {/* Image 1: Dr. Sangeet Kumar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-full "
          >
            <motion.img
              src="/doctor1.png"
              alt="Lt Col (Dr) Sangeet Kumar (Retd.)"
              className="w-full h-full object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          {/* Image 2: Dr. Nupur Garg */}
          {/* <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="relative w-64 h-[460px] rounded-full overflow-hidden shadow-2xl mt-10"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d"
              alt="Dr. Nupur Garg"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div> */}
        </div>

       
       
      </div>
    </section>
  );
}
