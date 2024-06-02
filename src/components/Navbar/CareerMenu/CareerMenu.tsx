import { groupCareersByCategory } from '@/utils/groupCareersByCategory';
import { generateCareerURLSlug } from '@/utils/generateCareerURLSlug';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { Link } from '@tanstack/react-router';
import { careers } from '@/data/careers';
import { useStore } from '@/lib/store';
import { useState } from 'react';

import styles from './CareerMenu.module.scss';

export const CareerMenu = () => {
  const [isCareerMenuActive, setIsCareerMenuActive] = useState(false);
  const groupedCareers = groupCareersByCategory(careers);
  const { setIsMobileMenuActive } = useStore();

  const { innerRef, triggerRef } = useOutsideClick<HTMLDivElement, HTMLButtonElement>(() =>
    setIsCareerMenuActive(false)
  );

  function careerMenuToggleHandler() {
    setIsCareerMenuActive((current) => !current);
  }

  function handleCloseMobileMenu() {
    setIsMobileMenuActive(false);
    setIsCareerMenuActive(false);
  }

  return (
    <li className={styles.navigationItem}>
      <button
        data-menu-active={isCareerMenuActive}
        onClick={careerMenuToggleHandler}
        className={styles.button}
        ref={triggerRef}
      >
        Explorar Áreas
      </button>
      {isCareerMenuActive && (
        <div className={styles.menuWrapper} ref={innerRef}>
          {Object.keys(groupedCareers).map((category, index) => {
            return (
              <ul className={styles.careerList} key={index}>
                <span className={styles.category}>{category}</span>
                {groupedCareers[category].map((career) => {
                  return (
                    <li className={styles.careerItem} key={career}>
                      <Link
                        resetScroll
                        className={styles.link}
                        onClick={handleCloseMobileMenu}
                        to={`/curso/${generateCareerURLSlug(career)}`}
                      >
                        {career}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
      )}
    </li>
  );
};
