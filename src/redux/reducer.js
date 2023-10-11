import { ADD_ALL, SEARCH_DOG, SLICE_DOGS } from "./action-types";
import { sliceDogs } from "../handlers";

const initialState = {
  allDogs: [],
  pgDogs: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ALL:
      return {
        allDogs: action.payload,
        pgDogs: action.payload.slice(0, 8),
      };
    case SEARCH_DOG:
      return {
        ...state,
        pgDogs: [action.payload],
      };

    case SLICE_DOGS:
      return {
        ...state,
        pgDogs: state.allDogs.slice(...sliceDogs(action.payload)),
      };

    default:
      return { ...state };
  }
}
