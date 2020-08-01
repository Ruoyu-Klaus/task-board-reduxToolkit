import React, { useRef } from 'react';

import { useDispatch } from 'react-redux';
import { fetchSearchTasks } from '../../features/task/taskSlice';

function SearchBar() {
  const dispatch = useDispatch();
  const text = useRef('');

  const onChange = e => {
    dispatch(fetchSearchTasks(text.current.value));
  };

  return (
    <nav style={{ marginBottm: '30px' }} className='teal lighten-2 z-depth-2'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              placeholder='Search tasks'
              ref={text}
              onChange={onChange}
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
}

export default SearchBar;
