import { EnrollGuide } from '@/components/Home/EnrollGuide';
import { About } from '@/components/Home/About';
import { Fragment } from 'react';

export const HomePage = () => {
  return (
    <Fragment>
      <About />
      <EnrollGuide />
    </Fragment>
  );
};
