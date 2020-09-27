import React from "react";
import "./App.css";
import Header from "./components/Header";
import Actions from "./components/Actions";
import Comment from "./components/Comment";
import PostComment from "./components/PostComment";

import { connect } from "react-redux";
import { getCommentsFromDb, toggleLandscape } from "./actions";

// let comment1 = { name: "taxi", text: "hello what is good" };
// let comments = [comment1];
// localStorage.setItem("comments", JSON.stringify(comments));

class App extends React.Component {
  // componentWillMount() {
  //   console.log(this.props.getCommentsFromDb());
  // }
  componentDidMount() {
    this.props.getCommentsFromDb();
  }

  getCommentsBeta() {
    const comments = this.props.comments.map((comment, index) => (
      <Comment key={index} comment={comment} />
    ));
    return comments;
  }

  render() {
    if (!this.props.isLandscape) {
      return (
        <div className="center">
          <div className="App vertical">
            <Header />
            <img id="post-image" src="sample-post.jpg" alt="sample-post"></img>
            <Actions />
            <b>
              <p className="info-text">56 likes</p>
            </b>
            <div id="caption">
              <p className="comment-text">
                <b>nasa</b>&nbsp;Caption for my post
              </p>
            </div>
            <button className="view-comments-btn btn" onClick={this.props.toggleLandscape}>
              <b>View all {this.props.comments.length} comments</b>
            </button>
            {this.getCommentsBeta()}
            <p className="info-text">14 hours ago</p>
            <PostComment />
          </div>
        </div>
      );
    } else {
      return (
        <div className="center">
          <div className="App landscape">
            <div id="post-image-wrap">
              <img id="post-image" src="sample-post.jpg" alt="sample-post"></img>
            </div>
            <div className="landscape-right">
              <Header />
              <div id="caption">
                <p className="comment-text">
                  <b>nasa</b>&nbsp;Caption for my post
                </p>
              </div>
              <button className="view-comments-btn btn" onClick={this.props.toggleLandscape}>
                <b>Hide all {this.props.comments.length} comments</b>
              </button>
              <div className="comments-landscape">{this.getCommentsBeta()}</div>
              <Actions />
              <b>
                <p className="info-text">56 likes</p>
              </b>
              <p className="info-text">14 hours ago</p>

              <PostComment />
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  comments: state.commentReducer.comments,
  isLandscape: state.toggleLandscapeReducer.isLandscape,
});

export default connect(mapStateToProps, { getCommentsFromDb, toggleLandscape })(App);
