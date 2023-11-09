// ProgressBar.js
import React from "react";
import "./Dashboard.css";

const ProgressBar = ({ progress }) => {
  const fillerWidth = `${progress}%`;

  return (
    <div className="progress-bar">
      <div className="progress-bar-filler" style={{ width: fillerWidth }}>
        {/* You can add text inside the filler div if you want text inside the progress bar */}
      </div>
    </div>
  );
};

export default ProgressBar;
