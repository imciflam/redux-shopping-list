import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import Posts from "./components/Posts";
import PostForm from "./components/Form";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      {/*holds the store - tree of an app*/}
      <div className="App">
        <header className="App-header">
          <PostForm />
          <Posts />
        </header>
      </div>
    </Provider>
  );
}

export default App;
