import React from "react";

function useResizeBoard() {
    const [boardSize, setBoardSize] = React.useState({ width: 350, height: 420 });

    React.useEffect(
        function () {
            function handleResize() {
                const height = window.innerHeight - 54 - 200; // subtract header and keyboard heights
                if (height < 420) {
                    setBoardSize({ height, width: height * 0.8333 });
                } else {
                    setBoardSize({ width: 350, height: 420 });
                }
            }

            window.addEventListener("resize", handleResize);
            return function () {
                window.removeEventListener("resize", handleResize);
            };
        },
        [setBoardSize]
    );

    return boardSize;
}

export default useResizeBoard;