import { FETCH_COMMENTS, ADD_COMMENT, TOGGLE_LANDSCAPE, SET_LIKES } from "./types";

const initialStateComments = {
  comments: [],
};

export const commentReducer = (state = initialStateComments, action = {}) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return { ...state, comments: action.payload };
    case ADD_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] };

    case SET_LIKES: // this can definitely be better
      return {
        ...state,
        comments: [
          ...state.comments.slice(0, action.payload.id),
          action.payload,
          ...state.comments.slice(action.payload.id + 1),
        ],
      };

    default:
      return state;
  }
};

// const initialStateLikes = {
//   likes: 0,
// };

// export const likeReducer = (state = initialStateLikes, action = {}) => {
//   switch (action.type) {
//     case LIKE_COMMENT:
//       console.log(...state);
//       return { ...state };
//     default:
//       return state;
//   }
// };

// const initialStateCommentText = {
//   commentText: "",
// };

// export const setCommentText = (state = initialStateCommentText, action = {}) => {
//   switch (action.type) {
//     case CHANGE_COMMENT_TEXT:
//       // change to ...
//       return Object.assign({}, state, { commentText: action.payload });
//     default:
//       return state;
//   }
// };

const initialStateLandscape = {
  isLandscape: false,
};

export const toggleLandscapeReducer = (state = initialStateLandscape, action = {}) => {
  switch (action.type) {
    case TOGGLE_LANDSCAPE:
      return { ...state, isLandscape: !state.isLandscape };
    default:
      return state;
  }
};
