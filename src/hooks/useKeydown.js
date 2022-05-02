import React from "react";
import { addLetter, evaluateWord, removeLetter } from "../gameLogic";
import useEventListener from "./useEventListener";

function useKeydown(setGameState, notify) {
  const handleKey = React.useCallback(
    function (key) {
      setGameState((prevGameState) => {
        if (key === "Enter") {
          const newGameState = evaluateWord(prevGameState);
          if (
            newGameState?.evaluations?.[newGameState?.rowIndex]?.[0] ===
            "unknown"
          ) {
            notify("Not in word list");
          }
          return newGameState;
        } else if (key === "Backspace") {
          return removeLetter(prevGameState);
        } else {
          return addLetter(key, prevGameState);
        }
      });
    },
    [setGameState, notify]
  );

  const handleKeyPress = React.useCallback(
    function (event) {
      function isBackspace(keyCode) {
        return keyCode === 8;
      }

      function isEnter(keyCode) {
        return keyCode === 13;
      }

      function isLetter(keyCode) {
        return keyCode >= 65 && keyCode <= 90;
      }

      if (
        isBackspace(event.keyCode) ||
        isEnter(event.keyCode) ||
        isLetter(event.keyCode)
      ) {
        handleKey(event.key);
      }
    },
    [handleKey]
  );

  useEventListener("keydown", handleKeyPress);

  return handleKey;
}

export { useKeydown };
