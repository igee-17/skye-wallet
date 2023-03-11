import { useEffect, useState } from "react";
import { FormRow, FormRowSelect } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  handleChange,
  clearValues,
  getUser,
  createTransaction,
} from "../../features/send/sendSlice";
import { useNavigate, useParams } from "react-router-dom";
import { getUserLocalStorage } from "../../utils/localstorage";

const AddJob = () => {
  const [Id, setId] = useState("");
  const [Ids, setIds] = useState([]);

  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {
    isLoading,
    recipientUser,
    receiverId,
    receiverIds,
    isEditing,
    editJobId,
    senderId,
    // senderIds,
    amount,
  } = useSelector((store) => store.send);
  const { paymentIds } = useSelector((store) => store.user);
  const { user } = useSelector((store) => store.user);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!senderId || !receiverId || !amount) {
      toast.warning("Kindly fill out all fields");
      return;
    }

    dispatch(
      createTransaction({
        senderId,
        receiverId,
        amount,
        userId: user.userId,
        receiverUserId: recipientUser.userId,
      })
    );
    if (!isLoading) {
      setTimeout(() => {
        navigate("/make-transfer");
      }, 2000);
    }
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  useEffect(() => {
    if (id) {
      dispatch(getUser(id));
    }
  }, [id]);

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit job" : "Send Money"}</h3>
        <div className="form-center">
          {/* SENDER IDS */}
          <FormRowSelect
            name="senderId"
            // value={senderId}
            value={senderId}
            labelText="Sender Id"
            // handleChange={setId((e) => e.target.value)}
            handleChange={handleJobInput}
            list={paymentIds}
          />
          {/* RECEIVER IDS */}
          <FormRowSelect
            name="receiverId"
            value={receiverId}
            labelText="Receiver Id"
            handleChange={handleJobInput}
            list={receiverIds}
          />
          {/* JOB lOCATION */}
          <FormRow
            type="number"
            labelText="Amount"
            name="amount"
            value={amount}
            handleChange={handleInput}
            placeholder="min(100)"
          />
          {/* STATUS */}
          {/* {(labelText, name, value, handleChange, list)} */}

          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
