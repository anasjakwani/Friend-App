import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";

const LoginRouting = () => {
  return (
    <Routes>
      <Route index element={<SignUp />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default LoginRouting;
