import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Navbar from './Components/NavBar';
import AboutUs from './Pages/AboutUs';
import Footer from './Components/Footer';
import Services from './Pages/Services';
import PackagesAndPricing from './Pages/PackagesAndPricing';
import ContactUs from './Pages/ContactUs';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs  />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<PackagesAndPricing />} />
        <Route path="/contact" element={<ContactUs />} />


      </Routes>
      <Footer />

    </Router>
  );
};

export default App;