import "./Keyboard.css";
import KeyboardKey from "./KeyboardKey";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Keyboard() {
  return (
    <div className="keyboard">
      <div className="keyboard-row">
        <KeyboardKey text="Q" />
        <KeyboardKey text="W" />
        <KeyboardKey text="E" />
        <KeyboardKey text="R" />
        <KeyboardKey text="T" />
        <KeyboardKey text="Y" />
        <KeyboardKey text="U" />
        <KeyboardKey text="I" />
        <KeyboardKey text="O" />
        <KeyboardKey text="P" />
      </div>
      <div className="keyboard-row">
        <KeyboardKey text="A" />
        <KeyboardKey text="S" />
        <KeyboardKey text="D" />
        <KeyboardKey text="F" />
        <KeyboardKey text="G" />
        <KeyboardKey text="H" />
        <KeyboardKey text="J" />
        <KeyboardKey text="K" />
        <KeyboardKey text="L" />
      </div>
      <div className="keyboard-row">
        <KeyboardKey text="ENTER" wide />
        <KeyboardKey text="Z" />
        <KeyboardKey text="X" />
        <KeyboardKey text="C" />
        <KeyboardKey text="V" />
        <KeyboardKey text="B" />
        <KeyboardKey text="N" />
        <KeyboardKey text="M" />
        <KeyboardKey
          text={<FontAwesomeIcon icon={faDeleteLeft} />}
          wide
          fontSize="large"
        />
      </div>
    </div>
  );
}

export default Keyboard;
