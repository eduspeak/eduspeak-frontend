import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import LoginModal from "../../components/login/LoginModal";
import Sidebar from "../../components/sidebarDashboard/Sidebar";
import Payment from "../../pages/menuDashboard/membershipPayment";

function Upgrade() {
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
          <div className="p-4 rounded-lg text-center max-w-lg mx-auto">
            <p className="text-xs text-red-600">PRICING</p>
            <h1 className="text-3xl">Level up</h1>
            <p className="border-b-2 border-black text-sm">
              Whether you’re just starting out or you’re running a major operation, Fiverr Workspace
              has a plan for you.
            </p>
          </div>
          <div className="relative overflow-x-auto sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-2">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3"></th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Free
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Membership
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-400 dark:border-gray-700 items-center">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Bebas iklan
                    </td>
                    <td className="px-6 py-4">
                      <svg
                        width="19"
                        height="14"
                        viewBox="0 0 19 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto my-auto"
                      >
                        <g clip-path="url(#clip0_99_7413)">
                          <path
                            d="M15.8127 0.893217L6.57925 9.85816L3.18653 6.56411C3.02204 6.4044 2.75534 6.4044 2.59081 6.56411L1.59798 7.52807C1.43349 7.68778 1.43349 7.94673 1.59798 8.10647L6.28137 12.6537C6.44586 12.8134 6.71257 12.8134 6.87709 12.6537L17.4012 2.43558C17.5657 2.27587 17.5657 2.01692 17.4012 1.85718L16.4084 0.893217C16.2439 0.733511 15.9772 0.733511 15.8127 0.893217Z"
                            fill="#E4E5E7"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_99_7413">
                            <rect
                              width="18"
                              height="13"
                              fill="white"
                              transform="translate(0.5 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </td>
                    <td className="px-6 py-4">
                      <svg
                        width="19"
                        height="14"
                        viewBox="0 0 19 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto my-auto"
                      >
                        <g clip-path="url(#clip0_99_7398)">
                          <path
                            d="M15.8127 0.893217L6.57925 9.85816L3.18653 6.56411C3.02204 6.4044 2.75534 6.4044 2.59081 6.56411L1.59798 7.52807C1.43349 7.68778 1.43349 7.94673 1.59798 8.10647L6.28137 12.6537C6.44586 12.8134 6.71257 12.8134 6.87709 12.6537L17.4012 2.43558C17.5657 2.27587 17.5657 2.01692 17.4012 1.85718L16.4084 0.893217C16.2439 0.733511 15.9772 0.733511 15.8127 0.893217Z"
                            fill="#1DBF73"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_99_7398">
                            <rect
                              width="18"
                              height="13"
                              fill="white"
                              transform="translate(0.5 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-400 dark:border-gray-700 items-center">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Bebas iklan
                    </td>
                    <td className="px-6 py-4">
                      <svg
                        width="19"
                        height="14"
                        viewBox="0 0 19 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto my-auto"
                      >
                        <g clip-path="url(#clip0_99_7413)">
                          <path
                            d="M15.8127 0.893217L6.57925 9.85816L3.18653 6.56411C3.02204 6.4044 2.75534 6.4044 2.59081 6.56411L1.59798 7.52807C1.43349 7.68778 1.43349 7.94673 1.59798 8.10647L6.28137 12.6537C6.44586 12.8134 6.71257 12.8134 6.87709 12.6537L17.4012 2.43558C17.5657 2.27587 17.5657 2.01692 17.4012 1.85718L16.4084 0.893217C16.2439 0.733511 15.9772 0.733511 15.8127 0.893217Z"
                            fill="#E4E5E7"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_99_7413">
                            <rect
                              width="18"
                              height="13"
                              fill="white"
                              transform="translate(0.5 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </td>
                    <td className="px-6 py-4">
                      <svg
                        width="19"
                        height="14"
                        viewBox="0 0 19 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto my-auto"
                      >
                        <g clip-path="url(#clip0_99_7398)">
                          <path
                            d="M15.8127 0.893217L6.57925 9.85816L3.18653 6.56411C3.02204 6.4044 2.75534 6.4044 2.59081 6.56411L1.59798 7.52807C1.43349 7.68778 1.43349 7.94673 1.59798 8.10647L6.28137 12.6537C6.44586 12.8134 6.71257 12.8134 6.87709 12.6537L17.4012 2.43558C17.5657 2.27587 17.5657 2.01692 17.4012 1.85718L16.4084 0.893217C16.2439 0.733511 15.9772 0.733511 15.8127 0.893217Z"
                            fill="#1DBF73"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_99_7398">
                            <rect
                              width="18"
                              height="13"
                              fill="white"
                              transform="translate(0.5 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4"></td>
                    <td className="px-6 py-4"></td>
                    <td className="px-6 py-4 text-center items-center justify-center">
                      <p>satu kali bayar untuk selamanya</p>
                      <div>
                        <Payment />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upgrade;
