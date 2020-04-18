import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed:false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed:false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed:true
      },
      {
        id: 4,
        title: 'Study the slag splashing process',
        completed:false
      }
    ]
  }  
  render(){
    return (
      <div className="App">
        <Todos todos = {this.state.todos}/>
      </div>
    );
  }
}

export default App;
