import axios from "axios";

export const LOGIN_INIT = () => {
  return {
    type: "LOGIN_INIT",
  };
};

export const LOGIN_SUCCESS = (data) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: data,
  };
};

export const LOGIN_FAILED = (err) => {
  return {
    type: "LOGIN_FAILED",
    payload: err,
  };
};

export const LOGIN_API_CALL = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(LOGIN_INIT());
      if (email && password) {
        const res = await axios.post(
          "http://localhost:2323/api/v1/user/login",
          {
            email: email,
            password: password,
          }
        );
        console.log(res);
        if (res.data.success) {
          dispatch(LOGIN_SUCCESS(res.data));
          localStorage.setItem("token", res.data.token);
          console.log(localStorage.getItem("token"));
          localStorage.setItem("role", "user");
          
        }
      } else {
        dispatch(LOGIN_FAILED("Email and Password are Required"));
      }
    } catch (error) {
      console.log(error);
      if (error) {
        if (error.response) {
          if (!error.response.data.success) {
            dispatch(LOGIN_FAILED(error.response.data.message));
          }
        }
      }
    }
  };
};
