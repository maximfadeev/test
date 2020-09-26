import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Comment">
        <p className="comment-text">
          <b>{this.props.comment.name}</b>&nbsp;{this.props.comment.text}
        </p>
        <FontAwesomeIcon icon={faHeart} size="1x" />
      </div>
    );
  }
}

export default Comment;
