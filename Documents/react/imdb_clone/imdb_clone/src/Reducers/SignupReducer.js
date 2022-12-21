export const signReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGNUP_INIT":
      return {
        signuploader: true,
      };

    case "SIGNUP_SUCCESS":
      return {
        signuploader: false,
        user: action.payload.data,
        token: action.payload.token,
        role: action.payload.role,
      };

    case "SIGNUP_FAILED":
      return {
        signuploader: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
