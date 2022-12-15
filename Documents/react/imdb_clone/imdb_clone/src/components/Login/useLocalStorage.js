import { useState, useEffect } from "react";

const useLocalStorage = (item, initValue) => {
  const [value, setVal] = useState(initValue);
  const setValue = (value) => {
    setVal(value);
    localStorage.setItem(item, value);
  };
  useEffect(() => {
    setVal(initValue);
    localStorage.setItem(item, initValue);
  }, [item, initValue]);

  return [value, setValue];
};

export default useLocalStorage;
