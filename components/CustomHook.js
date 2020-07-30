import React, { useState, useEffect } from "react";
import useMyHook from "./useMyHook";

export default function ApiTest() {
  const list = useMyHook("https://reqres.in/api/users");
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
