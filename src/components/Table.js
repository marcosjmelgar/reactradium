import React, { Component } from 'react';
import Rows from './Rows';
import PropTypes from 'prop-types';

export default class Table extends Component {
    render() {
        return (
            <table style={tableStyle}>
                <thead>
                    <tr style={headerStyle}>
                        <th>CIN</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Zipcode</th>
                        <th>
                            <div style={btnContainerStyle}>
                                <button onClick={this.props.displayForm} style={btnStyle3}></button>
                                <button style={btnStyle4}></button>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody style={bodyStyle}>
                    {this.props.data.map((row) => (
                        <Rows key={row._id.$oid} row={row} editItem={this.props.displayForm} delTodo={this.props.delTodo}/>
                    ))}
                </tbody>
            </table>
        );
    }
}

Table.propTypes = {
    data: PropTypes.array.isRequired,
    displayForm: PropTypes.func.isRequired,
    editItem: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

const tableStyle = {
    border: '1px solid gray',
    textAlign: 'center',
}

const headerStyle = {
    background: '#708DA6',
    color: '#fff',
    lineHeight: '40px',
}

const bodyStyle = {
}

const btnContainerStyle = {
    display: 'flex',
    justifyContent: 'center'
}

const btnStyle3 = {
    display: 'flex',
    justifyContent: 'center',
    background: 'orange',
    padding: '4px',
    margin: '0 3px',
    borderWidth: '1px',
    borderRadius: '5px',
    overflow: 'hidden',
    cursor: 'pointer'
}

const btnStyle4 = {
    display: 'flex',
    justifyContent: 'center',
    background: 'blue',
    padding: '4px',
    margin: '0 3px',
    borderWidth: '1px',
    borderRadius: '5px',
    overflow: 'hidden',
    cursor: 'pointer'
}