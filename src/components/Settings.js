import List from "./List";
import ListItem from "./ListItem";

function Settings() {
  return (
    <List>
      <ListItem
        primary="Hard Mode"
        secondary="Any revealed hints must be used in subsequent guesses"
        action={<button>toggle</button>}
      />
      <ListItem
        primary="Dark Theme"
        action={<button>toggle</button>}
      />
      <ListItem
        primary="High Contrast"
        secondary="Mode For improved color vision"
        action={<button>toggle</button>}
      />
    </List>
  );
}

export default Settings;
