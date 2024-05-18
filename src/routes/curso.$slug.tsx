import { createFileRoute, Navigate } from '@tanstack/react-router';
import { careers } from '@/data/careers';

export const Route = createFileRoute('/curso/$slug')({
  component: CareerPage,
});

function CareerPage() {
  const { slug } = Route.useParams();
  const career = careers[slug];

  if (!career) Navigate({ to: '/', replace: true });
  return <h1>{career}</h1>;
}
