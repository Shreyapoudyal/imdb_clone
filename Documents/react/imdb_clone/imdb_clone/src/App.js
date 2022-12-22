import "./App.css";
import Base from "./Base";
import "bootstrap/dist/css/bootstrap.min.css";
import AddMovie from "./components/Movie/AddMovie";
import ListMovie from "./components/Movie/ListMovie";
import AdminLogin from "./components/Login/AdminLogin";
import AdminSignUp from "./components/Login/AdminSignUp";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import MovieDetails from "./components/Movie/MovieDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import UpdateMovie from "./components/Movie/UpdateMovie";

import { Provider } from "react-redux";
// import { legacy_createStore as createStore } from "redux";

import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import userReducer from "./Reducers/UserReducer";
import { authReducer } from "./Reducers/AuthReducer";
// import userReducer from "./Reducers/UserReducer";
import { signReducer } from "./Reducers/SignupReducer";
import MovieCards from "./components/Movie/MovieCards";

const store = configureStore({
  reducer: combineReducers({
    auth: authReducer,
    sign: signReducer,
  }),
});

function App() {
  // static getDerivedStateFromProps(props, state) {
  //   if (props.isLoggedIn) {
  //     return {
  //       ...state,
  //       isLoggedIn: !!props.isLoggedIn,
  //     };
  //   }
  //   console.log("this is getDerievedStateFromProps");
  // }

  // showLoginForm = (e) => {
  //   console.log("Log in called");
  //   this.setState({
  //     showLogin: true,
  //     showSignUp: false,
  //   });
  //   if(localStorage.token){
  //     this.setState({
  //       isLoggedIn: true,
  //     })
  //   }
  // };

  // showSignupForm = (e) => {
  //   console.log("Signup in called");
  //   this.setState({
  //     showSignUp: true,
  //     showLogin: false,
  //   });
  // };

  // showLanding = () => {
  //   this.setState({
  //     showSignUp: false,
  //     showLogin: false,
  //   });
  // };

  // console.log(this.state.isLoggedIn);
  return (
    <div className="bg-black">
      {/* <Header
          isLoggedIn={this.state.isLoggedIn}
          onLoginClick={this.showLoginForm}
          onSignupClick={this.showSignupForm}
          onLogoClick={this.showLanding}
        /> */}

      {/* <ListMovie/> */}
      {/*         
        {this.state.showSignUp ? (
          <SignUp />
        ) : this.state.showLogin ? (
          <Login />
        ) : (
          <Landing isLoggedIn={this.state.isLoggedIn} />
        )} */}

      {/* {this.state.isLoggedIn? <Landing/>:0} */}

      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Base />}>
              <Route index element={<Landing />} />

              <Route path="/listmovie" element={<ListMovie />} />
              <Route path="/moviedetails/:name" element={<MovieDetails />} />

              <Route path="/admin/moviecards" element={<MovieCards />} />

              <Route path="/admin/addmovie" element={<AddMovie />} />

              <Route path="/admin/updatemovie" element={<UpdateMovie />} />
              <Route path="/user/login" element={<Login />} />
              <Route path="/user/signup" element={<SignUp />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/signup" element={<AdminSignUp />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
