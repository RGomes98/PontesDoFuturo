import { useEffect, useRef } from 'react';

type UseScrollTransition = {
  transitionClassName: string;
  isTransitionResetActive: boolean;
  childElementsTags: (keyof HTMLElementTagNameMap)[];
};

const observerOptions: IntersectionObserverInit = {
  root: null,
  threshold: 1,
  rootMargin: '0px',
};

export const useScrollTransition = <P extends HTMLElement>({
  childElementsTags,
  transitionClassName,
  isTransitionResetActive,
}: UseScrollTransition) => {
  const parentElementRef = useRef<P>(null);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((element) =>
        element.isIntersecting
          ? element.target.classList.add(transitionClassName)
          : isTransitionResetActive && element.target.classList.remove(transitionClassName)
      );
    };

    const intersectionObserver = new IntersectionObserver(observerCallback, observerOptions);
    if (!parentElementRef.current) return;
    const parentRef = parentElementRef.current;

    const parentChildrens = childElementsTags.reduce<Element[]>((array, childElementTag) => {
      array.push(...Array.from(parentRef.getElementsByTagName(childElementTag)));
      return array;
    }, []);

    parentChildrens.forEach((element) => intersectionObserver.observe(element));
    return () => parentChildrens.forEach((element) => intersectionObserver.unobserve(element));
  }, [transitionClassName, childElementsTags, isTransitionResetActive]);

  return { parentElementRef };
};
