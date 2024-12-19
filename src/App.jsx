import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import FirstTeam from "./FirstTeam";
import FlexiTeam from "./FlexiTeam";
import Sponsors from "./Sponsors";
import Join from "./Join";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />

      <Routes>
        <Route path="/first-team" element={<FirstTeam />} />
        <Route path="/flexi-team" element={<FlexiTeam />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </>
  );
};

export default App;
