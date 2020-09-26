import React from "react";
import "./App.css";
import Header from "./components/Header";
import Actions from "./components/Actions";
import Comment from "./components/Comment";
import PostComment from "./components/PostComment";

let comment1 = { name: "taxi", text: "hello what is good" };
// let comment2 = { name: "cabby", text: "all is well son what is good with you" };
// let comment3 = { name: "limo", text: "taxiiii how are youuuu" };
// let comment4 = { name: "taxi", text: "all is well my peeps" };

let comments = [comment1];

localStorage.setItem("comments", JSON.stringify(comments));

function App() {
  // fix this
  const comments = JSON.parse(localStorage.getItem("comments")).map((comment) => (
    <Comment key={comment.text} comment={comment} />
  ));
  return (
    <div className="App">
      <div id="Card">
        <Header />
        <img id="post-image" src="sample-post.jpg" alt="sample-post"></img>
        <Actions />
        <b>
          <p className="info-text">56 likes</p>
        </b>
        <div id="caption">
          <p className="comment-text">
            <b>postername</b>&nbsp;Caption for my post
          </p>
        </div>
        {comments}
        <p className="info-text">14 hours ago</p>
        <PostComment />
      </div>
    </div>
  );
}

export default App;
