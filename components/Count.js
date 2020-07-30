import React from "react";
function Count(props) {
  console.log('render count '+props.text);
  return <div>{props.text} : {props.count}</div>;
}
export default React.memo(Count);
