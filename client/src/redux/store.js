import { combineReducers, compose, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/auth";
import modalReducer from "./reducers/model";
import postReducer from "./reducers/post";

const initialState = {};

const reducers = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  posts: postReducer,
});

// DevTools desteği eklemek için
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
