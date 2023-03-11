import { useEffect } from "react";
import StatItem from "./StatItem";
import {
  FaSuitcaseRolling,
  FaCalendarCheck,
  FaBug,
  FaUserAlt,
} from "react-icons/fa";
import { BsBoxArrowUpRight, BsBoxArrowInDownLeft } from "react-icons/bs";
import { GrMoney } from "react-icons/gr";
import { BiTransfer } from "react-icons/bi";
import Wrapper from "../assets/wrappers/StatsContainer";
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "../features/user/userSlice";
import moment from "moment";

const StatsContainer = () => {
  // const { stats } = useSelector((store) => store.allJobs);
  const { user, transactions } = useSelector((store) => store.user);
  const { balance } = useSelector((store) => store.send);

  const dispatch = useDispatch();

  const arrangedTransactions = [...transactions].sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  );

  const defaultStats = [
    {
      title: `user id - ${user.userId}`,
      count: user.name || 0,
      icon: <FaUserAlt />,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "Available Balance",
      count: `$ ${balance}` || 0,
      icon: <GrMoney />,
      color: "#e9b949",
      bcg: "#fcefc7",
    },

    {
      title: "Transactions made",
      count: transactions.length || 0,
      icon: <BiTransfer />,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
  ];

  useEffect(() => {
    const { userId } = user;
    dispatch(getTransactions({ userId }));
  }, []);
  return (
    <Wrapper>
      <div className="stat-items">
        {defaultStats.map((item, index) => {
          return <StatItem key={index} {...item} />;
        })}
      </div>
      <div className="transactions">
        <h3>Transactions</h3>
        <hr />
        {transactions.length > 0 ? (
          <div className="center">
            <div className="header">
              <p></p>
              <p>payment id</p>
              <p>Beneficiary</p>
              <p>Beneficiary Id</p>
              <p>amount</p>
              <p>date</p>
              <p>time</p>
            </div>
            {arrangedTransactions.map((item, index) => {
              const {
                senderId,
                receiverId,
                amount,
                timestamp,
                type,
                recipient,
              } = item;
              const year = moment(timestamp).format("MMMM Do YYYY");
              const time = moment(timestamp).format(" h:mm:ss a");

              return (
                <div className="header item" key={index}>
                  <p>
                    <span className={`${type === "send" ? "red" : "green"}`}>
                      {type === "send" ? (
                        <BsBoxArrowUpRight />
                      ) : (
                        <BsBoxArrowInDownLeft />
                      )}
                    </span>
                  </p>
                  <p>{senderId}</p>
                  <p>{recipient[0]?.name || "name"}</p>
                  <p>{receiverId}</p>
                  <p>${amount}</p>
                  <p>{year}</p>
                  <p>{time}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <p>No transactions to display...</p>
        )}
      </div>
    </Wrapper>
  );
};

export default StatsContainer;
