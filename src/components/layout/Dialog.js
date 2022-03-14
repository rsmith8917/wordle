import "./Dialog.css";
import IconButton from "../common/IconButton";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Dialog({ open, setOpen, title, children }) {
  function closeDialog() {
    setOpen(false);
  }

  return (
    <div
      className={`dialog-bg ${open ? "visible" : "hidden"}`}
      onClick={closeDialog}
    >
      <div className="dialog">
        <div className="dialog-header">
          <div></div>
          <span className="dialog-title">{title}</span>
          <IconButton icon={faXmark} onClick={closeDialog} />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Dialog;
