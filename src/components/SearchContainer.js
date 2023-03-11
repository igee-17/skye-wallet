import { useEffect } from "react";
import Wrapper from "../assets/wrappers/SearchContainer";
import { FormRow, FormRowSelect } from ".";
import { useSelector, useDispatch } from "react-redux";
import { clearFilters, handleChange } from "../features/allJobs/allJobs";

const SearchContainer = () => {
  const dispatch = useDispatch();
  const { isLoading, search } = useSelector((store) => store.allJobs);
  const { balance } = useSelector((store) => store.send);

  const handleSearch = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    value = value.replace(/\s/g, "").slice(0, 7);
    dispatch(handleChange({ name, value }));
  };

  const clearSearch = (e) => {
    e.preventDefault();
    dispatch(clearFilters());
  };

  return (
    <Wrapper>
      <form action="" className="form">
        <h4>search</h4>
        <div className="form-center">
          {/* SEARCH INPUT */}
          <FormRow
            labelText="payment id"
            type="text"
            name="search"
            value={search}
            handleChange={handleSearch}
            max={true}
          />

          {/* CLEAR BUTTON */}
          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={clearSearch}
          >
            clear filters
          </button>
        </div>
        <hr />
        <h4 className="balance">
          <span>Available Balance</span> - ${balance}
        </h4>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
