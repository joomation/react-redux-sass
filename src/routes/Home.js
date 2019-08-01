import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Home extends Component {
  render() {
    return (
      <div className="wrap">
        <div className="home">
          <h1 className="emoji">😀</h1>
          <h1>Hello,<br/>I'm React + Redux + Sass</h1>
          <p>This is React + Redux simple starter kit. In addition, added <b>code split</b></p>
       </div>
      </div>
    )
  }
}
export default Home
