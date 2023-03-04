import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Login } from "../pages/login/Login";
import Dash from "../components/side-nav";
import { Signup } from "../pages/signup/Signup";
import { Verify } from "../pages/verify/Verify";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Welcome />} /> */}
      <Route path="/login" element={<Login />} />
      {/* <Route path="/logout" element={<Welcome />} /> */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/dashboard" element={<Dash />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;