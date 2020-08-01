import React, { useState } from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

import { connect } from 'react-redux';
import { addCohorts } from '../../actions/cohortAction';

function AddCohortModal({ addCohorts }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter a firstname and lastname' });
    } else {
      const newCohort = {
        firstName,
        lastName,
      };
      addCohorts(newCohort);
      M.toast({ html: `${firstName} ${lastName} has been added` });
      // clear fileds
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div id='add-cohort-modal' className='modal' style={modelStyle}>
      <div className='modal-content'>
        <h4>Enter New Cohort</h4>
        <br />
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              autoComplete='off'
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              autoComplete='off'
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          className='modal-close waves-effect waves-light btn'
          onClick={onSubmit}
        >
          Enter
        </a>
      </div>
    </div>
  );
}
const modelStyle = {
  width: '70%',
  height: '70%',
};

AddCohortModal.prototype = {
  addCohorts: PropTypes.func.isRequired,
};

export default connect(null, { addCohorts })(AddCohortModal);
