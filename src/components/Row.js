import React, { Component } from "react";

export class Row extends Component {
  render() {
    const {
      _id,
      CIN,
      name,
      email,
      phone,
      address,
      zipcode,
    } = this.props.company;
    return (
      <tr style={rowContainer}>
        <td style={dataContainer}>{CIN}</td>
        <td style={dataContainer}>{name}</td>
        <td style={dataContainer}>{email}</td>
        <td style={dataContainer}>{phone}</td>
        <td style={dataContainer}>{address}</td>
        <td style={dataContainer}>{zipcode}</td>
        <td style={dataContainer}>
          <button style={btnEditStyle} onClick={this.props.editItem.bind(this, _id.$oid)}>Edit</button>
        </td>
        <td style={dataContainer}>
          <button style={btnDelStyle} onClick={this.props.delItem.bind(this, _id.$oid)}>Delete</button>
        </td>
      </tr>
    );
  }
}
const rowContainer = {};

const dataContainer = {
  padding: "10px",
  border: "1px solid black",
  width: "20%",
};

const btnEditStyle = {
  display: 'flex',
  justifyContent: 'center',
  background: 'yellow',
  padding: '4px',
  margin: '0 3px',
  borderWidth: '1px',
  borderRadius: '5px',
  overflow: 'hidden',
  cursor: 'pointer'
}

const btnDelStyle = {
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

export default Row;
