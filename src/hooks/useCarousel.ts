import { useEffect, useRef, useState } from 'react';

const options: IntersectionObserverInit = {
  root: null,
  threshold: 0.6,
  rootMargin: '0px',
};

export const useCarousel = <C extends HTMLUListElement>() => {
  const [isControlOnCooldown, setIsControlOnCooldown] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const carouselRef = useRef<C>(null);

  function getCarouselSlides() {
    const carousel = carouselRef.current;
    return carousel ? Array.from<Element>(carousel.getElementsByTagName('li')) : [];
  }

  function carouselControls(direction: 'previous' | 'next') {
    const CAROUSEL_CONTROL_COOLDOWN = 500;
    if (isControlOnCooldown) return;
    setIsControlOnCooldown(true);

    setCurrentSlideIndex((currentSlide) => {
      const slides = getCarouselSlides();

      const previous = slides[currentSlide].previousElementSibling;
      const next = slides[currentSlide].nextElementSibling;

      const previousSlide = previous ? slides.indexOf(previous) : currentSlide;
      const nextSlide = next ? slides.indexOf(next) : currentSlide;
      const index = direction === 'previous' ? previousSlide : nextSlide;

      scrollToSlide(index);
      return index;
    });

    setTimeout(() => setIsControlOnCooldown(false), CAROUSEL_CONTROL_COOLDOWN);
  }

  function scrollToSlide(index: number) {
    getCarouselSlides()[index].scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
  }

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((slide) => {
        slide.isIntersecting && setCurrentSlideIndex(getCarouselSlides().indexOf(slide.target));
      });
    };

    const intersectionObserver = new IntersectionObserver(callback, options);
    const carouselSlides = getCarouselSlides();

    carouselSlides.forEach((slide) => intersectionObserver.observe(slide));
    return () => carouselSlides.forEach((slide) => intersectionObserver.unobserve(slide));
  }, []);

  return { carouselRef, currentSlideIndex, scrollToSlide, carouselControls };
};
