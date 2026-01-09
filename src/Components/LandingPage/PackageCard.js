"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaUserAlt, FaLungs, FaBriefcase, FaHospitalAlt, FaDumbbell, FaChild } from "react-icons/fa";

const PACKAGE_ICONS = {
  "Complete Body Checkup": <FaUserAlt />,
  "Know Your Lungs": <FaLungs />,
  "Executive Checkup": <FaBriefcase />,
  "Super Executive Checkup": <FaHospitalAlt />,
  "FITCORE – Fitness & Gym": <FaDumbbell />,
  "Girl Child Wellness": <FaChild />,
};

export default function HealthPackages() {
  const [open, setOpen] = useState(false);

  // All package data for mapping
  const packages = [
    {
      title: "Complete Body Checkup",
      price: "₹2150",
      includes: "CBC, Fasting Blood Sugar, Lipid Profile, ECG, USG Upper Abdomen",
    },
    {
      title: "Know Your Lungs",
      price: "₹1200",
      includes: "Chest X-Ray (PA), CBC with ESR, AEC, CRP",
    },
    {
      title: "Executive Checkup",
      price: "₹2600",
      includes: "CBC, ESR, LFT, KFT, Lipid Profile, Thyroid, HbA1c, Urine Routine",
    },
    {
      title: "Super Executive Checkup",
      price: "₹3000",
      includes: "CBC, ESR, LFT, KFT, Lipid, Thyroid, Iron Profile, Vitamin B12, Vitamin D, Calcium",
    },
    {
      title: "FITCORE – Fitness & Gym",
      price: "₹3000",
      includes: "CBC, CPK, LFT, KFT, Testosterone, Lipid Profile, USG Fat Quantification",
    },
    {
      title: "Girl Child Wellness",
      price: "FREE",
      includes: "CBC Screening + Counselling",
      highlight: true,
    }
  ];

  return (
    <section className="bg-[#f4fbfc] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f3d3e]">
            Health Packages &{" "}
            <span className="underline underline-offset-8 decoration-[#0fa3a3]">
              Prices
            </span>
          </h2>

          <p className="mt-6 text-gray-600">
            Preventive health packages designed for every stage of life.
            Clear pricing. No unnecessary tests.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map(pkg => (
            <PackageCard
              key={pkg.title}
              title={pkg.title}
              price={pkg.price}
              includes={pkg.includes}
              icon={PACKAGE_ICONS[pkg.title]}
              highlight={pkg.highlight}
            />
          ))}
        </div>

        {/* Price List Toggle */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center gap-2 rounded-full border border-[#0fa3a3] px-6 py-3 text-[#0fa3a3] font-medium hover:bg-[#0fa3a3] hover:text-white transition"
          >
            {open ? "Hide Indicative Test Pricing" : "View Indicative Test Pricing"}
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-8 overflow-hidden rounded-xl bg-white shadow-lg text-left"
              >
                <ul className="divide-y">
                  <PriceItem label="Hemoglobin" price="₹100" />
                  <PriceItem label="CBC" price="₹300" />
                  <PriceItem label="HbA1c" price="₹380" />
                  <PriceItem label="Vitamin B12" price="₹700" />
                  <PriceItem label="Vitamin D" price="₹1300" />
                  <PriceItem label="USG Whole Abdomen" price="₹1000" />
                  <PriceItem label="ECG" price="₹500" />
                  <PriceItem label="Chest X-Ray (PA)" price="₹500" />
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="mt-6 text-sm text-gray-500">
            * Final pricing may vary based on clinical requirements.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SUB COMPONENTS ---------------- */

function PackageCard({ title, price, includes, icon, highlight }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -8 }}
      className={`rounded-2xl p-8 shadow-lg bg-white relative ${
        highlight ? "ring-2 ring-[#0fa3a3]" : ""
      }`}
    >
      <div className="text-3xl mb-4 flex items-center justify-center">
        {icon}
      </div>

      <h3 className="text-xl font-serif font-semibold text-[#0f3d3e]">
        {title}
      </h3>

      <p className="mt-2 text-2xl font-bold text-[#0fa3a3]">
        {price}
      </p>

      <p className="mt-4 text-sm text-gray-600 leading-relaxed">
        <span className="font-medium text-gray-700">Includes:</span> {includes}
      </p>

      <a
        href="/contact"
        className="mt-6 w-full inline-block text-center rounded-full bg-[#0fa3a3] py-3 text-white font-medium hover:bg-[#0c8c8c] transition"
      >
        Book Now
      </a>
    </motion.div>
  );
}

function PriceItem({ label, price }) {
  return (
    <li className="flex justify-between px-6 py-4 text-sm">
      <span className="text-gray-700">{label}</span>
      <span className="font-medium text-[#0f3d3e]">{price}</span>
    </li>
  );
}
