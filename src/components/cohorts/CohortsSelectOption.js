import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getCohorts } from '../../actions/cohortAction';

function CohortsSelectOption({ cohorts: { cohorts, loading }, getCohorts }) {
  useEffect(() => {
    getCohorts();
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

CohortsSelectOption.prototype = {
  cohort: PropTypes.object.isRequired,
  getCohorts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cohorts: state.cohort,
});

export default connect(mapStateToProps, { getCohorts })(CohortsSelectOption);
