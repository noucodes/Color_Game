import React from "react";

function ScoreBoard({ score }) {
  return (
    <div>
      <h2>{score === 0 ? "Game Over" : `Score: ${score}`}</h2>
    </div>
  );
}

export default ScoreBoard;
