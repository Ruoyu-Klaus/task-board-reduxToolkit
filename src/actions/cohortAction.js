import {
  GET_COHORTS,
  ADD_COHORT,
  DELETE_COHORT,
  COHORTS_ERROR,
  SET_LOADING,
} from './types';

// Set loading to true
export const setLoading = () => {
  return { type: SET_LOADING };
};

// get cohorts from DB
export const getCohorts = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/cohorts');
    const data = await res.json();

    dispatch({
      type: GET_COHORTS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COHORTS_ERROR,
      payload: error,
    });
  }
};

// add new cohort to DB
export const addCohorts = cohort => async dispatch => {
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

    dispatch({
      type: ADD_COHORT,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COHORTS_ERROR,
      payload: error,
    });
  }
};

// delete cohort from DB
export const deleteCohort = id => async dispatch => {
  try {
    setLoading();
    await fetch(`/cohorts/${id}`, {
      method: 'DELETE',
    });
    dispatch({
      type: DELETE_COHORT,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: COHORTS_ERROR,
      payload: error,
    });
  }
};
