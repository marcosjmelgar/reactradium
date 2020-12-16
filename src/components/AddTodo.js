import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            CIN: '',
            name: '',
            email: '',
            phone: '',
            address: '',
            zipcode: ''
        };
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state)
        this.props.hideEdit()
    };

    render(){
        const { CIN, name, email, phone, address, zipcode } = this.props.edited[0]
        return (
            <div style={addtodoStyle}>
                <form style={formStyle} onSubmit={this.handleSubmit}>
                    <div style={{display:'flex'}}>
                        <div style={columnStyle}>
                            <label>Cin: </label>
                            <input name="CIN" defaultValue={CIN} onChange={this.handleChange}></input>

                            <label>Name: </label>
                            <input name="name" defaultValue={name} onChange={this.handleChange}></input>

                            <label>Email: </label>
                            <input type="text" name="email" defaultValue={email} onChange={this.handleChange}/>

                            <label>Phone: </label>
                            <input type="number" name="phone" defaultValue={phone} onChange={this.handleChange}/>

                            <label>Address: </label>
                            <input type="text" name="address" defaultValue={address} onChange={this.handleChange}/>

                            <label>Zipcode: </label>
                            <input type="text" name="zipcode" defaultValue={zipcode} onChange={this.handleChange}/>
                          </div>
                      </div>
                    <button style={btnStyle} type="submit">Confirm</button>
                </form>
            </div>
        );
    }
}

AddTodo.propTypes = {
    edited: PropTypes.func.isRequired,
    hideEdit: PropTypes.func.isRequired
}

const addtodoStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid',
    padding: '10px',
    marginBottom: '15px',
}

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '8px',
    marginBottom: '6px',
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