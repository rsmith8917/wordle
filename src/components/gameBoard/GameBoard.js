import React from "react";
import "./GameBoard.css";
import GameTile from "./GameTile";

function GameBoard({ gameState, width = 350, height = 420 }) {
  function getLetterArray(word) {
    const array = ["", "", "", "", ""];
    for (let i = 0; i < array.length; i++) {
      array[i] = word[i] || "";
    }
    return array;
  }
  return (
    <div style={{ width, height }} className="game-board">
      {gameState.boardState.map((word, i) => (
        <div className="game-board-row" key={i}>
          {getLetterArray(word).map((letter, j) => (
            <GameTile
              letter={letter}
              state={
                gameState.evaluations?.[i]?.[j] ||
                (letter ? "pending" : "empty")
              }
              key={j}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default GameBoard;
