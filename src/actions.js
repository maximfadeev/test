import { FETCH_COMMENTS, ADD_COMMENT, TOGGLE_LANDSCAPE, SET_LIKES, TOGGLE_REPLY } from "./types";

// find a better place and name for these
let getComments = function (key) {
  let comments = localStorage.getItem(key);
  if (comments === null) {
    return [];
  } else {
    return JSON.parse(localStorage.getItem(key));
  }
};

let setComments = function (key, val) {
  localStorage.setItem(key, JSON.stringify(val));
};

export const getCommentsFromDb = () => {
  let comments = JSON.parse(localStorage.getItem("comments")) || [];
  return { type: FETCH_COMMENTS, payload: comments };
};

export const addComment = (comment) => {
  const comments = getComments("comments");
  const id = comments.length;
  comment.id = id;

  let commentToDb = { ...comment };
  delete commentToDb.isLiked;

  comments.push(commentToDb);
  setComments("comments", comments);

  console.log("mndf,sndflk", comment);
  return {
    type: ADD_COMMENT,
    payload: comment,
  };
};

export const toggleLandscape = () => {
  return {
    type: TOGGLE_LANDSCAPE,
  };
};

export const setLikes = (comment) => {
  const comments = getComments("comments"); // way to do it without retreiving the whole db

  let commentToDb = { ...comment };
  delete commentToDb.isLiked;

  comments[comment.id] = commentToDb;
  setComments("comments", comments);

  return {
    type: SET_LIKES,
    payload: comment,
  };
};

export const setReplyIsLiked = (commentId, reply) => {
  const comments = getComments("comments"); // way to do it without retreiving the whole db
  let comment = comments[commentId];
  const isReplyLiked = reply.isReplyLiked;
  delete reply.isReplyLiked;
  comment.replies[reply.id] = reply;
  comments[commentId] = comment;
  setComments("comments", comments);
  reply = { ...reply, isReplyLiked };
  comment.replies[reply.id] = reply;

  return {
    type: SET_LIKES,
    payload: comment,
  };
};

export const toggleReply = (replyState) => {
  return {
    type: TOGGLE_REPLY,
    payload: replyState,
  };
};
