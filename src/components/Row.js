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
          <button onClick={this.props.editItem.bind(this, _id.$oid)}>Add</button>
        </td>
        <td style={dataContainer}>
          <button onClick={this.props.delItem.bind(this, _id.$oid)}>Delete</button>
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

export default Row;
