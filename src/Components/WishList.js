import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import "./WishList.css";
import WishDestination from "./WishDestination";
import Loading from "./Loading";
export default function WishList() {
  const { wishList, isLoading, error } = useSelector((state) => state);
  let contents;
  if (isLoading) {
    contents = <Loading></Loading>;
  } else if (error) {
    contents = (
      <div className="col-12 text-center">Error occured! try again later</div>
    );
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
