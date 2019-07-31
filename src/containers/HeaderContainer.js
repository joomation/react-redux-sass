import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'


class Header extends Component {

  render() {
    return (
      <div className="header">
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/counter">Counter</NavLink>
          </li>
       
        </ul>
      </div>
    )
  }
}



export default Header;
