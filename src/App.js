import React, { Component } from "react";
import "./App.css";
import Header from "./components/layout/Header.js";
import Table from "./components/Table.js";
import Companies from "./mocks/companies.json";
import DataEditForm from "./components/DataEditForm";
import Form from "./components/Form.js";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Companies,
      Edit: false,
      _id: null,
      New: false,
    };
  }

  delCompany = (id) => {
    this.setState({
      Companies: [
        ...this.state.Companies.filter(
          (company) => company._id.$oid !== id
        ),
      ],
    });
  };

  editItem = (id) => {
    this.setState({ Edit: !this.state.Edit });
    this.setState({ _id: id });
    if (id === null) {
      this.setState({ New: true });
    }
  };

  toggleAddNew = () => {
    this.setState({ New: !this.state.New });
  };

  addItem = (newItem) => {
    if (this.state.New) {
      this.setState({ New: !this.state.New });
      this.setState({ Companies: [...this.state.Companies, newItem] });
    } else {
      this.setState({
        Companies: [
          ...this.state.Technicians.map((company) => {
            if (company._id.$oid === newItem._id.$oid) {
              company = newItem;
            }
            return company;
          }),
        ],
      });
      this.setState({ Edit: !this.state.Edit });
    }
  };

  render() {
    return (
      <div>
        <Header />
        {this.state.Edit && (
          <DataEditForm
            companies={this.state.Companies}
            _id={this.state._id}
            newOne={this.addItem}
          />
        )}
        {this.state.New && <Form newOne={this.addItem} new={this.state.New} />}
        <Table
          companies={this.state.Companies}
          delItem={this.delCompany}
          editItem={this.editItem}
          toggleAddNew={this.toggleAddNew}
        />
      </div>
    );
  }
}

export default App;
