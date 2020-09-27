import React from "react";

import { connect } from "react-redux";
import { addComment } from "../actions";

const mapStateToProps = (state) => {
  return {
    // commentText: state.setCommentText.commentText,
    comments: state.commentReducer.comments,
    isReply: state.toggleReplyReducer.isReply,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onTextChange: (e) => dispatch(setCommentText(e.target.value)),
    // clearComment: () => dispatch(setCommentText("")),
    postCommentToDb: (comment) => {
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

    this.onTextChange = this.onTextChange.bind(this);
    this.onCommentSubmit = this.onCommentSubmit.bind(this);
    this.onReplySubmit = this.onReplySubmit.bind(this);
  }

  onTextChange(event) {
    this.setState({ value: event.target.value });
  }

  onCommentSubmit(e) {
    e.preventDefault();
    this.props.postCommentToDb({ name: "username", text: this.state.value, likes: 0 });
    this.setState({ value: "" });
  }

  onReplySubmit(e) {
    e.preventDefault();
    this.props.postCommentToDb({ name: "username", text: this.state.value, likes: 0 });
    this.setState({ value: "" });
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
    if (this.props.isReply) {
      return (
        <form id="PostComment" onSubmit={this.onReplySubmit}>
          <textarea
            type="text"
            className="post-comment-input"
            placeholder="Add a comment..."
            value={this.state.value}
            onChange={this.onTextChange}
          ></textarea>
          <button type="submit" className="post-comment-btn btn">
            <b>Reply</b>
          </button>
        </form>
      );
    }
    return (
      <form id="PostComment" onSubmit={this.onCommentSubmit}>
        <textarea
          type="text"
          className="post-comment-input"
          placeholder="Add a comment..."
          value={this.state.value}
          onChange={this.onTextChange}
        ></textarea>
        <button type="submit" className="post-comment-btn btn">
          <b>Post</b>
        </button>
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostComment);
