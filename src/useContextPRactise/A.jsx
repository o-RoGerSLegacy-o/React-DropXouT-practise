import React, { createContext } from "react";
const content1 = createContext();
const A = () => {
  const greet = "rogers";
  return (
    <div>
      <content1.Provider value={{ greet }}></content1.Provider>
    </div>
  );
};

export default A;
export { content1 };
