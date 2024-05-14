import type { CareerURLSlug } from '@/utils/generateCareerURLSlug';
import { CareerPage } from '@/routes/CareerPage';

export default function Page({ params: { slug } }: { params: { slug: CareerURLSlug } }) {
  return <CareerPage slug={slug} />;
}
