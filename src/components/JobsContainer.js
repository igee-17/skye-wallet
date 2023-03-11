import { useEffect } from "react";
import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import { getAllUsers, updateUsers } from "../features/makePayment/makePayment";
import PageButtonContainer from "./PageButtonContainer";
import User from "./User";

const JobsContainer = () => {
  const { users, isLoading, numOfPages, search } = useSelector(
    (store) => store.makePayment
  );
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const updatedUsers = users.filter((item) => user.userId !== item.userId);

  // GET JOBS WHEN SEARCH INPUT IS CHANGED
  useEffect(() => {
    let text = search;
    let regex = /^[a-zA-Z0-9]{7}$/;

    let result = regex.test(text);

    console.log("hello", result);

    if (result) {
      const delaySearch = setTimeout(() => {
        const user = users.filter((item) => item.paymentIds.includes(search));
        console.log(user, "user");
        dispatch(updateUsers(user));
      }, 1000);

      return () => clearTimeout(delaySearch);
    } else if (search?.length !== 0) {
      console.log("hello else");
      const delaySearch = setTimeout(() => {
        dispatch(getAllUsers());
      }, 1000);

      return () => clearTimeout(delaySearch);
    }
  }, [search]);

  // useEffect(() => {
  //   dispatch(getAllUsers());
  // }, []);

  if (isLoading) {
    return (
      <Wrapper>
        <h5>jobs info</h5>
        <Loading />
      </Wrapper>
    );
  }

  if (users.length === 0) {
    return (
      <Wrapper>
        <h2>User not found</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {updatedUsers.length} {updatedUsers.length > 1 ? "users" : "user"} found
      </h5>
      <div className="jobs">
        {updatedUsers.map((user) => {
          return <User key={user._id} {...user} />;
        })}
      </div>
      {numOfPages > 1 && <PageButtonContainer />}
    </Wrapper>
  );
};

export default JobsContainer;
