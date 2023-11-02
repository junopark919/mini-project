import { useState, useEffect } from 'react';

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState; // must be a single value
  }); // needs to be a pure function, not receive any arguments

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value)); // watched data is already updated here
    },
    [value, key]
  );

  return [value, setValue];
}
