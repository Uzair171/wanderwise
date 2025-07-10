// import axios from "axios";

import hotels from "../../data/lodgings.json";

// const URL = import.meta.env.TRAVEL_ADVISOR_RESTAURANT_URL;

// const options = {
//   params: {
//     bl_latitude: "11.847676",
//     tr_latitude: "12.838442",
//     bl_longitude: "109.095887",
//     tr_longitude: "109.149359",
//   },
//   headers: {
//     "x-rapidapi-key": import.meta.env.X_RAPIDAPI_KEY,
//     "x-rapidapi-host": import.meta.env.X_RAPIDAPI_HOST,
//   },
// };

export const getPlacesData = () => {
  return hotels;
};
