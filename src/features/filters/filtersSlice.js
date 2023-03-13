import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortTitle: '',
  filterTitle: '',
  searchTitle: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    sorData: (state, action) => {
      state.sortTitle = action.payload;
    },
    filterData: (state, action) => {
      state.sortTitle = action.payload;
    },
    searchData: (state, action) => {
      state.sortTitle = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const { filterData, searchData, sorData } = filtersSlice.actions;