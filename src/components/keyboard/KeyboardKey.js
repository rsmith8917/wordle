import "./Keyboard.css";

function KeyboardKey({
  text,
  handleKey,
  state = "ready",
  wide = false,
  fontSize = "small",
  ...props
}) {
  return (
    <div
      className={`keyboard-key ${state ? "keyboard-key-" + state : ""}`}
      style={{ width: wide ? 64 : 43, fontSize }}
      onClick={() => {
        handleKey(text);
      }}
      {...props}
    >
      {text}
    </div>
  );
}

export default KeyboardKey;
