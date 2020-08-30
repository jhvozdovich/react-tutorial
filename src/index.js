import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (error) => console.log(error)
  );
  return <div>Hewwo!</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
