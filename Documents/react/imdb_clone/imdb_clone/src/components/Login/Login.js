import { useState, useEffect } from "react";
import "./Login.css";
import { useSelector, useDispatch } from "react-redux";
import { LOGIN_API_CALL, LOGIN_FAILED } from "../../Actions/AuthActions";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("authstate", authState);
  const navigate = useNavigate();

  useEffect(() => {
    if (authState.user && authState.token) {
      navigate("/moviecards");
    }
  }, [authState]);

  return (
    <form className="login">
      <div className="loginformContent">
        <h3 className="Auth-form-title">Login</h3>

        <div className="inputfield">
          <label for="email">Email</label> &nbsp;
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
            onClick={(e) => dispatch(LOGIN_API_CALL(email, password))}
          />
        </div>
        {authState.error || ""}
        {authState.message || ""}
      </div>
    </form>
  );
}
