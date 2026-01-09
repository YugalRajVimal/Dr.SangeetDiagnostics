"use client";

import { motion } from "framer-motion";
import { FaVial, FaMicroscope, FaHeartbeat, FaXRay, FaNotesMedical, FaSyringe, FaUserMd, FaStethoscope, FaFlask } from "react-icons/fa";
import { MdBiotech, MdOutlineScience } from "react-icons/md";
import { GiTestTubes } from "react-icons/gi";
import { TbVaccine } from "react-icons/tb";
import { PiTestTubeBold } from "react-icons/pi";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";

export default function ServicesOverview() {
  return (
    <section className="bg-[#0b8f9f] text-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <MdBiotech className="text-2xl md:text-3xl" />
            <span className="text-lg md:text-xl font-semibold tracking-wider uppercase text-[#b9ffee]">SERVICES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Comprehensive Diagnostic Services
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Pathology */}
          <ServiceColumn
            icon={<FaMicroscope />}
            title="Pathology"
            items={[
              "Hematology",
              "Biochemistry",
              "Hormones",
              "Vitamins (B12, D)",
              "Infection Markers",
              "Preventive Health Profiles"
            ]}
          />

          {/* Radiology & Imaging */}
          <ServiceColumn
            icon={<FaXRay />}
            title="Radiology & Imaging"
            items={[
              "Digital X-Ray",
              "Ultrasound (USG)",
              "Doppler Studies",
              "Pregnancy Scans",
              "USG Fat Quantification",
              "USG Elastography"
            ]}
          />

          {/* Other Diagnostic Services */}
          <ServiceColumn
            icon={<FaStethoscope />}
            title="Other Diagnostic Services"
            items={[
              "ECG",
              "FNAC",
              "Biopsy",
              "Echocardiography",
              "Image-Guided Procedures",
              "Home Sample Collection"
            ]}
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMPONENTS ---------------- */

function ServiceColumn({ icon, title, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="bg-white/10 rounded-2xl p-8 text-center backdrop-blur-sm shadow-lg flex flex-col items-center"
    >
      <div className="flex justify-center mb-4">
        <div className="text-4xl md:text-5xl">{icon}</div>
      </div>
      <h3 className="text-xl font-serif font-semibold mb-3">
        {title}
      </h3>
      <ul className="text-white/90 text-base space-y-2 flex flex-col items-start">
        {items.map((item, idx) => (
          <li key={item} className="flex items-center gap-2">
            <span className="text-white text-xl">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
