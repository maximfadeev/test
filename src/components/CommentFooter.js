import React from "react";
import { connect } from "react-redux";
import { toggleReply } from "../actions";
import Reply from "./Reply";

class CommentFooter extends React.Component {
  constructor() {
    super();
    this.state = {
      showingReplies: false,
    };
    this.onReply = this.onReply.bind(this);
    this.toggleShowReplies = this.toggleShowReplies.bind(this);
    this.getReplies = this.getReplies.bind(this);
  }

  onReply(e) {
    this.props.toggleReply({ isReply: true, commentId: this.props.comment.id });
  }

  toggleShowReplies() {
    this.setState({ showingReplies: !this.state.showingReplies });
  }

  getReplies() {
    const replies = this.props.comment.replies.map((reply, index) => (
      <Reply key={index} commentId={this.props.comment.id} reply={reply} />
    ));
    return replies;
  }

  render() {
    return (
      <div className="CommentFooter">
        <div className="likes-replies">
          <p className="likes-count">{this.props.comment.likes} likes</p>
          <button className="btn reply-btn" onClick={this.onReply}>
            Reply
          </button>
        </div>
        <button className="btn view-replies-btn" onClick={this.toggleShowReplies}>
          View replies
        </button>
        <div className="replies">{this.getReplies()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reply: state.toggleReplyReducer.reply,
  comments: state.commentReducer.comments,
});

export default connect(mapStateToProps, { toggleReply })(CommentFooter);
