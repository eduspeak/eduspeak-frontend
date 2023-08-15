import Navbar from "../components/Navbar";
import dumyCourses from "../assets/gambar/dumy_courses.png";

function DetailCourse() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div>
          <div className="flex flex-row items-center ">
            <div className="flex items-center space-x-1 mb-2 cursor-pointer">
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
          <div>
            <h1 className="font-semibold">Memahami Alfabet dan Pengucapan</h1>
            <p className="text-gray-500">
              Categories: <span className="font-semibold text-black">Beginner</span>
            </p>
          </div>
          <div>
            <img src={dumyCourses} alt="Modul utama" />
          </div>
          <div>
            <h2 className="font-semibold">About Course</h2>
            <p>
              Looking started he up perhaps against. How remainder all additions get elsewhere
              resources. One missed shy wishes supply design answer formed. Prevent on present
              hastily passage an subject in be. Be happiness arranging so newspaper defective
              affection ye.
            </p>
          </div>
          <div>
            <h2 className="font-semibold">Course Content</h2>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg max-w-lg">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Product name
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple MacBook Pro 17"
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="p-4 space-y-4">
          <div class="max-w-sm bg-white border-4 border-[#007991] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="bg-[#BCD8C1] w-full p-4 rounded-t-sm border-b-4 border-[#007991]">
              <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Course Progress
              </h5>
            </div>
            <div class="p-4">
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
                chronological order.
              </p>
            </div>
          </div>
          <div class="max-w-sm bg-white border-4 border-[#007991] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="bg-[#BCD8C1] w-full p-4 rounded-t-sm border-b-4 border-[#007991]">
              <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                A Course By
              </h5>
            </div>
            <div class="p-4">
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
                chronological order.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailCourse;
