
const initialStates={
    isLoggedIn: false,
    token: "",
    role: ""
}

const userReducer = (state = { initialStates }, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return { ...action.payload, isLoggedIn: true };
    case "LOGGED_OUT":
      return { ...action.payload, isLoggedIn: false };
    default:
      return state;
  }
};

export default userReducer;
