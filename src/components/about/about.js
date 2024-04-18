import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from '../Typewriter/Typewriter';

const AboutMe = () => {
  const text = "I am a passionate frontend developer skilled in React, HTML, CSS, and JavaScript. I am dedicated to delivering high-quality web applications and thrive in collaborative environments.";
  const personalInterests = [
    "Playing with my son",
    "Reading",
    "Cooking"
  ];

  return (
    <motion.section
      id="about"
      className="bg-gray-100 py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
              About Me
            </h2>
            <Typewriter text={text} />
          </motion.div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">In my free time, I enjoy -</h3>
            <div className="space-y-4">
              {personalInterests.map((interest, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white shadow-lg rounded-lg p-6 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <h4 className="text-lg font-semibold mb-2">{interest}</h4>
                  {/* You can add more styling if needed */}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
