import React from "react";
import MyContext from "./MyContext";
import Child from "./Child";
import Child2 from "./Child2";

const Parent = () => {
  const contextValue = "Hello from Context!";

  return (
    <MyContext.Provider value={contextValue}>
      <Child />
      <Child2/>
    </MyContext.Provider>
  );
};

export default Parent;