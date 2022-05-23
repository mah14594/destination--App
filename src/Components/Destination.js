import React from "react";

import { RiHeartFill } from "react-icons/ri";
import { RiHeartLine } from "react-icons/ri";
import { Actions } from "../store/index";
import { useDispatch, useSelector } from "react-redux";
// import { sendWishDestination } from "../store/index";
export default function Destination(props) {
  const { destinations } = useSelector((state) => state);
  const dispatchHandler = useDispatch();
  const { id, name, description, image, isFavourit } = props.destinationData;
  const addToWishListHandler = () => {
    dispatchHandler(Actions.addToWishList(id));
  };
  const deleteFromWishListHandler = () => {
    dispatchHandler(Actions.deletFromWishList(id));
  };
  return (
    <div className="card col-xs-12 col-md-6  col-xl-4 mt-3 text-center shadow-0 rounded-0">
      <div className="card-image">
        <img src={image} alt={name} className="rounded-5" />
        <button
          type="button"
          className="rounded-5"
          onClick={
            isFavourit ? deleteFromWishListHandler : addToWishListHandler
          }
        >
          {isFavourit ? (
            <div className="button-contents">
              <RiHeartFill></RiHeartFill>

              <span>Remove</span>
            </div>
          ) : (
            <div className="button-contents">
              <RiHeartLine />
              <span>Favourit this</span>
            </div>
          )}
        </button>
        <div className="favourit-mark">
          {isFavourit ? <RiHeartFill /> : null}
        </div>
      </div>

      <div className="card-description">
        <h2 className="col-12  text-center">{name}</h2>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}
