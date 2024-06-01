import { useState } from 'react';

import styles from './Tooltip.module.scss';

export const Tooltip = ({ content, children }: { content: string; children: React.ReactNode }) => {
  const [isTooltipActive, setIsTooltipActive] = useState(false);

  return (
    <div className={styles.container}>
      <div
        className={styles.trigger}
        onMouseEnter={() => setIsTooltipActive(true)}
        onMouseLeave={() => setIsTooltipActive(false)}
      >
        {children}
      </div>
      <div className={styles.tooltipContent} data-visible={isTooltipActive}>
        {content}
      </div>
    </div>
  );
};
