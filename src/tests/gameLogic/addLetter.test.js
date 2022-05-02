import { addLetter } from "../../gameLogic";

test("add letter to blank word", () => {
  const gameState = {
    boardState: ["TERSE", "BOAST", "", "", "", ""],
    gameStatus: "IN_PROGRESS",
    rowIndex: 2,
  };
  expect(addLetter("R", gameState)).toStrictEqual({
    boardState: ["TERSE", "BOAST", "R", "", "", ""],
    gameStatus: "IN_PROGRESS",
    rowIndex: 2,
  });
});

test("add letter to started word", () => {
  const gameState = {
    boardState: ["TERSE", "BOAST", "ROC", "", "", ""],
    gameStatus: "IN_PROGRESS",
    rowIndex: 2,
  };
  expect(addLetter("K", gameState)).toStrictEqual({
    boardState: ["TERSE", "BOAST", "ROCK", "", "", ""],
    gameStatus: "IN_PROGRESS",
    rowIndex: 2,
  });
});

test("add letter to complete word", () => {
  const gameState = {
    boardState: ["TERSE", "BOAST", "ROCKS", "", "", ""],
    gameStatus: "IN_PROGRESS",
    rowIndex: 2,
  };
  expect(addLetter("L", gameState)).toStrictEqual({
    boardState: ["TERSE", "BOAST", "ROCKS", "", "", ""],
    gameStatus: "IN_PROGRESS",
    rowIndex: 2,
  });
});

test("add letter to initial gameState", () => {
  const gameState = {
    boardState: ["", "", "", "", "", ""],
    gameStatus: "IN_PROGRESS",
    rowIndex: 0,
  };
  expect(addLetter("M", gameState)).toStrictEqual({
    boardState: ["M", "", "", "", "", ""],
    gameStatus: "IN_PROGRESS",
    rowIndex: 0,
  });
});

test("add lowercase letter to initial gameState", () => {
  const gameState = {
    boardState: ["", "", "", "", "", ""],
    gameStatus: "IN_PROGRESS",
    rowIndex: 0,
  };
  expect(addLetter("m", gameState)).toStrictEqual({
    boardState: ["M", "", "", "", "", ""],
    gameStatus: "IN_PROGRESS",
    rowIndex: 0,
  });
});

test("add blank letter to initial gameState", () => {
  const gameState = {
    boardState: ["", "", "", "", "", ""],
    gameStatus: "IN_PROGRESS",
    rowIndex: 0,
  };
  expect(addLetter("", gameState)).toStrictEqual({
    boardState: ["", "", "", "", "", ""],
    gameStatus: "IN_PROGRESS",
    rowIndex: 0,
  });
});

test("add numeric letter to initial gameState", () => {
  const gameState = {
    boardState: ["", "", "", "", "", ""],
    gameStatus: "IN_PROGRESS",
    rowIndex: 0,
  };
  expect(addLetter("7", gameState)).toStrictEqual({
    boardState: ["", "", "", "", "", ""],
    gameStatus: "IN_PROGRESS",
    rowIndex: 0,
  });
});

test("add special char letter to initial gameState", () => {
  const gameState = {
    boardState: ["", "", "", "", "", ""],
    gameStatus: "IN_PROGRESS",
    rowIndex: 0,
  };
  expect(addLetter("%", gameState)).toStrictEqual({
    boardState: ["", "", "", "", "", ""],
    gameStatus: "IN_PROGRESS",
    rowIndex: 0,
  });
});

test("add null letter to initial gameState", () => {
  const gameState = {
    boardState: ["", "", "", "", "", ""],
    gameStatus: "IN_PROGRESS",
    rowIndex: 0,
  };
  expect(addLetter(null, gameState)).toStrictEqual({
    boardState: ["", "", "", "", "", ""],
    gameStatus: "IN_PROGRESS",
    rowIndex: 0,
  });
});

test("add letter to won game", () => {
  const gameState = {
    boardState: ["TERSE", "BOAST", "", "", "", ""],
    rowIndex: 2,
    gameStatus: "COMPLETE_WIN",
  };
  expect(addLetter("R", gameState)).toStrictEqual({
    boardState: ["TERSE", "BOAST", "", "", "", ""],
    rowIndex: 2,
    gameStatus: "COMPLETE_WIN",
  });
});
