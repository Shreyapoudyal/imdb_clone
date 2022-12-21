import axios from "axios";

export const SIGNUP_INIT = () => {
  return {
    type: "SIGNUP_INIT",
  };
};

export const SIGNUP_SUCCESS = (data, role, token) => {
  return {
    type: "SIGNUP_SUCCESS",
    payload: {
      data,
      role,
      token,
    },
  };
};

export const SIGNUP_FAILED = (err) => {
  return {
    type: "SIGNUP_FAILED",
    payload: err,
  };
};

export const SIGNUP_API_CALL = (email, password, firstName, lastName) => {
  return async (dispatch) => {
    try {
      dispatch(SIGNUP_INIT());
      if (email && password && firstName && lastName) {
        const res = await axios.post(
          "http://localhost:2323/api/v1/user/signup",
          {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
          }
        );
        console.log(res);
        if (res.data.success === "true") {
          dispatch(SIGNUP_SUCCESS(res.data.message));
        } else {
          dispatch(SIGNUP_FAILED(res.data.message));
        }
      } else {
        dispatch(SIGNUP_FAILED("All fields are Required"));
      }
    } catch (error) {
      console.log(error);
      if (error) {
        if (error.response) {
          if (!error.response.data.success) {
            dispatch(SIGNUP_FAILED(error.response.data.message));
          }
        }
      }
    }
  };
};
