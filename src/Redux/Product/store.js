import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { batreducer, padreducer } from "./ProductReducer";
import { logger } from "redux-logger";
import { thunk } from "redux-thunk";
import { Reducer } from "../Img/Reducer";

const rootreducer = combineReducers({
  bat: batreducer,
  pad: padreducer,
  imglist: Reducer,
});

const store = configureStore({
  reducer: rootreducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, thunk),
});

export default store;
