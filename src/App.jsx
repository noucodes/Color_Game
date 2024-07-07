// App.js
import React, { useState } from 'react';
import ScoreBoard from './Scoreboard';
import ColorDisplay from './ColorDisplay';
import ColorOptions from './ColorOptions';

const COLORS = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

const App = () => {
  const [score, setScore] = useState(0);
  const [computerColor, setComputerColor] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  function rollColorDice() {
    const randomIndex = Math.floor(Math.random() * COLORS.length);
    setComputerColor(COLORS[randomIndex]);
    setGameOver(false);
  }

  function handleColorClick(guess) {
    if (guess === computerColor) {
      setScore(score + 1);
    }
    setGameOver(true);
  }

  return (
    <div className="App">
      <h1>Color Guessing Game</h1>
      <ScoreBoard score={score} />
      <ColorDisplay color={computerColor} />
      {gameOver ? (
        <button onClick={rollColorDice}>Roll the color dice</button>
      ) : (
        <ColorOptions
          colors={COLORS}
          handleColorClick={handleColorClick}
          disabled={gameOver}
        />
      )}
    </div>
  );
}

export default App;
