import React, { useReducer } from "react";
const reducer = (count, action) => {
  if (action.type === "incre") {
    return { number: count.number + 1 };
  } else if (action.type === "decr") {
    return { number: count.number - 1 };
  }
};
const ReducerPractise = () => {
  const [count, setCount] = useReducer(reducer, { number: 0 });

  const decrementHandler = () => {
    setCount({ type: "decr" });
  };

  const incrementHandler = () => {
    setCount({ type: "incr" });
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementHandler}>+</button>
      <button onClick={decrementHandler}>-</button>
    </div>
  );
};

export default ReducerPractise;
