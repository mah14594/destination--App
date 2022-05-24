import React, { useEffect } from "react";
import Destination from "./Destination";
import "./DestinationList.css";
import { useSelector, useDispatch } from "react-redux";
import SearchForm from "./SearchForm";
import { fetchAllDestinations } from "../store";
import Loading from "./Loading";
export default function DestinationList() {
  const dispatchHandler = useDispatch();
  useEffect(() => {
    dispatchHandler(fetchAllDestinations());
  }, [dispatchHandler]);
  const { destinations, searchTerm, isLoading, error } = useSelector(
    (state) => state
  );

  const filteredDistinations = destinations.filter((destination) => {
    if (searchTerm === "") {
      return destination;
    } else if (
      destination.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return destination;
    }
  });
  let contents;
  if (isLoading) {
    contents = <Loading></Loading>;
  } else if (error) {
    contents = (
      <div className="col-12 text-center">Error in Fetching data !</div>
    );
  } else {
    contents = (
      <div className="row">
        <h1 className="col-12 text-center">Most Popular Destinations</h1>
        <p className="col-12 text-center">
          Add the best destinations to your WishList
        </p>
        <SearchForm></SearchForm>
        {filteredDistinations.length === 0 ? (
          <div className="text-center mt-5 p-5">No Destinations Found</div>
        ) : (
          filteredDistinations.map((destination) => {
            return (
              <Destination
                key={destination.id}
                destinationData={destination}
              ></Destination>
            );
          })
        )}
      </div>
    );
  }
  return <main className="conatiner mt-5 p-lg-4 p-3">{contents}</main>;
}
