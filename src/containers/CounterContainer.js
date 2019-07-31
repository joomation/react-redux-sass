
import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { increment, decrement } from '../store/modules/counter';
import CounterButton from '../components/CounterButton';
class TestContainer extends Component {
  static propTypes = {
    number: PropTypes.number
  }
  handleIncrement = () => {
    this.props.increment();
  };
  handleDecrement = () => {
    this.props.decrement();
  };
  render() {
    const { number } = this.props;
    return (
      <div className="counter-wrap">
        <div className="num">{number}</div>
        <CounterButton text="increse" onClick={this.handleIncrement}/>
        <CounterButton text="decrease" onClick={this.handleDecrement}/>
        
      </div>
    );
  }
}
const mapStateToProps = ({ counter }) => ({
  number: counter.number,
});


const mapDispatchToProps = { increment, decrement };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestContainer);