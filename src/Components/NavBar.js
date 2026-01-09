"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src="/logoPNG.png" alt="Logo" className="h-16 object-contain" />
          </Link>
          <span className="text-2xl font-bold text-[#0f3d3e]"></span>
        </div>

        {/* NAV LINKS */}
        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#0f3d3e]">
          <NavItem label="Home" to="/" />
          <NavItem label="About Us" to="/about" />

          <NavItem label="Services" to="/services" />
        

          <NavItem label="Packages & Prices" to="/pricing" />
          <NavItem label="Contact Us" to="/contact" />
        </ul>

        {/* CTA BUTTON */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/#book"
          className="hidden lg:inline-flex items-center rounded-full bg-[#0fa3a3] px-6 py-3 text-sm font-medium text-white shadow hover:bg-[#0c8c8c] transition"
        >
          Book a visit
        </motion.a>
      </nav>
    </motion.header>
  );
}

/* ---------- Reusable Components ---------- */

function NavItem({ label, to }) {
  return (
    <li>
      <Link
        to={to}
        className="relative hover:text-[#0fa3a3] transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#0fa3a3] after:transition-all hover:after:w-full"
      >
        {label}
      </Link>
    </li>
  );
}

function DropdownItem({ label, to }) {
  return (
    <Link
      to={to}
      className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-[#e6f6f6] hover:text-[#0fa3a3] transition"
    >
      {label}
    </Link>
  );
}
