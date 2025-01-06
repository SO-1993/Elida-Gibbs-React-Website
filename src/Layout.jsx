import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import ImageCarousel from "./Carousel";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <Header />
    <div>
      <img
        className="elida-gibbs-badge"
        src="utils/images/elida_gibbs_badge.png"
        alt="Elida Gibbs crest"
      />
      {/* <img
        className="leeds-combination-crest"
        src="utils/images/leeds_combination_league.jpg"
        alt="Leeds Combination crest"
      /> */}
    </div>
    {children}
    <ImageCarousel />
    <Footer />
  </>
);

export default Layout;
