import React from "react";
import "./ColorPicker.css";

const colors = ["red", "blue", "green", "yellow", "orange", "purple"];

function ColorPicker({ onPick, selectedColor }) {
  return (
    <div>
      <h2>Select a color:</h2>
      <div className="color-container">
        {colors.map((color) => (
          <button
            key={color}
            className={`color-button ${
              color === selectedColor ? "selected" : ""
            }`}
            style={{ backgroundColor: color }}
            onClick={() => onPick(color)}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;
