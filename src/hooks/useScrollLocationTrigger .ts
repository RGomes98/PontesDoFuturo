import { useState, useEffect } from 'react';

export const useScrollLocationTrigger = (triggerThreshold: number) => {
  const [isTriggerActivated, setIsTriggerActivated] = useState(false);

  useEffect(() => {
    function handleScrollEvent() {
      const currentScrollPosition = window.scrollY;
      setIsTriggerActivated(currentScrollPosition >= triggerThreshold);
    }

    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, [triggerThreshold]);

  return { isTriggerActivated };
};
