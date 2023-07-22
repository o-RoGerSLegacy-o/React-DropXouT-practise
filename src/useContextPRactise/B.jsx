import React, { useContext } from "react";
import { content1 } from "./A";

const B = () => {
  const useCon = useContext(content1);

  return (
    <div>
      <h1>hello amigos : {useCon.greet}</h1>
    </div>
  );
};

export default B;
