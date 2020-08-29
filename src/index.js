import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            noble_porpoise
          </a>
          <div className="metadata">
            <span className="date">Today at 1:58pm</span>
          </div>
          <div className="text">I did it!</div>
        </div>
      </div>

      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            minister_of_waffles
          </a>
          <div className="metadata">
            <span className="date">Today at 2:30pm</span>
          </div>
          <div className="text">Wow!</div>
        </div>
      </div>

      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            thefursausage
          </a>
          <div className="metadata">
            <span className="date">Today at 3:46pm</span>
          </div>
          <div className="text">Proud of u!</div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
