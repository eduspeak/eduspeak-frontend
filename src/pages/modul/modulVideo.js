import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import SidebarModul from "../../components/Sidebar/sidebarModul";

import btnCancel from "../../assets/gambar/cancel.png";
import btnBack from "../../assets/gambar/back.png";

import btnNext from "../../assets/gambar/next.png";
import btnPrev from "../../assets/gambar/previous.png";

function Modul() {
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
                  Your Progress: <span className="ml-1">3/3</span>
                </div>
                <div className="cursor-pointer">
                  <img className="w-6 h-6" src={btnCancel} alt="" />
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <iframe
                className="w-full h-[400px]"
                src="https://www.youtube.com/embed/hKEVDFIiqg4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

            <div className="flex flex-col text-black font-semibold mx-16 py-4">
              <div className="">About Lesson</div>
              <div className="text-xl">Introduction to Alphabet</div>
            </div>

            <div className="w-full h-14 bg-[#222E50] grid grid-cols-1 place-items-center content-center">
              <div className="flex flex-row mt-2.5">
                <div className="ml-2">
                  <div className="text-white bg-slate-500 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center hover:bg-gray-500/30 mr-2 mb-2 w-32">
                    <img className="w-5 h-5 mr-3" src={btnPrev} alt="" />
                    Previous
                  </div>
                </div>

                <div className="ml-2">
                  <div className="text-white bg-slate-500 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center hover:bg-gray-500/30 mr-2 mb-2 w-32">
                    <img className="w-5 h-5 mr-3" src={btnNext} alt="" />
                    Next
                  </div>
                </div>
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
}

export default Modul;
