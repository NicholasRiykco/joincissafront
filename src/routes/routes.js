import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { SignupForm } from "../components/signupForm/SignupForm";
import { Login } from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import { Signup } from "../pages/signup/Signup";
import { Create } from "../pages/create/Create";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Welcome />} /> */}
      <Route path="/login" element={<Login />} />
      {/* <Route path="/logout" element={<Welcome />} /> */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
