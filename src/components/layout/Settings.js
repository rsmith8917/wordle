import List from "../common/List";
import ListItem from "../common/ListItem";
import Switch from "../common/Switch";

function Settings({ darkMode, setDarkMode }) {
  return (
    <List>
      <ListItem
        primary="Hard Mode"
        secondary="Any revealed hints must be used in subsequent guesses"
        action={<Switch />}
      />
      <ListItem primary="Dark Theme" action={<Switch value={darkMode} onChange={setDarkMode} />} />
      <ListItem
        primary="High Contrast"
        secondary="Mode For improved color vision"
        action={<Switch />}
      />
    </List>
  );
}

export default Settings;
