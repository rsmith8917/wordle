import "./Menu.css";

function Menu({ open }) {
  return (
    <div className="menu" style={{ left: open ? 0 : -360 }}>
      this is a menu
    </div>
  );
}

export default Menu;
