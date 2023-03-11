import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";
import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobs";
import { logoutUser } from "../user/userSlice";
import { clearValues } from "./sendSlice";

// CREATE JOB
export const createJobThunk = async (job, thunkAPI) => {
  try {
    const resp = await customFetch.post("/jobs", job);
    thunkAPI.dispatch(clearValues());
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

//   DELETE JOB
export const deleteJobThunk = async (jobId, thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  try {
    const resp = await customFetch.delete(`/jobs/${jobId}`);
    thunkAPI.dispatch(getAllJobs());
    return resp.data.msg;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

//   EDIT JOB
export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
  try {
    const resp = await customFetch.patch(`/jobs/${jobId}`, job);
    thunkAPI.dispatch(clearValues());
    return resp.data.msg;
  } catch (error) {
    console.log(error);
    if (error.response.status === 401) {
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

//   GET USER
export const getUserThunk = async (userId, thunkAPI) => {
  try {
    const resp = await customFetch.post(`/get-user/:${userId}`, { userId });
    thunkAPI.dispatch(clearValues());
    return resp.data;
  } catch (error) {
    console.log(error);
    if (error.response.status === 401) {
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

// CREATE TRANSACTION
export const createTransactionThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetch.put(`/transactions/new`, { data });
    thunkAPI.dispatch(clearValues());
    const load = {
      mode: "success",
      message: resp.data.message,
      data: resp.data.user,
    };

    return load;
  } catch (error) {
    console.log(error);
    if (error.response.status === 400) {
      const load = { mode: "error", message: error.response.data.error };
      return load;
    }
    if (error.response.status === 401) {
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
