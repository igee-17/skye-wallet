import React from "react";
import Wrapper from "../assets/wrappers/UserInfo";

const UserInfo = ({ icon, text, id }) => {
  return (
    <Wrapper>
      <span className="icon">{icon}</span>
      <span className={`${id ? "text textid" : "text"}`}>{text}</span>
    </Wrapper>
  );
};

export default UserInfo;
