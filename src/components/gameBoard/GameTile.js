import "./GameTile.css";

function GameTile({ letter, state = "empty" }) {
  function getStyle(state) {
    if (state === "empty") {
      return {
        color: "var(--color-tone-1)",
        border: "2px solid var(--color-tone-4)",
        animationName: "",
        animationDuration: "250ms",
      };
    }
    if (state === "pending") {
      return {
        color: "var(--color-tone-1)",
        border: "2px solid var(--color-tone-2)",
        animationName: "pop",
        animationDuration: "250ms",
      };
    }
    if (state === "absent") {
      return { color: "white", animationName: "flip-absent", animationDuration: "500ms" };
    }
    if (state === "present") {
      return { color: "white", animationName: "flip-present", animationDuration: "500ms" };
    }
    if (state === "correct") {
      return { color: "white", animationName: "flip-correct", animationDuration: "500ms" };
    }
  }

  return (
    <div className="game-tile-container">
      <div
        className="game-tile"
        style={{ ...getStyle(state) }}
      >
        {letter}
      </div>
    </div>
  );
}

export default GameTile;
