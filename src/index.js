// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

function getButtonText() {
  return "Click upon me!";
}
// Create react component
const App = () => {
  const buttonText = "Click Me!";
  const buttonTextObject = { text: "Click Object!" };
  const style = { backgroundColor: "purple", color: "white" };
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "green", color: "white" }}>
        Submit
      </button>
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText}
      </button>
      <button style={{ backgroundColor: "red", color: "white" }}>
        {getButtonText()}
      </button>
      <button style={style}>{buttonTextObject.text}</button>
    </div>
  );
};

// Display component on screen
ReactDOM.render(<App />, document.querySelector("#root"));
