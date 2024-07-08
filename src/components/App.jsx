import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
import DiceRoller from "./DiceRoller";
import ScoreBoard from "./ScoreBoard";
import "./App.css";

function App() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [diceColors, setDiceColors] = useState([]);
  const [score, setScore] = useState(1);

  const handleColorPick = (color) => {
    setSelectedColor(color);
  };

  const handleDiceRoll = (colors) => {
    setDiceColors(colors);
    calculateScore(colors);
  };

  const calculateScore = (colors) => {
    const correctPredictions = colors.filter(
      (color) => color === selectedColor
    ).length;
    let scoreMultiplier = 1;

    switch (correctPredictions) {
      case 1:
        scoreMultiplier = 2;
        break;
      case 2:
        scoreMultiplier = 3;
        break;
      case 3:
        scoreMultiplier = 4;
        break;
      default:
        scoreMultiplier = 0;
    }

    setScore(score * scoreMultiplier);
  };

  const resetGame = () => {
    setSelectedColor(null);
    setDiceColors([]);
    setScore(1);
  };

  return (
    <div className="App">
      <h1>Color Game</h1>
      <ScoreBoard score={score} />
      <DiceRoller onRoll={handleDiceRoll} />
      <ColorPicker onPick={handleColorPick} selectedColor={selectedColor} />
      <button onClick={resetGame}>Reset</button>
    </div>
  );
}

export default App;
