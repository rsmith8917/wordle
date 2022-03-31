import { addLetter } from "../../gameLogic";

test("add letter to blank word", () => {
  const gameState = {
    boardState: ["TERSE", "BOAST", "", "", "", ""],
    rowIndex: 2,
  };
  expect(addLetter("R", gameState)).toStrictEqual({
    boardState: ["TERSE", "BOAST", "R", "", "", ""],
    rowIndex: 2,
  });
});

test("add letter to started word", () => {
  const gameState = {
    boardState: ["TERSE", "BOAST", "ROC", "", "", ""],
    rowIndex: 2,
  };
  expect(addLetter("K", gameState)).toStrictEqual({
    boardState: ["TERSE", "BOAST", "ROCK", "", "", ""],
    rowIndex: 2,
  });
});

test("add letter to complete word", () => {
  const gameState = {
    boardState: ["TERSE", "BOAST", "ROCKS", "", "", ""],
    rowIndex: 2,
  };
  expect(addLetter("L", gameState)).toStrictEqual({
    boardState: ["TERSE", "BOAST", "ROCKS", "", "", ""],
    rowIndex: 2,
  });
});

test("add letter to initial gameState", () => {
  const gameState = {
    boardState: ["", "", "", "", "", ""],
    rowIndex: 0,
  };
  expect(addLetter("M", gameState)).toStrictEqual({
    boardState: ["M", "", "", "", "", ""],
    rowIndex: 0,
  });
});

test("add lowercase letter to initial gameState", () => {
  const gameState = {
    boardState: ["", "", "", "", "", ""],
    rowIndex: 0,
  };
  expect(addLetter("m", gameState)).toStrictEqual({
    boardState: ["M", "", "", "", "", ""],
    rowIndex: 0,
  });
});

test("add blank letter to initial gameState", () => {
  const gameState = {
    boardState: ["", "", "", "", "", ""],
    rowIndex: 0,
  };
  expect(addLetter("", gameState)).toStrictEqual({
    boardState: ["", "", "", "", "", ""],
    rowIndex: 0,
  });
});

test("add numeric letter to initial gameState", () => {
  const gameState = {
    boardState: ["", "", "", "", "", ""],
    rowIndex: 0,
  };
  expect(addLetter("7", gameState)).toStrictEqual({
    boardState: ["", "", "", "", "", ""],
    rowIndex: 0,
  });
});

test("add special char letter to initial gameState", () => {
  const gameState = {
    boardState: ["", "", "", "", "", ""],
    rowIndex: 0,
  };
  expect(addLetter("%", gameState)).toStrictEqual({
    boardState: ["", "", "", "", "", ""],
    rowIndex: 0,
  });
});

test("add null letter to initial gameState", () => {
  const gameState = {
    boardState: ["", "", "", "", "", ""],
    rowIndex: 0,
  };
  expect(addLetter(null, gameState)).toStrictEqual({
    boardState: ["", "", "", "", "", ""],
    rowIndex: 0,
  });
});
