import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard />
      <CommentDetail
        author='Sam'
        timeAgo='Today at 4:45PM'
        content='Nice blog post'
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author='Alex'
        timeAgo='Today at 2:00AM'
        content='I like this subject'
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author='Jane'
        timeAgo='Today at 3:00PM'
        content='That is wild'
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
