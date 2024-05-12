import type { CareerURLSlug } from '@/utils/generateCareerURLSlug';
import { Career } from '@/routes/Career';

export default function Page({ params: { slug } }: { params: { slug: CareerURLSlug } }) {
  return <Career slug={slug} />;
}
