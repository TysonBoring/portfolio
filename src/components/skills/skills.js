import React, { useState } from 'react';
import { motion } from 'framer-motion'; 

const skillsList = [
  'React',
  'TypeScript',
  'HTML / CSS / JS',
  'Git Tooling',
  'Tailwind-CSS',
  'Responsive UI/UX Design',
  'Database Interactions',
  'UI Interactivity',
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="bg-gray-800 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-white">
          Skills & Learned Technologies
        </h2>
        <hr className="border-indigo-500 w-32 mx-auto mb-8" /> {/* Separating Line */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skillsList.map((skill, index) => (
            <motion.div
              key={index}
              className={`relative p-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-2 ${
                hoveredSkill === index
                  ? 'bg-gray-900 border-indigo-500 border-opacity-50 text-indigo-500'
                  : 'bg-black'
              }`}
              whileHover={{ scale: 1.05 }} // Add scaling animation on hover
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <p className={`text-lg md:text-xl text-white hover:text-indigo-500 ${
                hoveredSkill === index ? 'font-semibold' : ''
              }`}>
                {skill}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
