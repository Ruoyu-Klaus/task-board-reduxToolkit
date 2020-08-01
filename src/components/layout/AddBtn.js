import React from 'react';

function AddBtn() {
  return (
    <div className='fixed-action-btn'>
      <a
        href='#add-task-modal'
        className='modal-trigger btn-floating btn-large waves-effect waves-light teal lighten-1'
      >
        <i className='large material-icons'>add</i>
      </a>
      <ul>
        <li>
          <a
            href='#cohort-list-modal'
            className='btn-floating modal-trigger cyan lighten-1'
          >
            <i className='material-icons'>person</i>
          </a>
        </li>

        <li>
          <a
            href='#add-cohort-modal'
            className='btn-floating modal-trigger blue lighten-1'
          >
            <i className='material-icons'>person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default AddBtn;
