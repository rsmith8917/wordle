import "./ListItem.css";

function ListItem({ primary, secondary, action }) {
  return (
    <li className="list-item-container">
      <div>
        <span className="list-item-primary-text">{primary}</span>
        <br />
        <span className="list-item-secondary-text">{secondary}</span>
      </div>
      <div>
          {action}
      </div>
    </li>
  );
}
export default ListItem;
