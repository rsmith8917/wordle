import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button({ label, icon, ...rest }) {
  return (
    <button className="button" {...rest}>
      <span className="button-label">{label}</span>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}

export default Button;
