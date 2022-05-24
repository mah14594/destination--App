import React from "react";
import { useDispatch } from "react-redux";
import { Actions } from "../store";
export default function SearchForm() {
  const dispatchHandler = useDispatch();
  const searchDestinationsHandler = (e) => {
    dispatchHandler(Actions.setSearchTerm(e.target.value));
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form-outline" onSubmit={submitHandler}>
      <input
        type="search"
        id="searchTerm"
        placeholder="search destinations"
        className="form-control w-lg-50 w-75 mx-auto"
        onChange={searchDestinationsHandler}
      />
    </form>
  );
}
