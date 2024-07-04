import { Dispatch, SetStateAction, useEffect, useState } from "react";

type PersistedState<T> = [T, Dispatch<SetStateAction<T>>];

const usePersistedState = <T>(
  key: string,
  defaultValue: T,
  serialize?: (value: T) => string,
  deserialize?: (value: string) => T,
): PersistedState<T> => {
  const [value, setValue] = useState<T>(defaultValue);

  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      setValue(
        deserialize ? deserialize(storedValue) : JSON.parse(storedValue),
      );
    }
  }, [deserialize, key]);

  useEffect(() => {
    if (value != defaultValue) {
      window.localStorage.setItem(
        key,
        serialize ? serialize(value) : JSON.stringify(value),
      );
    }
  }, [defaultValue, key, serialize, value]);

  return [value, setValue];
};

export { usePersistedState };
