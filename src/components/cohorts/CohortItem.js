import React from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

import { connect } from 'react-redux';
import { deleteCohort } from '../../actions/cohortAction';

function CohortItem({ cohort, deleteCohort }) {
  const onDelete = () => {
    deleteCohort(cohort.id);
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
  deleteCohort: PropTypes.func.isRequired,
};

export default connect(null, { deleteCohort })(CohortItem);
