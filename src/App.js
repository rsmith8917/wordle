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
import { useNotifications } from "./hooks/useNotifications";
import { useKeydown } from "./hooks/useKeydown";
import validWords from "./validWords";

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
    solution: "",
    gameStatus: "IN_PROGRESS",
    lastPlayedTs: 1647188938196,
    lastCompletedTs: null,
    restoringFromLocalStorage: null,
    hardMode: false,
  });
  const [stats, setStats] = useLocalStorage("game-stats", {
    played: 0,
    won: 0,
    winPercentage: 0,
    currentStreak: 0,
    maxStreak: 0,
    counts: [0, 0, 0, 0, 0, 0],
  });
  const [notify, notificationOpen, notificationMessage] = useNotifications();
  const handleKey = useKeydown(setGameState, notify);
  const boardSize = useResizeBoard();
  const timeoutIdRef = React.useRef(null);

  function toggleMenuOpen() {
    setMenuOpen((prev) => !prev);
  }

  const toggleDialog = (type) => () => {
    setDialogType(type);
    setDialogOpen((prev) => !prev);
  };

  function getDialogTitle(dialogType) {
    if (dialogType === "help") return "HOW TO PLAY";
    if (dialogType === "stats") return "STATISTICS";
    if (dialogType === "settings") return "SETTINGS";

    return "";
  }

  React.useEffect(
    function () {
      const randomIdx = Math.floor(Math.random() * (validWords.length - 1));
      setGameState((prev) => ({
        boardState: ["", "", "", "", "", ""],
        evaluations: [null, null, null, null, null, null],
        rowIndex: 0,
        solution: validWords[randomIdx],
        gameStatus: "IN_PROGRESS",
        lastPlayedTs: 1647188938196,
        lastCompletedTs: null,
        restoringFromLocalStorage: null,
        hardMode: false,
      }));
    },
    [setGameState]
  );

  React.useEffect(
    function () {
      if (gameState?.gameStatus === "COMPLETE_WIN") {
        const numGuesses = gameState.boardState.filter((w) => !!w).length;
        setStats((prev) => ({
          played: prev.played + 1,
          won: prev.won + 1,
          winPercentage: ((prev.won + 1) / (prev.played + 1)) * 100,
          currentStreak: prev.currentStreak + 1,
          maxStreak: Math.max(prev.currentStreak + 1, prev.maxStreak),
          counts: prev.counts.map((c, i) => (i + 1 === numGuesses ? c + 1 : c)),
        }));
        setDialogType("stats");
        timeoutIdRef.current = setTimeout(function () {
          setDialogOpen(true);
        }, 2250);
      }
      if (gameState?.gameStatus === "COMPLETE_LOSS") {
        setStats((prev) => ({
          played: prev.played + 1,
          won: prev.won,
          winPercentage: (prev.won / (prev.played + 1)) * 100,
          currentStreak: 0,
          maxStreak: Math.max(0, prev.maxStreak),
          counts: prev.counts,
        }));
        setDialogType("stats");
        timeoutIdRef.current = setTimeout(function () {
          setDialogOpen(true);
        }, 2250);
      }
      return function () {
        if (timeoutIdRef.current) {
          clearTimeout(timeoutIdRef.current);
        }
      };
    },
    [gameState?.gameStatus, gameState?.boardState, notify, setStats]
  );

  return (
    <NotificationContext.Provider value={notify}>
      <div className={`root ${darkMode ? "dark-mode" : ""}`}>
        <div className="header">
          <div className="header-left">
            <IconButton icon={faBars} onClick={toggleMenuOpen} />
            <IconButton
              icon={faCircleQuestion}
              onClick={toggleDialog("help")}
            />
          </div>
          <div className="header-center">
            <span className="title">Wordle</span>
          </div>
          <div className="header-right">
            <IconButton icon={faChartColumn} onClick={toggleDialog("stats")} />
            <IconButton icon={faGear} onClick={toggleDialog("settings")} />
          </div>
        </div>
        <div className="main">
          <GameBoard {...boardSize} gameState={gameState} />
        </div>
        <div className="keyboard-container">
          <Keyboard handleKey={handleKey} gameState={gameState} />
        </div>
        <Notification message={notificationMessage} open={notificationOpen} />
        <Menu open={menuOpen} setOpen={setMenuOpen} />
        <Dialog
          open={dialogOpen}
          setOpen={setDialogOpen}
          title={getDialogTitle(dialogType)}
        >
          {dialogType === "help" ? <Help /> : null}
          {dialogType === "stats" ? <Stats {...stats} /> : null}
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
