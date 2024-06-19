/* eslint-disable */
// @ts-nocheck

import { useLocation } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';

const options: IntersectionObserverInit = {
  root: null,
  threshold: 0.6,
  rootMargin: '0px',
};

function assertLiElement(element: Element): element is HTMLLIElement {
  return element instanceof HTMLLIElement;
}

export const useCarousel = () => {
  const [carouselSlides, setCarouselSlides] = useState<HTMLLIElement[]>([]);
  const [isControlOnCooldown, setIsControlOnCooldown] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const carouselRef = useRef<HTMLUListElement>(null);
  const { pathname } = useLocation();

  function carouselControls(direction: 'previous' | 'next') {
    const CAROUSEL_CONTROL_COOLDOWN = 500;
    if (isControlOnCooldown) return;
    setIsControlOnCooldown(true);

    setCurrentSlideIndex((currentSlide) => {
      const previous = carouselSlides[currentSlide].previousElementSibling;
      const next = carouselSlides[currentSlide].nextElementSibling;

      const previousSlide =
        previous && previous && assertLiElement(previous) ? carouselSlides.indexOf(previous) : currentSlide;
      const nextSlide = next && next && assertLiElement(next) ? carouselSlides.indexOf(next) : currentSlide;
      const index = direction === 'previous' ? previousSlide : nextSlide;

      scrollToSlide(index);
      return index;
    });

    setTimeout(() => setIsControlOnCooldown(false), CAROUSEL_CONTROL_COOLDOWN);
  }

  function scrollToSlide(index: number) {
    carouselSlides[index].scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
  }

  useEffect(() => {
    (function resetCarouselSlides() {
      const carousel = carouselRef.current;
      if (!carousel) return;

      setCurrentSlideIndex(0);
      carousel.scrollTo({ left: 0 });
      setCarouselSlides(Array.from(carousel.getElementsByTagName('li')));
    })();
  }, [pathname]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(callback, options);

    function callback(entries: IntersectionObserverEntry[]) {
      entries.forEach((slide) => {
        slide.isIntersecting &&
          assertLiElement(slide.target) &&
          setCurrentSlideIndex(carouselSlides.indexOf(slide.target));
      });
    }

    carouselSlides.forEach((slide) => intersectionObserver.observe(slide));
    return () => carouselSlides.forEach((slide) => intersectionObserver.unobserve(slide));
  }, [carouselSlides]);

  return { carouselRef, currentSlideIndex, scrollToSlide, carouselControls };
};
