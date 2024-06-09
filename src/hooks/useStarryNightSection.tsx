import { useEffect, useRef } from 'react';

type DelayRange = { delayRangeEnd: number; delayRangeStart: number };

type ConditionalRandomValues<T> = T extends EmptyObject
  ? Omit<RandomValuesWithDelay, 'DELAY_IN_SECONDS'>
  : RandomValuesWithDelay;

type EmptyObject = Record<string, never>;

type UseStarryNightSection = {
  starsAmount: number;
  starClassName: string;
  starTwinkleClassName: string;
  shootingStarClassName: string;
  shootingStarMaximumInterval: number;
};

type RandomValuesWithDelay = {
  DELAY_IN_SECONDS: string;
  RANDOM_X_PERCENTAGE: string;
  RANDOM_Y_PERCENTAGE: string;
};

export const useStarryNightSection = ({
  starsAmount,
  starClassName,
  starTwinkleClassName,
  shootingStarClassName,
  shootingStarMaximumInterval,
}: UseStarryNightSection) => {
  const containerRef = useRef<HTMLElement>(null);

  function generateRandomValues<T extends DelayRange | EmptyObject>(obj: T): ConditionalRandomValues<T> {
    const DELAY_IN_SECONDS = `${(Math.random() * (obj.delayRangeEnd - obj.delayRangeStart) + obj.delayRangeStart).toFixed(2)}s`;
    const RANDOM_X_PERCENTAGE = `${Math.random() * 100}%`;
    const RANDOM_Y_PERCENTAGE = `${Math.random() * 100}%`;

    if (!Object.keys(obj).length) {
      return {
        RANDOM_X_PERCENTAGE,
        RANDOM_Y_PERCENTAGE,
      } as ConditionalRandomValues<T>;
    }

    return {
      DELAY_IN_SECONDS,
      RANDOM_X_PERCENTAGE,
      RANDOM_Y_PERCENTAGE,
    } as ConditionalRandomValues<T>;
  }

  useEffect(() => {
    if (!containerRef.current) return;
    const parentElement = containerRef.current;

    function createStar() {
      const { DELAY_IN_SECONDS, RANDOM_X_PERCENTAGE, RANDOM_Y_PERCENTAGE } = generateRandomValues({
        delayRangeStart: 0.5,
        delayRangeEnd: 2.0,
      });

      const star = document.createElement('div');
      star.className = starClassName;

      const starTwinkle = document.createElement('div');
      starTwinkle.className = starTwinkleClassName;

      starTwinkle.style.animationDelay = DELAY_IN_SECONDS;
      star.style.left = RANDOM_X_PERCENTAGE;
      star.style.top = RANDOM_Y_PERCENTAGE;

      parentElement.appendChild(star);
      star.appendChild(starTwinkle);
    }

    Array.from({ length: starsAmount }).forEach(() => createStar());
  }, [starsAmount, starClassName, starTwinkleClassName]);

  useEffect(() => {
    if (!containerRef.current) return;
    const parentElement = containerRef.current;

    let scheduleShootingStarTimeout: NodeJS.Timeout;
    let createShootingStarTimeout: NodeJS.Timeout;

    function createShootingStar() {
      const { RANDOM_X_PERCENTAGE, RANDOM_Y_PERCENTAGE } = generateRandomValues({});
      const SHOOTING_STAR_DURATION = 3000;

      const shootingStar = document.createElement('div');
      shootingStar.className = shootingStarClassName;

      shootingStar.style.left = RANDOM_X_PERCENTAGE;
      shootingStar.style.top = RANDOM_Y_PERCENTAGE;

      parentElement.appendChild(shootingStar);
      const timeout = setTimeout(() => parentElement.removeChild(shootingStar), SHOOTING_STAR_DURATION);

      createShootingStarTimeout = timeout;
    }

    (function scheduleShootingStarCreation() {
      const RANDOM_SHOOTING_STAR_INTERVAL = Math.random() * shootingStarMaximumInterval;

      const timeout = setTimeout(() => {
        createShootingStar();
        scheduleShootingStarCreation();
      }, RANDOM_SHOOTING_STAR_INTERVAL);

      scheduleShootingStarTimeout = timeout;
    })();

    return () => {
      clearTimeout(scheduleShootingStarTimeout);
      clearTimeout(createShootingStarTimeout);
    };
  }, [shootingStarClassName, shootingStarMaximumInterval]);

  return { containerRef };
};
