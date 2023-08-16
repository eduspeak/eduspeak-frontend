import Sidebar from "../../../src/components/Sidebar";
import Navbar from "../../../src/components/Navbar";

import iconEndrolled from "../../assets/gambar/enrolled.png";
import iconActive from "../../assets/gambar/active.png";
import iconComplated from "../../assets/gambar/complated.png";
import dumyCourses from "../../assets/gambar/dumy_courses.png";

function dashboardUser() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="p-4 sm:ml-64 bg-slate-100 h-screen">
        <div className="p-4 bg-white rounded-xl h-full flex flex-col">
          <div className="grid grid-cols-3 p-4 gap-8">
            {/* Card1 */}
            <div className="w-full h-[30vh] flex flex-col items-center justify-center rounded-lg shadow bg-[#bfebff]">
              <div>
                <img
                  className="h-14 w-12"
                  src={iconEndrolled}
                  alt="Model Utama"
                />
              </div>
              <div>
                <h5 className="text-2xl font-bold tracking-tight text-gray-700 pt-3 pb-1">
                  10
                </h5>
              </div>
              <div>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Endrolled Courses
                </p>
              </div>
            </div>
            {/* Card2 */}
            <div className="w-full h-[30vh] flex flex-col items-center justify-center rounded-lg shadow bg-[#f3e8ff]">
              <div>
                <img className="h-14 w-12" src={iconActive} alt="Model Utama" />
              </div>
              <div>
                <h5 className="text-2xl font-bold tracking-tight text-gray-700 pt-3 pb-1">
                  10
                </h5>
              </div>
              <div>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Active Courses
                </p>
              </div>
            </div>
            {/* Card3 */}
            <div className="w-full h-[30vh] flex flex-col items-center justify-center rounded-lg shadow bg-[#fee3e3]">
              <div>
                <img
                  className="h-14 w-12"
                  src={iconComplated}
                  alt="Model Utama"
                />
              </div>
              <div>
                <h5 className="text-2xl font-bold tracking-tight text-gray-700 pt-3 pb-1">
                  10
                </h5>
              </div>
              <div>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Complated Courses
                </p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="p-4 flex flex-col border-2 border-gray-300">
              <div className="font-semibold mb-6">In Progress Courses</div>
              <div className="">
                <div className="grid grid-cols-[150px_1fr] gap-2">
                  <div className="w-full h-32">
                    <img
                      className="max-h-full max-w-full object-contain"
                      src={dumyCourses}
                      alt="Model Utama"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-lg">
                      Belajar hahayukk Lorem ipsum, dolor sit amet consectetur
                      adipisicing elit Lorem ipsum dolor sit amet consectetur
                      adipisicing elit.
                    </div>
                    <div className="flex flex-row mt-2">
                      <div className="flex items-center space-x-1 mb-5">
                        <svg
                          className="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-gray-300 dark:text-gray-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                      <div className="font-semibold px-2">4.9</div>
                      <div className="text-gray-500">(4.9 Reviews)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="grid grid-cols-[150px_1fr] gap-2">
                  <div className="w-full h-32">
                    <img
                      className="max-h-full max-w-full object-contain"
                      src={dumyCourses}
                      alt="Model Utama"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-lg">
                      Belajar hahayukk Lorem ipsum, dolor sit amet consectetur
                      adipisicing elit Lorem ipsum dolor sit amet consectetur
                      adipisicing elit.
                    </div>
                    <div className="flex flex-row mt-2">
                      <div className="flex items-center space-x-1 mb-5">
                        <svg
                          className="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-gray-300 dark:text-gray-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                      <div className="font-semibold px-2">4.9</div>
                      <div className="text-gray-500">(4.9 Reviews)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dashboardUser;
