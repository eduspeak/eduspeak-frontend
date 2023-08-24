import React from "react";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import SidebarModul from "../../components/Sidebar/sidebarModul";

import btnCancel from "../../assets/gambar/cancel.png";
import btnBack from "../../assets/gambar/back.png";

import page1 from "../../assets/modul/page1.png";
import page2 from "../../assets/modul/page2.png";
import page3 from "../../assets/modul/page3.png";
import page4 from "../../assets/modul/page4.png";
import page5 from "../../assets/modul/page5.png";
import page6 from "../../assets/modul/page6.png";
import page7 from "../../assets/modul/page7.png";
import page8 from "../../assets/modul/page8.png";
import page9 from "../../assets/modul/page9.png";
import page10 from "../../assets/modul/page10.png";
import page11 from "../../assets/modul/page11.png";
import page12 from "../../assets/modul/page12.png";

const Modul = () => {
  const pageImages = [
    page1,
    page2,
    page3,
    page4,
    page5,
    page6,
    page7,
    page8,
    page9,
    page10,
    page11,
    page12,
  ];

  const pages = pageImages.map((page, index) => (
    <img
      key={index}
      className="mb-4 max-w-full h-auto"
      src={page}
      alt={`Page ${index + 1}`}
    />
  ));

  return (
    <div>
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
                  Your Progress: <span className="ml-1">2/3</span>
                </div>
                <div className="cursor-pointer">
                  <img className="w-6 h-6" src={btnCancel} alt="" />
                </div>
              </div>
            </div>

            {/* content */}
            <div className="flex-grow overflow-y-auto px-6 max-h-screen">
              {pages}
            </div>

            <div className="flex flex-col text-black font-semibold mx-16 py-4">
              <div className="">About Lesson</div>
              <div className="text-xl">Introduction to Alphabet</div>
            </div>

            <div className="w-full h-14 bg-[#BCD8C1] grid grid-cols-1 place-items-center content-center">
              <div class="flex">
                <button class="flex items-center justify-center px-4 h-10 text-base font-medium text-[#222E50] bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  Previous
                </button>

                <button class="flex items-center justify-center px-4 h-10 ml-3 text-base font-medium text-white bg-[#222E50] border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  Next
                </button>
              </div>
            </div>

            <div className="h-20 grid grid-cols-1 content-center font-semibold pl-8">
              Copyright &copy; 2023 EduSpeak
            </div>
          </div>
          <SidebarModul />
        </div>
      </div>
    </div>
  );
};

export default Modul;
