import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./PostsState";

let reducer = combineReducers({ postsState: postsReducer });
// let reducer = combineReducers({postsState: postsReducer, usersState: usersReducer})
let store = configureStore({ reducer });

export default store;
