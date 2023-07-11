import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import PostsTable from "./components/PostsTable";
import store from "./redux/store";
import PostsList from "./components/PostsList";
import NewPost from "./components/NewPost";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <PostsTable />
          </div>
          <div className="col-md-6">
            <PostsList />
          </div>
          <div className="col-md-6">
            <NewPost />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
