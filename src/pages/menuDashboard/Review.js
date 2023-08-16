import Sidebar from "../../../src/components/Sidebar";
import Navbar from "../../../src/components/Navbar";
import dumyCourses from "../../assets/gambar/dumy_courses.png";
import btnClose from "../../assets/icon/close.svg";

import React, { useState } from "react";
import Modal from "react-modal";
import { Rating } from "react-simple-star-rating";

function Review() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nama, setNama] = useState("");
  const [rating, setRating] = useState(0);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setNama("");
    setIsModalOpen(false);
  };

  const handleRating = (value) => {
    setRating(value); // Set the rating value
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="p-4 sm:ml-64 bg-slate-100 h-screen">
        <div className="p-4 bg-white rounded-xl h-full flex flex-col">
          <div className="p-4">
            <div className="font-semibold pb-6">Review</div>
            <div className="p-4 flex flex-col border-2 border-gray-300">
              <div className="font-semibold mb-6">In Progress Courses</div>
              {/*  */}
              <div className="grid grid-cols-[150px,1fr] gap-2">
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
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-row items-center ">
                      <div
                        className="flex items-center space-x-1 mb-2 cursor-pointer"
                        onClick={toggleModal}
                      >
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
                    <div className="">
                      <button
                        type="button"
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/*  */}
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        className="mx-auto mt-20 px-4 py-6 bg-white shadow-md rounded-lg max-w-[40vw] border"
        style={{ overlay: { zIndex: 101 } }}
      >
        <div
          className="w-full h-10 flex items-center justify-end cursor-pointer"
          onClick={toggleModal}
        >
          <img
            className="max-h-full max-w-full object-contain"
            src={btnClose}
            alt="Model Utama"
          />
        </div>

        <div className="w-full px-10 pb-6 mt-2">
          <form onSubmit={handleFormSubmit}>
            <h3 className="mb-4 text-center text-lg font-medium leading-none text-gray-900 dark:text-white">
              Review Course
            </h3>
            <div className="w-full ">
              <div className="py-3">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="username"
                  required=""
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                />
              </div>

              <div className="flex row py-3">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Rating
                </label>
                <div className="flex flex-row items-center">
                  <Rating
                    onClick={handleRating}
                    rating={rating}
                    size={20}
                    fillColor="gold"
                    emptyColor="gray"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="text-white bg-[#007991] mt-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
export default Review;
