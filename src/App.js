import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Counter title="Click on '-' to decrement & on '+' to increment" />
        </header>
      </div>
    );
  }
}

export default App;
