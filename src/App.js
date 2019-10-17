import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "James", age: 25 },
      { name: "Peter", age: 40 },
      { name: "Marley", age: 32 }
    ]
  }

  switchNameHandler = () => {
    // console.log('was clicked!');
    // Don't do this this.state.persons[0].name = 'Maxmillian'
    this.setState({
      persons: [
        { name: "Maxmillian", age: 25 },
        { name: "Peter", age: 40 },
        { name: "Marley", age: 28 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
