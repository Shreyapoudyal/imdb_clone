import axios from "axios";
import { setLoading, setLoaded } from "./loadingActions";

// Action types
const FETCH_MOVIES_PENDING = "FETCH_MOVIES_PENDING";
const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
const FETCH_MOVIES_FAILED = "FETCH_MOVIES_FAILED";

// Action creators
function fetchMoviesPending() {
  return {
    type: FETCH_MOVIES_PENDING,
  };
}

const fetchMoviesSuccess = (data) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: data,
});

const fetchMoviesFailed = (error) => ({
  type: FETCH_MOVIES_FAILED,
  payload: error,
});

// Async thunk action
export const fetchMovies = () => {
  return async (dispatch) => {
    try {
      // debugger;
      dispatch(fetchMoviesPending());
      dispatch(setLoading());
      const response = await axios.get("http://localhost:2323/api/v1/movie", {
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch(fetchMoviesSuccess(response.data));
      dispatch(setLoaded());
    } catch (error) {
      dispatch(fetchMoviesFailed(error));
      dispatch(setLoaded());
    }
  };
};
