import "./IconButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function IconButton({ icon, text, ...props }) {
  return (
    <button className="icon-button" {...props}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon icon={icon} />
        {text ? (
          <span className="icon-button-text">{text}</span>
        ) : null}
      </div>
    </button>
  );
}

export default IconButton;
