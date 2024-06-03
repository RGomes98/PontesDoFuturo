import { useEffect, useRef } from 'react';

type UseElementTransition = {
  transitionDelay: number;
  isTransitioningToVisible: boolean;
};

export const useElementTransition = <E extends HTMLElement>({
  transitionDelay,
  isTransitioningToVisible,
}: UseElementTransition) => {
  const elementRef = useRef<E>(null);

  useEffect(() => {
    let timeoutReference: NodeJS.Timeout;

    function handleTransitionDelay(callback: () => void, ms: number) {
      const timeout = setTimeout(() => callback(), ms);
      timeoutReference = timeout;
    }

    if (!elementRef.current) return;
    const overlay = elementRef.current;

    if (isTransitioningToVisible) {
      overlay.style.display = 'initial';
      handleTransitionDelay(() => (overlay.style.opacity = '1'), 0);
    } else {
      overlay.style.opacity = '0';
      handleTransitionDelay(() => (overlay.style.display = 'none'), transitionDelay);
    }

    return () => clearTimeout(timeoutReference);
  }, [transitionDelay, isTransitioningToVisible]);

  return { elementRef };
};
