import React from "react";
import "./App.css";
import {
  faBars,
  faCircleQuestion,
  faChartColumn,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import IconButton from "./components/common/IconButton";
import GameBoard from "./components/gameBoard/GameBoard";
import Keyboard from "./components/keyboard/Keyboard";
import Menu from "./components/layout/Menu";
import Dialog from "./components/layout/Dialog";
import Help from "./components/layout/Help";
import Stats from "./components/layout/Stats";
import Settings from "./components/layout/Settings";
import useLocalStorage from "./hooks/useLocalStorage";
import useResizeBoard from "./hooks/useResizeBoard";

function App() {
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode", false);
  const [highContrastMode, setHighContrastMode] = useLocalStorage(
    "high-contrast-mode",
    false
  );
  const [hardMode, setHardMode] = useLocalStorage("hard-mode", false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [dialogType, setDialogType] = React.useState("help");
  const [gameState, setGameState] = useLocalStorage("game-state", {
    boardState: ["", "", "", "", "", ""],
    evaluations: [null, null, null, null, null, null],
    rowIndex: 0,
    solution: "tease",
    gameStatus: "IN_PROGRESS",
    lastPlayedTs: 1647188938196,
    lastCompletedTs: null,
    restoringFromLocalStorage: null,
    hardMode: false,
  });

  const boardSize = useResizeBoard();

  function toggleMenuOpen() {
    setMenuOpen((prev) => !prev);
  }

  function toggleHelpDialog() {
    setDialogType("help");
    setDialogOpen((prev) => !prev);
  }

  function toggleStatsDialog() {
    setDialogType("stats");
    setDialogOpen((prev) => !prev);
  }

  function toggleSettingsDialog() {
    setDialogType("settings");
    setDialogOpen((prev) => !prev);
  }

  function getDialogTitle(dialogType) {
    if (dialogType === "help") return "HOW TO PLAY";
    if (dialogType === "stats") return "STATISTICS";
    if (dialogType === "settings") return "SETTINGS";

    return "";
  }

  function onKeyPress(key) {
    setGameState((prevGameState) => {
      const boardStateCopy = [...gameState.boardState];

      if (key === "ENTER") {
        if (prevGameState.boardState[prevGameState.rowIndex].length === 5) {
          // evaluate word
          const word = prevGameState.boardState[prevGameState.rowIndex];
          const evaluations = [...prevGameState.evaluations];
          evaluations[prevGameState.rowIndex] = word.split('').map((l, i) => {
            const letter = l.toLowerCase();
            const solution = prevGameState.solution.split('');
            if (solution.some(s => s === letter)) {
              if (solution[i] === letter) {
                return "correct";
              } else {
                return "present";
              }
            } else {
              return "absent";
            }
          });

          return { ...prevGameState, evaluations, rowIndex: prevGameState.rowIndex + 1 };
        } else {
          return prevGameState;
        }
      } else if (key === "BACK") {
        // remove letter from end of word
        boardStateCopy[prevGameState.rowIndex] = boardStateCopy[
          prevGameState.rowIndex
        ].slice(0, -1);
        return { ...prevGameState, boardState: boardStateCopy };
      } else if (boardStateCopy[prevGameState.rowIndex].length < 5) {
        // add letter to end of word
        boardStateCopy[prevGameState.rowIndex] += key;
        return { ...prevGameState, boardState: boardStateCopy };
      } else {
        return prevGameState;
      }
    });
  }

  return (
    <div className={`root ${darkMode ? "dark-mode" : ""}`}>
      <div className="header">
        <div className="header-left">
          <IconButton icon={faBars} onClick={toggleMenuOpen} />
          <IconButton icon={faCircleQuestion} onClick={toggleHelpDialog} />
        </div>
        <div className="header-center">
          <span className="title">Wordle</span>
        </div>
        <div className="header-right">
          <IconButton icon={faChartColumn} onClick={toggleStatsDialog} />
          <IconButton icon={faGear} onClick={toggleSettingsDialog} />
        </div>
      </div>
      <div className="main">
        <GameBoard {...boardSize} gameState={gameState} />
      </div>
      <div className="keyboard-container">
        <Keyboard onKeyPress={onKeyPress} />
      </div>
      <Menu open={menuOpen} setOpen={setMenuOpen} />
      <Dialog
        open={dialogOpen}
        setOpen={setDialogOpen}
        title={getDialogTitle(dialogType)}
      >
        {dialogType === "help" ? <Help /> : null}
        {dialogType === "stats" ? <Stats /> : null}
        {dialogType === "settings" ? (
          <Settings
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            highContrastMode={highContrastMode}
            setHighContrastMode={setHighContrastMode}
            hardMode={hardMode}
            setHardMode={setHardMode}
          />
        ) : null}
      </Dialog>
    </div>
  );
}

export default App;
