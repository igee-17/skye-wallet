import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, clearStore } from "../features/user/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showDropdown, setShowDropDown] = useState(false);
  const { user, isSidebar } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    toast.warning("Logging out... 🕳");
    setTimeout(() => {
      dispatch(clearStore());
    }, 3000);
  };

  return (
    <Wrapper>
      <div className="nav-center">
        <button
          className={isSidebar ? "toggle-btn toggle-active" : "toggle-btn"}
          type="button"
          onClick={() => dispatch(toggleSidebar())}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            className="btn"
            type="button"
            onClick={() => setShowDropDown(!showDropdown)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showDropdown ? "dropdown show-dropdown" : "dropdown"}>
            <button className="dropdown-btn" type="button" onClick={logout}>
              🛑 Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
