import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Welcome } from "../pages/welcome/Welcome";
import { Login } from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import { Signup } from "../pages/signup/Signup";
import { Create } from "../pages/create/Create";
import { Verify } from "../pages/verify/Verify";
import { Edit } from "../pages/edit/Edit";
import TextEditor from "../components/textEditorComponents/components/QuillTextEditor";
import { Redirect } from "react-router-dom";

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
      <Route path="/editor" element={<TextEditor />} />
      <Route path="/edit" element={<Edit />} />
      {/* <Route path="/logout" element={<Redirect to="/" />} /> */}
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
