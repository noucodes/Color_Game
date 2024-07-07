import React from 'react';

const ColorOptions = ({ colors, handleColorClick, disabled }) => {
  return (
    <div className="color-options">
      {colors.map((color, index) => (
        <button key={index} style={{ backgroundColor: color }} onClick={() => handleColorClick(color)} disabled={disabled}>
          {color}
        </button>
      ))}
    </div>
  );
}

export default ColorOptions;
