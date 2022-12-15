import "./Login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { LOGGED_IN } from "../../Actions/UserActions";

import axios from "axios";
import { redirect } from "react-router-dom";

export default function AdminLogin() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const UserAction = useSelector((state) => state.UserAction);
  const dispatch = useDispatch();

  const login = async () => {
    try {
      setError("");
      if (email && password) {
        const res = await axios.post(
          "http://localhost:2323/api/v1/admin/login",
          {
            email: email,
            password: password,
          }
        );
        console.log(res);
        if (res.data.success) {
          console.log("success");
          setError("Admin logged in");
          dispatch(LOGGED_IN(res.data.admin));
          localStorage.setItem("token", res.data.token);
          console.log(localStorage.getItem("token"));
          localStorage.setItem("role", "admin");
          redirect("/admin/addmovie");
          // window.location.replace("/admin/addmovie");
        } else {
          setError(res.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      if (error) {
        if (error.response) {
          if (!error.response.data.success) {
            setError(error.response.data.message);
          }
        }
      }
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Admin Login</h3>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <br />
          <div className="inputfield">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <br />
          <div className="btn-login">
            <input
              id="submitButton"
              type="button"
              value="Login"
              onClick={login}
            />
          </div>
          <div>{error}</div>
        </div>
      </form>
    </div>
  );
}
