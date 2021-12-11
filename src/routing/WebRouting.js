import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/web/Home";

const WebRouting = () => {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
    </Routes>
  );
};

export default WebRouting;
