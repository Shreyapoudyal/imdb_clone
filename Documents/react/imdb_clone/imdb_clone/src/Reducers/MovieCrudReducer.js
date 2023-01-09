const initialState = {
  movie: {},
  success: false,
  message: "",
  loading: false,
  error: null,
};

function movieCrudReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_MOVIE_PENDING":
    case "UPDATE_MOVIE_PENDING":
    case "DELETE_MOVIE_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "ADD_MOVIE_FAILURE":
    case "UPDATE_MOVIE_FAILURE":
    case "DELETE_MOVIE_FAILURE":
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error,
      };
    case "ADD_MOVIE_SUCCESS":
      return {
        ...state,
        movie: action.movie,
        success: action.success,
        message: action.message,
        loading: false,
      };
    case "UPDATE_MOVIE_SUCCESS":
      return {
        ...state,
        movie: action.movie,
        message: action.message,
        success: action.success,
        loading: false,
      };
    case "DELETE_MOVIE_SUCCESS":
      return {
        ...state,
        movie: action.movie,
        success: action.success,
        message: action.message,
        loading: false,
      };
    default:
      return state;
  }
}

export default movieCrudReducer;
