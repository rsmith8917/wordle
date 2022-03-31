import { removeLetter } from "../../gameLogic";

test("remove letter from started word", () => {
  const gameState = {
    boardState: ["TERSE", "BOAST", "ROC", "", "", ""],
    evaluations: [
      ["correct", "correct", "absent", "correct", "correct"],
      ["absent", "absent", "correct", "correct", "present"],
      ["pending", "pending", "pending"],
      null,
      null,
      null,
    ],
    rowIndex: 2,
  };
  expect(removeLetter(gameState)).toStrictEqual({
    boardState: ["TERSE", "BOAST", "RO", "", "", ""],
    evaluations: [
      ["correct", "correct", "absent", "correct", "correct"],
      ["absent", "absent", "correct", "correct", "present"],
      null,
      null,
      null,
      null,
    ],
    rowIndex: 2,
  });
});

test("remove letter from complete word", () => {
  const gameState = {
    boardState: ["TERSE", "BOAST", "ROCKS", "", "", ""],
    evaluations: [
      ["correct", "correct", "absent", "correct", "correct"],
      ["absent", "absent", "correct", "correct", "present"],
      ["absent", "absent", "absent", "absent", "present"],
      null,
      null,
      null,
    ],
    rowIndex: 2,
  };
  expect(removeLetter(gameState)).toStrictEqual({
    boardState: ["TERSE", "BOAST", "ROCK", "", "", ""],
    evaluations: [
      ["correct", "correct", "absent", "correct", "correct"],
      ["absent", "absent", "correct", "correct", "present"],
      null,
      null,
      null,
      null,
    ],
    rowIndex: 2,
  });
});

test("remove letter from empty word", () => {
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
  };
  expect(removeLetter(gameState)).toStrictEqual({
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
  });
});
