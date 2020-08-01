import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import CohortsSelectOption from '../cohorts/CohortsSelectOption';

import { useDispatch } from 'react-redux';
import { fetchAddTask } from '../../features/task/taskSlice';

function AddTaskModal() {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [cohort, setCohort] = useState('');
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (message === '' || cohort === '') {
      M.toast({ html: 'Please enter a message and cohort' });
    } else {
      const newTask = {
        message,
        attention,
        cohort,
        date: new Date(),
      };
      dispatch(fetchAddTask(newTask));
      M.toast({ html: `Task add by ${cohort}` });
      // clear fileds
      setMessage('');
      setAttention(false);
      setCohort('');
    }
  };

  return (
    <div id='add-task-modal' className='modal' style={modelStyle}>
      <div className='modal-content'>
        <h4>Enter New Task</h4>
        <br />
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              autoComplete='off'
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Task Name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              className='browser-default'
              name='tech'
              value={cohort}
              onChange={e => setCohort(e.target.value)}
            >
              <option value='' disabled>
                Select Cohort
              </option>
              <CohortsSelectOption />
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a href='#!' className='modal-close waves-effect waves-light btn' onClick={onSubmit}>
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

export default AddTaskModal;
