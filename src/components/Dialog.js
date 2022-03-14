import "./Dialog.css";

function Dialog({ open, setOpen }) {
  function closeDialog() {
    setOpen(false);
  }

  return (
    <div
      className="dialog-bg"
      style={{ visibility: open ? "visible" : "hidden" }}
      onClick={closeDialog}
    >
      <div className="dialog">This is a dialog!</div>
    </div>
  );
}

export default Dialog;
