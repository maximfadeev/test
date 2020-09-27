import { FETCH_COMMENTS, ADD_COMMENT, TOGGLE_LANDSCAPE, LIKE_COMMENT } from "./types";

// find a better place and name for these
let getComments = function (key) {
  return JSON.parse(localStorage.getItem(key));
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
  // const comments = JSON.parse(localStorage.getItem("comments"));
  const id = comments.length;
  comment.id = id; // !!!!!!!!! check if this is ok
  comments.push(comment);
  setComments("comments", comments);
  // localStorage.setItem("comments", JSON.stringify(comments));

  return {
    type: ADD_COMMENT,
    payload: comment,
  };
};

// export const setCommentText = (text) => {
//   return {
//     type: CHANGE_COMMENT_TEXT,
//     payload: text,
//   };
// };

export const toggleLandscape = () => {
  return {
    type: TOGGLE_LANDSCAPE,
  };
};

export const addLike = (comment) => {
  // localStorage.setItem("comments", JSON.stringify(...JSON.parse(localStorage.getItem("comments"))));

  const comments = getComments("comments");
  comments[comment.id].likes += 1;
  setComments("comments", comments);

  return {
    type: LIKE_COMMENT,
    payload: comment,
  };
};
