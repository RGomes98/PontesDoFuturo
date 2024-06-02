import { useEffect, useRef } from 'react';
import { useStore } from '@/lib/store';

type UseMobileMenuOverlayTransition = {
  transitionDelay: number;
};

export const useMobileMenuOverlayTransition = <O extends HTMLElement>({
  transitionDelay,
}: UseMobileMenuOverlayTransition) => {
  const { isMobileMenuActive } = useStore();
  const overlayRef = useRef<O>(null);

  useEffect(() => {
    let timeoutReference: NodeJS.Timeout;

    function handleOverlayTransitionDelay(callback: () => void, ms: number) {
      const timeout = setTimeout(() => callback(), ms);
      timeoutReference = timeout;
    }

    if (!overlayRef.current) return;
    const overlay = overlayRef.current;

    if (!isMobileMenuActive) {
      overlay.style.opacity = '0';
      handleOverlayTransitionDelay(() => (overlay.style.display = 'none'), transitionDelay);
    } else {
      overlay.style.display = 'initial';
      handleOverlayTransitionDelay(() => (overlay.style.opacity = '1'), 0);
    }

    return () => clearTimeout(timeoutReference);
  }, [transitionDelay, isMobileMenuActive]);

  return { overlayRef };
};
