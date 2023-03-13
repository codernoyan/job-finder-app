import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJobs } from "./jobsAPI";

const initialState = {
  isLoading: false,
  isError: false,
  jobs: [],
  error: '',
  editing: {},
};

// async thunk
export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  const jobs = await getJobs();
  return jobs;
})

// create slice
const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.error = '';
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.jobs = action.payload;
        state.error = '';
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
  }
});

export default jobsSlice.reducer;