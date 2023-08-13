import React, { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import LoginModal from "../../components/login/LoginModal";
import Sidebar from "../../components/sidebarDashboard/Sidebar";

function Enrolled() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <div className="bg-[#F4F6FC]">
      <LoginModal isOpen={isLoginModalOpen} onRequestClose={closeLoginModal} />
      <Navbar onLoginClick={openLoginModal} />
      <Sidebar />

      {/* konten */}
      <div className="p-4 sm:ml-64">
        <div className="bg-white mt-20 p-4 h-screen">
          <h1>ENDROLLED COURSES</h1>
          <div className="p-4 border-2 border-gray-200 border rounded-lg dark:border-gray-700 mt-2">
            <h2>In Progress Courses</h2>
            <ul className="max-w divide-gray-200 dark:divide-gray-700 mt-2">
              <li className="pb-3 sm:pb-4 border-b border-gray-300 pb-2">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {/* <img className="w-8 h-8 rounded-full" src="" /> */}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Learning The Alphabet And Pronunciation
                    </p>

                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
                      <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                      <a
                        href="."
                        className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
                      >
                        73 reviews
                      </a>
                    </div>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white text-justify-end">
                    <a
                      href="."
                      className="text-sm text-right font-medium text-gray-900 truncate text-green-500"
                    >
                      Show Progress Courses
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            <Link to=".">
              <div className="text-right block py-1 pl-3 pr-4 text-blue-600">See all</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enrolled;
