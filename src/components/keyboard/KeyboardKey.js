import "./Keyboard.css";

function KeyboardKey({
  text,
  onKeyPress,
  wide = false,
  fontSize = "small",
  ...props
}) {
  return (
    <div
      className="keyboard-key"
      style={{ width: wide ? 64 : 43, fontSize }}
      onClick={() => {
        onKeyPress(text);
      }}
      {...props}
    >
      {text}
    </div>
  );
}

export default KeyboardKey;
