import React, { useState, useEffect } from "react";
import useMyHook from "./useMyHook";

export default function ApiTest() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then(response => response.json())
      .then(list => setList(list.data));
  }, []);

  return (
    <div>
      <ul>
        {list.map(el => (
          <li key={el.id}>{el.email}</li>
        ))}
      </ul>
    </div>
  );
}
