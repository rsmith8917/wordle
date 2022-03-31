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
