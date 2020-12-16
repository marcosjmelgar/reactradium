import React, { Component } from "react";
import Form from "./Form.js";

export class DataEditForm extends Component {
  render() {
    return this.props.companies.map((company) => {
      if (company._id.$oid === this.props._id) {
        return (
          <Form
            company={company}
            key={company._id.$oid}
            newOne={this.props.newOne}
          />
        );
      } else {
        return false;
      }
    });
  }
}

export default DataEditForm;