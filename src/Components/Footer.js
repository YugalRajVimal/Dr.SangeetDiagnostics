"use client";

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaRegClock,
  FaAngleRight,
  FaHome,
  FaUserMd,
  FaFlask,
  FaStethoscope,
  FaMedkit,
  FaFileMedicalAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#dff1f3] text-[#0f3d3e]">
      <div className="max-w-7xl mx-auto px-6 pt-20">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">

          {/* BRAND + ADDRESS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <img
                src="/logoPNG.png"
                alt="Dr. Sangeet Diagnostics Logo"
                className="h-16 "
                style={{ objectFit: "cover" }}
              />
            </div>
            <h3 className="text-2xl font-serif font-bold flex items-center gap-2">
              <FaStethoscope className="text-[#0fa3a3]" /> DR. SANGEET DIAGNOSTICS
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-[#0f3d3e]/80 flex items-start gap-2">
              <FaMapMarkerAlt className="mt-0.5 text-[#fa3e3e]" />
              <span>
                D-30, In Front of Jain Mandir, <br />
                Madhuban Road, Dayanand Block, <br />
                Shakarpur, Delhi – 110092
              </span>
            </p>

            <p className="mt-4 text-sm flex items-center gap-2">
              <FaRegClock className="text-[#0fa3a3]" /> Open: Monday – Saturday
            </p>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-serif font-semibold flex items-center gap-2">
              <FaAngleRight className="text-[#0fa3a3]" />
              Quick Links
            </h4>

            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FaHome className="text-[#0fa3a3]" />
                <a href="/" className="hover:text-[#0fa3a3] transition">Home</a>
              </li>
              <li className="flex items-center gap-2">
                <FaUserMd className="text-[#0fa3a3]" />
                <a href="/about" className="hover:text-[#0fa3a3] transition">About Us</a>
              </li>
              <li className="flex items-center gap-2">
                <FaStethoscope className="text-[#0fa3a3]" />
                <a href="/services" className="hover:text-[#0fa3a3] transition">Services</a>
              </li>
              <li className="flex items-center gap-2">
                <FaFileMedicalAlt className="text-[#0fa3a3]" />
                <a href="/pricing" className="hover:text-[#0fa3a3] transition">Health Packages / Pricing</a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-[#0fa3a3]" />
                <a href="/contact" className="hover:text-[#0fa3a3] transition">Contact Us</a>
              </li>
            </ul>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-serif font-semibold flex items-center gap-2">
              <FaEnvelope className="text-[#0fa3a3]" />
              Contact
            </h4>

            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#0fa3a3]" /> 
                  <span>Call: <a href="tel:8448863291" className="hover:underline">8448863291</a></span>
              </li>
              <li className="flex items-center gap-2">
                <FaWhatsapp className="text-green-500" /> 
                  <span>WhatsApp: <a href="https://wa.me/917065070650" target="_blank" rel="noopener noreferrer" className="hover:underline">70650 70650</a></span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-[#0fa3a3]" />
                <span>
                  Email:{" "}
                  <a href="mailto:enquiry.drsangeetdiagnostics@gmail.com" className="hover:underline">
                    enquiry.drsangeetdiagnostics@gmail.com
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaInstagram className="text-[#fa3e7b]" />
                <span>
                  Instagram:{" "}
                  <a href="https://instagram.com/drsangeetdiagnostics" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    drsangeetdiagnostics
                  </a>
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="mt-16 border-t border-[#0f3d3e]/20" />

        {/* BOTTOM BAR */}
        <div className="py-8 text-center text-sm text-[#0f3d3e]/60 flex flex-col gap-2 items-center justify-center">
          <div>
            © {new Date().getFullYear()} Dr. Sangeet Diagnostics. All rights reserved.
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-1 text-xs text-[#0f3d3e]/60">
            <span>
              Tech partner:{" "}
              <a
                href="https://gowappily.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline font-medium text-[#0fa3a3]"
              >
                GoWappily Infotech
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
