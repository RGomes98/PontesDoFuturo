import { useEffect } from 'react';

type UseScrollTransition<T> = {
  activeClassName: string;
  parentElementRef: T | null;
  childrenElementsTag: keyof HTMLElementTagNameMap;
};

const observerOptions: IntersectionObserverInit = {
  root: null,
  threshold: 1,
  rootMargin: '0px',
};

export const useScrollTransition = <T extends HTMLElement>({
  activeClassName,
  parentElementRef,
  childrenElementsTag,
}: UseScrollTransition<T>) => {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((element) =>
        element.isIntersecting
          ? element.target.classList.add(activeClassName)
          : element.target.classList.remove(activeClassName)
      );
    };

    const intersectionObserver = new IntersectionObserver(observerCallback, observerOptions);

    if (!parentElementRef) return;
    const parentChildrens = Array.from(parentElementRef.getElementsByTagName(childrenElementsTag));

    parentChildrens.forEach((element) => intersectionObserver.observe(element));
    return () => parentChildrens.forEach((element) => intersectionObserver.unobserve(element));
  }, [activeClassName, parentElementRef, childrenElementsTag]);
};
