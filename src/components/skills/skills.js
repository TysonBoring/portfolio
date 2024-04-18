import React, { useState } from 'react';
import { motion } from 'framer-motion'; 

const skillsList = [
  { name: 'React', symbol: '⚛️' },
  { name: 'JavaScript', symbol: '🌟' },
  { name: 'Java', symbol: '☕' },
  { name: 'MySQL', symbol: '🔍' },
  { name: 'HTML & CSS', symbol: '🎨' },
  { name: 'Git', symbol: '🔗' },
  { name: 'Tailwind', symbol: '🌀' },
  { name: 'Docker', symbol: '🐳' }
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
              className={`relative p-4 rounded-lg shadow-md ${
                hoveredSkill === index ? 'bg-gray-900 text-indigo-500' : 'bg-black'
              }`}
              style={{
                border: hoveredSkill === index ? '2px solid rgba(79, 70, 229, 0.5)' : 'none',
                transition: 'background-color 0.3s, border-color 0.3s, color 0.3s',
              }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredSkill(index)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <p className={`text-lg md:text-xl text-white ${hoveredSkill === index ? 'font-semibold' : ''}`}>
                {skill.symbol} {skill.name}
              </p>
            </motion.div>          
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
