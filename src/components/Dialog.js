import "./Dialog.css";
import IconButton from "./IconButton";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Dialog({ open, setOpen, children }) {
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
          <IconButton icon={faXmark} onClick={closeDialog} />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Dialog;
