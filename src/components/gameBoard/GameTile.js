import "./GameTile.css";
import { useSpring, useSpringRef, useChain, animated } from "react-spring";

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

  const { angle } = useSpring({
    from: { angle: 0 },
    to: { angle: 1 },
    config: { duration: 250 },
  });

  const { bgColor } = useSpring({
    from: { bgColor: "var(--color-absent)" },
    to: { bgColor: getStyle(state)?.backgroundColor },
    delay: 125,
    immediate: true,
  });

  return (
    <div className="game-tile-container">
      <animated.div
        className="game-tile"
        style={{
          ...getStyle(state),
          transform: angle.to({
            range: [0, 0.5, 1],
            output: [0, -90, 0],
          }).to((a) => `rotateX(${a}deg)`),
          backgroundColor: bgColor.to(c => c),
        }}
      >
        {letter}
      </animated.div>
    </div>
  );
}

export default GameTile;
