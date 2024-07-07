// ColorDisplay.js
import React, { useState, useEffect } from 'react';
import './ColorDisplay.css';

const COLORS = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

const ColorDisplay = ({ color }) => {
  const [displayColor, setDisplayColor] = useState(null);
  const [showQuestionMark, setShowQuestionMark] = useState(false);

  useEffect(() => {
    if (color) {
      // Reset state to start the animation and color cycling
      setDisplayColor(null);
      setShowQuestionMark(false);

      // Start animation and color cycling
      let currentIndex = 0;
      const interval = setInterval(() => {
        setDisplayColor(COLORS[currentIndex]);
        currentIndex = (currentIndex + 1) % COLORS.length;
      }, 100); // Change color every 100ms

      // Stop interval after 2 seconds and show question mark
      setTimeout(() => {
        clearInterval(interval);
        setShowQuestionMark(true);
      }, 2000); // Stop after 2 seconds
    }
  }, [color]);

  return (
    <div className={`color-display ${color && 'shake'}`} style={{ backgroundColor: displayColor }}>
      {showQuestionMark && <h1>?</h1>}
    </div>
  );
}

export default ColorDisplay;
