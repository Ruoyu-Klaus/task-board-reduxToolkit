import React, { useEffect } from 'react';
import CohortItem from './CohortItem';

import { useSelector, useDispatch } from 'react-redux';
import { fetchCohorts } from '../../features/cohort/cohortSlice';

function CohortListModal() {
  const { cohorts, loading } = useSelector(state => state.cohort);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCohorts());
    // eslint-disable-next-line
  }, []);

  return (
    <div id='cohort-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Cohorts List</h4>
        <ul className='collection striped'>
          {!loading &&
            cohorts !== null &&
            cohorts.map(cohort => <CohortItem cohort={cohort} key={cohort.id} />)}
        </ul>
      </div>
    </div>
  );
}

export default CohortListModal;
