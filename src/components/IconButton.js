import "./IconButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function IconButton({ icon, ...props }) {
  return (
    <button className="icon-button" {...props}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}

export default IconButton;
