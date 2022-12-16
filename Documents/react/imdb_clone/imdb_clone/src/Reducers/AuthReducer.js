export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_INIT":
      return {
        loginloader: true,
      };

    case "LOGIN_SUCCESS":
      return {
        loginloader: false,
        user: action.payload.data,
        token: action.payload.token,
        role: action.payload.role,
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
