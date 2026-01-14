import React, { useState } from 'react';
import { motion } from "framer-motion";
import {
  FaUserAlt,
  FaLungs,
  FaBriefcase,
  FaHospitalAlt,
  FaDumbbell,
  FaChild,
} from "react-icons/fa";
import FinalCTA from '../Components/LandingPage/FinalCTA';
import MissionStatement from '../Components/LandingPage/MissionStatement';

// 1️⃣ PATHOLOGY TESTS
const PATHO_PRICING = [
  { test: "Hemoglobin", price: "100" },
  { test: "Complete Blood Count (CBC)", price: "300" },
  { test: "ESR", price: "120" },
  { test: "Blood Sugar – Fasting", price: "70" },
  { test: "Blood Sugar – PP", price: "70" },
  { test: "HbA1c", price: "380" },
  { test: "Urea", price: "200" },
  { test: "Creatinine", price: "120" },
  { test: "Uric Acid", price: "120" },
  { test: "Lipid Profile", price: "530" },
  { test: "Liver Function Test (LFT)", price: "650" },
  { test: "Kidney Function Test (KFT)", price: "650" },
  { test: "TSH", price: "380" },
  { test: "T3", price: "250" },
  { test: "T4", price: "250" },
  { test: "Vitamin D (25-OH)", price: "1300" },
  { test: "Vitamin B12", price: "700" },
];

// 2️⃣ ULTRASOUND & PROCEDURES
const USG_PRICING = [
  { investigation: "USG Whole Abdomen", price: "1000" },
  { investigation: "USG Upper Abdomen", price: "800" },
  { investigation: "USG Lower Abdomen", price: "800" },
  { investigation: "USG Chest", price: "1000" },
  { investigation: "USG KUB", price: "800" },
  { investigation: "USG Small Parts", price: "1500" },
  { investigation: "USG Neck", price: "1500" },
  { investigation: "USG Breast", price: "1500" },
  { investigation: "USG Scrotum", price: "1200" },
  { investigation: "USG Pelvis (TVS)", price: "1000" },
  { investigation: "USG Elastography", price: "1000" },
  { investigation: "USG Fat Quantification", price: "1000" },
  { investigation: "USG Carotid Doppler", price: "1500" },
  { investigation: "USG Renal Doppler", price: "1000" },
  { investigation: "USG Porto-Systemic Axis Doppler", price: "1000" },
  { investigation: "NT/NB (1st Trimester)", price: "1200" },
  { investigation: "USG OBS – Fetal Well Being", price: "1200" },
  { investigation: "USG Level II", price: "3500" },
  { investigation: "OBS Doppler", price: "1600" },
  { investigation: "USG Follicular Study (Single)", price: "500" },
  { investigation: "USG Follicular Study (Serial)", price: "1600" },
];

// DOPPLER
const DOPPLER_PRICING = [
  { doppler: "Single Limb (Arterial / Venous)", price: "1500" },
  { doppler: "Both Limbs (Arterial / Venous)", price: "2500" },
];

// OTHER PROCEDURES
const OTHER_PROC = [
  { procedure: "ECG", price: "500" },
  { procedure: "USG-Guided Aspiration", price: "1500" },
  { procedure: "USG-Guided FNAC", price: "2500" },
];

// 3️⃣ DIGITAL X-RAY PRICING
const XRAY_PRICING = [
  { study: "Chest", views: "PA", price: "500" },
  { study: "Chest", views: "AP/PA + Lateral", price: "700" },
  { study: "Abdomen", views: "Erect / Supine (Single)", price: "600" },
  { study: "Abdomen", views: "Erect + Supine", price: "900" },
  { study: "X-Ray KUB", views: "AP", price: "800" },
  { study: "Cervical Spine", views: "AP + Lateral", price: "800" },
  { study: "Cervical Spine", views: "AP + Lat + Flex/Ext", price: "1100" },
  { study: "Dorsal Spine", views: "AP + Lateral", price: "900" },
  { study: "Lumbar Spine", views: "AP + Lateral", price: "900" },
  { study: "Lumbar Spine", views: "AP + Lat + Oblique", price: "1200" },
  { study: "Whole Spine / Scoliosis", views: "AP + Lateral", price: "1800" },
  { study: "Shoulder Joint", views: "AP + Lateral", price: "700" },
  { study: "Elbow Joint", views: "AP + Lateral", price: "650" },
  { study: "Wrist Joint", views: "AP + Lateral", price: "650" },
  { study: "Hand", views: "AP + Oblique", price: "600" },
  { study: "Fingers", views: "AP + Oblique", price: "450" },
  { study: "Knee Joint", views: "AP + Lateral", price: "700" },
  { study: "Hip Joint", views: "AP", price: "750" },
  { study: "Hip Joint", views: "AP + Lateral", price: "1000" },
  { study: "Ankle Joint", views: "AP + Lateral", price: "650" },
  { study: "Foot", views: "AP + Oblique", price: "650" },
  { study: "Calcaneum", views: "Axial + Lateral", price: "700" },
  { study: "Pelvis with Both Hips", views: "AP", price: "1100" },
  { study: "Sacro-iliac Joints", views: "AP + Oblique", price: "950" },
  { study: "Skull", views: "AP + Lateral", price: "800" },
  { study: "PNS", views: "Water’s View", price: "700" },
  { study: "Facial Bones", views: "Multiple Views", price: "1000" },
  { study: "Nasal Bone", views: "Lateral", price: "600" },
  { study: "Mandible", views: "PA + Oblique", price: "1000" },
  { study: "Ribs", views: "Unilateral", price: "700" },
  { study: "Ribs", views: "Bilateral", price: "1000" },
  { study: "Sternum", views: "Lateral", price: "750" },
];

// 4️⃣ HEALTH CHECK PACKAGES
const HEALTH_PACKAGES = [
  {
    icon: <FaUserAlt />,
    title: "Complete Body Checkup",
    price: "₹2150",
    ideal: "Young adults & first-time testers",
    includes: [
      "CBC",
      "ESR",
      "LFT",
      "KFT",
      "Lipid",
      "THYROID",
      "URINE ROUTINE",
      "SUGAR -F",
      "CALCIUM",
    ],
  },
  {
    icon: <FaLungs />,
    title: "Know Your Lungs Package",
    price: "₹1200",
    ideal: "Allergy & pollution-related screening",
    includes: [
      "Chest X-Ray (PA)",
      "CBC with ESR",
      "AEC",
      "CRP",
    ],
  },
  {
    icon: <FaBriefcase />,
    title: "Executive Checkup",
    price: "₹2600",
    ideal: "Lifestyle disease screening",
    includes: [
      "CBC",
      "ESR",
      "LFT",
      "KFT",
      "Lipid Profile",
      "Thyroid",
      "Urine Routine",
      "Iron",
      "HbA1c",
    ],
  },
  {
    icon: <FaHospitalAlt />,
    title: "Super Executive Checkup",
    price: "₹3000",
    ideal: "Complete annual health assessment",
    includes: [
      "CBC",
      "ESR",
      "LFT",
      "KFT",
      "Lipid Profile",
      "Thyroid",
      "Urine Routine",
      "Fasting Sugar",
      "Iron Profile",
      "Vitamin B12",
      "Vitamin D",
      "Calcium",
    ],
  },
  {
    icon: <FaDumbbell />,
    title: "FITCORE – Fitness & Gym Package",
    price: "₹3000",
    ideal: "Athletes & gym-goers",
    includes: [
      "CBC",
      "CPK",
      "LFT",
      "KFT",
      "Testosterone (Total)",
      "Lipid Profile",
      "USG Fat Quantification",
    ],
  },
  {
    icon: <FaChild />,
    title: "Girl Child Wellness Package",
    price: "FREE",
    ideal: "School-going girls",
    includes: [
      "CBC Screening",
      "Counselling",
    ],
    highlight: true,
  },
];

const tabList = [
  { key: "path", label: "Pathology Tests" },
  { key: "usg", label: "Ultrasound (USG) & Procedures" },
  { key: "xray", label: "Digital X-Ray" },
];

const PackagesAndPricing = () => {
  const [tab, setTab] = useState("path");

  return (
    <section className="bg-[#f4fbfc] pt-24" id="pricing">
      <div className="max-w-7xl mx-auto px-6 mb-16">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f3d3e] mb-2">
            Packages &amp; <span className="underline underline-offset-8 decoration-[#0fa3a3]">Price List</span>
          </h2>
          <p className="mt-6 text-gray-600">
            All prices below are indicative. Final price may vary as per clinical needs.
          </p>
        </motion.div>

               {/* Packages Section */}
               <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-10"
        >
          <h3 className="text-3xl text-[#0f3d3e] font-bold font-serif text-center mb-10">
            Health Checkup Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {HEALTH_PACKAGES.map(pkg => (
              <PackageCard key={pkg.title} {...pkg} />
            ))}
          </div>
        </motion.div>



        {/* PRICING TABS */}
        <div className="mt-14 flex flex-col items-center">
          <div className="flex justify-center gap-3 w-full mb-6 flex-wrap">
            {tabList.map(t => (
              <button
                key={t.key}
                className={`px-6 py-3 rounded-full text-base font-medium border 
                  ${tab === t.key
                    ? "bg-[#0fa3a3] text-white border-[#0fa3a3]"
                    : "bg-white text-[#0fa3a3] border-[#0fa3a3] hover:bg-[#e6f6f6]"}
                  transition`}
                onClick={() => setTab(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* PRICING TABLES */}
          <div className="w-full max-w-3xl bg-white rounded-xl shadow p-6 md:p-10 transition">
            {/* Pathology */}
            {tab === "path" && (
              <div>
                <h3 className="text-xl font-semibold text-[#0fa3a3] mb-6">Pathology Tests (Indicative Prices)</h3>
                <table className="w-full text-sm md:text-base table-auto border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="font-bold text-start py-2 px-2">Test Name</th>
                      <th className="font-bold text-end py-2 px-2">Price (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PATHO_PRICING.map(item => (
                      <tr key={item.test} className="border-b hover:bg-[#f4fbfc]">
                        <td className="py-2 px-2">{item.test}</td>
                        <td className="py-2 px-2 text-end">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* USG, Doppler & Procedures */}
            {tab === "usg" && (
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-[#0fa3a3] mb-2">Ultrasound (USG) Investigation</h3>
                  <table className="w-full text-sm md:text-base border-collapse table-auto mb-4">
                    <thead>
                      <tr className="border-b">
                        <th className="font-bold text-start py-2 px-2">Investigation</th>
                        <th className="font-bold text-end py-2 px-2">Price (₹)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {USG_PRICING.map(item => (
                        <tr key={item.investigation} className="border-b hover:bg-[#f4fbfc]">
                          <td className="py-2 px-2">{item.investigation}</td>
                          <td className="py-2 px-2 text-end">{item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Doppler */}
                <div>
                  <h4 className="text-base font-semibold text-[#0fa3a3] mt-3 mb-2">Doppler Studies</h4>
                  <table className="w-full text-sm md:text-base border-collapse table-auto mb-4">
                    <thead>
                      <tr className="border-b">
                        <th className="font-bold text-start py-2 px-2">Doppler Study</th>
                        <th className="font-bold text-end py-2 px-2">Price (₹)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {DOPPLER_PRICING.map(item => (
                        <tr key={item.doppler} className="border-b hover:bg-[#f4fbfc]">
                          <td className="py-2 px-2">{item.doppler}</td>
                          <td className="py-2 px-2 text-end">{item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Procedures */}
                <div>
                  <h4 className="text-base font-semibold text-[#0fa3a3] mt-3 mb-2">Other Procedures</h4>
                  <table className="w-full text-sm md:text-base border-collapse table-auto">
                    <thead>
                      <tr className="border-b">
                        <th className="font-bold text-start py-2 px-2">Procedure</th>
                        <th className="font-bold text-end py-2 px-2">Price (₹)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {OTHER_PROC.map(item => (
                        <tr key={item.procedure} className="border-b hover:bg-[#f4fbfc]">
                          <td className="py-2 px-2">{item.procedure}</td>
                          <td className="py-2 px-2 text-end">{item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* X-Ray */}
            {tab === "xray" && (
              <div>
                <h3 className="text-xl font-semibold text-[#0fa3a3] mb-6">Digital X-Ray Price List</h3>
                <table className="w-full text-sm md:text-base table-auto border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="font-bold text-start py-2 px-2">X-Ray Study</th>
                      <th className="font-bold text-start py-2 px-2">Views</th>
                      <th className="font-bold text-end py-2 px-2">Price (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {XRAY_PRICING.map((item, ix) => (
                      <tr key={item.study + "-" + item.views + "-" + ix} className="border-b hover:bg-[#f4fbfc]">
                        <td className="py-2 px-2">{item.study}</td>
                        <td className="py-2 px-2">{item.views}</td>
                        <td className="py-2 px-2 text-end">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

 

        {/* Disclaimer */}
        <div className="max-w-3xl mx-auto mt-16">
          <div className="bg-[#fffbea] border-l-4 border-yellow-400 rounded-lg px-6 py-5 text-[#916600] text-sm md:text-base flex items-center gap-3">
            <span role="img" aria-label="warning">⚠️</span>
            <span>
              <b>Pricing Disclaimer:</b> All prices are indicative. Final pricing may vary based on clinical requirements and doctor’s advice.
            </span>
          </div>
        </div>
      </div>
      <FinalCTA />
    </section>
  );
};

export default PackagesAndPricing;

// SUB COMPONENTS

function PackageCard({ icon, title, price, ideal, includes, highlight }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -8 }}
      className={`rounded-2xl p-8 shadow-lg bg-white relative flex flex-col gap-4 h-full ${
        highlight ? "ring-2 ring-[#0fa3a3]" : ""
      }`}
    >
        <div>
        <div className="text-3xl mb-4 flex items-center justify-center">{icon}</div>
      <h3 className="text-xl font-serif font-semibold text-[#0f3d3e] text-center">{title}</h3>
      <p className="mt-2 text-2xl font-bold text-[#0fa3a3] text-center">{price}</p>
      <p className="mt-3 text-sm text-gray-500 text-center">
        <span className="font-semibold">Ideal for: </span>{ideal}
      </p>
      <div className="mt-4 flex-1">
        <p className="font-medium text-gray-700 mb-1">Includes:</p>
        <ul className="list-disc text-sm text-gray-600 pl-5">
          {includes.map((inc, i) => (
            <li key={inc + i}>{inc}</li>
          ))}
        </ul>
      </div>
        </div>
     
      <a
        href="/contact"
        className="mt-6 w-full rounded-full bg-[#0fa3a3] py-3 text-white font-medium text-center block hover:bg-[#0c8c8c] transition"
        style={{ marginTop: "auto" }}
      >
        Book Package
      </a>
    </motion.div>
  );
}
