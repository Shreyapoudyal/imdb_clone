// import {
//   FETCH_MOVIES_SUCCESS,
//   ADD_MOVIE_SUCCESS,
//   UPDATE_MOVIE_SUCCESS,
//   DELETE_MOVIE_SUCCESS
// } from '../actions/actionTypes';

// const initialState = {
//   movies: [],
//   loading: false,
//   error: null
// };

// const movieReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_MOVIES_SUCCESS:
//       return {
//         ...state,
//         movies: action.payload,
//         loading: false,
//         error: null,
//       };
//     case ADD_MOVIE_SUCCESS:
//       return {
//         ...state,
//         movies: [...state.movies, action.payload],
//         loading: false,
//         error: null,
//       };
//     case UPDATE_MOVIE_SUCCESS:
//       const updatedMovies = state.movies.map((movie) => {
//         if (movie.id === action.payload.id) {
//           return action.payload;
//         }
//         return movie;
//       });
//       return {
//         ...state,
//         movies: updatedMovies,
//         loading: false,
//         error: null,
//       };
//     case DELETE_MOVIE_SUCCESS:
//       const filteredMovies = state.movies.filter(
//         (movie) => movie.id !== action.payload
//       );
//       return {
//         ...state,
//         movies: filteredMovies,
//         loading: false,
//         error: null,
//       };
//     default:
//       return state;
//   }
// };

// export default movieReducer;










// import { ADD_MOVIE_SUCCESS } from "../actions/actionTypes";

// const AddMovieReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_MOVIE_SUCCESS:
//       return {
//         ...state,
//         movies: [...state.movies, action.payload],
//         loading: false,
//         error: null,
//       };
//     default:
//       return state;
//   }
// };

// export default AddMovieReducer;
