import type { CareersDetails } from '@/data/careers';

export const groupCareersByCategory = (careers: CareersDetails) => {
  return Object.keys(careers).reduce<Record<string, string[]>>((groupedCareers, careerKey) => {
    const categoryName = String(careers[careerKey].category);
    const careerName = String(careers[careerKey].name);

    if (!groupedCareers[categoryName]) groupedCareers[categoryName] = [];
    groupedCareers[categoryName].push(careerName);
    return groupedCareers;
  }, {});
};
