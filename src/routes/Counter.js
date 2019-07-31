import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CounterContainer from '../containers/CounterContainer'
export default class Counter extends Component {


  render() {
    return (
      <div className="wrap">
        <h1>Redux Counter</h1>
        <CounterContainer/>
      </div>
    )
  }
}
