import React from "react";
import { useEffect } from "react";
import { StatsContainer, Loading } from "../../components";
import { useDispatch, useSelector } from "react-redux";

const Stats = () => {
  const dispatch = useDispatch();
  // const { isLoading } = useSelector((store) => store.allJobs);

  // if (isLoading) {
  //   return <Loading center />;
  // }
  return (
    <>
      <StatsContainer />
      {/* {monthlyApplications.length > 0 && <ChartsContainer />} */}
    </>
  );
};

export default Stats;
