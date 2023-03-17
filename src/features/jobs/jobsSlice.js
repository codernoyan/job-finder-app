import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addJobToDB, getJobs, deleteJobFromDB, updateJobToDB } from "./jobsAPI";

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

// create a job
export const addAJob = createAsyncThunk('jobs/addAJob', async (jobData) => {
  const job = await addJobToDB(jobData);
  return job;
});

// update a job
export const updateAJob = createAsyncThunk('jobs/updateAJob', async ({ id, jobData }) => {
  const job = await updateJobToDB(id, jobData);
  return job;
});

// delete a job
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
      .addCase(fetchJobs.pending, (state) => {
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

      // add a job
      .addCase(addAJob.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = '';
      })
      .addCase(addAJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.jobs.push(action.payload);
      })
      .addCase(addAJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = action.error?.message;
      })

      // update a job
      .addCase(updateAJob.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = '';
      })
      .addCase(updateAJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        // update
        const indexToUpdate = state.jobs.findIndex((job) => job.id === action.payload.id);
        state.jobs[indexToUpdate] = action.payload;
      })
      .addCase(updateAJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = action.error?.message;
      })

      // delete
      .addCase(removeAJob.pending, (state) => {
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