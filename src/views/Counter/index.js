import React, { Component } from "react";
import CounterContainer from "../../containers/CounterContainer";

function Counter() {
  return (
    <div className="wrap">
      <h1>Redux Counter</h1>
      <CounterContainer />
    </div>
  );
}
export default Counter;
