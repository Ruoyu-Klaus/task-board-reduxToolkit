import {
  GET_COHORTS,
  ADD_COHORT,
  DELETE_COHORT,
  COHORTS_ERROR,
  SET_LOADING,
} from '../actions/types';

const initState = {
  cohorts: null,
  loading: false,
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_COHORTS:
      return { ...state, cohorts: action.payload, loading: false };
    case COHORTS_ERROR:
      return { ...state, error: action.payload };
    case ADD_COHORT:
      return {
        ...state,
        cohorts: [...state.cohorts, action.payload],
        loading: false,
      };
    case DELETE_COHORT:
      return {
        ...state,
        cohorts: state.cohorts.filter(cohort => cohort.id !== action.payload),
        loading: false,
      };
    case SET_LOADING:
      return { ...state, loading: true };

    default:
      return state;
  }
};
