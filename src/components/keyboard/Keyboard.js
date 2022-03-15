import "./Keyboard.css";
import KeyboardKey from "./KeyboardKey";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Keyboard({ onKeyPress }) {
  return (
    <div className="keyboard">
      <div className="keyboard-row">
        <KeyboardKey text="Q" onKeyPress={onKeyPress} />
        <KeyboardKey text="W" onKeyPress={onKeyPress} />
        <KeyboardKey text="E" onKeyPress={onKeyPress} />
        <KeyboardKey text="R" onKeyPress={onKeyPress} />
        <KeyboardKey text="T" onKeyPress={onKeyPress} />
        <KeyboardKey text="Y" onKeyPress={onKeyPress} />
        <KeyboardKey text="U" onKeyPress={onKeyPress} />
        <KeyboardKey text="I" onKeyPress={onKeyPress} />
        <KeyboardKey text="O" onKeyPress={onKeyPress} />
        <KeyboardKey text="P" onKeyPress={onKeyPress} />
      </div>
      <div className="keyboard-row">
        <KeyboardKey text="A" onKeyPress={onKeyPress} />
        <KeyboardKey text="S" onKeyPress={onKeyPress} />
        <KeyboardKey text="D" onKeyPress={onKeyPress} />
        <KeyboardKey text="F" onKeyPress={onKeyPress} />
        <KeyboardKey text="G" onKeyPress={onKeyPress} />
        <KeyboardKey text="H" onKeyPress={onKeyPress} />
        <KeyboardKey text="J" onKeyPress={onKeyPress} />
        <KeyboardKey text="K" onKeyPress={onKeyPress} />
        <KeyboardKey text="L" onKeyPress={onKeyPress} />
      </div>
      <div className="keyboard-row">
        <KeyboardKey text="ENTER" wide  onKeyPress={onKeyPress}  />
        <KeyboardKey text="Z"  onKeyPress={onKeyPress} />
        <KeyboardKey text="X"  onKeyPress={onKeyPress} />
        <KeyboardKey text="C"  onKeyPress={onKeyPress} />
        <KeyboardKey text="V"  onKeyPress={onKeyPress} />
        <KeyboardKey text="B"  onKeyPress={onKeyPress} />
        <KeyboardKey text="N"  onKeyPress={onKeyPress} />
        <KeyboardKey text="M"  onKeyPress={onKeyPress} />
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
