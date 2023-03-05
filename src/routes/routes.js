import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Welcome } from "../pages/welcome/Welcome";
import { Login } from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import { Signup } from "../pages/signup/Signup";
import { Create } from "../pages/create/Create";
import QuillEditor from "../quills/components/Quills";
import { Verify } from "../pages/verify/Verify";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome />} /> */
      <Route path="/login" element={<Login />} />
      {/* <Route path="/logout" element={<Welcome />} /> */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create" element={<Create />} />
      <Route path="/verify" element={<Verify />} />
      {/* <Route path="/dashboard" element={<Dash />} /> */}
      <Route path="/editor" element={<QuillEditor />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
