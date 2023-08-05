import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/menuHome";
import Course from "./pages/menuCourse";
import Dashboard from "./pages/menuDashboard";

function App() {
  return (
    <div className="h-screen">
      <div className="h-[80vh]">
        {/* Navvar */}
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-3"
                alt="Flowbite Logo"
              />
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                {/* ... other menu items */}
              </ul>
            </div>
          </div>
        </nav>
        {/* Konten 1 */}
        <div className="h-full grid grid-cols-[1fr_1fr] bg-blue-500">
          <div className="flex items-center border border-blue-500">
            <div className="flex flex-col">
              <div className="pl-12 text-[40px] font-extrabold text-slate-200">
                Buka Potensi Bahasa Inggrismu Bersama EduSpeak
              </div>
              <div className="w-[45vw] bg-slate-500 rounded-r-[40px] mt-4 text-white py-6">
                <p className="pl-12 pr-4">
                  EduSpeak adalah partner dalam membuka kemampuan bahasa Inggris secara online,
                </p>
                <p className="pl-12 pr-4">Akses kelas kapan saja dan dimana saja.</p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center ">
            <img className="h-auto max-w-lg w-full" src={modelUtama} alt="Model Utama" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
