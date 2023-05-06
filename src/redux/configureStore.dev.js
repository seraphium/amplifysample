import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import chatSaga from "./saga/chatSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, sagaMiddleware, reduxImmutableStateInvariant()],
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(chatSaga);

export default store;
