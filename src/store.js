import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import sendSlice from "./features/send/sendSlice";
import allJobsSlice from "./features/allJobs/allJobs";
import makePaymentSlice from "./features/makePayment/makePayment";

export const store = configureStore({
  reducer: {
    user: userSlice,
    send: sendSlice,
    allJobs: allJobsSlice,
    makePayment: makePaymentSlice,
  },
});

export default store;
