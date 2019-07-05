import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux"
import Posts from "./components/Posts";
import PostForm from "./components/Form";

const store = createStore(()=> [], {}, applyMiddleware())

function App() {
  return (
    <Provider store = {store} {/*holds the store - tree of an app*/}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form/>
        <Posts/>
      </header>
    </div>
    </Provider>
  );
}

export default App;
