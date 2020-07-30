import React from "react";
function Button({ handleClick, children }) {
  console.log("render button " + children);
  return <button className="btn btn-info btn-sm" onClick={handleClick}>{children}</button>;
}
export default React.memo(Button);
