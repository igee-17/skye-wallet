import React from "react";
import Wrapper from "../assets/wrappers/User";
import JobInfo from "./UserInfo";
import {
  FaLocationArrow,
  FaBriefcase,
  FaCalendarAlt,
  FaMoneyBillWave,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { RiPaypalLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const User = ({ name, email, phone, userId, paymentIds, balance }) => {
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{name.charAt(0)}</div>
        <div className="info">
          <h5>{name}</h5>
          <p>{userId}</p>
        </div>
        <Link to={`/send-money/${userId}`} className="button">
          Send Money
        </Link>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={name} />
          <JobInfo icon={<IoMdMail />} text={email} id={true} />
          <JobInfo icon={<BsTelephoneForwardFill />} text={phone} />
          {paymentIds.map((id, index) => (
            <JobInfo
              icon={<RiPaypalLine />}
              text={`Payment id ${
                paymentIds.length > 1 ? index + 1 : ""
              } - ( ${id} )`}
              id={true}
            />
          ))}
          <JobInfo icon={<FaMoneyBillWave />} text={`Balance - $${balance}`} />
        </div>
      </div>
    </Wrapper>
  );
};

export default User;
