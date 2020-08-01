import React, { useEffect } from 'react';
import CohortItem from './CohortItem';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getCohorts } from '../../actions/cohortAction';

function CohortListModal({ cohorts: { cohorts, loading }, getCohorts }) {
  useEffect(() => {
    getCohorts();
    // eslint-disable-next-line
  }, []);

  return (
    <div id='cohort-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Cohorts List</h4>
        <ul className='collection striped'>
          {!loading &&
            cohorts !== null &&
            cohorts.map(cohort => (
              <CohortItem cohort={cohort} key={cohort.id} />
            ))}
        </ul>
      </div>
    </div>
  );
}
CohortListModal.prototype = {
  cohort: PropTypes.object.isRequired,
  getCohorts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cohorts: state.cohort,
});

export default connect(mapStateToProps, { getCohorts })(CohortListModal);
