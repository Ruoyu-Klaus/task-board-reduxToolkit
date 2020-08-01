import { createSlice } from '@reduxjs/toolkit';

const cohortSlice = createSlice({
  name: 'cohort',
  initialState: { cohorts: null, loading: false, error: null },
  reducers: {},
});

export const {} = cohortSlice.actions;

export default cohortSlice.reducer;
