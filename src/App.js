import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

// Fahmi
import Home from "./pages/menuHome";
import Course from "./pages/menuCourse";
import Dashboard from "./pages/menuDashboard";
import DashboardUser from "./pages/menuDashboard/dashboardUser";
import Review from "./pages/menuDashboard/Review";
// Ayyash
import History from "./pages/menuDashboard/attemptsHistory";
import Enrolled from "./pages/menuDashboard/enrolledCourses ";
import Upgrade from "./pages/menuDashboard/upgradeMembership";

function App() {
  return (
    <>
      <Routes>
        {/* Fahmi */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/course" element={<Course />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/dashboard/user" element={<DashboardUser />}></Route>
        <Route path="/dashboard/review" element={<Review />}></Route>
        {/* Ayyash */}
        <Route path="/history" element={<History />} />
        <Route path="/enrolled" element={<Enrolled />} />
        <Route path="/upgrade" element={<Upgrade />} />
      </Routes>
    </>
  );
}

export default App;
