import React, { useEffect, useState } from 'react';
import './Typewriter.css'; // Import your CSS file for styling (create this file)

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
        setCursorVisible(false);
      }
    }, 75); // Adjust the typing speed here

    return () => clearInterval(interval);
  }, [currentIndex, text]);

  return (
    <div className="typewriter-container">
      <p>{displayedText}</p>
      {cursorVisible && <span className="cursor">|</span>}
    </div>
  );
};

export default Typewriter;
