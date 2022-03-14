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

function App() {
  const [boardSize, setBoardSize] = React.useState({ width: 350, height: 420 });
  const [darkMode, setDarkMode] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [dialogType, setDialogType] = React.useState("help");

  React.useEffect(
    function () {
      function handleResize() {
        const height = window.innerHeight - 54 - 200; // subtract header and keyboard heights
        if (height < 420) {
          setBoardSize({ height, width: height * 0.8333 });
        } else {
          setBoardSize({ width: 350, height: 420 });
        }
      }

      window.addEventListener("resize", handleResize);
      return function () {
        window.removeEventListener("resize", handleResize);
      };
    },
    [setBoardSize]
  );

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
        <GameBoard {...boardSize} />
      </div>
      <div className="keyboard-container">
        <Keyboard />
      </div>
      <Menu open={menuOpen} setOpen={setMenuOpen} />
      <Dialog open={dialogOpen} setOpen={setDialogOpen}>
        {dialogType === "help" ? <Help /> : null}
        {dialogType === "stats" ? <Stats /> : null}
        {dialogType === "settings" ? (
          <Settings setDarkMode={setDarkMode} />
        ) : null}
      </Dialog>
    </div>
  );
}

export default App;
