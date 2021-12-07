import React from "react";
import { Routes, Route } from "react-router-dom";
import Setting from "../pages/web/Setting"
import Home from "../pages/web/Home";

const WebRouting = () => {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="setting" element={<Setting/>} />
    </Routes>
  );
};

export default WebRouting;
