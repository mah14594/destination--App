import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./WishList.css";
import WishDestination from "./WishDestination";
import { fetchWishDestinations } from "../store";
import Loading from "./Loading";
export default function WishList() {
  const dispatchHandler = useDispatch();
  useEffect(() => {
    dispatchHandler(fetchWishDestinations());
  }, [dispatchHandler]);
  const { wishList, isLoading, error } = useSelector((state) => state);
  console.log(error);
  let contents;
  if (isLoading) {
    contents = <Loading></Loading>;
  } else if (error) {
    contents = <div className="col-12 -text-center"></div>;
  } else {
    contents = (
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
  return <main className="conatiner mt-5 p-lg-4 p-3">{contents}</main>;
}
