import React from "react";
import LikeButtonIcon from "./LikeButton";
import { connect } from "react-redux";
import { setLikes } from "../actions";

class Reply extends React.Component {
  constructor() {
    super();
    this.state = {
      isLiked: false,
    };
    this.toggleLiked = this.toggleLiked.bind(this);
  }

  changeLikes(n) {
    // let reply = this.props.reply;
    // reply.likes += n;
    // this.props.setLikes(reply);

    console.log(this.props);
    const replyId = this.props.reply.id;

    let comment = this.props.comments[this.props.commentId];
    const commentReply = comment.replies[replyId];
    commentReply.likes += n;
    comment.replies[replyId] = commentReply;
    this.props.setLikes(comment);
  }

  toggleLiked() {
    if (this.state.isLiked) {
      this.setState({ isLiked: false });
      this.changeLikes(-1);
    } else {
      this.changeLikes(1);
      this.setState({ isLiked: true });
    }
  }

  render() {
    return (
      <div className="Comment">
        <img src="profile-picture.png" alt="profile" className="user-picture"></img>
        <div className="comment-landscape">
          <p className="comment-text ">
            <b>{this.props.reply.name}</b>&nbsp;{this.props.reply.text}
          </p>
          <div className="likes-replies">
            <p className="likes-count">{this.props.reply.likes} likes</p>
          </div>
        </div>
        <button className="btn like-btn" onClick={this.toggleLiked}>
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
export default connect(mapStateToProps, { setLikes })(Reply);
