// import React, { useState } from "react";

import Sidebar from "../../../src/components/Sidebar";
import Navbar from "../../../src/components/Navbar";

import React, { useState } from "react";

// Import Gambar

import btnCancel from "../../assets/gambar/cancel.png";
import btnNext from "../../assets/gambar/next.png";
import btnPrev from "../../assets/gambar/previous.png";
import btnBack from "../../assets/gambar/back.png";

function Quiz() {
  const [activeSection, setActiveSection] = useState(1);

  const toggleSection = (section) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="sm:ml-64 bg-white h-screen grid grid-cols-[1fr_400px]">
        <div className="flex flex-col">
          <div className="grid grid-cols-2 h-16 content-center bg-[#222E50] p-3">
            <div className="flex flex-row text-white font-semibold">
              <div className="cursor-pointer">
                <img className="w-6 h-6" src={btnBack} alt="back" />
              </div>
              <div className="ml-3">Introduction to HTML</div>
            </div>
            <div className="flex flex-row justify-end text-white font-semibold">
              <div className="mr-2">
                Your Progress: <span className="ml-1">3/3</span>
              </div>
              <div className="cursor-pointer">
                <img className="w-6 h-6" src={btnCancel} alt="" />
              </div>
            </div>
          </div>

          <div className="px-5 pt-8 flex justify-center">
            <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow">
              <div className="mb-2">Quiz</div>
              <div
                onClick={() => {
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Introduction to HTML
                  </h5>;
                }}
                className="cursor-pointer"
              ></div>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit, voluptas molestiae sit cupiditate est illo
                inventore quae iste impedit cumque error. Similique aliquid ab
                est rerum, ratione libero quibusdam! Rerum?
              </p>

              <div className="border-b-2 my-5"></div>

              <div className="flex flex-col">
                <div>Question : 5</div>
                <div>Total Attempted : 0/1</div>
                <div>Passing Grade: (80%)</div>
              </div>

              <div className="flex flex-row mt-5">
                <div>
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Start Quiz
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
                  >
                    Skip Quiz
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col text-black font-semibold mx-16 py-4">
            <div className="">About Html</div>
            <div className="text-xl">Introduction HTML </div>
          </div>

          <div className="w-full h-14 bg-[#222E50] grid grid-cols-1 place-items-center content-center">
            <div className="flex flex-row mt-2.5">
              <div className="mr-2">
                <button
                  type="button"
                  className="text-white bg-slate-500 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center hover:bg-gray-500/30 mr-2 mb-2"
                >
                  <img className="w-5 h-5 mr-3" src={btnPrev} alt="" />
                  Previous
                </button>
              </div>
              <div className="ml-2">
                <button
                  type="button"
                  className="text-white bg-slate-500 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center hover:bg-gray-500/30 mr-2 mb-2"
                >
                  <img className="w-5 h-5 mr-3" src={btnNext} alt="" />
                  Previous
                </button>
              </div>
            </div>
          </div>

          <div className="h-20 border border-red-500 grid grid-cols-1 content-center font-semibold pl-8">
            Copyright &copy; 2023 EduSpeak
          </div>
        </div>

        <div className="h-full">
          <div id="accordion-collapse" data-accordion="collapse">
            <div>
              <h2 id="accordion-collapse-heading-1">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl"
                  aria-expanded={activeSection === 1}
                  onClick={() => toggleSection(1)}
                >
                  <span>1. Course Content</span>
                  <svg
                    className={`w-3 h-3 ${
                      activeSection === 1 ? "rotate-180" : ""
                    } shrink-0`}
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
                <div className="grid grid-row-3 gap-3 border border-gray-200 ">
                  <div className="bg-gray-100 w-full cursor-pointer shadow h-10 mt-3 pl-10 grid content-center">
                    Video
                  </div>
                  <div className="bg-gray-100 w-full cursor-pointer shadow h-10 pl-10 grid content-center">
                    Module
                  </div>
                  <div className="bg-gray-100 w-full cursor-pointer shadow h-10 pl-10 grid content-center">
                    Quiz
                  </div>
                </div>
              </div>
            </div>
            {/* Btn 2 */}
            {/* <div>
              <h2 id="accordion-collapse-heading-2">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 rounded-t-xl"
                  aria-expanded={activeSection === 2}
                  onClick={() => toggleSection(2)}
                >
                  <span>2. Word</span>
                  <svg
                    className={`w-3 h-3 ${
                      activeSection === 2 ? "rotate-180" : ""
                    } shrink-0`}
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
                id="accordion-collapse-body-2"
                className={activeSection === 2 ? "" : "hidden"}
                aria-labelledby="accordion-collapse-heading-2"
              >
                <div className="grid grid-row-3 gap-3 border border-gray-200 ">
                  <div className="bg-gray-100 w-full cursor-pointer shadow h-10 mt-3 pl-10 grid content-center">
                    Video
                  </div>
                  <div className="bg-gray-100 w-full cursor-pointer shadow h-10 pl-10 grid content-center">
                    Module
                  </div>
                  <div className="bg-gray-100 w-full cursor-pointer shadow h-10 pl-10 grid content-center">
                    Quiz
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
