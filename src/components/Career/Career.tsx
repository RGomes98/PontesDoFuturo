import { CareerDetails } from './CareerDetails/CareerDetails';
import { MainSection } from '../Home/MainSection/MainSection';
import { CareerPaths } from './CareerPaths/CareerPaths';
import type { CareersDetails } from '@/data/careers';
import { Fragment } from 'react/jsx-runtime';

export const Career = ({ career }: { career: CareersDetails[string] }) => {
  return (
    <Fragment>
      <MainSection />
      <CareerDetails career={career} />
      <CareerPaths paths={career.paths} />
    </Fragment>
  );
};
