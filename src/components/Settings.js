import List from "./List";
import ListItem from "./ListItem";
import Switch from "./Switch";

function Settings() {
  return (
    <List>
      <ListItem
        primary="Hard Mode"
        secondary="Any revealed hints must be used in subsequent guesses"
        action={<Switch />}
      />
      <ListItem
        primary="Dark Theme"
        action={<Switch />}
      />
      <ListItem
        primary="High Contrast"
        secondary="Mode For improved color vision"
        action={<Switch />}
      />
    </List>
  );
}

export default Settings;
