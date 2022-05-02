import "./GameTile.css";
import React from "react";

function GameTile({ letter, state = "empty", win = false }) {
  const prevStateRef = React.useRef(null);
  const [tileStyle, setTileStyle] = React.useState({});

  React.useEffect(
    function () {
      let newStyle = {};

      if (state === "empty") {
        newStyle = {
          color: "var(--color-tone-1)",
          border: "2px solid var(--color-tone-4)",
          animationName: "",
          animationDuration: "250ms",
        };
      }
      if (state === "pending") {
        newStyle = {
          color: "var(--color-tone-1)",
          border: "2px solid var(--color-tone-2)",
          animationName: prevStateRef.current === "empty" ? "pop" : "",
          animationDuration: "250ms",
        };
      }
      if (state === "absent") {
        newStyle = {
          color: "white",
          animationName: "flip-absent",
          animationDuration: "500ms",
        };
      }
      if (state === "present") {
        newStyle = {
          color: "white",
          animationName: "flip-present",
          animationDuration: "500ms",
        };
      }
      if (state === "correct") {
        newStyle = {
          color: "white",
          animationName: "flip-correct",
          animationDuration: "500ms",
        };
      }
      if (state === "unknown") {
        newStyle = {
          color: "var(--color-tone-1)",
          border: "2px solid var(--color-tone-2)",
          animationName: "shake",
          animationDuration: "250ms",
        };
      }
      if (win) {
        newStyle = {
          color: "white",
          animationName: "jump",
          animationDuration: "500ms",
        };
      }

      prevStateRef.current = state;
      setTileStyle(newStyle);
    },
    [state, win]
  );

  return (
    <div className="game-tile-container">
      <div className="game-tile" style={tileStyle}>
        {letter}
      </div>
    </div>
  );
}

export default GameTile;
