import { useEffect, useState } from "react";

/**
 * Reusable debounce hook
 * @param value Any value to debounce
 * @param delay Delay in milliseconds
 */
export default function useDebounce<T>(value: T, delay = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
