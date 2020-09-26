import React from "react";

import { connect } from "react-redux";
import { setCommentText, addComment } from "../actions";

const mapStateToProps = (state) => {
  return {
    commentText: state.setCommentText.commentText,
    comments: state.commentReducer.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCommentChange: (e) => dispatch(setCommentText(e.target.value)),
    clearComment: () => dispatch(setCommentText("")),
    postCommentR: (comment) => {
      dispatch(addComment(comment));
    },
  };
};

class PostComment extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };

    this.postCommentRedux = this.postCommentRedux.bind(this);
    this.onCommentChange = this.onCommentChange.bind(this);
  }

  onCommentChange(event) {
    this.setState({ value: event.target.value });
  }

  postCommentRedux(e) {
    e.preventDefault();
    this.props.postCommentR({ name: "test", text: this.state.value });
  }

  // postComment(e) {
  //   let comments = JSON.parse(localStorage.getItem("comments"));
  //   comments.push({ name: "username", text: this.props.commentText });
  //   localStorage.setItem("comments", JSON.stringify(comments));
  //   this.setState({ value: "" });
  //   // this.props.clearComment();
  //   e.preventDefault();
  // }

  render() {
    return (
      <form id="PostComment" onSubmit={this.postCommentRedux}>
        <textarea
          type="text"
          className="post-comment-input"
          placeholder="Add a comment..."
          value={this.state.value}
          onChange={this.onCommentChange}
        ></textarea>
        <button type="submit" className="post-comment-btn">
          <b>Post</b>
        </button>
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostComment);
