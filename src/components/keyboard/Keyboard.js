import React from "react";
import "./Keyboard.css";
import KeyboardKey from "./KeyboardKey";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Keyboard({ onKeyPress, gameState }) {
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
            case "absent":
              if (
                letterStates[l] !== "correct" &&
                letterStates[l] !== "present"
              ) {
                letterStates[l] = "absent";
              }
            default:
              break;
          }
        });
      });
      console.log(letterStates);
      setStates(letterStates);
    },
    [gameState]
  );

  return (
    <div className="keyboard">
      <div className="keyboard-row">
        <KeyboardKey text="Q" state={states["Q"]} onKeyPress={onKeyPress} />
        <KeyboardKey text="W" state={states["W"]} onKeyPress={onKeyPress} />
        <KeyboardKey text="E" state={states["E"]} onKeyPress={onKeyPress} />
        <KeyboardKey text="R" state={states["R"]} onKeyPress={onKeyPress} />
        <KeyboardKey text="T" state={states["T"]} onKeyPress={onKeyPress} />
        <KeyboardKey text="Y" state={states["Y"]} onKeyPress={onKeyPress} />
        <KeyboardKey text="U" state={states["U"]} onKeyPress={onKeyPress} />
        <KeyboardKey text="I" state={states["I"]} onKeyPress={onKeyPress} />
        <KeyboardKey text="O" state={states["O"]} onKeyPress={onKeyPress} />
        <KeyboardKey text="P" state={states["P"]} onKeyPress={onKeyPress} />
      </div>
      <div className="keyboard-row">
        <KeyboardKey text="A" state={states["A"]} onKeyPress={onKeyPress} />
        <KeyboardKey text="S" state={states["S"]} onKeyPress={onKeyPress} />
        <KeyboardKey text="D" state={states["D"]} onKeyPress={onKeyPress} />
        <KeyboardKey text="F" state={states["F"]} onKeyPress={onKeyPress} />
        <KeyboardKey text="G" state={states["G"]} onKeyPress={onKeyPress} />
        <KeyboardKey text="H" state={states["H"]} onKeyPress={onKeyPress} />
        <KeyboardKey text="J" state={states["J"]} onKeyPress={onKeyPress} />
        <KeyboardKey text="K" state={states["K"]} onKeyPress={onKeyPress} />
        <KeyboardKey text="L" state={states["L"]} onKeyPress={onKeyPress} />
      </div>
      <div className="keyboard-row">
        <KeyboardKey text="ENTER" wide onKeyPress={onKeyPress} />
        <KeyboardKey text="Z" state={states["Z"]} onKeyPress={onKeyPress} />
        <KeyboardKey text="X" state={states["X"]} onKeyPress={onKeyPress} />
        <KeyboardKey text="C" state={states["C"]} onKeyPress={onKeyPress} />
        <KeyboardKey text="V" state={states["V"]} onKeyPress={onKeyPress} />
        <KeyboardKey text="B" state={states["B"]} onKeyPress={onKeyPress} />
        <KeyboardKey text="N" state={states["N"]} onKeyPress={onKeyPress} />
        <KeyboardKey text="M" state={states["M"]} onKeyPress={onKeyPress} />
        <KeyboardKey
          text={<FontAwesomeIcon icon={faDeleteLeft} />}
          wide
          fontSize="large"
          onKeyPress={() => {
            onKeyPress("BACK");
          }}
        />
      </div>
    </div>
  );
}

export default Keyboard;
