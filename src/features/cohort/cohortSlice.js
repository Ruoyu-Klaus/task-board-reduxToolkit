import { createSlice } from '@reduxjs/toolkit';

const cohortSlice = createSlice({
  name: 'cohort',
  initialState: { cohorts: null, loading: false, error: null },
  reducers: {
    showCohort(state, action) {
      state.cohorts = action.payload;
      state.loading = false;
    },
    addCohort(state, action) {
      state.cohorts.push(action.payload);
      state.loading = false;
    },
    deleteCohort(state, action) {
      state.cohorts = state.cohorts.filter(cohort => cohort.id !== action.payload);
      state.loading = false;
    },
    setLoading(state, action) {
      state.loading = true;
    },
    cohortError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { showCohort, addCohort, deleteCohort, setLoading, cohortError } = cohortSlice.actions;

export default cohortSlice.reducer;

export const fetchCohorts = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/cohorts');
    const data = await res.json();
    dispatch(showCohort(data));
  } catch (error) {
    dispatch(cohortError(error));
  }
};

export const fetchAddCohorts = cohort => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/cohorts', {
      method: 'POST',
      body: JSON.stringify(cohort),
      headers: {
        'content-type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch(addCohort(data));
  } catch (error) {
    dispatch(cohortError(error));
  }
};

// delete cohort from DB
export const fetchDeleteCohort = id => async dispatch => {
  try {
    setLoading();
    await fetch(`/cohorts/${id}`, {
      method: 'DELETE',
    });
    dispatch(deleteCohort(id));
  } catch (error) {
    dispatch(cohortError(error));
  }
};
