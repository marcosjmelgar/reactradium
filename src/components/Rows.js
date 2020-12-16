import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Rows extends Component {
    render() {
        const { _id, CIN, name, email, phone, address, zipcode } = this.props.row;
        return (
            <tr style={rowStyle}>
                <td style={cellStyle}>{CIN}</td>
                <td style={cellStyle}>{name}</td>
                <td style={cellStyle}>{email}</td>
                <td style={cellStyle}>{phone}</td>
                <td style={cellStyle}>{address}</td>
                <td style={cellStyle}>{zipcode}</td>
                <td style={cellStyle}>
                    <div style={btnContainerStyle}>
                        <button style={btnStyle} onClick={this.props.editTodo.bind(this, _id)} >Edit</button>
                        <button style={btnStyle2} onClick={this.props.delTodo.bind(this, _id)} >Eliminate</button>
                    </div>
                </td>
            </tr>
        );
    }
}

Rows.propTypes = {
    row: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

const cellStyle = {
    padding: '5px 18px'
}

const rowStyle = {
    lineHeight: '25px',
    border: '1px solid',
}

const btnContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
}

const btnStyle = {
    display: 'flex',
    justifyContent: 'center',
    background: 'violet',
    padding: '4px',
    margin: '0 3px',
    borderWidth: '1px',
    borderRadius: '5px',
    overflow: 'hidden',
    cursor: 'pointer'
}
const btnStyle2 = {
    display: 'flex',
    justifyContent: 'center',
    background: 'red',
    padding: '4px',
    margin: '0 3px',
    borderWidth: '1px',
    borderRadius: '5px',
    overflow: 'hidden',
    cursor: 'pointer'
}