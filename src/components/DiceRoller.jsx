import React, { useState } from "react";
import "./DiceRoller.css";

const colors = ["red", "blue", "green", "yellow", "orange", "purple"];

function DiceRoller({ onRoll }) {
  const [diceColors, setDiceColors] = useState([null, null, null]);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    setIsRolling(true);
    setTimeout(() => {
      const rolledColors = Array.from(
        { length: 3 },
        () => colors[Math.floor(Math.random() * colors.length)]
      );
      setDiceColors(rolledColors);
      onRoll(rolledColors);
      setIsRolling(false);
    }, 1500);
  };

  return (
    <div className="game-container">
      <div className="dice-container">
        {diceColors.map((color, index) => (
          <div
            key={index}
            className={`dice ${isRolling ? "shaking" : ""}`}
            style={{ backgroundColor: color || "white" }}
          >
            {color ? color : "?"}
          </div>
        ))}
      </div>
      <button onClick={rollDice} disabled={isRolling}>
        {isRolling ? "Rolling..." : "Roll Dice"}
      </button>
    </div>
  );
}

export default DiceRoller;
