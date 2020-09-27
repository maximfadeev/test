import React from "react";
import LikeButtonIcon from "./LikeButton";
import Avatar from "./Avatar";
import CommentFooter from "./CommentFooter";
import { connect } from "react-redux";
import { setLikes, toggleLandscape } from "../actions";

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      isLiked: false,
    };
    this.toggleLiked = this.toggleLiked.bind(this);
  }

  changeLikes(n) {
    let comment = this.props.comment;
    comment.likes += n;
    this.props.setLikes(comment);
  }

  toggleLiked() {
    console.log(this.props.comments);
    if (this.state.isLiked) {
      this.setState({ isLiked: false });
      this.changeLikes(-1);
    } else {
      this.changeLikes(1);
      this.setState({ isLiked: true });
    }
  }

  render() {
    if (!this.props.isLandscape) {
      return (
        <div className="Comment">
          <p className="comment-text">
            <b>{this.props.comment.name}</b>&nbsp;{this.props.comment.text}
          </p>
          <button className="btn" onClick={this.toggleLiked}>
            <LikeButtonIcon isLiked={this.state.isLiked} />
          </button>
        </div>
      );
    } else {
      return (
        <div className="Comment">
          <Avatar />
          <div className="comment-landscape">
            <p className="comment-text center-vertical">{this.props.comment.text}</p>
            <CommentFooter comment={this.props.comment} />
          </div>

          <button className="btn" onClick={this.toggleLiked}>
            <LikeButtonIcon isLiked={this.state.isLiked} />
          </button>
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => ({
  comments: state.commentReducer.comments,
  isLandscape: state.toggleLandscapeReducer.isLandscape,
});

// export default Comment;
export default connect(mapStateToProps, { setLikes, toggleLandscape })(Comment);
