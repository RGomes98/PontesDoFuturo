import { MainSection } from '../Home/MainSection/MainSection';
import { CareersDetails } from '@/data/careers';
import { Fragment } from 'react/jsx-runtime';

export const Career = ({ career }: { career: CareersDetails[string] }) => {
  return (
    <Fragment>
      <MainSection />
      <h1>{JSON.stringify(career)}</h1>
    </Fragment>
  );
};
