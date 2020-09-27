import React from "react";
import LikeButtonIcon from "./LikeButton";
import { connect } from "react-redux";
import { addLike } from "../actions";

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      isLiked: false,
    };
    this.toggleLiked = this.toggleLiked.bind(this);
  }

  toggleLiked() {
    if (this.state.isLiked) {
      this.setState({ isLiked: false });
    } else {
      let comment = this.props.comment;
      comment.likes += 1;
      this.props.addLike(comment);
      console.log(this.props);
      this.setState({ isLiked: true });
    }
  }

  render() {
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
  }
}
const mapStateToProps = (state) => ({
  comments: state.commentReducer.comments,
});

// export default Comment;
export default connect(mapStateToProps, { addLike })(Comment);
