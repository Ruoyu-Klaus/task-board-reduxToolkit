import { combineReducers } from '@reduxjs/toolkit';
import taskReducer from '../features/task/taskSlice';
import cohortReducer from '../features/cohort/cohortSlice';

export default combineReducers({
  task: taskReducer,
  cohort: cohortReducer,
});
