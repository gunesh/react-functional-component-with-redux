import React, { useState, useCallback } from "react";
import Count from "./Count";
import Button from "./Button";
import Title from "./Title";

function Others() {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);

  const incAge = useCallback(() => {
    setAge(age++);
  }, [age]);
  const incSalary = useCallback(() => {
    setSalary(salary++);
  }, [salary]);
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incAge}>Increase age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incSalary}>Increase Salary</Button>
    </div>
  );
}

export default Others;
