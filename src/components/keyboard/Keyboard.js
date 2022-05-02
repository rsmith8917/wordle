import React from "react";
import "./Keyboard.css";
import KeyboardKey from "./KeyboardKey";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Keyboard({ handleKey, gameState }) {
  const [states, setStates] = React.useState({});

  React.useEffect(
    function () {
      const { boardState, evaluations } = gameState;
      const letterStates = {};

      boardState.forEach((word, i) => {
        const letters = word.split("");
        letters.forEach((l, j) => {
          const evaluation = evaluations?.[i]?.[j];
          switch (evaluation) {
            case "correct":
              letterStates[l] = "correct";
              break;
            case "present":
              if (letterStates[l] !== "correct") {
                letterStates[l] = "present";
              }
              break;
            case "absent":
              if (
                letterStates[l] !== "correct" &&
                letterStates[l] !== "present"
              ) {
                letterStates[l] = "absent";
              }
              break;
            default:
              break;
          }
        });
      });
      setTimeout(function () {
        setStates(letterStates);
      }, 1500);
    },
    [gameState]
  );

  return (
    <div className="keyboard">
      <div className="keyboard-row">
        <KeyboardKey text="Q" state={states["Q"]} handleKey={handleKey} />
        <KeyboardKey text="W" state={states["W"]} handleKey={handleKey} />
        <KeyboardKey text="E" state={states["E"]} handleKey={handleKey} />
        <KeyboardKey text="R" state={states["R"]} handleKey={handleKey} />
        <KeyboardKey text="T" state={states["T"]} handleKey={handleKey} />
        <KeyboardKey text="Y" state={states["Y"]} handleKey={handleKey} />
        <KeyboardKey text="U" state={states["U"]} handleKey={handleKey} />
        <KeyboardKey text="I" state={states["I"]} handleKey={handleKey} />
        <KeyboardKey text="O" state={states["O"]} handleKey={handleKey} />
        <KeyboardKey text="P" state={states["P"]} handleKey={handleKey} />
      </div>
      <div className="keyboard-row">
        <KeyboardKey text="A" state={states["A"]} handleKey={handleKey} />
        <KeyboardKey text="S" state={states["S"]} handleKey={handleKey} />
        <KeyboardKey text="D" state={states["D"]} handleKey={handleKey} />
        <KeyboardKey text="F" state={states["F"]} handleKey={handleKey} />
        <KeyboardKey text="G" state={states["G"]} handleKey={handleKey} />
        <KeyboardKey text="H" state={states["H"]} handleKey={handleKey} />
        <KeyboardKey text="J" state={states["J"]} handleKey={handleKey} />
        <KeyboardKey text="K" state={states["K"]} handleKey={handleKey} />
        <KeyboardKey text="L" state={states["L"]} handleKey={handleKey} />
      </div>
      <div className="keyboard-row">
        <KeyboardKey
          text="ENTER"
          wide
          handleKey={() => {
            handleKey("Enter");
          }}
        />
        <KeyboardKey text="Z" state={states["Z"]} handleKey={handleKey} />
        <KeyboardKey text="X" state={states["X"]} handleKey={handleKey} />
        <KeyboardKey text="C" state={states["C"]} handleKey={handleKey} />
        <KeyboardKey text="V" state={states["V"]} handleKey={handleKey} />
        <KeyboardKey text="B" state={states["B"]} handleKey={handleKey} />
        <KeyboardKey text="N" state={states["N"]} handleKey={handleKey} />
        <KeyboardKey text="M" state={states["M"]} handleKey={handleKey} />
        <KeyboardKey
          text={<FontAwesomeIcon icon={faDeleteLeft} />}
          wide
          fontSize="large"
          handleKey={() => {
            handleKey("Backspace");
          }}
        />
      </div>
    </div>
  );
}

export default Keyboard;
