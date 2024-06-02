import { createFileRoute, Navigate } from '@tanstack/react-router';
import { Career } from '@/components/Career/Career';
import { careers } from '@/data/careers';

export const Route = createFileRoute('/curso/$slug')({ component: CareerPage });

function CareerPage() {
  const { slug } = Route.useParams();
  const career = careers[slug];

  if (!career) Navigate({ to: '/', replace: true });
  return <Career career={career} />;
}
