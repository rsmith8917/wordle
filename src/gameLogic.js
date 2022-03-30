import validWords from "./validWords";

//////////////////
//  gameState
//////////////////
//
//   {
//     "boardState": ["TERSE", "BOAST", "", "", "", ""],
//     "evaluations": [
//       ["correct", "correct", "absent", "correct", "correct"],
//       ["absent", "absent", "correct", "correct", "present"],
//       null,
//       null,
//       null,
//       null
//     ],
//     "rowIndex": 2,
//     "solution": "tease",
//     "gameStatus": "IN_PROGRESS",
//     "lastPlayedTs": 1647188938196,
//     "lastCompletedTs": null,
//     "restoringFromLocalStorage": null,
//     "hardMode": false
//   }

function evaluateWord(gameState) {
  if (gameState.boardState[gameState.rowIndex].length === 5) {
    const word = gameState.boardState[gameState.rowIndex];
    const evaluations = [...gameState.evaluations];
    let rowIndex = gameState.rowIndex;
    if (validWords.includes(word.toLowerCase())) {
      rowIndex = rowIndex + 1;
      evaluations[gameState.rowIndex] = word.split("").map((l, i) => {
        const letter = l.toLowerCase();
        const solution = gameState.solution.split("");
        if (solution.some((s) => s === letter)) {
          if (solution[i] === letter) {
            return "correct";
          } else {
            return "present";
          }
        } else {
          return "absent";
        }
      });
    } else {
      evaluations[rowIndex] = word.split("").map((w) => "unknown");
    }

    return {
      ...gameState,
      evaluations,
      rowIndex,
    };
  } else {
    return gameState;
  }
}

function addLetter(letter, gameState) {
  const { boardState, rowIndex } = gameState;

  // If space is available in row ...
  if (boardState[rowIndex].length < 5) {
    // ... add letter to end of word
    boardState[rowIndex] += letter;
    return { ...gameState, boardState, rowIndex };
  } else {
    return gameState;
  }
}

function removeLetter(gameState) {
  const { boardState, rowIndex, evaluations } = gameState;

  // Remove last letter from this row in board state
  boardState[rowIndex] = boardState[rowIndex].slice(0, -1);
  // Reset evaluations for this row
  evaluations[rowIndex] = null;

  return { ...gameState, boardState, evaluations };
}

export { evaluateWord, addLetter, removeLetter };
