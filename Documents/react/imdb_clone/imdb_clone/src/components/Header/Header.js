import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LOGIN_INIT, LOGIN_FAILED } from "../../Actions/AuthActions";

function Header(props) {

  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
          dispatch(LOGIN_INIT());

  };

  return (
    <div>
      {!localStorage.getItem("token") ? (
        <div className="imdb-header">
          <Link to="/">
            <div id="logo" onClick={props.onLogoClick}>
              <img
                id="imdb-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                alt="IMDb LOGO"
              />
            </div>
          </Link>
          <div id="title">IMDb Clone</div>

          <div id="button">
            <Link to="/user/signup">
              <input
                type="button"
                name="signup"
                value="Signup"
                onClick={props.onSignupClick}
                className="header-buttons"
              />
            </Link>
            <Link to="/user/login">
              {" "}
              <input
                type="button"
                name="login"
                value="Login"
                className="header-buttons "
                onClick={props.onLoginClick}
              />
            </Link>
          </div>

          <div id="button">
            <Link to="/admin/signup">
              <input
                type="button"
                name="signup"
                value="Admin Signup"
                onClick={props.onSignupClick}
                className="header-buttons"
              />
            </Link>
            <Link to="/admin/login">
              {" "}
              <input
                type="button"
                name="login"
                value="Admin Login"
                className="header-buttons "
                onClick={props.onLoginClick}
              />
            </Link>
          </div>
        </div>
      ) : (
        <div className="imdb-header">
          <Link to="/">
            <div id="logo">
              <img
                id="imdb-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                alt="IMDB LOGO"
              />
            </div>
          </Link>

          <div id="title">IMDb Clone</div>
          <div id="button">
            <Link to="/user/login">
              <input
                type="button"
                name="logout"
                value="logout"
                className="header-buttons"
                onClick={logout}
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
export default Header;

// import React, { Component } from 'react'
// import "./header.css";

// export default class Header extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedIn: true,
//     };
//   }

//   setLoginState = (e) => {
//     this.setState({
//       isLoggedIn: false
//     })
//   }

//   render() {
//     return (
//       <div className="imdb-header">
//         <div className="logo">
//           <img id="logo-img" src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" alt="logo-img" />
//         </div>
//         <div className="title">IMDB Clone</div>
//         <div className="buttons">
//           {this.state.isLoggedIn === false && <input
//             type="button"
//             name="signup"
//             id="signupButton"
//             value="Sign Up"
//             className="headerButtons"
//           />}

//           <input
//             type="button"
//             name="login"
//             id="loginButton"
//             value={this.state.isLoggedIn ? "Logout" : "Login"}
//             className="headerButtons"
//             onClick = {this.setLoginState}
//           />
//         </div>
//       </div>
//     );
//   }
// }
