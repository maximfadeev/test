import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Comment = (props) => {
  return (
    <div className="Comment">
      <p className="comment-text">
        <b>{props.comment.name}</b>&nbsp;{props.comment.text}
      </p>
      <FontAwesomeIcon icon={faHeart} size="1x" />
    </div>
  );
};

export default Comment;
