import List from "../common/List";
import ListItem from "../common/ListItem";
import Switch from "../common/Switch";

function Settings({
  darkMode,
  setDarkMode,
  highContrastMode,
  setHighContrastMode,
  hardMode,
  setHardMode,
}) {
  return (
    <List>
      <ListItem
        primary="Hard Mode"
        secondary="Any revealed hints must be used in subsequent guesses"
        action={<Switch value={hardMode} onChange={setHardMode} />}
      />
      <ListItem
        primary="Dark Theme"
        action={<Switch value={darkMode} onChange={setDarkMode} />}
      />
      <ListItem
        primary="High Contrast"
        secondary="Mode For improved color vision"
        action={
          <Switch value={highContrastMode} onChange={setHighContrastMode} />
        }
      />
    </List>
  );
}

export default Settings;
