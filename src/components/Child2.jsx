import React, { useContext } from "react";
import MyContext from "./MyContext";

const Child2 = () => {
  const contextValue = useContext(MyContext);


  return <p>{contextValue}</p>;
};

export default Child2;