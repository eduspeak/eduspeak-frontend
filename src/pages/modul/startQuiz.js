import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import SidebarModul from "../../components/Sidebar/sidebarModul";
import React, { useState } from "react";

function StartQuiz() {
  const [quizNumber, setQuizNumber] = useState(1);

  const handleNextClick = () => {
    if (quizNumber < 2) {
      setQuizNumber(quizNumber + 1);
    }
  };

  const handlePreviousClick = () => {
    if (quizNumber > 1) {
      setQuizNumber(quizNumber - 1);
    }
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="sm:ml-64 bg-white h-screen grid grid-cols-[1fr_400px]">
        <div className="flex flex-col">
          <div className="grid grid-cols-1 h-16 content-center bg-[#222E50] p-3">
            <div className="text-white font-semibold text-center">
              Your Quiz in progress : {quizNumber}
            </div>
          </div>

          <div className="mt-12 h-full">
            <div className="flex flex-row justify-center">
              {/*  */}
              <div className="grid grid-row-2">
                {/* Soal Nomor 1 */}
                {quizNumber === 1 && (
                  <div className="block w-[70vh] p-6 bg-white border border-gray-200 rounded-lg shadow">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Quiz Nomor 1
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Apa itu HTML? Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Minima deserunt tenetur natus repellat
                      quo enim iure blanditiis, atque dolorum perferendis
                      excepturi modi laborum nulla doloremque ipsam eligendi
                      impedit labore similique.
                    </p>
                    <div className="flex flex-col mt-3">
                      <div>A. asdsa</div>
                      <div>B. asdsa</div>
                      <div>C. asdsa</div>
                      <div>D. asdsa</div>
                    </div>
                  </div>
                )}
                {quizNumber === 2 && (
                  <div className="block w-[70vh] p-6 bg-white border border-gray-200 rounded-lg shadow">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Quiz Nomor 2
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Fungsi dari HTML? Lorem ipsum dolor sit amet consectetur
                    </p>
                    <div className="flex flex-col mt-3">
                      <div>A. asdsa</div>
                      <div>B. asdsa</div>
                      <div>C. asdsa</div>
                      <div>D. asdsa</div>
                    </div>
                  </div>
                )}

                {/*  */}

                <div className="flex justify-center mt-6">
                  {quizNumber > 1 && (
                    <button
                      type="button"
                      className="text-white bg-gradient-to-l from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      onClick={handlePreviousClick}
                    >
                      Previous
                    </button>
                  )}
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    onClick={handleNextClick}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SidebarModul />
      </div>
    </div>
  );
}

export default StartQuiz;
