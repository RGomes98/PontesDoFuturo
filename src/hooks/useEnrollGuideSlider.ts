import { enrollGuide } from '@/data/enrollGuide';
import { useState } from 'react';

export const useEnrollGuideSlider = () => {
  const [currentGuideIndex, setCurrentGuideIndex] = useState(0);

  function handleUpdateGuideIndex(action: number) {
    setCurrentGuideIndex((currentIndex) => {
      const incrementAction = currentIndex < enrollGuide.length - 1 ? currentIndex + action : 0;
      const decrementAction = currentIndex > 0 ? currentIndex + action : enrollGuide.length - 1;
      const isActionIncrementing = action > 0;
      return isActionIncrementing ? incrementAction : decrementAction;
    });
  }

  return {
    currentGuideIndex,
    enrollGuideContent: enrollGuide,
    enrollGuideCount: enrollGuide.length,
    setCurrentGuideIndex,
    handleUpdateGuideIndex,
  };
};
