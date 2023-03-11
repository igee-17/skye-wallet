import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllUsersThunk } from "./makePaymentThunk";

const initialFiltersState = {
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};
const initialState = {
  isLoading: false,
  users: [],
  numOfPages: 1,
};

// GET ALL USERS
export const getAllUsers = createAsyncThunk(
  "allUsers/getAllUsers",
  getAllUsersThunk
);

const makePaymentSlice = createSlice({
  name: "allJobs",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    handleChange: (state, { payload: { name, value } }) => {
      state.page = 1;
      state[name] = value;
    },
    clearFilters: (state) => {
      return { ...state, ...initialFiltersState };
    },
    changePage: (state, { payload }) => {
      state.page = payload;
    },
    clearAllJobsState: (state) => initialState,
    updateUsers: (state, { payload }) => {
      state.users = payload;
    },
  },
  extraReducers: {
    [getAllUsers.pending]: (state) => {
      state.isLoading = true;
    },

    [getAllUsers.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.users = payload;
    },

    [getAllUsers.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const {
  showLoading,
  hideLoading,
  handleChange,
  clearFilters,
  changePage,
  clearAllJobsState,
  updateUsers,
} = makePaymentSlice.actions;

export default makePaymentSlice.reducer;
