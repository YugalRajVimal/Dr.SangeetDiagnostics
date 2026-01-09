import React from 'react'
import ContactSection from '../Components/LandingPage/ContactUsSection'
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className='relative bg-gradient-to-r from-[#e6f6f6] to-[#d6eef0]'>
      {/* Put pattern in back with z-0 instead of z-10 */}


      <section className="relative w-full">

        {/* TOP HEADER STRIP */}
        <div className="relative overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-6 pt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#0f3d3e]">
                Contact Us
              </h1>
              <p className="mt-4 text-gray-600 max-w-xl">
                Get the answers you need for a healthier you at our medical
                diagnostic center.
              </p>
            </motion.div>
          </div>
        </div>

        <ContactSection />

      </section>
    </div>
  )
}

export default ContactUs