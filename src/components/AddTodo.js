import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: '1236',
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
        this.props.newOne(this.state)
        this.props.hideForm()
    };

    render(){
        return (
            <div style={addtodoStyle}>
                <form style={formStyle} onSubmit={this.handleSubmit}>
                    <div style={{display:'flex'}}>
                        <div style={columnStyle}>
                            <label>Cin: </label>
                            <select name="CIN" value={this.state.CIN} onChange={this.handleChange}></select>

                            <label>Name: </label>
                            <select name="name" value={this.state.name} onChange={this.handleChange}></select>

                            <label>Email: </label>
                            <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>

                            <label>Phone: </label>
                            <input type="number" name="phone" value={this.state.phone} onChange={this.handleChange}/>

                            <label>Address: </label>
                            <input type="text" name="address" value={this.state.address} onChange={this.handleChange}/>

                            <label>Zipcode: </label>
                            <input type="text" name="zipcode" value={this.state.zipcode} onChange={this.handleChange}/>
                          </div>
                      </div>
                    <button style={btnStyle} type="submit">Confirm</button>
                </form>
            </div>
        );
    }
}

AddTodo.propTypes = {
    newOne: PropTypes.func.isRequired,
}

const addtodoStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#CED6DC',
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