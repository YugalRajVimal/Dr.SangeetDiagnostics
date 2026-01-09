"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

// Helper function to scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Hamburger SVG icon component
function HamburgerIcon({ open }) {
  return (
    <div className="relative w-8 h-8 flex flex-col justify-center items-center">
      <span
        className={`block h-0.5 w-7 bg-[#0f3d3e] transition-transform duration-300 ease-in-out ${
          open ? "rotate-45 translate-y-2" : ""
        }`}
      ></span>
      <span
        className={`block h-0.5 w-7 bg-[#0f3d3e] my-1 transition-opacity duration-300 ease-in-out ${
          open ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`block h-0.5 w-7 bg-[#0f3d3e] transition-transform duration-300 ease-in-out ${
          open ? "-rotate-45 -translate-y-2" : ""
        }`}
      ></span>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);

    // Close mobile nav on route change or scroll
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu on window resize to large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // handle anchor (a) clicks for Book a visit to scroll to top
  const handleAToContact = (e) => {
    scrollToTop();
    // let the browser handle the actual navigation since it's a normal <a>
  };

  // handle anchor (a) clicks for mobile nav to scroll to top & close mobile menu
  const handleAMobileToContact = (e) => {
    scrollToTop();
    setMobileOpen(false);
    // let the browser handle the actual navigation since it's a normal <a>
  };

  // handle logo click (go home + scroll to top)
  const handleLogoClick = (e) => {
    scrollToTop();
  };

  // handle mobile logo click (go home + scroll to top and close menu)
  const handleMobileLogoClick = (e) => {
    scrollToTop();
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Link to="/" onClick={handleLogoClick}>
            <img src="/logoPNG.png" alt="Logo" className="h-16 object-contain" />
          </Link>
          <span className="text-2xl font-bold text-[#0f3d3e]"></span>
        </div>

        {/* Desktop NAV LINKS */}
        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#0f3d3e]">
          <NavItem label="Home" to="/" closeMobile={() => {}} />
          <NavItem label="About Us" to="/about" closeMobile={() => {}} />
          <NavItem label="Services" to="/services" closeMobile={() => {}} />
          <NavItem label="Packages & Prices" to="/pricing" closeMobile={() => {}} />
          <NavItem label="Contact Us" to="/contact" closeMobile={() => {}} />
        </ul>

        {/* Desktop CTA BUTTON */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/contact"
          onClick={handleAToContact}
          className="hidden lg:inline-flex items-center rounded-full bg-[#0fa3a3] px-6 py-3 text-sm font-medium text-white shadow hover:bg-[#0c8c8c] transition"
        >
          Book a visit
        </motion.a>

        {/* Hamburger Button */}
        <button
          className="lg:hidden relative z-[101] flex items-center justify-center p-2 rounded focus:outline-none"
          aria-label="Open navigation menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <HamburgerIcon open={mobileOpen} />
        </button>
      </nav>

      {/* MOBILE NAVIGATION OVERLAY */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobilenav-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            key="mobilenav-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 32 }}
            className="fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-lg z-[101] flex flex-col px-7 pt-7 pb-10"
          >
            <div className="mb-4 flex items-center gap-2">
              <Link to="/" onClick={handleMobileLogoClick}>
                <img src="/logoPNG.png" alt="Logo" className="h-12 object-contain" />
              </Link>
              <span className="text-xl font-bold text-[#0f3d3e]"></span>
            </div>
            <ul className="flex flex-col gap-6 text-base font-medium text-[#0f3d3e]">
              <NavItem label="Home" to="/" closeMobile={() => { setMobileOpen(false); }} />
              <NavItem label="About Us" to="/about" closeMobile={() => { setMobileOpen(false); }} />
              <NavItem label="Services" to="/services" closeMobile={() => { setMobileOpen(false); }} />
              <NavItem label="Packages & Prices" to="/pricing" closeMobile={() => { setMobileOpen(false); }} />
              <NavItem label="Contact Us" to="/contact" closeMobile={() => { setMobileOpen(false); }} />
            </ul>
            <a
              href="/contact"
              onClick={handleAMobileToContact}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#0fa3a3] px-5 py-3 text-sm font-medium text-white shadow hover:bg-[#0c8c8c] transition"
            >
              Book a visit
            </a>
            {/* Close Button for mobile nav */}
            <button
              className="absolute top-2 right-3 text-3xl text-[#0f3d3e] font-bold focus:outline-none"
              aria-label="Close navigation menu"
              onClick={() => setMobileOpen(false)}
            >
              &times;
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* ---------- Reusable Components ---------- */

// NavItem scrolls to top and (if provided) closes mobile menu
function NavItem({ label, to, closeMobile }) {
  const navigate = useNavigate();

  // onClick: scroll to top, run closeMobile (if any), then route
  const handleClick = (e) => {
    scrollToTop();
    if (closeMobile) closeMobile();
    // Use navigate() for SPA navigation, so prevent default.
    e.preventDefault();
    navigate(to);
  };

  return (
    <li>
      <Link
        to={to}
        onClick={handleClick}
        className="relative hover:text-[#0fa3a3] transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#0fa3a3] after:transition-all hover:after:w-full"
      >
        {label}
      </Link>
    </li>
  );
}

// Optional: update DropdownItem in case you use it in the future for navigation in the menu
function DropdownItem({ label, to }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    scrollToTop();
    e.preventDefault();
    navigate(to);
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-[#e6f6f6] hover:text-[#0fa3a3] transition"
    >
      {label}
    </Link>
  );
}
