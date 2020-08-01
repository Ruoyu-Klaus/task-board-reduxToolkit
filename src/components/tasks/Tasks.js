import React, { useEffect } from 'react';
import TaskItem from './TaskItem';
import Preloader from '../layout/Preloader';

import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from '../../features/task/taskSlice';

function Tasks() {
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector(state => state.task);
  useEffect(() => {
    dispatch(fetchTasks());
    // eslint-disable-next-line
  }, []);

  if (loading || tasks === null) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header z-depth-2'>
      <li className='collection-header'>
        <h4 className='center'>Task Board</h4>
      </li>
      {!loading && tasks.length === 0 ? (
        <p className='center'>Looks good! No tasks so far.</p>
      ) : (
        tasks.map(task => <TaskItem task={task} key={task.id} />)
      )}
    </ul>
  );
}

export default Tasks;
