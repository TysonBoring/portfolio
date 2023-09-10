import React, { useEffect, useState } from 'react';
import './Typewriter.css'; // Import your CSS file for styling (create this file)

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prevText) => prevText + text[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setCursorVisible(false);
      }
    }, 75); // Adjust the typing speed here

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="typewriter-container">
      <p>{displayedText}</p>
      {cursorVisible && <span className="cursor">|</span>}
    </div>
  );
};

export default Typewriter;
