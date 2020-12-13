import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';


import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: "take out",
        completed: false
      },
      {
        id: 2,
      title: "take in",
      completed: true
      },
      {
        id: 3,
        title: "holas",
        completed: true
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      console.log(todo)
      return todo;
    })});
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !==
      id)]});
      console.log(id)
  }


  // Add Todo
    addTodo = (title) => {
      const newTodo = {
      id: 8,
      title,
      completed: true
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
    console.log(title)
  }

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <div className= "container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} 
          delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
