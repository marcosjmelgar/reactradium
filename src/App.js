import React, { Component } from 'react'
import Header from './components/layout/Header';
import Body from './components/layout/Body';
import companies from './mocks/companies.json';
import './App.css';

export default class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      companies,
    };
  }

  // Delete Todo
  delTodo = id => {
      this.setState({
        companies: [...this.state.companies.filter(companies => companies._id !== id)]});
  };

  // Add Todo

  addTodo = newCompany => {
    this.setState({ companies: [...this.state.companies, newCompany]})
  }

  // Edit Todo

  editTodo = editedCompany => {
    this.setState ({
      companies: [...this.state.companies.map((company) => {
        if (company._id === editedCompany._id) {
          company = editedCompany;
        }
        return companies;
      })]
    })
  }

  render() {
    return (
        <div className="App">
          <div className="container">
            <Header />
                <Body
                  data={this.state.companies}
                  delTodo={this.delTodo}
                  addTodo={this.addTodo}
                  editTodo={this.editTodo}
                />
            </div>
        </div>
    );
  }
}

