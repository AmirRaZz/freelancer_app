import { useEffect, useRef } from "react";

export default function useOutsideClick(
  callback: () => void,
  capturing = true
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };
    document.addEventListener("click", handleClickOutside, capturing);
    return () => {
      document.removeEventListener("click", handleClickOutside, capturing);
    };
  }, [ref, callback, capturing]);
  return ref;
}
