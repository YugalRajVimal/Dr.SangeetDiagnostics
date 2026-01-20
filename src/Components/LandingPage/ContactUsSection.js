"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaRegEnvelope,
} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6"; // Instagram icon from react-icons/fa6

// Updated InfoCard to allow multiple icons (row layout for phone/whatsapp, single for others)
function InfoCard({ icon, iconBg, title, subtitle, href }) {
  return (
    <div className="flex items-center space-x-4 bg-white rounded-2xl shadow-md py-6 px-4 h-full transition hover:shadow-xl hover:border-[#0fa3a3] border border-transparent">
      <div className={`flex items-center shrink-0 justify-center rounded-full h-12 w-12 text-2xl ${iconBg}`}>
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-lg font-semibold text-[#0f3d3e] break-all">
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-colors"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </div>
        {subtitle && (
          <div className="text-sm text-gray-500 ">{subtitle}</div>
        )}
      </div>
    </div>
  );
}

// Our services grouped for select field
const SERVICE_OPTIONS = [
  {
    label: "Pathology Services",
    options: [
      "Hematology",
      "Biochemistry",
      "Hormones",
      "Vitamins",
      "Infection markers",
      "Preventive profiles",
    ],
  },
  {
    label: "Radiology & Imaging",
    options: [
      "Digital X-Ray",
      "Ultrasound (USG)",
      "Doppler studies",
      "Pregnancy scans",
      "USG Fat quantification",
      "USG elastography",
    ],
  },
  {
    label: "Other Services",
    options: [
      "ECG",
      "FNAC",
      "Biopsy",
      "Echocardiography",
      "Image-guided procedures",
      "Home sample collection",
    ],
  },
];

// Improved ContactSection with API form submission and client feedback
export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({ status: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "service") {
      // For select field, update directly in form, don't reset errors
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult({ status: "", message: "" });
    setLoading(true);

    // Simple validations
    if (!form.name || !form.email || !form.phone) {
      setResult({ status: "error", message: "Please fill in all required fields." });
      setLoading(false);
      return;
    }

    try {
      const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8080";
      const res = await fetch(`${apiUrl}/send-mail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setResult({
          status: "success",
          message:
            "Your enquiry has been submitted to Dr. Sangeet Diagnostics, and a confirmation has been sent to your email.",
        });
        setForm({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        const txt = await res.text();
        setResult({ status: "error", message: txt || "There was an error sending your message." });
      }
    } catch (err) {
      setResult({ status: "error", message: "There was a network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-r  from-[#e6f6f6] to-[#d6eef0] pt-10 pb-24">
      <div className="mx-auto px-6  max-w-7xl">
        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 mx-auto  lg:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <img
              src="/contact.png"
              alt="Doctor"
              className=" h-full max-h-[80vh] object-contain rounded-2xl  mx-auto"
            />
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-xl p-10"
          >
            <h3 className="text-3xl font-serif font-bold text-[#0f3d3e] mb-2">
              <span className="text-[#0fa3a3]">DR. SANGEET DIAGNOSTICS</span>
              <div className="text-base font-normal text-gray-600 mt-2">Prayas Hamara, Vishwash Aapka</div>
            </h3>

            {/* Result Message */}
            {result.message && (
              <div
                className={`${
                  result.status === "success"
                    ? "bg-green-100 text-green-700 border-green-400"
                    : "bg-red-100 text-red-800 border-red-400"
                } rounded-xl border px-4 py-3 mt-4 mb-2 text-center transition`}
                role="alert"
              >
                {result.message}
              </div>
            )}

            <form className="mt-8 space-y-6" onSubmit={handleSubmit} autoComplete="off">
              {/* Name Field */}
              <Input
                label="Your name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                leftIcon={<FaUser className="text-[#0fa3a3]" />}
                required
                placeholder="Enter your name"
              />

              {/* Email Field */}
              <Input
                label="Your email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                leftIcon={<FaRegEnvelope className="text-[#0fa3a3]" />}
                required
                placeholder="Enter your email address"
              />

              {/* Phone Field */}
              <Input
                label="Your phone / WhatsApp"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                leftIcon={<FaWhatsapp className="text-[#25d366]" />}
                required
                placeholder="Enter your phone or WhatsApp number"
              />

              {/* Services drop down */}
              <div>
                <label className="text-sm text-[#0f3d3e] block mb-2">Select a service</label>
                <div className="relative">
                  <select
                    className="w-full rounded-xl border border-[#b6dfe3] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0fa3a3] bg-white appearance-none"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    // custom placeholder can't be set on select, so handled with first disabled option
                  >
                    <option value="" disabled>
                      -- Select a Service --
                    </option>
                    {SERVICE_OPTIONS.map((group) => (
                      <optgroup key={group.label} label={group.label}>
                        {group.options.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                  {/* Dropdown Icon */}
                  <svg
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-[#0fa3a3] pointer-events-none"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M7 8l3 3 3-3" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              <div>
                <label className="text-sm text-[#0f3d3e] block mb-2">Your message</label>
                <textarea
                  rows={5}
                  className="w-full rounded-xl border border-[#b6dfe3] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0fa3a3] bg-white"
                  placeholder="How can we help you?"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className={`rounded-full bg-[#0fa3a3] px-8 py-3 text-white font-medium hover:bg-[#0c8c8c] transition flex items-center gap-2 justify-center ${
                  loading ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                <FaEnvelope className="inline-block text-lg" />
                {loading ? "Submitting..." : "Submit"}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* CONTACT INFO CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {/* Card: Address */}
          <InfoCard
            icon={<FaMapMarkerAlt className="text-[#fa3e3e]" />}
            iconBg="bg-[#faeaea]"
            title="D-30, In Front of Jain Mandir, Madhuban Road, Dayanand Block, Shakarpur, Delhi – 110092"
            subtitle="Address"
            href="https://goo.gl/maps/CB9ZGHk9GEtaK6FV6"
          />
          {/* Card: Phone & WhatsApp (together) */}
          <InfoCard
            icon={<FaWhatsapp className="text-green-500" />}
            iconBg="bg-[#e6f6f6]"
            title={
              <>
                <a href="tel:7065070650" className="hover:underline">
                  7065070650
                </a>
                <span className="mx-1 text-gray-400">|</span>
                <a
                  href="https://wa.me/917065070650"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  70650 70650
                </a>
              </>
            }
            subtitle="Phone / WhatsApp"
            // href links are inside title; set href to "#" for accessibility
            href="#"
          />
          {/* Card: Email */}
          <InfoCard
            icon={<FaEnvelope className="text-[#0fa3a3]" />}
            iconBg="bg-[#f1f8fa]"
            title="enquiry.drsangeetdiagnostics@gmail.com"
            subtitle="Email"
            href="mailto:enquiry.drsangeetdiagnostics@gmail.com"
          />
          {/* Card: Instagram */}
          <InfoCard
            icon={<FaInstagram className="text-[#fa3e7b]" />} // Instagram magenta color
            iconBg="bg-[#fdf6fa]"
            title="@drsangeetdiagnostics"
            subtitle="Instagram"
            href="https://instagram.com/drsangeetdiagnostics"
          />
        </motion.div>

        {/* GOOGLE MAP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 rounded-2xl overflow-hidden shadow-xl"
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3501.8831843298685!2d77.28315307550078!3d28.633262975664447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM3JzU5LjgiTiA3N8KwMTcnMDguNiJF!5e0!3m2!1sen!2sin!4v1768380422288!5m2!1sen!2sin"
            className="w-full h-[400px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- SUB COMPONENTS ---------------- */

// Input with optional leftIcon, focus-and-hover transitions
function Input({ label, type, leftIcon, name, value, onChange, required, placeholder }) {
  return (
    <div>
      <label className="text-sm text-[#0f3d3e] block mb-2">
        {label}
        {required && <span className="text-[#fa3e3e] ml-1">*</span>}
      </label>
      <div className="relative">
        {leftIcon && (
          <span className="absolute  left-4 top-1/2 -translate-y-1/2 pointer-events-none text-lg">
            {leftIcon}
          </span>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full rounded-xl border border-[#b6dfe3] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0fa3a3] ${
            leftIcon ? "pl-12" : ""
          } bg-white transition`}
          autoComplete="off"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
