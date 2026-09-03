import { useRef } from "react";
export function Debounce() {
  const timeoutId = useRef("");

  const delay = (onSearch) => {
    const timeout = setTimeout(onSearch, 500);
    if (timeoutId.current) clearTimeout(timeoutId.current);
    timeoutId.current = timeout;
  };

  return { delay };
}
