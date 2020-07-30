import React,{useEffect} from "react";

let count = 0;
function Child() {
  useEffect(()=>{
    count++;
  })
  return (
      <div>
      Count is : {count}
      </div>
  );
}

export default Child;