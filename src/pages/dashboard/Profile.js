import { useState } from "react";
import FormRow from "../../components/FormRow";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  updateUser,
  generateId,
  deleteId,
} from "../../features/user/userSlice";
import { MdDeleteSweep } from "react-icons/md";

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    userId: user?.userId || "",
    name: user?.name || "",
    email: user?.email || "",
    location: user?.location || "",
    lastName: user?.lastName || "",
  });
  const { paymentIds } = user;

  console.log(isLoading);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, location, lastName } = userData;
    if (!name || !email) {
      toast.error("Please fill out all fields 🧐");
      return;
    }
    dispatch(updateUser(userData));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile</h3>
        <div className="form-center">
          {/* NAME */}
          <FormRow
            type="text"
            name="name"
            labelText="First Name"
            value={userData.name}
            handleChange={handleChange}
          />
          {/* LAST NAME */}
          <FormRow
            type="text"
            labelText="Last Name"
            name="lastName"
            value={userData.lastName}
            handleChange={handleChange}
          />
          {/* EMAIL */}
          <FormRow
            type="email"
            name="email"
            value={userData.email}
            handleChange={handleChange}
          />
          {/* LOCATION */}
          <FormRow
            type="text"
            name="location"
            value={userData.location}
            handleChange={handleChange}
          />
          <button type="submit" className="btn btn-block" disabled>
            {isLoading ? "Updating..." : "Save Changes"}
          </button>
        </div>
        <div className="payment-ids">
          <h3>Payment Ids:</h3>
          {paymentIds.map((item, index) => {
            return (
              <p key={index}>
                {" "}
                {item}{" "}
                <span
                  onClick={() => {
                    const data = { user: userData, paymentId: item };
                    dispatch(deleteId(data));
                  }}
                >
                  <MdDeleteSweep />
                </span>
              </p>
            );
          })}
          <button
            type="button"
            className="btn btn-block"
            disabled={isLoading}
            onClick={() => dispatch(generateId(userData))}
          >
            {isLoading ? "Updating..." : "Generate new Id"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
