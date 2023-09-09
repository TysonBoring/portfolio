import React, { useState, useEffect } from 'react';
import macbookImage from './desk.jpeg'; // Update the image path
import './css/about.css'; // Import a CSS file for animations (create this file)

const AboutMe = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 100); // Delay the animation to allow the image to load
  }, []);

  return (
    <section id="about" className="bg-white py-16 flex">
      {/* Image Container */}
      <div className="w-1/2 relative overflow-hidden">
        <div
          style={{
            backgroundImage: `url(${macbookImage})`, // Use the new image path
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: fadeIn ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            width: '100%', // Make it responsive
            height: '100%', // Make it responsive
            objectFit: 'cover', // Control image sizing
          }}
          className="h-96 bg-left absolute top-0 left-0 w-full h-full"
        ></div>
      </div>

      {/* Text Container */}
      <div
        style={{
          opacity: fadeIn ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
        }}
        className="w-1/2 p-8"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
          About Me
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed hover:font-bold hover:text-black hover:scale-105 transition-transform">
          Hi, I'm Tyson Boring, a frontend development engineer passionate about creating exceptional web experiences. With expertise in React, HTML, CSS, and JavaScript, I bring ideas to life by crafting user-friendly and interactive web applications. My commitment to clean and maintainable code helps ensure the success of each project I undertake.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
