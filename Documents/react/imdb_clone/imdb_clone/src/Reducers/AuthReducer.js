export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_INIT":
      return {
        loginloader: true,
      };

    case "LOGIN_SUCCESS":
      return {
        loginloader: false,
        user: action.payload,
      };

    case "LOGIN_FAILED":
      return {
        loginloader: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
