import React, { Component } from 'react';
import Todo from './components/Todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hooks</h1>
        <Todo />
      </div>
    );
  }
}

export default App;
