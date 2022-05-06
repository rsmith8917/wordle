import React from "react";

function useResizeRoot() {
    const [rootHeight, setRootHeight] = React.useState(window.innerHeight);

    React.useEffect(
        function () {
            function handleResize() {
                setRootHeight(window.innerHeight);
            }

            window.addEventListener("resize", handleResize);
            return function () {
                window.removeEventListener("resize", handleResize);
            };
        },
        [setRootHeight]
    );

    return rootHeight;
}

export default useResizeRoot;