import { ADD_ALL, SEARCH_DOG, SLICE_DOGS } from "./action-types";
import { sliceArray } from "../handlers";

const initialState = {
  allDogs: [],
  pgDogs: [],
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_ALL:
      const { data, visiblePosts } = payload;
      console.log(visiblePosts);
      return {
        allDogs: data,
        pgDogs: data.slice(0, visiblePosts),
      };
    case SEARCH_DOG:
      return {
        ...state,
        pgDogs: [payload],
      };

    case SLICE_DOGS:
      return {
        ...state,
        pgDogs: state.allDogs.slice(
          ...sliceArray(payload.currentPage, payload.postsPerPage)
        ),
      };

    default:
      return { ...state };
  }
}
