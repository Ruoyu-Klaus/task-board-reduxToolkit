import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchCohorts } from '../../features/cohort/cohortSlice';

function CohortsSelectOption() {
  const { cohorts, loading } = useSelector(state => state.cohort);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCohorts());
    // eslint-disable-next-line
  }, []);
  return (
    !loading &&
    cohorts !== null &&
    cohorts.map(cohort => (
      <option key={cohort.id} value={`${cohort.firstName} ${cohort.lastName}`}>
        {cohort.firstName} {cohort.lastName}
      </option>
    ))
  );
}

export default CohortsSelectOption;
