import React, { useState } from "react";
import { Link } from "react-router-dom";

function SidebarModul() {
  const [activeSection, setActiveSection] = useState(1);

  const toggleSection = (section) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  return (
    <div className="h-full">
      <div id="accordion-collapse" data-accordion="collapse">
        <div>
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200"
              aria-expanded={activeSection === 1}
              onClick={() => toggleSection(1)}
            >
              <span>1. Course Content</span>
              <svg
                className={`w-3 h-3 ${activeSection === 1 ? "rotate-180" : ""} shrink-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            className={activeSection === 1 ? "" : "hidden"}
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="grid grid-row-3 gap-3 border border-gray-200">
              <div className="bg-gray-100 w-full cursor-pointer shadow h-10 mt-3 pl-10 grid content-center">
                <Link to="/modul/video">Video</Link>
              </div>
              <div className="bg-gray-100 w-full cursor-pointer shadow h-10 pl-10 grid content-center">
                <Link to="/modul/modul">Module</Link>
              </div>
              <div className="bg-gray-100 w-full cursor-pointer shadow h-10 pl-10 grid content-center">
                <Link to="/modul/quiz">Quiz</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarModul;
