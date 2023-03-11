import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";

// GET ALL JOBS
export const getAllUsersThunk = async (_, thunkAPI) => {
  //   const { page, search, searchStatus, searchType, sort } =
  //     thunkAPI.getState().allJobs;

  let url = "/get-all-users";
  //   let url = `/jobs?page=${page}&status=${searchStatus}&jobType=${searchType}&sort=${sort}`;
  //   if (search) {
  //     url = url + `&search=${search}`;
  //   }
  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    console.log(error);
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
