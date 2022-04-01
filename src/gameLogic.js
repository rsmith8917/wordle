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

function evaluateWord(gameState, notify) {
  function inDictionary(word) {
    return word ? validWords.includes(word.toLowerCase()) : false;
  }

  function evaluateLetter(solution, letter, index) {
    function containsLetter(word, letter) {
      return (
        word &&
        letter &&
        word.split("").some((s) => s.toLowerCase() === letter.toLowerCase())
      );
    }

    function letterAt(word, letter, index) {
      return word[index].toLowerCase() === letter.toLowerCase();
    }

    return containsLetter(solution, letter)
      ? letterAt(solution, letter, index)
        ? "correct"
        : "present"
      : "absent";
  }

  const { boardState, rowIndex, evaluations, solution } = gameState;

  // Check if word is complete
  if (boardState[rowIndex].length === 5) {
    // get word from board state
    const word = boardState[rowIndex];
    // check word is in dictionary
    if (inDictionary(word)) {
      // increment row index
      gameState.rowIndex = rowIndex + 1;
      // compare each letter to solution and set evaluations
      evaluations[rowIndex] = word
        .split("")
        .map((letter, index) => evaluateLetter(solution, letter, index));
    } else {
      notify("Not in word list");
      evaluations[rowIndex] = word.split("").map((w) => "unknown");
    }

    return {
      ...gameState,
      evaluations,
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

  if (isValidLetter(letter)) {
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
