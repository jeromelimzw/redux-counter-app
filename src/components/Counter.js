import React from "react";
import PropTypes from "prop-types";

const Counter = ({ counter, decrement, increment }) => {
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={decrement}> - </button>
      <button onClick={increment}> + </button>
    </div>
  );
};

Counter.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func
};

export default Counter;
