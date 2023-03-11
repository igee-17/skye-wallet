import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getUserLocalStorage,
  setUserLocalStorage,
  removeUserLocalStorage,
} from "../../utils/localstorage";
import {
  registerThunk,
  loginThunk,
  updateThunk,
  generateIdThunk,
  deleteIdThunk,
  clearStoreThunk,
  getTransactionsThunk,
} from "./thunkFunctions";

const initialState = {
  isLoading: false,
  isSidebar: false,
  user: getUserLocalStorage(),
  paymentIds: getUserLocalStorage()?.paymentIds,
  transactions: [],
};

// REGISTER USER
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    // return registerThunk("/auth/register", user, thunkAPI);
    return registerThunk("/signup", user, thunkAPI);
  }
);

// LOGIN USER
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    return loginThunk("/login", user, thunkAPI);
  }
);

// UPDATE USER
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user, thunkAPI) => {
    return updateThunk("/auth/updateUser", user, thunkAPI);
  }
);
// GENERATE ID
export const generateId = createAsyncThunk(
  "user/generateId",
  async (user, thunkAPI) => {
    return generateIdThunk("/payment_ids", user, thunkAPI);
  }
);
// DELETE ID
export const deleteId = createAsyncThunk(
  "user/deleteId",
  async (data, thunkAPI) => {
    const { paymentId, user } = data;
    console.log(paymentId, user);
    return deleteIdThunk(
      `/users/${user.userId}/paymentIds/${paymentId}`,
      user,
      thunkAPI
    );
  }
);

// TRANSACTIONS HISTORY
export const getTransactions = createAsyncThunk(
  "user/getTransactions",
  async (data, thunkAPI) => {
    const { userId } = data;
    return getTransactionsThunk(`/transactions/history/${userId}`, thunkAPI);
  }
);

// CLEAR ENTIRE STORE
export const clearStore = createAsyncThunk("user/clearStore", clearStoreThunk);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebar = !state.isSidebar;
    },
    logoutUser: (state) => {
      state.isSidebar = false;
      state.user = null;
      removeUserLocalStorage();
    },
  },
  extraReducers: {
    // REGISTER USER
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { user, message } = payload;
      state.isLoading = false;
      state.user = user;

      setUserLocalStorage(user);

      // toast.success(`Hey There ${user.name} 🤩`);
      toast.success(message);
    },
    [registerUser.rejected]: (state, { payload }) => {
      // console.log(payload);
      state.isLoading = false;
      // const { message } = payload;

      // toast.error(payload);
      toast.error("User exists, wrong password");
    },
    // LOGIN USER
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      setUserLocalStorage(user);

      toast.success(`Welcome back ${user.name} 😊`);
    },
    [loginUser.rejected]: (state, { payload }) => {
      console.log(payload);
      state.isLoading = false;
      toast.error(`${payload} 🤨`);
    },
    // UPDATE USER
    [updateUser.pending]: (state) => {
      state.isLoading = true;
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      setUserLocalStorage(user);

      toast.success(`User Updated! 👨🏻‍🚀`);
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(`${payload} 💀`);
    },
    // CLEAR STORE
    [clearStore.rejected]: () => {
      toast.error("There was an error...");
    },
    // GENERATE ID
    [generateId.pending]: (state) => {
      state.isLoading = true;
    },
    [generateId.fulfilled]: (state, { payload }) => {
      const { user } = state;
      const { paymentId } = payload;
      state.isLoading = false;
      state.user = {
        ...user,
        paymentIds: [...user.paymentIds, `${paymentId}`],
      };
      const newUser = {
        ...user,
        paymentIds: [...user.paymentIds, `${paymentId}`],
      };
      setUserLocalStorage(newUser);
      state.paymentIds = newUser.paymentIds;

      toast.success(`New Id generated`);
    },
    [generateId.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(`Maximum limit(5) exceeded`);
    },
    // DELETE ID
    [deleteId.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteId.fulfilled]: (state, { payload }) => {
      const { user } = state;
      const { paymentId } = payload;

      let newPaymentIds = [];
      // const newUser =
      newPaymentIds = user.paymentIds.filter((id) => id !== paymentId);

      console.log(newPaymentIds, "new");
      state.isLoading = false;
      state.user = {
        ...user,
        paymentIds: [...newPaymentIds],
      };
      const newUser = {
        ...user,
        paymentIds: [...newPaymentIds],
      };
      setUserLocalStorage(newUser);
      state.paymentIds = newUser.paymentIds;

      toast.success(`Id deleted`);
    },
    [deleteId.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(`Minimum of 1 required`);
    },

    // TRANSACTION HISTORY
    [getTransactions.pending]: (state) => {
      state.isLoading = true;
    },
    [getTransactions.fulfilled]: (state, { payload }) => {
      const { user } = state;
      state.isLoading = false;
      console.log(payload, user.userId);
      state.transactions = payload;

      // toast.success(`User Updated! 👨🏻‍🚀`);
    },
    [getTransactions.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(`Minimum of 1 required`);
    },
    // // CLEAR STORE
    // [clearStore.rejected]: () => {
    //   toast.error("There was an error...");
    // },
  },
});

export const { toggleSidebar, logoutUser } = userSlice.actions;

export default userSlice.reducer;
