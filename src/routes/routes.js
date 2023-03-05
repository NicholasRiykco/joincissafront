import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Welcome } from "../pages/welcome/Welcome";
import { Login } from "../pages/login/Login";
import Dash from "../components/side-nav";
import { Signup } from "../pages/signup/Signup";
import QuillEditor from "../quills/components/Quills";
import { Verify } from "../pages/verify/Verify";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome />} /> */
      <Route path="/login" element={<Login />} />
      {/* <Route path="/logout" element={<Welcome />} /> */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/dashboard" element={<Dash />} />
      <Route path="/editor" element={<QuillEditor />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
