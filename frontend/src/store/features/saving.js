import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  savings: [],
  isLoading: false,
  error: "",
  filter: {
    sortBy: "",
    category: "",
  },
};
const API = "http://localhost:5000/api/v1/savings";

export const fetchSaving = createAsyncThunk("fetchSaving", async () => {
  const res = await axios.get(API);
  return res.data;
});

export const addNewSaving = createAsyncThunk(
  "addNewSaving",
  async (savingData) => {
    const res = await axios.post(API, savingData);
    return res.data;
  }
);

const savingSlice = createSlice({
  name: "saving",
  initialState,
  reducers: {
    handleSort: (state, action) => {
      state.filter.sortBy = action.payload;
    },
    handleFilter: (state, action) => {
      state.filter.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSaving.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSaving.fulfilled, (state, action) => {
      state.isLoading = false;
      state.savings = action.payload.savings;
    });
    builder.addCase(fetchSaving.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    });
    builder.addCase(addNewSaving.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addNewSaving.fulfilled, (state, action) => {
      state.isLoading = false;
      state.savings = action.payload.savings;
    });
    builder.addCase(addNewSaving.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    });
  },
});
export const { handleSort, handleFilter } = savingSlice.actions;

export const savingReducer = savingSlice.reducer;
