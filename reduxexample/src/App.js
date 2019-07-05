import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from "./components/Posts";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form/>
        <Posts/>
      </header>
    </div>
  );
}

export default App;
