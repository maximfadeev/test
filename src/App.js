import React from "react";
import "./App.css";
import Header from "./components/Header";
import Actions from "./components/Actions";
import Comment from "./components/Comment";
import PostComment from "./components/PostComment";

import { connect } from "react-redux";
import { getCommentsFromDb } from "./actions";

let comment1 = { name: "taxi", text: "hello what is good" };
let comments = [comment1];
localStorage.setItem("comments", JSON.stringify(comments));

class App extends React.Component {
  // componentWillMount() {
  //   console.log(this.props.getCommentsFromDb());
  // }

  getCommentsBeta() {
    const comments = this.props.comments.map((comment) => (
      <Comment key={comment.text} comment={comment} />
    ));
    return comments;
  }

  render() {
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
          <button className="view-comments-btn">
            <b>View all {this.props.comments.length} comments</b>
          </button>
          {this.getCommentsBeta()}
          <p className="info-text">14 hours ago</p>
          <PostComment store={this.props.store} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  comments: state.commentReducer.comments,
});

export default connect(mapStateToProps, { getCommentsFromDb })(App);
// export default App;
