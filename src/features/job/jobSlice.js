import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJob } from "./jobAPI";

const initialState = {
  isLoading: false,
  isError: false,
  job: {},
  error: '',
};

// fetch all jobs
export const fetchJob = createAsyncThunk('jobs/fetchJob', async (id) => {
  const job = await getJob(id);
  return job;
});

// create slice
const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    emptyJob: (state) => {
      state.job = {};
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJob.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = '';
      })
      .addCase(fetchJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.job = action.payload;
        state.error = '';
      })
      .addCase(fetchJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.job = {};
      })
  }
});

export default jobSlice.reducer;
export const { emptyJob } = jobSlice.actions;