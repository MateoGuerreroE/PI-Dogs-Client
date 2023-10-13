import { ADD_ALL, ORDER_DOGS, SEARCH_DOG, SLICE_DOGS } from "./action-types";
import { sliceArray, sortingByName } from "../handlers";

const initialState = {
  allDogs: [],
  pgDogs: [],
  filteredDogs: [],
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_ALL:
      return {
        ...state,
        allDogs: payload,
        filteredDogs: payload,
      };
    case SEARCH_DOG:
      return {
        ...state,
        pgDogs: [payload],
      };

    case SLICE_DOGS:
      return {
        ...state,
        pgDogs: state.filteredDogs.slice(
          ...sliceArray(payload.currentPage, payload.postsPerPage)
        ),
      };
    case ORDER_DOGS:
      const { param, order } = payload;
      let result = [];
      if (param === "name") {
        if (order === "asc") {
          result = state.allDogs; // Dogs come from API already ordened by name
        }
        if (order === "desc") {
          result = sortingByName(state.allDogs.slice()).reverse();
        }
      }
      return {
        ...state,
        filteredDogs: [...result],
      };

    default:
      return { ...state };
  }
}
