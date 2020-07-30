import { useState, useEffect } from "react";

export default function useMyHook(url) {
  const [data, setData] = useState([]);
  async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    setData(data.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return data;
}
