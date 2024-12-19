import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />

      <Routes>{/* <Route path="/" element={<... />} /> */}</Routes>
    </>
  );
};

export default App;
