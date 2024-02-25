import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  incomes: [],
  isLoading: false,
  error: "",
  filter: {
    sortBy: "",
    category: "",
  },
};

const API = "https://trackpense-expense-tracker-app.vercel.app/api/v1/";

export const fetchIncomes = createAsyncThunk("fetchIncomes", async () => {
  const res = await axios.get(`${API}incomes`);
  return res.data;
});

export const addNewIncome = createAsyncThunk(
  "addNewIncome",
  async (incomeData) => {
    const res = await axios.post(`${API}incomes`, incomeData);
    return res.data;
  }
);

const incomeSlice = createSlice({
  name: "income",
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
    builder.addCase(fetchIncomes.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchIncomes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.incomes = action.payload.incomes;
    });
    builder.addCase(fetchIncomes.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    });
    builder.addCase(addNewIncome.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addNewIncome.fulfilled, (state, action) => {
      state.isLoading = false;
      state.incomes = [...state.incomes, action.payload.income];
    });
    builder.addCase(addNewIncome.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    });
  },
});

const incomeReducer = incomeSlice.reducer;
export const { handleSort, handleFilter } = incomeSlice.actions;
export default incomeReducer;
