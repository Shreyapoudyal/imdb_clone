export const LOGGED_IN = (user) => {
  return {
    type: "LOGGED_IN",
    payload: {
      user,
    },
  };
};

export const LOGGED_OUT = () => {
  return {
    type: "LOGGED_OUT",
    payload: {},
  };
};
