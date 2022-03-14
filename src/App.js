import React from "react";
import "./App.css";
import {
  faBars,
  faCircleQuestion,
  faChartColumn,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import IconButton from "./components/IconButton";
import GameBoard from "./components/GameBoard";
import Keyboard from "./components/Keyboard";
import Menu from "./components/Menu";
import Dialog from "./components/Dialog";

function App() {
  const [boardSize, setBoardSize] = React.useState({ width: 350, height: 420 });
  const [darkMode, setDarkMode] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);

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

  function handleSettings() {
    setDarkMode((prev) => !prev);
  }

  function toggleMenuOpen() {
    setMenuOpen((prev) => !prev);
  }

  function toggleHelpDialog() {
    setDialogOpen(prev => !prev);
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
          <IconButton icon={faChartColumn} />
          <IconButton icon={faGear} onClick={handleSettings} />
        </div>
      </div>
      <div className="main">
        <GameBoard {...boardSize} />
      </div>
      <div className="keyboard-container">
        <Keyboard />
      </div>
      <Menu open={menuOpen} setOpen={setMenuOpen} />
      <Dialog open={dialogOpen} setOpen={setDialogOpen} />
    </div>
  );
}

export default App;
