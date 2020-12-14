import React, { Component } from 'react'
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
//import uuid from 'uuid';
//import axios from 'axios';

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
        completed: false
      },
      {
        id: 3,
        title: "take up",
        completed: true
      }
    ]
  };

  /*componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }));
  }*/

  // Toggle Complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // Delete Todo
  delTodo = id => {
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  };

  // Add Todo

  addTodo = title => {
    const newTodo = {
      id: 8,
      title,
      completed: true
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }
  /*addTodo = title => {
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      })
      .then(res => {
        res.data.id = uuid.v4();
        this.setState({ todos: [...this.state.todos, res.data] });
      });
  };
  */
  render() {
    return (
        <div className="App">
          <div className="container">
            <Header />
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />
            </div>
        </div>
    );
  }
}

export default App;
