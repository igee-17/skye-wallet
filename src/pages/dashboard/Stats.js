import React from "react";
import { useEffect } from "react";
import { StatsContainer, Loading } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { showStats } from "../../features/allJobs/allJobs";

const Stats = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.allJobs);

  // useEffect(() => {
  //   console.log(monthlyApplications);
  //   dispatch(showStats());
  // }, []);
  if (isLoading) {
    return <Loading center />;
  }
  return (
    <>
      <StatsContainer />
      {/* {monthlyApplications.length > 0 && <ChartsContainer />} */}
    </>
  );
};

export default Stats;
