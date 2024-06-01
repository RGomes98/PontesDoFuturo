import { useEffect, useRef } from 'react';

export const useOutsideClick = <I extends HTMLElement, T extends HTMLElement>(
  callback: (event: MouseEvent) => void
) => {
  const callbackRef = useRef<(event: MouseEvent) => void>();
  const triggerRef = useRef<T>(null);
  const innerRef = useRef<I>(null);

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        innerRef.current &&
        triggerRef.current &&
        callbackRef.current &&
        event.target instanceof Node &&
        triggerRef.current !== event.target &&
        !innerRef.current.contains(event.target)
      )
        callbackRef.current(event);
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return { innerRef, triggerRef };
};
