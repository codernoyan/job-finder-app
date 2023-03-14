import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import jobsReducer from '../features/jobs/jobsSlice';
import jobReducer from '../features/job/jobSlice';
import filtersReducer from '../features/filters/filtersSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    jobs: jobsReducer,
    job: jobReducer,
    filters: filtersReducer,
  },
});
