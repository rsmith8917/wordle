import "./GameTile.css";

function GameTile({ letter, state = "empty" }) {
  function getStyle(state) {
    if (state === "empty") {
      return {
        color: "var(--color-tone-1)",
        border: "2px solid var(--color-tone-4)",
      };
    }
    if (state === "pending") {
      return {
        color: "var(--color-tone-1)",
        border: "2px solid var(--color-tone-2)",
      };
    }
    if (state === "absent") {
      return { color: "white", backgroundColor: "var(--color-absent)" };
    }
    if (state === "present") {
      return { color: "white", backgroundColor: "var(--color-present)" };
    }
    if (state === "correct") {
      return { color: "white", backgroundColor: "var(--color-correct)" };
    }
  }

  return (
    <div className="game-tile-container">
      <div className="game-tile" style={getStyle(state)}>
        {letter}
      </div>
    </div>
  );
}

export default GameTile;
