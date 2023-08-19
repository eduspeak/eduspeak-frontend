import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

// Fahmi
import Home from "./pages/menuHome";
import Course from "./pages/menuCourse";
import Dashboard from "./pages/menuDashboard";
import DashboardUser from "./pages/menuDashboard/dashboardUser";
import Review from "./pages/menuDashboard/Review";
import IntroQuiz from "./pages/modul/introQuiz";
import StartQuiz from "./pages/modul/startQuiz";
// Ayyash
import History from "./pages/menuDashboard/attemptsHistory";
import Enrolled from "./pages/menuDashboard/enrolledCourses ";
import Upgrade from "./pages/menuDashboard/upgradeMembership";
import MenuCourse from "./pages/menuCourse";
import Detail from "./pages/menuDetailCourses";
import Modul from "./pages/modul/modulVideo";

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
        <Route path="/modul/intro-quiz" element={<IntroQuiz />}></Route>
        <Route path="/modul/quiz" element={<StartQuiz />}></Route>
        {/* Ayyas */}
        <Route path="/dashboard/history" element={<History />} />
        <Route path="/dashboard/enrolled" element={<Enrolled />} />
        <Route path="/modul/video" element={<Modul />} />
        {/* nurul */}
        <Route path="/dashboard/upgrade" element={<Upgrade />} />
        <Route path="/menuCourse" element={<MenuCourse />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
