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
  console.log(`${word}: ${JSON.stringify(evals)}`);
  const [win, setWin] = React.useState([false, false, false, false, false]);
  const timeoutIdsRef = React.useRef([]);

  React.useEffect(
    function () {
      timeoutIdsRef.current.forEach((id) => {
        clearTimeout(id);
      });
      timeoutIdsRef.current = [];
      if (evaluations?.length) {
        if (evaluations[0] === "unknown") {
          setEvals(evaluations);
          setWin([false, false, false, false, false]);
        } else {
          const duration = 250;
          setEvals((e) => [evaluations[0]]);

          timeoutIdsRef.current.push(
            setTimeout(function () {
              setEvals((e) => [evaluations[0], evaluations[1]]);
            }, duration)
          );
          timeoutIdsRef.current.push(
            setTimeout(function () {
              setEvals((e) => [evaluations[0], evaluations[1], evaluations[2]]);
            }, duration * 2)
          );
          timeoutIdsRef.current.push(
            setTimeout(function () {
              setEvals((e) => [
                evaluations[0],
                evaluations[1],
                evaluations[2],
                evaluations[3],
              ]);
            }, duration * 3)
          );
          timeoutIdsRef.current.push(
            setTimeout(function () {
              setEvals((e) => [
                evaluations[0],
                evaluations[1],
                evaluations[2],
                evaluations[3],
                evaluations[4],
              ]);
            }, duration * 4)
          );

          if (evaluations.every((e) => e === "correct")) {
            timeoutIdsRef.current.push(
              setTimeout(function () {
                setWin([true, false, false, false, false]);
              }, duration * 5)
            );
            timeoutIdsRef.current.push(
              setTimeout(function () {
                setWin([true, true, false, false, false]);
              }, duration * 6)
            );
            timeoutIdsRef.current.push(
              setTimeout(function () {
                setWin([true, true, true, false, false]);
              }, duration * 7)
            );
            timeoutIdsRef.current.push(
              setTimeout(function () {
                setWin([true, true, true, true, false]);
              }, duration * 8)
            );
            timeoutIdsRef.current.push(
              setTimeout(function () {
                setWin([true, true, true, true, true]);
              }, duration * 9)
            );
          }
        }
      } else {
        setEvals([]);
        setWin([false, false, false, false, false]);
      }
      return function () {
        timeoutIdsRef.current.forEach((id) => {
          clearTimeout(id);
        });
        timeoutIdsRef.current = [];
        setEvals([]);
        setWin([false, false, false, false, false]);
      };
    },
    [evaluations]
  );

  return (
    <div className="game-board-row">
      {getLetterArray(word).map((letter, j) => (
        <GameTile
          letter={letter}
          state={!letter ? "empty" : evals?.[j] || "pending"}
          win={win?.[j] ?? false}
          key={j}
        />
      ))}
    </div>
  );
}

export default GameRow;
