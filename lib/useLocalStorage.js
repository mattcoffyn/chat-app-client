import { useEffect, useState } from 'react';

const PREFIX = 'app-chat-';

export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    if (typeof window !== 'undefined') {
      const jsonValue = window.localStorage.getItem(prefixedKey);
      if (jsonValue != null) return JSON.parse(jsonValue);
      if (typeof initialValue === 'function') {
        return initialValue();
      }
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}
