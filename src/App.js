import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/menuHome";
import Course from "./pages/menuCourse";
import Dashboard from "./pages/menuDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/course" element={<Course />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
