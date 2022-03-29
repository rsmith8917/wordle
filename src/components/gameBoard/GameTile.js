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

  // const { angle } = useSpring({
  //   from: { angle: state === "empty" ? 0 : 1 },
  //   to: { angle: state === "empty" ? 1 : 0  },
  //   config: { duration: 250 },
  // });

  // const { bgColor } = useSpring({
  //   from: { bgColor: "var(--color-absent)" },
  //   to: { bgColor: getStyle(state)?.backgroundColor },
  //   delay: 125,
  //   immediate: true,
  // });

  return (
    <div className="game-tile-container">
      <div
        className="game-tile"
        style={{ ...getStyle(state) }}
        // style={{
        //   ...getStyle(state),
        //   transform: angle.to({
        //     range: [0, 0.5, 1],
        //     output: [0, -90, 0],
        //   }).to((a) => `rotateX(${a}deg)`),
        //   backgroundColor: bgColor.to(c => c),
        // }}
      >
        {letter}
      </div>
    </div>
  );
}

export default GameTile;
