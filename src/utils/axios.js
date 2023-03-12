import axios from "axios";
import { getUserLocalStorage } from "./localstorage";
import { clearStore } from "../features/user/userSlice";

const customFetch = axios.create({
  // baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
  // baseURL: "http://localhost:5000",
  baseURL: "https://skyewallet.onrender.com",
});

// customFetch.interceptors.request.use(
//   (config) => {
//     const user = getUserLocalStorage();
//     if (user) {
//       config.headers.common["Authorization"] = `Bearer ${user.token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  console.log(error);
  if (error.response.status === 401) {
    thunkAPI.dispatch(clearStore());
    return thunkAPI.rejectWithValue("Unthorized! Logging Out...");
  }
  return thunkAPI.rejectWithValue(error.response.data.msg);
};

export default customFetch;
