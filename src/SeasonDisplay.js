import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: { text: "Let's go to the beach-each ;3", iconName: "sun" },
  winter: { text: "Brr, I need some socks!", iconName: "snowflake" },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const month = new Date().getMonth();
  const season = getSeason(props.latitude, month);
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
