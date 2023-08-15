<<<<<<< HEAD
import React from 'react';

const CourseCard = ({ title, imageSrc, description }) => {
  return (
    <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <img src={imageSrc} alt={title} className="rounded-xl w-386 h-236" />
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{description}</p>
    </a>
=======
import React from "react";

const CourseCard = ({ title, imageSrc, description }) => {
  return (
    <div class="max-w-md">
      <div className="relative shadow dark:bg-gray-800 dark:border-gray-700">
        <img class="w-full h-auto rounded-lg " src={imageSrc} alt={title} />
        <div className="bg-[#222E50] max-w-[70px] h-[24px] p-2 space-x-1 items-center justify-center flex rounded-lg absolute bottom-0 right-0">
          <svg
            className="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <span className="ml-1 text-white text-sm font-semibold">4,6</span>
        </div>
      </div>
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white max-w-md">
          {title}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <div className="flex space-x-2">
          <div className="flex space-x-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.8">
                <path
                  d="M12 8V12L15 15L12 8ZM21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            <span>4,5 Jam</span>
          </div>
          <div className="flex space-x-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.8">
                <path
                  d="M14.752 11.1683L11.555 9.03632C11.4043 8.93574 11.229 8.87802 11.048 8.86932C10.867 8.86062 10.687 8.90126 10.5274 8.98691C10.3677 9.07256 10.2342 9.2 10.1414 9.35559C10.0485 9.51119 9.99961 9.6891 10 9.87032V14.1333C9.99998 14.3144 10.0491 14.492 10.1421 14.6473C10.2352 14.8026 10.3686 14.9298 10.5282 15.0152C10.6879 15.1006 10.8677 15.1411 11.0485 15.1323C11.2293 15.1235 11.4044 15.0658 11.555 14.9653L14.752 12.8333C14.889 12.742 15.0013 12.6183 15.0789 12.4731C15.1566 12.328 15.1972 12.1659 15.1972 12.0013C15.1972 11.8367 15.1566 11.6746 15.0789 11.5295C15.0013 11.3844 14.889 11.2606 14.752 11.1693V11.1683Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            <span>20 Video</span>
          </div>
        </div>
      </div>
    </div>
>>>>>>> 5f8a86cd7b87c1f72780fab32d0608824c44ac2e
  );
};

export default CourseCard;
