import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getUserLocalStorage,
  setUserLocalStorage,
} from "../../utils/localstorage";
import {
  createJobThunk,
  createTransactionThunk,
  deleteJobThunk,
  editJobThunk,
  getUserThunk,
} from "./sendThunk";

let user = getUserLocalStorage();

const initialState = {
  isLoading: false,
  user,
  recipientUser: [],
  receiverId: "",
  receiverIds: [],
  jobType: "full-time",
  senderId: user?.paymentIds[0],
  senderIds: user?.paymentIds,
  isEditing: false,
  editJobId: "",
  amount: "",
  balance: user?.balance,
};

// export const editJob = createAsyncThunk("job/editJob", editJobThunk);

export const getUser = createAsyncThunk("send/getUser", getUserThunk);

export const createTransaction = createAsyncThunk(
  "send/createTransaction",
  createTransactionThunk
);

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearValues: () => {
      return {
        ...initialState,
        jobLocation: getUserLocalStorage()?.location || "",
      };
    },
    setEditJob: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
  },

  extraReducers: {
    // GET USER
    [getUser.pending]: (state) => {
      state.isLoading = true;
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      console.log(payload, "got the user");
      state.recipientUser = payload;
      state.receiverIds = payload.paymentIds;
      // toast.success("recipient id filled");
    },
    [getUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    // CREATE TRANSACTION
    [createTransaction.pending]: (state) => {
      state.isLoading = true;
    },
    [createTransaction.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      const { mode, message, data } = payload;
      console.log(payload);
      // state.recipientUser = payload;
      // state.receiverIds = payload.paymentIds;
      if (mode === "error") {
        toast.error(message);
        return;
      }
      state.balance = data.balance;
      setUserLocalStorage(data);

      toast.success(message);
    },
    [createTransaction.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const { handleChange, clearValues, setEditJob } = jobSlice.actions;

export default jobSlice.reducer;
