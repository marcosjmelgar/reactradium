import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Body extends Component {
    render() {
        return (
            <body style={bodyStyle}>
                <div data={this.props.data} delTodo={this.props.delItem} addTodo={this.props.addItem}/>
            </body>
        );
    }
}

Body.propTypes = {
    data: PropTypes.array.isRequired,
    delTodo: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
}

const bodyStyle = {
    display: 'flex',
    justifyContent: 'center',
    background: '#fff',
    height: 'auto',
    width: '100%',
    alingItems: 'center',
    padding: '8px'
}