import type { CareerURLSlug } from '@/utils/generateCareerURLSlug';
import { redirect } from 'next/navigation';
import { careers } from '@/data/careers';

export const CareerPage = ({ slug }: { slug: CareerURLSlug }) => {
  const career = careers[slug];
  if (!career) redirect('/');
  return <div>{career}</div>;
};
