import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CounterButton extends Component {
    static propTypes = {
        text: PropTypes.string,
        onClick:PropTypes.func
    }

    render() {
        const {text,onClick} = this.props;
        return (
            <button onClick={onClick}>{text}</button>
        )
    }
}
