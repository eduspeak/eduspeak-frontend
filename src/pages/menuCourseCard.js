import React from 'react';

const CourseCard = ({ title, imageSrc, description }) => {
  return (
    <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <img src={imageSrc} alt={title} className="rounded-xl w-386 h-236" />
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{description}</p>
    </a>
  );
};

export default CourseCard;
