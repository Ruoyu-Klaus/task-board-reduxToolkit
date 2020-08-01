import React from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

import { useDispatch } from 'react-redux';
import { fetchDeleteCohort } from '../../features/cohort/cohortSlice';

function CohortItem({ cohort }) {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(fetchDeleteCohort(cohort.id));
    M.toast({ html: `Cohort Deleted` });
  };
  return (
    <li className='collection-item'>
      <div>
        {cohort.firstName} {cohort.lastName}
        <a href='#!' onClick={onDelete} className='secondary-content'>
          <i className='material-icons'>delete</i>
        </a>
      </div>
    </li>
  );
}
CohortItem.prototype = {
  cohort: PropTypes.object.isRequired,
};

export default CohortItem;
