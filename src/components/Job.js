import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/User";
import { useDispatch } from "react-redux";
import JobInfo from "./UserInfo";
import moment from "moment";
// import { deleteJob, setEditJob } from "../features/send/sendSlice";

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const dispatch = useDispatch();

  const date = moment(createdAt).format("MMM Do YY");
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/add-jobs"
              className="btn edit-btn"
              // onClick={() =>
              //   dispatch(
              //     setEditJob({
              //       editJobId: _id,
              //       position,
              //       company,
              //       jobLocation,
              //       jobType,
              //       createdAt,
              //       status,
              //     })
              //   )
              // }
            >
              Edit
            </Link>
            <button
              className="btn delete-btn"
              type="button"
              // onClick={() => dispatch(deleteJob(_id))}
            >
              delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
