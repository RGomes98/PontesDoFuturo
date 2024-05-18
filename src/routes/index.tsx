import { CareerProfiler } from '@/components/CareerProfiler/CareerProfiler';
import { EnrollGuide } from '@/components/Home/EnrollGuide';
import { createFileRoute } from '@tanstack/react-router';
import { About } from '@/components/Home/About';
import { Fragment } from 'react';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <Fragment>
      <About />
      <CareerProfiler />
      <EnrollGuide />
    </Fragment>
  );
}
