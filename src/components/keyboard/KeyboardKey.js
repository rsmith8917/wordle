import "./Keyboard.css";

function KeyboardKey({ text, wide = false, fontSize = "small", ...props }) {
  return (
    <div
      className="keyboard-key"
      style={{ width: wide ? 64 : 43, fontSize }}
      {...props}
    >
      {text}
    </div>
  );
}

export default KeyboardKey;
