import React from "react";
import { connect } from "react-redux";
import { toggleReply } from "../actions";

class CommentFooter extends React.Component {
  constructor() {
    super();
    this.state = {};
    // this.toggleLiked = this.toggleLiked.bind(this);
    this.onReply = this.onReply.bind(this);
  }

  onReply(e) {
    this.props.toggleReply();
  }

  render() {
    return (
      <div className="CommentFooter">
        <div className="horizontal-flex">
          <p>{this.props.comment.likes} likes</p>
          <button className="btn" onClick={this.onReply}>
            Reply
          </button>
        </div>
        <button className="btn">View replies</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isReply: state.toggleReplyReducer.isReply,
});

// export default Comment;
export default connect(mapStateToProps, { toggleReply })(CommentFooter);
