import React, { Component } from 'react';
import Table from './Table';
import PropTypes from 'prop-types';
import CompanyForm from './CompanyForm';

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showForm: false,
          editing: false,
          edited: [],
        };
        this.displayForm = this.displayForm.bind(this);
        this.hideForm = this.hideForm.bind(this)
    }

    // Display new item form
    displayForm = (id) => {
        const company = this.props.data.filter(company => company._id === id);
        if (Object.keys(company).length !== 0) {
            this.setState({ showForm: true, editing: true, edited: company})
        } else {
            this.setState({ showForm: true, edited: this.props.data.filter(company => company._id === id)})
        }
    };

    // Display new item form
    hideForm = () => {
        this.setState({ showForm: false, editing: false })
    }

    render() {
        return (
            <div style={containerStyle}>
                {this.state.showForm && <CompanyForm data={this.props.data} addTodo={this.props.AddTodo} editTodo={this.props.editTodo} editing={this.state.editing} editedCompany={this.state.edited} displayForm={this.displayForm} hideForm={this.hideForm} />}
                <Table data={this.props.data} displayForm={this.displayForm} hideForm={this.hideForm} delTodo={this.props.delTodo} />
            </div>
        );
    }
}

Container.propTypes = {
    data: PropTypes.array.isRequired,
    delTodo: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
    editCompany: PropTypes.func.isRequired
}

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid',
    padding: '30px 50px 50px 50px'
}