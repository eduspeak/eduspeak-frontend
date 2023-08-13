import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import LoginModal from "../../components/login/LoginModal";
import Sidebar from "../../components/sidebarDashboard/Sidebar";

function History() {
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
          <div className="p-4 border-2 border-gray-200 border rounded-lg dark:border-gray-700 ">
            <h2>My Quiz Attempts</h2>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Quiz Info
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Question
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Total Marks
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Total Answer
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Incorrect Answer
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Earned Marks
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Result
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Total Teman
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">Silver</td>
                    <td className="px-6 py-4">Laptop</td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4 text-right">
                      <a
                        href="/"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <a
                        href="/"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Detail
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-4">
            <div className="flex text-left rounded">
              <p className="text-gray-400 dark:text-gray-500">Showing 1 to 10</p>
            </div>
            <div className="flex justify-end rounded">
              <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px text-sm">
                  <li>
                    <a
                      href="/"
                      className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Previous
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      aria-current="page"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
