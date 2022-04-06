import { evaluateWord } from "../../gameLogic";

test("evaluate empty word", () => {
  const gameState = {
    boardState: ["TERSE", "BOAST", "", "", "", ""],
    evaluations: [
      ["correct", "correct", "absent", "correct", "correct"],
      ["absent", "absent", "correct", "correct", "present"],
      null,
      null,
      null,
      null,
    ],
    rowIndex: 2,
    solution: "tease",
    gameStatus: "IN_PROGRESS",
    lastPlayedTs: 1647188938196,
    lastCompletedTs: null,
    restoringFromLocalStorage: null,
    hardMode: false,
  };
  expect(evaluateWord(gameState)).toStrictEqual({
    boardState: ["TERSE", "BOAST", "", "", "", ""],
    evaluations: [
      ["correct", "correct", "absent", "correct", "correct"],
      ["absent", "absent", "correct", "correct", "present"],
      null,
      null,
      null,
      null,
    ],
    rowIndex: 2,
    solution: "tease",
    gameStatus: "IN_PROGRESS",
    lastPlayedTs: 1647188938196,
    lastCompletedTs: null,
    restoringFromLocalStorage: null,
    hardMode: false,
  });
});

test("evaluate in progress word", () => {
  const gameState = {
    boardState: ["TERSE", "BOAST", "ROC", "", "", ""],
    evaluations: [
      ["correct", "correct", "absent", "correct", "correct"],
      ["absent", "absent", "correct", "correct", "present"],
      null,
      null,
      null,
      null,
    ],
    rowIndex: 2,
    solution: "tease",
    gameStatus: "IN_PROGRESS",
    lastPlayedTs: 1647188938196,
    lastCompletedTs: null,
    restoringFromLocalStorage: null,
    hardMode: false,
  };
  expect(evaluateWord(gameState)).toStrictEqual({
    boardState: ["TERSE", "BOAST", "ROC", "", "", ""],
    evaluations: [
      ["correct", "correct", "absent", "correct", "correct"],
      ["absent", "absent", "correct", "correct", "present"],
      null,
      null,
      null,
      null,
    ],
    rowIndex: 2,
    solution: "tease",
    gameStatus: "IN_PROGRESS",
    lastPlayedTs: 1647188938196,
    lastCompletedTs: null,
    restoringFromLocalStorage: null,
    hardMode: false,
  });
});

test("evaluate complete word", () => {
  const gameState = {
    boardState: ["TERSE", "BOAST", "ROCKS", "", "", ""],
    evaluations: [
      ["correct", "correct", "absent", "correct", "correct"],
      ["absent", "absent", "correct", "correct", "present"],
      null,
      null,
      null,
      null,
    ],
    rowIndex: 2,
    solution: "tease",
    gameStatus: "IN_PROGRESS",
    lastPlayedTs: 1647188938196,
    lastCompletedTs: null,
    restoringFromLocalStorage: null,
    hardMode: false,
  };
  expect(evaluateWord(gameState)).toStrictEqual({
    boardState: ["TERSE", "BOAST", "ROCKS", "", "", ""],
    evaluations: [
      ["correct", "correct", "absent", "correct", "correct"],
      ["absent", "absent", "correct", "correct", "present"],
      ["absent", "absent", "absent", "absent", "present"],
      null,
      null,
      null,
    ],
    rowIndex: 3,
    solution: "tease",
    gameStatus: "IN_PROGRESS",
    lastPlayedTs: 1647188938196,
    lastCompletedTs: null,
    restoringFromLocalStorage: null,
    hardMode: false,
  });
});

test("evaluate close word", () => {
  const gameState = {
    boardState: ["TERSE", "", "", "", "", ""],
    evaluations: [null, null, null, null, null, null],
    rowIndex: 0,
    solution: "tease",
    gameStatus: "IN_PROGRESS",
    lastPlayedTs: 1647188938196,
    lastCompletedTs: null,
    restoringFromLocalStorage: null,
    hardMode: false,
  };
  expect(evaluateWord(gameState)).toStrictEqual({
    boardState: ["TERSE", "", "", "", "", ""],
    evaluations: [
      ["correct", "correct", "absent", "correct", "correct"],
      null,
      null,
      null,
      null,
      null,
    ],
    rowIndex: 1,
    solution: "tease",
    gameStatus: "IN_PROGRESS",
    lastPlayedTs: 1647188938196,
    lastCompletedTs: null,
    restoringFromLocalStorage: null,
    hardMode: false,
  });
});

test("evaluate correct word", () => {
  const gameState = {
    boardState: ["TEASE", "", "", "", "", ""],
    evaluations: [null, null, null, null, null, null],
    rowIndex: 0,
    solution: "tease",
    gameStatus: "IN_PROGRESS",
    lastPlayedTs: 1647188938196,
    lastCompletedTs: null,
    restoringFromLocalStorage: null,
    hardMode: false,
  };
  expect(evaluateWord(gameState)).toStrictEqual({
    boardState: ["TEASE", "", "", "", "", ""],
    evaluations: [
      ["correct", "correct", "correct", "correct", "correct"],
      null,
      null,
      null,
      null,
      null,
    ],
    rowIndex: 1,
    solution: "tease",
    gameStatus: "IN_PROGRESS",
    lastPlayedTs: 1647188938196,
    lastCompletedTs: null,
    restoringFromLocalStorage: null,
    hardMode: false,
  });
});

test("evaluate unknown word", () => {
  const gameState = {
    boardState: ["ABCDE", "", "", "", "", ""],
    evaluations: [null, null, null, null, null, null],
    rowIndex: 0,
    solution: "tease",
    gameStatus: "IN_PROGRESS",
    lastPlayedTs: 1647188938196,
    lastCompletedTs: null,
    restoringFromLocalStorage: null,
    hardMode: false,
  };
  expect(evaluateWord(gameState)).toStrictEqual({
    boardState: ["ABCDE", "", "", "", "", ""],
    evaluations: [
      ["unknown", "unknown", "unknown", "unknown", "unknown"],
      null,
      null,
      null,
      null,
      null,
    ],
    rowIndex: 0,
    solution: "tease",
    gameStatus: "IN_PROGRESS",
    lastPlayedTs: 1647188938196,
    lastCompletedTs: null,
    restoringFromLocalStorage: null,
    hardMode: false,
  });
});

test("evaluate word with duplicate letters", () => {
  const gameState = {
    boardState: ["FATAL", "", "", "", "", ""],
    evaluations: [null, null, null, null, null, null],
    rowIndex: 0,
    solution: "tease",
    gameStatus: "IN_PROGRESS",
    lastPlayedTs: 1647188938196,
    lastCompletedTs: null,
    restoringFromLocalStorage: null,
    hardMode: false,
  };
  expect(evaluateWord(gameState)).toStrictEqual({
    boardState: ["FATAL", "", "", "", "", ""],
    evaluations: [
      ["absent", "present", "present", "absent", "absent"],
      null,
      null,
      null,
      null,
      null,
    ],
    rowIndex: 1,
    solution: "tease",
    gameStatus: "IN_PROGRESS",
    lastPlayedTs: 1647188938196,
    lastCompletedTs: null,
    restoringFromLocalStorage: null,
    hardMode: false,
  });
});

test("evaluate word with duplicate letters 2", () => {
  const gameState = {
    boardState: ["SOCKS", "", "", "", "", ""],
    evaluations: [null, null, null, null, null, null],
    rowIndex: 0,
    solution: "rocks",
    gameStatus: "IN_PROGRESS",
    lastPlayedTs: 1647188938196,
    lastCompletedTs: null,
    restoringFromLocalStorage: null,
    hardMode: false,
  };
  expect(evaluateWord(gameState)).toStrictEqual({
    boardState: ["SOCKS", "", "", "", "", ""],
    evaluations: [
      ["absent", "correct", "correct", "correct", "correct"],
      null,
      null,
      null,
      null,
      null,
    ],
    rowIndex: 1,
    solution: "rocks",
    gameStatus: "IN_PROGRESS",
    lastPlayedTs: 1647188938196,
    lastCompletedTs: null,
    restoringFromLocalStorage: null,
    hardMode: false,
  });
});

test("evaluate word with duplicate letters 3", () => {
  const gameState = {
    boardState: ["EASTS", "", "", "", "", ""],
    evaluations: [null, null, null, null, null, null],
    rowIndex: 0,
    solution: "tells",
    gameStatus: "IN_PROGRESS",
    lastPlayedTs: 1647188938196,
    lastCompletedTs: null,
    restoringFromLocalStorage: null,
    hardMode: false,
  };
  expect(evaluateWord(gameState)).toStrictEqual({
    boardState: ["EASTS", "", "", "", "", ""],
    evaluations: [
      ["present", "absent", "absent", "present", "correct"],
      null,
      null,
      null,
      null,
      null,
    ],
    rowIndex: 1,
    solution: "tells",
    gameStatus: "IN_PROGRESS",
    lastPlayedTs: 1647188938196,
    lastCompletedTs: null,
    restoringFromLocalStorage: null,
    hardMode: false,
  });
});

test("evaluate word with duplicate letters 4", () => {
  const gameState = {
    boardState: ["ALTAR", "", "", "", "", ""],
    evaluations: [null, null, null, null, null, null],
    rowIndex: 0,
    solution: "natal",
    gameStatus: "IN_PROGRESS",
    lastPlayedTs: 1647188938196,
    lastCompletedTs: null,
    restoringFromLocalStorage: null,
    hardMode: false,
  };
  expect(evaluateWord(gameState)).toStrictEqual({
    boardState: ["ALTAR", "", "", "", "", ""],
    evaluations: [
      ["present", "present", "correct", "correct", "absent"],
      null,
      null,
      null,
      null,
      null,
    ],
    rowIndex: 1,
    solution: "natal",
    gameStatus: "IN_PROGRESS",
    lastPlayedTs: 1647188938196,
    lastCompletedTs: null,
    restoringFromLocalStorage: null,
    hardMode: false,
  });
});

test("evaluate word with duplicate letters 5", () => {
  const gameState = {
    boardState: ["TOAST", "", "", "", "", ""],
    evaluations: [null, null, null, null, null, null],
    rowIndex: 0,
    solution: "natal",
    gameStatus: "IN_PROGRESS",
    lastPlayedTs: 1647188938196,
    lastCompletedTs: null,
    restoringFromLocalStorage: null,
    hardMode: false,
  };
  expect(evaluateWord(gameState)).toStrictEqual({
    boardState: ["TOAST", "", "", "", "", ""],
    evaluations: [
      ["present", "absent", "present", "absent", "absent"],
      null,
      null,
      null,
      null,
      null,
    ],
    rowIndex: 1,
    solution: "natal",
    gameStatus: "IN_PROGRESS",
    lastPlayedTs: 1647188938196,
    lastCompletedTs: null,
    restoringFromLocalStorage: null,
    hardMode: false,
  });
});
