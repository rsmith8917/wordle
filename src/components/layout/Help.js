import "./Help.css";
import GameTile from "../gameBoard/GameTile";

function Help() {
  return (
    <div>
      <div className="help-section">
        Guess the <strong>WORDLE</strong> in six tries.
        <p />
        Each guess must be a valid five-letter word. Hit the enter button to
        submit.
        <p />
        After each guess, the color of the tiles will change to show how close
        your guess was to the word.
      </div>
      <div className="help-section">
        {/* <strong>Examples</strong>
        <p />
        <div className="help-letter-row">
          <GameTile letter="W" state="correct" />
          <GameTile letter="E" state="pending" />
          <GameTile letter="A" state="pending" />
          <GameTile letter="R" state="pending" />
          <GameTile letter="Y" state="pending" />
        </div>
        The letter W is in the word and in the correct spot.
        <p />
        <div className="help-letter-row">
          <GameTile letter="P" state="pending" />
          <GameTile letter="I" state="present" />
          <GameTile letter="L" state="pending" />
          <GameTile letter="L" state="pending" />
          <GameTile letter="S" state="pending" />
        </div>
        The letter I is in the word but in the wrong spot.
        <p />
        <div className="help-letter-row">
          <GameTile letter="V" state="pending" />
          <GameTile letter="A" state="pending" />
          <GameTile letter="G" state="pending" />
          <GameTile letter="U" state="absent" />
          <GameTile letter="E" state="pending" />
        </div> */}
        The letter U is not in the word in any spot.
        <p />
      </div>
      <p />
      A new WORDLE will be available each day!
      <p />
    </div>
  );
}

export default Help;
