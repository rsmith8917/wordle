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
  function inDictionary(word) {
    return word ? validWords.includes(word.toLowerCase()) : false;
  }

  const { boardState, rowIndex, evaluations, solution, gameStatus } = gameState;

  // Check if word is complete
  if (boardState[rowIndex].length === 5) {
    let status = gameStatus;

    // get word from board state
    const word = boardState[rowIndex];
    // check word is in dictionary
    if (inDictionary(word)) {
      // increment row index
      gameState.rowIndex = rowIndex + 1;
      // compare each letter to solution and set evaluations
      let guessLetters = word.split("").map((l) => l.toUpperCase());
      let solutionLetters = solution.split("").map((l) => l.toUpperCase());
      const evaluation = ["absent", "absent", "absent", "absent", "absent"];

      for (let i = 0; i < 5; i++) {
        const guess = guessLetters[i];
        const sol = solutionLetters[i];

        if (guess === sol) {
          evaluation[i] = "correct";
          solutionLetters[i] = "_";
        }
      }

      for (let i = 0; i < 5; i++) {
        if (evaluation[i] !== "correct") {
          const guess = guessLetters[i];

          if (solutionLetters.some((l) => l === guess)) {
            evaluation[i] = "present";
            const solMatchIndex = solutionLetters.findIndex((l) => l === guess);
            solutionLetters[solMatchIndex] = "_";
          }
        }
      }
      evaluations[rowIndex] = evaluation;

      if (evaluation.every((e) => e === "correct")) {
        status = "COMPLETE_WIN";
      } else if (rowIndex === 5) {
        status = "COMPLETE_LOSS";
      }
    } else {
      evaluations[rowIndex] = word.split("").map((w) => "unknown");
    }

    return {
      ...gameState,
      evaluations,
      gameStatus: status,
    };
  } else {
    return gameState;
  }
}

function addLetter(letter, gameState) {
  function isValidLetter(letter) {
    const regex = new RegExp("[A-Z]");
    return letter && regex.test(letter.toUpperCase());
  }

  if (gameState?.gameStatus == "IN_PROGRESS" && isValidLetter(letter)) {
    const { boardState, rowIndex } = gameState;

    // If space is available in row ...
    if (boardState[rowIndex].length < 5) {
      // ... add letter to end of word
      boardState[rowIndex] += letter.toUpperCase();
      return { ...gameState, boardState, rowIndex };
    }
  }

  return gameState;
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
