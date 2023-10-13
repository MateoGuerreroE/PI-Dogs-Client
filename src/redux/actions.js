import axios from "axios";

import { ADD_ALL, ORDER_DOGS, SEARCH_DOG, SLICE_DOGS } from "./action-types";

export function addAll() {
  const endpoint = `http://${window.location.hostname}:3001/dogs`;
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: ADD_ALL,
        payload: data,
      });
    } catch (error) {
      alert("Error reaching dogs data");
    }
  };
}

export function searchDog(name) {
  const endpoint = `http://${window.location.hostname}:3001/dogs/name?="${name}"`;
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({ type: SEARCH_DOG, payload: data });
    } catch (error) {
      alert("Raza no encontrada");
    }
  };
}

export function sliceDogs(currentPage, postsPerPage) {
  return {
    type: SLICE_DOGS,
    payload: { currentPage: currentPage, postsPerPage: postsPerPage },
  };
}

export function orderDogs(param, order) {
  return {
    type: ORDER_DOGS,
    payload: { param: param, order: order },
  };
}
