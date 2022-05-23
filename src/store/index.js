import { createSlice, configureStore } from "@reduxjs/toolkit";
import { getTargetDestination } from "./targetDestination";
// const destinations = [
//   {
//     id: 1,
//     name: "Tokyo",
//     description:
//       "Simply setting foot in Japan's cosmopolitan capital is an experience within itself. A city known for its bustling streets and flashing neon signs, Tokyo has an electric energy and plenty of attractions to discover. Foodies won't be let down by the city's fresh sushi and hearty ramen.",
//     image:
//       "https://www.mensjournal.com/wp-content/uploads/2019/04/TokyoMain.jpg?quality=70&strip=all",
//     isFavourit: false,
//     isCompleted: false,
//   },
//   {
//     id: 2,
//     name: "Paris",
//     description:
//       "The magnetic City of Light draws visitors from around the globe who come to see iconic attractions like the Eiffel Tower, the Louvre and the Arc de Triomphe. But what travelers really fall in love with are the city's quaint cafes, vibrant markets and trendy shopping districts.",
//     image:
//       "https://i.guim.co.uk/img/media/1a55663ead5942b9337552c59fb2361d7380f96a/0_267_7952_4771/master/7952.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=4a3aa0f9434ffebac97d6514326d1e01",
//     isFavoruit: false,
//     isCompleted: false,
//   },
//   {
//     id: 3,
//     name: "Tahity",
//     description:
//       "Travel to this island , the largest in French Polynesia , if you've been dreaming of a vacation spent lazing in a lavish overwater bungalow. Beyond the posh resorts, Tahiti boasts black sand beaches, a bustling capital and prime snorkeling and surfing conditions.",
//     image:
//       "https://global-uploads.webflow.com/5fda95cd487da57637f0cbfe/60383be3b2acea79928ae301_intercontinental-bora-bora-thalasso-spa-aerial-view-overwater-villas-24.jpg",
//     isFavourit: false,
//     isCompleted: false,
//   },
//   {
//     id: 4,
//     name: "Santorini",
//     description:
//       "Frequently touted as a top honeymoon destination, this Greek isle woos newlyweds every year with its breathtaking sunsets, pastel-hued villages and colorful beaches. Archaeological sites, such as Ancient Thira and Ancient Akrotiri, beckon to history buffs, while central Santorini's winery tours lure oenophiles.",
//     image:
//       "https://i.natgeofe.com/n/63a9f64a-44fb-4f94-826e-8dc3dbceb6d1/domes-santorini-greece_3x4.jpg",
//     isFavourit: false,
//     isCompleted: false,
//   },
//   {
//     id: 5,
//     name: "Berclona",
//     description:
//       "This Spanish city is a feast for the eyes: Visitors can walk past medieval architecture in the Barri Gòtic, snap photos of the intricate Basilica de la Sagrada Família and marvel at Antoni Gaudí's whimsical creations in Park Güell.",
//     image:
//       "https://globaltravels.info/wp-content/uploads/2022/01/GettyImages-1085317916_54_990x660-globaltravels.info_.jpg",
//     isFavourit: false,
//     isCompleted: false,
//   },
//   {
//     id: 6,
//     name: "Maldives",
//     description:
//       "It is not cheap or easy to reach, but this isolated paradise between the Arabian and Laccadive seas is the personification of a dreamy tropical vacation. In this South Asian destination, which is made up of more than 1,000 islands.",
//     image: "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/24/146502.jpg",
//     isFavourit: false,
//     isCompleted: false,
//   },
//   {
//     id: 7,
//     name: "Bali",
//     description:
//       "Serene temples and beautiful beaches are the biggest draws to this lush Indonesian paradise. And we do mean lush – the region's notoriously soggy wet season is best avoided by planning a visit between April and October.",
//     image:
//       "https://deih43ym53wif.cloudfront.net/bali-indonesia-shutterstock_459773704_0dd494ecf7.jpeg",
//     isFavourit: false,
//     isCompleted: false,
//   },
//   {
//     id: 8,
//     name: "Sydney",
//     description:
//       "Sydney offers more than just a dizzying array of landmarks, such as the Sydney Opera House, Mrs. Macquarie's Chair and the Sydney Harbour Bridge. This Australian city boasts a warm, sunny climate that is ideal for relaxing.",
//     image:
//       "https://static.onecms.io/wp-content/uploads/sites/28/2021/06/22/sydney-australia-SYDNEYTG0621.jpg",
//     isFavourit: false,
//     isCompleted: false,
//   },
//   {
//     id: 9,
//     name: "Dubai",
//     description:
//       "Stunning Persian Gulf views, heart-pumping activities and historical landmarks await you in Dubai. This Middle Eastern city is filled with some of the world's most notable and unique attractions, including the Burj Khalifa, the Dubai Mall and indoor Ski Dubai.",
//     image: "https://www.cosentino.com/wp-content/uploads/2021/10/Dubai1.jpg",
//     isFavourit: false,
//     isCompleted: false,
//   },
// ];

const initialDestinaionsState = {
  destinations: [],
  wishList: [],
  searchTerm: "",
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
      console.log(`${ID} checked `);
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
          //   mode: "no-cors",
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
    const destinationsResponse = await fetch(
      " https://destination-app-d14f1-default-rtdb.firebaseio.com/wishlist.json"
    );
    if (!destinationsResponse.ok) {
      throw new Error("error fetching data");
    }

    try {
      let wishList = [];
      const destinationsData = await destinationsResponse.json();
      for (const key in destinationsData) {
        wishList.push(destinationsData[key]);
      }
      dispatch(Actions.setWishList(wishList));
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchAllDestinations = () => {
  return async (dispatch) => {
    const destinationsResponse = await fetch(
      " https://destination-app-d14f1-default-rtdb.firebaseio.com/destinations.json"
    );
    if (!destinationsResponse.ok) {
      throw new Error("error fetching data");
    }

    try {
      const destinationsData = await destinationsResponse.json();
      dispatch(Actions.setDestinations(destinationsData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const Actions = destinationsSlice.actions;
export default store;
