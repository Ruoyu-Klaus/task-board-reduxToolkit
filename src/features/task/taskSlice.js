import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: null,
    current: null,
    loading: false,
    error: null,
  },
  reducers: {
    showTasks(state, action) {
      state.tasks = action.payload;
      state.loading = false;
    },
    newTask(state, action) {
      state.tasks.push(action.payload);
      state.loading = false;
    },
    deleteTask(state, action) {
      state.loading = false;
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    updateTask(state, action) {
      state.loading = false;
      state.tasks = state.tasks.map(task =>
        task.id === action.payload.id ? action.payload : task
      );
    },
    searchTasks(state, action) {
      state.loading = false;
      state.tasks = action.payload;
    },
    setCurrent(state, action) {
      state.current = action.payload;
    },
    clearCurrent(state, action) {
      state.current = null;
    },
    setLoading(state, action) {
      state.loading = true;
    },
    taskError(state, action) {
      state.error = action.payload;
    },
  },
});

export const {
  showTasks,
  setLoading,
  taskError,
  newTask,
  deleteTask,
  updateTask,
  setCurrent,
  clearCurrent,
  searchTasks,
} = taskSlice.actions;

export default taskSlice.reducer;

export const fetchTasks = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/tasks');
    const data = await res.json();
    dispatch(showTasks(data));
  } catch (error) {
    dispatch(taskError(error));
  }
};

export const fetchAddTask = task => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/tasks', {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'content-type': 'application/json',
      },
    });
    const data = await res.json();
    dispatch(newTask(data));
  } catch (error) {
    dispatch(taskError(error));
  }
};

export const fetchDeleteTask = id => async dispatch => {
  try {
    setLoading();
    await fetch(`/tasks/${id}`, {
      method: 'DELETE',
    });
    dispatch(deleteTask(id));
  } catch (error) {
    dispatch(taskError(error));
  }
};

export const fetchUpdateTask = task => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/tasks/${task.id}`, {
      method: 'PUT',
      body: JSON.stringify(task),
      headers: {
        'content-type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch(updateTask(data));
  } catch (error) {
    dispatch(taskError(error));
  }
};

export const fetchSearchTasks = text => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/tasks?q=${text}`);
    const data = await res.json();
    dispatch(searchTasks(data));
  } catch (error) {
    dispatch(taskError(error));
  }
};
