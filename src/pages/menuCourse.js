import Navbar from "../components/Navbar";
import {Link} from "react-router-dom";

const Course = () => {
    return (
        <>
            
            {/* <p>Ini Course</p> */}
            <li className="w-full h-full p-1">
                <Link to="/menuDetailCourse">
                    <div className="block py-1 pl-3 pr-4 text-white hover:underline">Home</div>
                </Link>
            </li>

            <div className="bg-gray-100 min-h-screen">
            <Navbar/>
                <header className="bg-blue-200 pb-0 py-20">
                    <div className="max-w-7xl mx-auto text-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold">Courses</h1>
                    </div>
                    <div className="flex justify-center mt-10 space-x-6">
                        <a href="#" className="border-b-2 border-blue-500 pb-1">Beginner</a>
                        <a href="#" className="border-b-2 border-transparent pb-1">Intermediate</a>
                        <a href="#" className="border-b-2 border-transparent pb-1">Advanced</a>
                    </div>
                    </div>
                </header>
                <div className="flex justify-center items-center max-w-7xl mx-auto mt-12 flex space-x-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img src="image1.jpg" alt="Image 1" className="rounded-xl w-386 h-236"/>
                        <h3 className="text-xl font-semibold mt-3">Learning The Alphabet and Pronounciation</h3>
                        <p className="mt-2">Description for Image 1.</p>
                        <div className="flex items-center space-x-2">
                        <svg className="w-6 h-6" xmlns="...">
                            {/* Icon */} </svg>
                        <p>Icon Text 1</p>
                    </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img src="image2.jpg" alt="Image 2" className="rounded-xl w-386 h-236"/>
                        <h3 className="text-xl font-semibold mt-3">Basic Vocabulary</h3>
                        <p className="mt-2">Description for Image 2.</p>
                        <svg className="w-6 h-6" xmlns="...">
                            {/* Icon */} </svg>
                        <p>Icon Text 2</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img src="image3.jpg" alt="Image 3" className="rounded-xl w-386 h-236"/>
                        <h3 className="text-xl font-semibold mt-3">Image 3</h3>
                        <p className="mt-2">Description for Image 3.</p>
                        <svg className="w-6 h-6" xmlns="...">
                            {/* Icon */} </svg>
                        <p>Icon Text 3</p>
                    </div>
                </div>
                <footer className="bg-gray-200 p-4 mt-12 text-center">
                    &copy; 2023 My Website. All rights reserved.
                </footer>
            </div>
        </>
    );
}

export default Course;
