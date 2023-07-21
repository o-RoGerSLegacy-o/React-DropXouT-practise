import React, { useState, useEffect } from "react";

const UseEffectExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`added ${count}`);
  }, [count]);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <h1>{count}</h1>
    </div>
  );
};

export default UseEffectExample;
