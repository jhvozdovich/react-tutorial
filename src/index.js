import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="noble_porpoise"
        dateTimePosted="Yesterday at 1:58pm"
        content="I did it!"
      />
      <CommentDetail
        author="minister_of_waffles"
        dateTimePosted="Today at 2:30pm"
        content="Wow!"
      />
      <CommentDetail
        author="thefursausage"
        dateTimePosted="Today at 3.46"
        content="proud of u"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
