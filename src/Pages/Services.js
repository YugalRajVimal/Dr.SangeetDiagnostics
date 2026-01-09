"use client";

import { motion } from "framer-motion";
import {
  FaMicroscope,
  FaXRay,
  FaStethoscope,
  FaRegCheckCircle,
  FaHome,
  FaUserMd,
  FaAmbulance,
  FaHeart,
  FaSyringe,
  FaBrain,
  FaBaby,
  FaHouseUser,
  FaFilePdf,
  FaRegClock,
  FaRobot,
  FaPhoneAlt,
  FaRegEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { MdBiotech } from "react-icons/md";
import FinalCTA from "../Components/LandingPage/FinalCTA";

const SERVICES_DATA = [
  {
    icon: <FaMicroscope />,
    title: "Pathology",
    description:
      "Our state-of-the-art pathology laboratory provides a wide spectrum of tests, ensuring precise analysis for better diagnosis and care.",
    highlights: [
      "Hematology & Biochemistry",
      "Hormonal Assays",
      "Thyroid, Hormones, Tumor Markers",
      "Vitamins (B12, D, Folate, A, E, C)",
      "Special Infection Markers",
      "Preventive Health Profiles",
      "Routine & Advance Blood, Urine & Fluid Exams"
    ],
  },
  {
    icon: <FaXRay />,
    title: "Radiology & Imaging",
    description:
      "High-resolution imaging with expert analysis for rapid results. All reports overseen by specialist radiologists.",
    highlights: [
      "Digital X-Ray (all types)",
      "Ultrasound (USG): Abdomen, Pelvis, Obstetric, etc.",
      "Doppler Studies",
      "Pregnancy & Growth Scans",
      "USG Fat Quantification",
      "USG Elastography",
      "Image Guided Procedures"
    ],
  },
  {
    icon: <FaStethoscope />,
    title: "Other Diagnostic & Special Services",
    description:
      "Comprehensive array of acclaimed diagnostic services for holistic healthcare.",
    highlights: [
      "ECG & 2D Echocardiography",
      "FNAC & Biopsy",
      "Home Sample Collection",
      "Child Health & Adolescence Screening",
      "Senior Citizen Preventive Health Checks",
      "Pre-Operative / Pre-Employment Checkups"
    ],
  },
];

export default function Services() {
  return (
    <>
  <section className="relative bg-gradient-to-r from-[#bfe3e6] via-[#e8f5f6] to-[#fdf7f2] text-[#0f3d3e] pt-24 pb-20 relative overflow-hidden min-h-[100vh]">

  <div className="absolute inset-0 bg-[linear-gradient(#00000010_1px,transparent_1px),linear-gradient(90deg,#00000010_1px,transparent_1px)] bg-[size:40px_40px] opacity-70" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-6"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <MdBiotech className="text-2xl md:text-3xl text-[#0fa3a3]" />
            <span className="text-lg md:text-xl font-semibold tracking-wider uppercase text-[#0fa3a3]">
              Our Services
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Comprehensive Diagnostic Solutions
          </h1>
          <p className="mt-4 text-[#0f3d3e]/80 text-base md:text-lg">
            We offer a full suite of reliable, state-of-the-art pathology, radiology, and specialist diagnostic services—trusted by patients and doctors alike.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.14, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/40 rounded-2xl p-8 text-center backdrop-blur-sm shadow-lg flex flex-col items-center justify-between border border-[#bfe3e6]"
            >
                <div className="flex flex-col w-full justify-center items-center">
                  <div className="text-5xl mb-4 text-[#0fa3a3]">{service.icon}</div>
                  <h2 className="text-2xl font-serif font-semibold mb-2">{service.title}</h2>
                  <p className="mb-5 text-[#0f3d3e]/80 text-base min-h-[58px]">{service.description}</p>
                </div>
     
                <ul className="text-[#0f3d3e]/90 text-left text-base space-y-2 mt-2 w-full max-w-xs mx-auto">
                  {service.highlights.map((item, i) => (
                    <li key={item} className="flex items-start gap-2">
                      <FaRegCheckCircle className="mt-1 text-[#0fa3a3] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
            </motion.div>
          ))}
          <div className="w-full flex justify-center mt-4 md:col-span-3">
            <a
              href="#pricing"
              className="inline-block rounded-full bg-[#0fa3a3] text-white hover:scale-[1.1] px-6 py-2 font-semibold text-lg shadow hover:bg-[#157e81] hover:text-white transition focus:outline-none focus:ring-2 focus:ring-[#0fa3a3] focus:ring-offset-2 border border-[#0fa3a3]"
            >
              Check Packages &amp; Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
         {/* EXTRA FEATURED SERVICES */}
         <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="my-20 max-w-4xl mx-auto text-center"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-[#0f3d3e]">
            Why Choose Dr. Sangeet Diagnostics?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 justify-center mb-4">
            <Feature
              icon={<FaHouseUser />}
              title="Home Sample Collection"
              dark
            />
            <Feature
              icon={<FaFilePdf />}
              title="WhatsApp PDF Reports"
              dark
            />
            <Feature
              icon={<FaRegClock />}
              title="Same Day Routine Reports"
              dark
            />
            <Feature
              icon={<FaRobot />}
              title="AI-Based Investigation Reports"
              dark
            />
          </div>
          <div className="mt-10">
            <h4 className="text-xl font-semibold mb-2 text-[#0f3d3e]">Contact & Custom Requests</h4>
            <p className="text-gray-700 mb-4">
              For any specific health requirement, package inquiries, or further details, please reach out.<br/>
              Personalized diagnostic solutions and home sample collection are available across East Delhi & NCR.
            </p>
          </div>
          <div className="flex flex-col justify-center sm:flex-row gap-4 mt-8">
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
        </motion.div>
        <FinalCTA />
        
    </>
  

  );
}

// Feature icon component for extra services
function Feature({ icon, title }) {
  return (
    <span className="flex justify-center items-center gap-2 bg-[#0b8f9f] text-center rounded-full px-4 py-2 text-base font-semibold text-white hover:bg-[#157e81] transition">
      <span className="text-xl">{icon}</span>
      {title}
    </span>
  );
}
