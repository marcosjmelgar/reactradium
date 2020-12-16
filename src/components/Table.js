import React, { Component } from "react";
import Row from "./Row.js";

export class Table extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.toggleAddNew}>New Company</button>
        <table>
          <thead>
            <tr>
              <th>CIN</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Zipcode</th>
            </tr>
          </thead>
          <tbody style={bodyContainer}>
            {this.props.companies.map((company) => (
              <Row
                key={company._id.$oid}
                company={company}
                editItem={this.props.editItem}
                delItem={this.props.delItem}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
const bodyContainer = {
  textAlign: "left",
};
export default Table;