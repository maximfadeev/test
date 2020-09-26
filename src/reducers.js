import { FETCH_COMMENTS, CHANGE_COMMENT_TEXT, ADD_COMMENT, TOGGLE_LANDSCAPE } from "./types";

const initialStateComments = {
  comments: [],
};

export const commentReducer = (state = initialStateComments, action = {}) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return { ...state, comments: action.payload };
    case ADD_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] };
    default:
      return state;
  }
};

const initialStateCommentText = {
  commentText: "",
};

export const setCommentText = (state = initialStateCommentText, action = {}) => {
  switch (action.type) {
    case CHANGE_COMMENT_TEXT:
      // change to ...
      return Object.assign({}, state, { commentText: action.payload });
    default:
      return state;
  }
};

const initialStateLandscape = {
  landscape: false,
};

export const toggleLandscapeReducer = (state = initialStateLandscape, action = {}) => {
  switch (action.type) {
    case TOGGLE_LANDSCAPE:
      return { ...state, landscape: !state.landscape };
    default:
      return state;
  }
};
