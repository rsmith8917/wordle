import React from "react";
import "./GameBoard.css";
import GameTile from "./GameTile";

function GameRow({ word, evaluations }) {
    function getLetterArray(word) {
        const array = ["", "", "", "", ""];
        for (let i = 0; i < array.length; i++) {
          array[i] = word[i] || "";
        }
        return array;
      }

      const [evals, setEvals] = React.useState([]);

      React.useEffect(function() {
          if (evaluations?.length) {
              const duration = 250;
              setEvals(e => [...e, evaluations[0]]);
  
            setTimeout(function() { 
                setEvals(e => [...e, evaluations[1]]);
            }, duration);
            setTimeout(function() { 
                setEvals(e => [...e, evaluations[2]]);
          }, duration * 2);
          setTimeout(function() { 
            setEvals(e => [...e, evaluations[3]]);
          }, duration * 3);
          setTimeout(function() { 
            setEvals(e => [...e, evaluations[4]]);
          }, duration * 4);
          } else {
              setEvals([]);
          }
      }, [evaluations])

    return(
        <div className="game-board-row" >
          {getLetterArray(word).map((letter, j) => (
            <GameTile
              letter={letter}
              state={
                evals?.[j] ||
                (letter ? "pending" : "empty")
              }
              key={j}
            />
          ))}
        </div>
    );
}

export default GameRow;