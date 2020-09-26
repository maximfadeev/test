import { FETCH_COMMENTS, CHANGE_COMMENT_TEXT, ADD_COMMENT, TOGGLE_LANDSCAPE } from "./types";

export const getCommentsFromDb = () => {
  const comments = JSON.parse(localStorage.getItem("comments"));
  return { type: FETCH_COMMENTS, payload: comments };
};

export const addComment = (comment) => {
  return {
    type: ADD_COMMENT,
    payload: comment,
  };
};

export const setCommentText = (text) => {
  return {
    type: CHANGE_COMMENT_TEXT,
    payload: text,
  };
};

export const toggleLandscape = () => {
  return {
    type: CHANGE_COMMENT_TEXT,
  };
};
