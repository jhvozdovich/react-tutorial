import React from "react";

const seasonConfig = {
  summer: { text: "Let's go to the beach-each", icon: "sun" },
  winter: { text: "Brr, I need some socks", icon: "snowflake" },
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
    <div>
      <i className={`${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
