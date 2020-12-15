import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Row extends Component {
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
                        <button style={btnStyle} onClick={this.props.editItem} ></button>
                        <button style={btnStyle2} onClick={this.props.delTodo.bind(this, _id)} ></button>
                    </div>
                </td>
            </tr>
        );
    }
}

Row.propTypes = {
    row: PropTypes.object.isRequired,
    editItem: PropTypes.func.isRequired,
    delItem: PropTypes.func.isRequired,
}

const cellStyle = {
    padding: '5px 20px'
}

const rowStyle = {
    background: '#CED6DC',
    lineHeight: '25px',
    border: '1px #707070 solid',
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