import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {v4 as uuid} from 'uuid';

export default class CompanyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: this.props.editing ? this.props.editedCompany[0]._id : uuid(),
            CIN: this.props.editing ? this.props.editedCompany[0].CIN : '',
            name: this.props.editing ? this.props.editedCompany[0].name : '',
            email: this.props.editing ? this.props.editedCompany[0].email : '',
            phone: this.props.editing ? this.props.editedCompany[0].phone : '',
            address: this.props.editing ? this.props.editedCompany[0].address : '',
            zipcode: this.props.editing ? this.props.editedCompany[0].zipcode : '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.hideForm()
        if (!this.props.editing) {
            this.props.addTodo(this.state)
        } else {
            this.props.editTodo(this.state)
        }
    };

    render(){
        const { CIN, name, email, phone, address, zipcode } = this.state;
        return (
            <div style={addnewStyle}>
                <form style={formStyle} onSubmit={this.handleSubmit}>
                    <div style={{display:'flex'}}>
                        <div style={columnStyle}>
                            <label>Name: </label>
                            <input type="text" name="name" value={name} onChange={this.handleChange}/>

                            <label> CIN: </label>
                            <input type="text" name="CIN" value={CIN} onChange={this.handleChange}/>

                            <label>Email: </label>
                            <input type="text" name="email" value={email} onChange={this.handleChange}/>

                            <label>Phone: </label>
                            <input type="text" name="phone" value={phone} onChange={this.handleChange}/>

                            <label>Address: </label>
                            <input type="text" name="address" value={address} onChange={this.handleChange}/>

                            <label>Zipcode: </label>
                            <input type="text" name="zipcode" value={zipcode} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <button style={btnStyle} type="submit">Confirm</button>
                </form>
            </div>
        );
    }
}

CompanyForm.propTypes = {
    data: PropTypes.array.isRequired,
    addTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    editing: PropTypes.bool.isRequired,
    editedCompany: PropTypes.array.isRequired,
    displayForm: PropTypes.func.isRequired,
    hideForm: PropTypes.func.isRequired,
}

const addnewStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px #707070 solid',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '15px',
}

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '15px',
}

const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: '20px'
}

const btnStyle = {
    display: 'flex',
    justifyContent: 'center',
    background: 'green',
    padding: '5px',
    margin: '0 3px',
    borderWidth: '1px',
    borderRadius: '5px',
    overflow: 'hidden',
    cursor: 'pointer',
}

/*                            <select name="name" value={name} onChange={this.handleChange}>
                                <option disabled hidden>{'Select a company'}</option>
                                {this.props.data.map((building, index) => {
                                    return <option key={index} value={name.name}>{name.name}</option>
                                })}
                            </select>*/