import React from 'react';
import Typewriter from '../Typewriter/Typewriter';

const AboutMe = () => {
  const text = "A self-taught frontend developer proficient in React, HTML, CSS, and JavaScript. Driven to craft captivating web apps through collaborative teamwork. Eager to leverage my skills to contribute to your team and deliver outstanding solutions.";

  return (
    <section id="about" className="bg-white hover:scale-105 text-2xl py-16 flex justify-center">
      {/* Text Container */}
      <div className="w-full p-8 text-center md:w-1/2">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
          About Me
        </h2>
        <div className='hover:scale-105'>
          <Typewriter text={text} />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
