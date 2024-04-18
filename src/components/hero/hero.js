import React, { useState } from 'react';
import './css/hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faFilePdf } from '@fortawesome/free-solid-svg-icons'; // Import the arrow and file icons

const Hero = () => {
  const [showResume, setShowResume] = useState(false);

  const handleViewResume = () => {
    setShowResume(!showResume); // Toggle resume visibility
    // Add logic for resume animation here
  };

  return (
    <div className="bg-black text-white py-16 text-center relative">
      <button 
        className="absolute top-4 left-4 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out"
        onClick={handleViewResume}
      >
        <FontAwesomeIcon icon={faFilePdf} className="mr-2" />
        View Resume
      </button>
      <div className="relative bg-black text-white py-16 text-center">
        {/* Wrapper div for icons */}
        <div className="absolute top-4 right-4 flex">
          <a
            href="https://github.com/TysonBoring"
            className="mr-4 hover:text-indigo-500 transition duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://codepen.io/Tyson-Boring"
            className="mr-4 hover:text-indigo-500 transition duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faCodepen} size="2x" />
          </a>
        </div>
        {/* Rest of your Hero component */}
        {/* Add resume animation logic and rendering */}
        {showResume && (
          // Add your animated resume component here
          <div className="animated-resume">
            {/* Your animated resume content */}
          </div>
        )}
        {/* Rest of your Hero component */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-12 font-bold leading-tight">
          <span className="text-rotate">Tyson Boring</span>
        </h1>
        <p className="text-lg md:text-2xl lg:text-3xl mt-2 text-gray-400 transition duration-300 ease-in-out transform hover:scale-105">
          Frontend Web Developer
        </p> {/* Add subtitle here */}
        <p className="text-lg md:text-2xl lg:text-3xl mt-4 mr-4 text-white transition duration-300 ease-in-out hover:text-blue-500">
          Don't hesitate to{' '}
          <span className="text-indigo-500 hover:font-bold">
            <a href="#contact">contact me</a>
          </span>{' '}
          I'm eager to actively collaborate as part of your development team. Through my portfolio, you'll see projects that demonstrate the skills I can bring to the table. Together, we'll ensure goals are achieved & exceeded.
        </p>

        <nav className="mt-24">
          <ul className="flex justify-center justify-evenly space-x-6">
            <li>
              <a href="#about" className="text-lg md:text-xl hover:text-indigo-500">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="text-lg md:text-xl hover:text-indigo-500">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="text-lg md:text-xl hover:text-indigo-500">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-lg md:text-xl hover:text-indigo-500">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center justify-center">
      <div className="arrow-container">
        <FontAwesomeIcon icon={faArrowDown} size="2x" className="arrow-icon" />
      </div>
    </div>
    </div>
  );
};

export default Hero;
