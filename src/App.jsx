import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./Homepage";
import FirstTeam from "./FirstTeam";
import Sponsors from "./Sponsors";
import Contact from "./Contact";
import Leaderboard from "./Leaderboard";

const App = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <Layout>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/first-team" element={<FirstTeam />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
