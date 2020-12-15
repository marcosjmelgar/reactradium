import React, { Component } from 'react';
import AddTodo from './AddTodo';
import Table from './Table';
import PropTypes from 'prop-types';

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showForm: false
        };
        this.displayForm = this.displayForm.bind(this);
    }

    // Display new item form
    displayForm = () => {
        this.setState({ showForm: true })
    }

    // Display new item form
    hideForm = () => {
        this.setState({ showForm: false })
    }

    render() {
        return (
            <div style={containerStyle}>
                {this.state.showForm && <AddTodo newOne={this.props.addItem} hideForm={this.hideForm}/>}
                <Table data={this.props.data} displayForm={this.displayForm} delTodo={this.props.delTodo}/>
            </div>
        );
    }
}

Container.propTypes = {
    data: PropTypes.array.isRequired,
    delTodo: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
}

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px #707070 solid',
    borderRadius: '25px',
    padding: '30px 50px 50px 50px'
}