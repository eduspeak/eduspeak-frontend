import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/menuHome";
import Course from "./pages/menuCourse";
import Dashboard from "./pages/menuDashboard";
import History from "./pages/menuDashboard/attemptsHistory";
import Enrolled from "./pages/menuDashboard/enrolledCourses ";
import Upgrade from "./pages/menuDashboard/upgradeMembership";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
        <Route path="/enrolled" element={<Enrolled />} />
        <Route path="/upgrade" element={<Upgrade />} />
      </Routes>
    </>
  );
}

export default App;
