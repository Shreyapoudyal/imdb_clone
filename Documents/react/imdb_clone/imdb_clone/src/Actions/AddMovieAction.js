// import {
//   ADD_MOVIE_REQUEST,
//   ADD_MOVIE_SUCCESS,
//   ADD_MOVIE_FAILURE,
// } from "./actionTypes";

// import axios from "axios";

// const apiUrl = "http://localhost:3000/movies";

// export const addMovie = (title, year, rating) => {
//   return (dispatch) => {
//     dispatch(addMovieRequest());
//     axios
//       .post(apiUrl, { title, year, rating })
//       .then((response) => {
//         dispatch(addMovieSuccess(response.data));
//       })
//       .catch((error) => {
//         dispatch(addMovieFailure(error.message));
//       });
//   };
// };

// export const addMovieRequest = () => {
//   return {
//     type: ADD_MOVIE_REQUEST,
//   };
// };

// export const addMovieSuccess = (movie) => {
//   return {
//     type: ADD_MOVIE_SUCCESS,
//     payload: movie,
//   };
// };

// export const addMovieFailure = (error) => {
//   return {
//     type: ADD_MOVIE_FAILURE,
//     payload: error,
//   };
// };
