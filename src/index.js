import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { setCommentText, commentReducer, toggleLandscapeReducer } from "./reducers";
// import { getCommentsFromDb } from "./actions";

// import { store } from "./store";

// const store = createStore(setCommentText);
// const store = createStore(getCommentsFromDb);
// const store = createStore(() => [], {});

const rootReducer = combineReducers({
  commentReducer,
  setCommentText,
  toggleLandscapeReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
