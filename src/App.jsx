import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import FirstTeam from "./FirstTeam";
import FlexiTeam from "./FlexiTeam";
import Sponsors from "./Sponsors";
import Contact from "./Contact";
import Footer from "./Footer";
import ImageCarousel from "./Carousel";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <ImageCarousel />

      {/* Routes for individual pages */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/first-team" element={<FirstTeam />} />
        <Route path="/flexi-team" element={<FlexiTeam />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
