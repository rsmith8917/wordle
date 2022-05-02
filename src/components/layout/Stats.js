import Button from "../common/Button";
import Graph from "./Graph";
import "./Stats.css";
import { faRotateRight, faShareNodes } from "@fortawesome/free-solid-svg-icons";

function Stats({ played, winPercentage, currentStreak, maxStreak, counts }) {
  return (
    <div className="stats-root">
      <div className="stats-container">
        <div className="stats-number-box">
          <span className="stats-number">{played || 0}</span>
          <br />
          <span className="stats-number-label">Played</span>
        </div>
        <div className="stats-number-box">
          <span className="stats-number">{winPercentage || 0}</span>
          <br />
          <span className="stats-number-label">Win %</span>
        </div>
        <div className="stats-number-box">
          <span className="stats-number">{currentStreak || 0}</span>
          <br />
          <span className="stats-number-label">Current</span>
          <br />
          <span className="stats-number-label">Streak</span>
        </div>
        <div className="stats-number-box">
          <span className="stats-number">{maxStreak || 0}</span>
          <br />
          <span className="stats-number-label">Max</span>
          <br />
          <span className="stats-number-label">Streak</span>
        </div>
      </div>
      <Graph counts={counts} />
      <div className="stats-container">
        <div className="stats-next-wordle">
          <Button label="PLAY AGAIN" icon={faRotateRight} />
        </div>
        <div className="stats-next-wordle">
          <Button label="SHARE" icon={faShareNodes} />
        </div>
      </div>
    </div>
  );
}

export default Stats;
