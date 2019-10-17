import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <Person name="James" age="25"/>
        <Person name="Peter" age="40">My Hobbies: Racing</Person>
        <Person name='Marley' age="32"/>
      </div>
    );
  }
}

export default App;
