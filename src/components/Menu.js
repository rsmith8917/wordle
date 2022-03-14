import "./Menu.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import IconButton from "./IconButton";

function Menu({ open, setOpen }) {
  function closeMenu() {
    setOpen(false);
  }

  return (
    <div className="menu" style={{ left: open ? 0 : -370 }}>
      <div className="menu-header">
        <a href="https://github.com/rsmith8917">
          <IconButton icon={faGithub} text="rsmith8917" />
        </a>
        <IconButton icon={faXmark} onClick={closeMenu} />
      </div>
    </div>
  );
}

export default Menu;
