import React from "react";
import ReactDOM from "react-dom";

const NumberContext = React.createContext();
function MyContext() {
  return (
    <NumberContext.Provider value={0}>
      <div>
        <Display />
      </div>
    </NumberContext.Provider>
  );
}
function Display() {
  return (
    <NumberContext.Consumer>
      {value => <div>The answer to the question is {value}.</div>}
    </NumberContext.Consumer>
  );
}
export default MyContext;