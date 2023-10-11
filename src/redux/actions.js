import axios from "axios";

import { ADD_ALL, SEARCH_DOG, SLICE_DOGS } from "./action-types";

export function addAll() {
  const endpoint = `http://${window.location.hostname}:3001/dogs`;
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({ type: ADD_ALL, payload: data });
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
      console.log(error.message);
      alert("Raza no encontrada");
    }
  };
}

export function sliceDogs(page) {
  return {
    type: SLICE_DOGS,
    payload: page,
  };
}
