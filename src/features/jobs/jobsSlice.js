import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addJobToDB, getJobs, deleteJobFromDB } from "./jobsAPI";

const initialState = {
  isLoading: false,
  isError: false,
  jobs: [],
  error: '',
};

// async thunk
export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  const jobs = await getJobs();
  return jobs;
});

export const addAJob = createAsyncThunk('jobs/addAJob', async (jobData) => {
  const job = await addJobToDB(jobData);
  return job;
});

export const removeAJob = createAsyncThunk('jobs/removeAJob', async (id) => {
  const job = await deleteJobFromDB(id);
  return job;
});

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
        state.jobs = [];
      })

      // delete
      .addCase(removeAJob.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.error = '';
      })
      .addCase(removeAJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.jobs = state.jobs.filter((job) => job.id !== action.meta.arg);
        state.error = '';
      })
      .addCase(removeAJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.jobs = [];
      })
  }
});

export default jobsSlice.reducer;
// export const { addJob, deleteJob, formEditActive, formEditInactive } = jobsSlice.actions;