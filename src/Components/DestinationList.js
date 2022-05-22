import React from "react";
import Destination from "./Destination";
import "./DestinationList.css";
import { useSelector } from "react-redux";
import SearchForm from "./SearchForm";
export default function DestinationList() {
  console.log("destinationList is running");
  const { destinations, searchTerm } = useSelector((state) => state);
  const filteredDistinations = destinations.filter((destination) => {
    if (searchTerm === "") {
      return destination;
    } else if (
      destination.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return destination;
    } else {
      return {};
    }
  });
  return (
    <main className="conatiner mt-5 p-lg-4 p-3">
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
    </main>
  );
}
