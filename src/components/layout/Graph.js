import React from "react";
import "./Graph.css";

function Graph({ counts, highlight }) {
  const maxCount = counts ? Math.max(...counts) : 0;

  return counts ? (
    <div className="graph-root">
      <span className="dialog-title">GUESS DISTRIBUTION</span>
      <div className="graph-container">
        {counts.map((count, i) => (
          <div className="graph-bar-container" key={i}>
            <div className="graph-bar-index">{i + 1}</div>
            <div className="graph-bar">
              <div
                className={`graph-bar-color ${
                  i + 1 === highlight ? "graph-bar-highlight" : ""
                }`}
                style={{ width: `${(count / maxCount) * 100}%` }}
              >
                {count}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : null;
}

export default Graph;
