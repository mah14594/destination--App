import React from "react";
import { faMultiply, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { Actions } from "../store";

export default function WishDestination(props) {
  const dispatchHandler = useDispatch();
  const { id, name, description: details, isCompleted } = props.destinationData;

  const removeHandler = () => {
    dispatchHandler(Actions.deletFromWishList(id));
  };
  const completeDestinationHandler = () => {
    if (!isCompleted) {
      dispatchHandler(Actions.completeDestination(id));
    }
    return;
  };
  return (
    <tr className={isCompleted ? "completed" : ""}>
      <th scope="row">{name}</th>
      <td>{details}</td>
      <td>
        <span>
          <FontAwesomeIcon
            icon={faCheckCircle}
            onClick={completeDestinationHandler}
          ></FontAwesomeIcon>
        </span>
      </td>
      <td>
        <span>
          <FontAwesomeIcon
            icon={faMultiply}
            onClick={removeHandler}
          ></FontAwesomeIcon>
        </span>
      </td>
    </tr>
  );
}
