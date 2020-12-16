import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: {
        $oid: !this.props.new ? this.props.company._id.$oid : uuidv4(),
      },
      CIN: !this.props.new ? this.props.company.CIN : "",
      name: !this.props.new ? this.props.company.name : "",
      email: !this.props.new ? this.props.company.email : "",
      phone: !this.props.new ? this.props.company.phone : "",
      address: !this.props.new ? this.props.company.address : "",
      zipcode: !this.props.new ? this.props.company.zipcode : "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.newOne(this.state);
  };

  render() {
    const {
      CIN,
      name,
      email,
      phone,
      address,
      zipcode
    } = this.state;
    return (
      <div style={formContainer}>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Edit Company</legend>
            <div style={inputContainer}>
              <label htmlFor="CIN">CIN:</label>
              <input
                type="text"
                label="CIN"
                id="CIN"
                name="CIN"
                defaultValue={CIN}
                onChange={this.handleChange}
              ></input>
            </div>
            <div style={inputContainer}>
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                name="name"
                value={name}
                onChange={this.handleChange}
              ></input>
            </div>
            <div style={inputContainer}>
              <label htmlFor="email">E-mail:</label>
              <input
                type="text"
                width="auto"
                label="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              ></input>
            </div>
            <div style={inputContainer}>
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                label="phone"
                name="phone"
                value={phone}
                onChange={this.handleChange}
              ></input>
            </div>
            <div style={inputContainer}>
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                label="address"
                name="address"
                value={address}
                onChange={this.handleChange}
              ></input>
            </div>
            <div style={inputContainer}>
              <label htmlFor="zipcode">ZIPCODE:</label>
              <input
                type="text"
                label="zipcode"
                name="zipcode"
                value={zipcode}
                onChange={this.handleChange}
              ></input>
            </div>
            <div style={inputContainer}>
              <input style={confirmStyle} type="submit" value="Submit"></input>
              <input style={resetStyle} type="reset" value="Reset"></input>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

const formContainer = {
  border: "1px solid black",
  height: "auto",
  padding: "50px",
  margin: "10px",
};

const confirmStyle = {
  display: 'flex',
  justifyContent: 'center',
  background: 'green',
  padding: '4px',
  margin: '0 3px',
  borderWidth: '1px',
  borderRadius: '5px',
  overflow: 'hidden',
  cursor: 'pointer'
};

const resetStyle = {
  display: 'flex',
  justifyContent: 'center',
  background: 'yellow',
  padding: '4px',
  margin: '0 3px',
  borderWidth: '1px',
  borderRadius: '5px',
  overflow: 'hidden',
  cursor: 'pointer'
};

const inputContainer = {
  padding: "20px 0px 0px 20px",
};
export default Form;