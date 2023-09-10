import React from 'react';
import Typewriter from '../Typewriter/Typewriter';

const AboutMe = () => {
  const text = "Greetings! I'm Tyson Boring, a seasoned frontend developer with a talent for crafting extraordinary web experiences. My skill set includes React, HTML, CSS, and JavaScript, along with a wide range of development tools. My commitment to effective communication and collaboration makes me an ideal choice for transforming ideas into captivating and user-friendly web applications.";

  return (
    <section id="about" className="bg-white hover:scale-105 text-2xl py-16 flex justify-center">
      {/* Text Container */}
      <div className="w-full p-8 text-center md:w-1/2">
        <h2 className="text-4xl md:text-5xl lg:text-6xl hover:scale-125 font-bold mb-6 text-gray-800">
          About Me
        </h2>
        <div className='hover:scale-105 hover:text-indigo-500'>
          <Typewriter text={text} />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
