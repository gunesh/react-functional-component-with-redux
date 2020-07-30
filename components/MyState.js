import React, { useState, useMemo } from "react";
import Child from "./Child";
import Button from "./Button";

function MyState() {
  //Define State
  const [name, setName] = useState({ firstName: "John", surname: "Doe" });
  const [title, setTitle] = useState(1);
  const handleclick = () => {
    setName({
      firstName: "FName_" + Date.now(),
      surname: "LName_" + Date.now()
    });
  };
  const memoChild = useMemo(() => {
    return <Child />;
  }, [title]);
  return (
    <div>
      <Button handleClick={() => setTitle(title++)}>{title}</Button>&nbsp;&nbsp;
      <Button handleClick={handleclick}>MyObj</Button>&nbsp;&nbsp;
      <p>
        Full Name: {name.firstName} {name.surname}
      </p>
      <Child />
      {memoChild}
    </div>
  );
}
export default MyState;
