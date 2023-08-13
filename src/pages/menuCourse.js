import Navbar from "../components/Navbar";
import {Link} from "react-router-dom";
import React, {useState} from 'react';
import CourseCard from './menuCourseCard';

const Course = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (index) => {
        setActiveLink(index);
    };

    const linkStyle = {
        display: 'inline-block',
        borderBottom: '2px solid transparent',
        transition: 'border-bottom-color 0.2s ease-in-out',
        margin: 0,
        padding: '0.25rem 0.5rem',
        color: 'black'
    };

    const linkHoverStyle = {
        borderBottomColor: 'black'
    };

    const links = ['Beginner', 'Intermediate', 'Advanced'];

    return (
        <> {/* <p>Ini Course</p> */}
            <div className="bg-gray-100 min-h-screen">
                <Navbar/>
                <header className="bg-blue-200 pb-0 py-20">
                    <div className="max-w-7xl mx-auto mt-100 text-center">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold">Courses</h1>
                        </div>
                        <ul className="flex justify-center mt-10 space-x-2">
                            {
                            links.map((link, index) => (
                                <li key={index}
                                    className="w-full h-full p-0">
                                    <Link to="/course">
                                        <div style={
                                                {
                                                    ... linkStyle,
                                                    ...(hoveredIndex === index ? linkHoverStyle : {})
                                                }
                                            }
                                            onMouseEnter={
                                                () => handleMouseEnter(index)
                                            }
                                            onMouseLeave={handleMouseLeave}
                                            onClick={
                                                () => handleLinkClick(index)
                                            }
                                            className="pb-2 pl-1 pr-0 text-black header-link">
                                            {link} </div>
                                    </Link>
                                </li>
                            ))
                        } </ul>
                        {/* <div className="flex justify-center mt-10 space-x-6">
                            <a href="#" className="border-b-2 border-blue-500 pb-1">Beginner</a>
                            <a href="#" className="border-b-2 border-transparent pb-1">Intermediate</a>
                            <a href="#" className="border-b-2 border-transparent pb-1">Advanced</a>
                        </div> */} </div>
                </header>
                <div className="flex justify-center items-center max-w-7xl mx-auto mt-12 flex space-x-6">
                    {
                    activeLink === 0 && (
                        <Link to="/detail">
                            <div className="flex items-center space-x-2">
                                <CourseCard title="Learning The Alphabet and Pronunciation" imageSrc="image1.jpg" description="Description for Learning The Alphabet and Pronunciation."/>
                                <CourseCard title="Basic Pronunciation" imageSrc="image1.jpg" description="Description for Basic Pronunciation."/>
                            </div>
                        </Link>
                    )
                }
                    {
                    activeLink === 1 && (
                        <Link to="/detail">
                            <div className="flex items-center space-x-2">
                                <CourseCard title="Course intermediate 1" imageSrc="image2.jpg" description="Description for Course intermediate 1."/>
                                <CourseCard title="Course intermediate 2" imageSrc="image2.jpg" description="Description for Course intermediate 2."/>
                            </div>
                        </Link>
                    )
                }
                    {
                    activeLink === 2 && (
                        <Link to="/detail">
                            <div className="flex items-center space-x-2">
                                <CourseCard title="Course Advanced 1" imageSrc="image3.jpg" description="Description for Course Advanced 1."/>
                                <CourseCard title="Course Advanced 2" imageSrc="image3.jpg" description="Description for Course Advanced 2."/>
                            </div>
                        </Link>
                    )
                } </div>
                <footer className="bg-gray-200 p-4 mt-12 text-center absolute bottom-0 w-full">
                    Copyright &copy; 2023 EduSpeak
                </footer>
            </div>
        </>
    );
}

export default Course;
