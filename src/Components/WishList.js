import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./WishList.css";
import WishDestination from "./WishDestination";
import { fetchWishDestinations } from "../store";
// let isInitial = true;

export default function WishList() {
  const dispatchHandler = useDispatch();
  useEffect(() => {
    dispatchHandler(fetchWishDestinations());
  }, [dispatchHandler]);
  const { wishList } = useSelector((state) => state);

  return (
    <Fragment>
      {wishList.length === 0 ? (
        <h4 className="col-12 text-center mt-5">
          Not Destinations in your wishlist yet!
        </h4>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Details</th>
              <th scope="col">Check</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {wishList.map((destination) => {
              return (
                <WishDestination
                  key={destination.id}
                  destinationData={destination}
                ></WishDestination>
              );
            })}
          </tbody>
        </table>
      )}
    </Fragment>
  );
}
