import { createSlice, configureStore } from "@reduxjs/toolkit";
import { getTargetDestination } from "./targetDestination";

const initialDestinaionsState = {
  destinations: [],
  wishList: [],
  searchTerm: "",
  isLoadin: false,
  error: false,
};

const destinationsSlice = createSlice({
  name: "destinations",
  initialState: initialDestinaionsState,
  reducers: {
    addToWishList(state, action) {
      const targetDestination = getTargetDestination(
        state.destinations,
        action.payload
      );
      targetDestination.isFavourit = true;
      if (
        !state.wishList.some((destination) => destination.id === action.payload)
      ) {
        state.wishList.push(targetDestination);
      }
    },
    deletFromWishList(state, action) {
      const targetDestination = getTargetDestination(
        state.destinations,
        action.payload
      );
      targetDestination.isFavourit = false;
      state.wishList = state.wishList.filter(
        (destination) => destination.id !== action.payload
      );
    },
    completeDestination(state, action) {
      const ID = action.payload;
      const targetDestination = state.wishList.find(
        (destination) => destination.id === ID
      );
      targetDestination.isCompleted = true;
    },
    setWishList(state, action) {
      state.wishList = action.payload;
    },
    setDestinations(state, action) {
      state.destinations = action.payload;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});
const store = configureStore({
  reducer: destinationsSlice.reducer,
});

export const sendDestinations = (destinations, urlKey) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        ` https://destination-app-d14f1-default-rtdb.firebaseio.com/${urlKey}.json`,
        {
          method: "PUT",
          body: JSON.stringify(destinations),
        }
      );
      if (!response.ok) {
        throw new Error("Sending data failed");
      }
    };
    try {
      await sendRequest();
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchWishDestinations = () => {
  return async (dispatch) => {
    dispatch(Actions.setIsLoading(true));
    try {
      const destinationsResponse = await fetch(
        " https://destination-app-d14f1-default-rtdb.firebaseio.com/wishlist.json"
      );
      if (!destinationsResponse.ok) {
        throw new Error("error fetching data");
      }
      let wishList = [];
      const destinationsData = await destinationsResponse.json();
      for (const key in destinationsData) {
        wishList.push(destinationsData[key]);
      }
      dispatch(Actions.setWishList(wishList));
    } catch (e) {
      dispatch(Actions.setError(true));
    }
    dispatch(Actions.setIsLoading(false));
  };
};
export const fetchAllDestinations = () => {
  return async (dispatch) => {
    dispatch(Actions.setIsLoading(true));
    try {
      const destinationsResponse = await fetch(
        " https://destination-app-d14f1-default-rtdb.firebaseio.com/destinations.json"
      );
      if (!destinationsResponse.ok) {
        throw new Error("error fetching data");
      }
      const destinationsList = await destinationsResponse.json();

      dispatch(Actions.setDestinations(destinationsList));
    } catch (e) {
      console.log(e);
      dispatch(Actions.setError(true));
    }
    dispatch(Actions.setIsLoading(false));
  };
};

export const Actions = destinationsSlice.actions;
export default store;
