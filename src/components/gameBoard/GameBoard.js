import React from "react";
import "./GameBoard.css";
import GameRow from "./GameRow";

function GameBoard({ gameState, width = 350, height = 420 }) {
  return (
    <div style={{ width, height }} className="game-board">
      {gameState.boardState.map((word, i) => (
        <GameRow key={i} word={word} evaluations={gameState.evaluations?.[i]} />
      ))}
    </div>
  );
}

export default GameBoard;
