import React from "react";
import MyContext from "./MyContext";

const ContextProvider = (props) => {
  const data = {
    name: "Maddy",
    age: 24,
  };

  return <MyContext.Provider value={data}>{props.children}</MyContext.Provider>;
};

export { ContextProvider };
