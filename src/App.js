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
import Notification from "./components/layout/Notification";
import useLocalStorage from "./hooks/useLocalStorage";
import useResizeBoard from "./hooks/useResizeBoard";
import NotificationContext from "./components/layout/NotificationContext";

import { addLetter, evaluateWord, removeLetter } from "./gameLogic";

function App() {
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode", false);
  const [highContrastMode, setHighContrastMode] = useLocalStorage(
    "high-contrast-mode",
    false
  );
  const [hardMode, setHardMode] = useLocalStorage("hard-mode", false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [notificationOpen, setNotificationOpen] = React.useState(false);
  const [notificationMessage, setNotificationMessage] = React.useState("");
  const [dialogType, setDialogType] = React.useState("help");
  const [gameState, setGameState] = useLocalStorage("game-state", {
    boardState: ["", "", "", "", "", ""],
    evaluations: [null, null, null, null, null, null],
    rowIndex: 0,
    solution: "tells",
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

  function notify(msg) {
    setNotificationMessage(msg);
    setNotificationOpen(true);
    setTimeout(function () {
      setNotificationOpen(false);
    }, 1000);
  }

  function onKeyPress(key) {
    setGameState((prevGameState) => {
      if (key === "ENTER") {
        const newGameState = evaluateWord(prevGameState);
        if (newGameState.evaluations[newGameState.rowIndex][0] === "unknown") {
          notify("Not in word list");
        }
        return newGameState;
      } else if (key === "BACK") {
        return removeLetter(prevGameState);
      } else {
        return addLetter(key, prevGameState);
      }
    });
  }

  return (
    <NotificationContext.Provider value={notify}>
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
          <Keyboard onKeyPress={onKeyPress} gameState={gameState} />
        </div>
        <Notification message={notificationMessage} open={notificationOpen} />
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
    </NotificationContext.Provider>
  );
}

export default App;
