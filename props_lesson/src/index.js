import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="noble_porpoise"
          dateTimePosted="Yesterday at 1:58pm"
          content="I did it!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="minister_of_waffles"
          dateTimePosted="Today at 2:30pm"
          content="Wow!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="thefursausage"
          dateTimePosted="Today at 3.46"
          content="proud of u"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <div>
          <h4>ALERT</h4>R U SURE???
        </div>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
