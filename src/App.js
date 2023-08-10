import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/menuHome";
import Course from "./pages/menuCourse";
import Dashboard from "./pages/menuDashboard";
import DashboardUser from "./pages/menuDashboard/dashboardUser";
import Review from "./pages/menuDashboard/Review";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/course" element={<Course />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/dashboard/user" element={<DashboardUser />}></Route>
        <Route path="/dashboard/review" element={<Review />}></Route>
      </Routes>
    </>
  );
}

export default App;
