import React from "react";

function useResizeBoard(rootHeight) {
  const [boardSize, setBoardSize] = React.useState({ width: 350, height: 420 });

  React.useEffect(
    function () {
      const height = rootHeight - 53 - 200; // subtract header and keyboard heights
      if (height < 420) {
        setBoardSize({ height, width: height * 0.8333 });
      } else {
        setBoardSize({ width: 350, height: 420 });
      }
    },
    [setBoardSize, rootHeight]
  );

  return boardSize;
}

export default useResizeBoard;
