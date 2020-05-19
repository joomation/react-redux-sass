import React, { Component } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useActions, useError } from "../lib/hooks";
import * as actions from "../store/modules/counter";
import { increment, decrement } from "../store/modules/counter";
import CounterButton from "../components/CounterButton";

function CounterContainer() {
  const { number } = useSelector((state) => ({
    number: state.counter.number,
  }));
  const { increment, decrement } = useActions(actions);
  const handleIncrement = () => {
    increment();
  };
  const handleDecrement = () => {
    decrement();
  };
  return (
    <div className="counter-wrap">
      <div className="num">{number}</div>
      <CounterButton text="increse" onClick={handleIncrement} />
      <CounterButton text="decrease" onClick={handleDecrement} />
    </div>
  );
}

export default CounterContainer;
