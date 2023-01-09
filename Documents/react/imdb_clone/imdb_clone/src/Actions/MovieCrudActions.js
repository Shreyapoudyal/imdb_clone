export const FETCH_MOVIES_REQUEST = "FETCH_MOVIES_REQUEST";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_ERROR = "FETCH_MOVIES_ERROR";
export const ADD_MOVIE_REQUEST = "ADD_MOVIE_REQUEST";
export const ADD_MOVIE_SUCCESS = "ADD_MOVIE_SUCCESS";
export const ADD_MOVIE_ERROR = "ADD_MOVIE_ERROR";
export const UPDATE_MOVIE_REQUEST = "UPDATE_MOVIE_REQUEST";
export const UPDATE_MOVIE_SUCCESS = "UPDATE_MOVIE_SUCCESS";
export const UPDATE_MOVIE_ERROR = "UPDATE_MOVIE_ERROR";
export const DELETE_MOVIE_REQUEST = "DELETE_MOVIE_REQUEST";
export const DELETE_MOVIE_SUCCESS = "DELETE_MOVIE_SUCCESS";
export const DELETE_MOVIE_ERROR = "DELETE_MOVIE_ERROR";

// import { API_BASE_URL } from '../config';
// import { normalizeResponseErrors } from './utils';
// import {
//   FETCH_MOVIES_REQUEST,
//   FETCH_MOVIES_SUCCESS,
//   FETCH_MOVIES_ERROR,
//   ADD_MOVIE_REQUEST,
//   ADD_MOVIE_SUCCESS,
//   ADD_MOVIE_ERROR,
//   UPDATE_MOVIE_REQUEST,
//   UPDATE_MOVIE_SUCCESS,
//   UPDATE_MOVIE_ERROR,
//   DELETE_MOVIE_REQUEST,
//   DELETE_MOVIE_SUCCESS,
//   DELETE_MOVIE_ERROR
// } from './actionTypes';

// export const fetchMovies = () => dispatch => {
//   dispatch({
//     type: FETCH_MOVIES_REQUEST
//   });

//   return fetch(`${API_BASE_URL}/movies`)
//     .then(res => normalizeResponseErrors(res))
//     .then(res => res.json())
//     .then(data => dispatch({
//       type: FETCH_MOVIES_SUCCESS,
//       data
//     }))
//     .catch(err => dispatch({
//       type: FETCH_MOVIES_ERROR,
//       error: err
//     }));
// };

// export const addMovie = movie => (dispatch, getState) => {
//   dispatch({
//     type: ADD_MOVIE_REQUEST
//   });

//   const authToken = getState().auth.authToken;

//   return fetch(`${API_BASE_URL}/movies`, {
//     method: 'POST',
//     headers

import { 
  FETCH_MOVIES_REQUEST, 
  FETCH_MOVIES_SUCCESS, 
  FETCH_MOVIES_FAILURE, 
  ADD_MOVIE_REQUEST, 
  ADD_MOVIE_SUCCESS, 
  ADD_MOVIE_FAILURE, 
  UPDATE_MOVIE_REQUEST, 
  UPDATE_MOVIE_SUCCESS, 
  UPDATE_MOVIE_FAILURE, 
  DELETE_MOVIE_REQUEST, 
  DELETE_MOVIE_SUCCESS, 
  DELETE_MOVIE_FAILURE 
} from './actionTypes';

import axios from 'axios';

const apiUrl = 'http://localhost:3000/movies';

export const fetchMovies = () => {
  return (dispatch) => {
    dispatch(fetchMoviesRequest());
    axios.get(apiUrl)
      .then(response => {
        dispatch(fetchMoviesSuccess(response.data))
      })
      .catch(error => {
        dispatch(fetchMoviesFailure(error.message))
      });
  }
};

export const fetchMoviesRequest = () => {
  return {
    type: FETCH_MOVIES_REQUEST
  }
};

export const fetchMoviesSuccess = movies => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: movies
  }
};

// export const fetchMovies
