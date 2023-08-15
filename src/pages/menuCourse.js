import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import CourseCard from "./menuCourseCard";
import Footers from "../components/Footers";
import dumyCourses from "../assets/gambar/dumy_courses.png";

const Course = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const linkStyle = {
    display: "inline-block",
    borderBottom: "4px solid transparent",
    transition: "border-bottom-color 0.2s ease-in-out",
    margin: 0,
    padding: "0.25rem 0.5rem",
    borderBottomColor: "#222E50",
  };

  const linkHoverStyle = {
    borderBottomColor: "#E9D985",
  };

  const links = ["Beginner", "Intermediate", "Advanced"];

  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className=" min-h-screen">
        <header className="bg-[#222E50] pb-0 py-20">
          <div className="max-w-7xl mx-auto mt-100 text-center text-white">
            <div className="">
              <h1 className="text-4xl font-bold text-white">Courses</h1>
            </div>
            <ul className="flex justify-center mt-10">
              {links.map((link, index) => (
                <li key={index} className="text-white">
                  <Link to="/course">
                    <div
                      style={{
                        ...linkStyle,
                        ...(hoveredIndex === index ? linkHoverStyle : {}),
                      }}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleLinkClick(index)}
                      className="text-white"
                    >
                      {link}{" "}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </header>
        <div className="flex justify-center item-center m-10 ">
          {activeLink === 0 && (
            <Link to="/detail">
              <div className="flex space-x-2 ">
                <CourseCard
                  className="max-w-md"
                  title="Learning The Alphabet and Pronunciation"
                  imageSrc={dumyCourses}
                  description="Description for Learning The Alphabet and Pronunciation."
                />
                <CourseCard
                  className="max-w-md"
                  title="Learning The Alphabet and Pronunciation"
                  imageSrc={dumyCourses}
                  description="Description for Learning The Alphabet and Pronunciation."
                />
              </div>
            </Link>
          )}
          {activeLink === 1 && <Link to="/detail"></Link>}
          {activeLink === 2 && <Link to="/detail"></Link>}
        </div>
      </div>
      <Footers />
    </div>
  );
};

export default Course;
