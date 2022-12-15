import React, { useState } from "react";
import "./AdminSignUp.css";
import axios from "axios";

const AdminSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const setFirstNameOnChange = (e) => {
    setFirstName(e.target.value);
  };

  const setLastNameOnChange = (e) => {
    setLastName(e.target.value);
  };

  const setEmailOnChange = (e) => {
    console.log("Inside setEmailOnChange");
    setEmail(e.target.value);
  };

  const setPasswordOnChange = (e) => {
    setPassword(e.target.value);
  };

  const adminSignup = async (e) => {
    try {
      console.log(e.target.name);
      setError("");
      if (email && password && firstName && lastName) {
        const res = await axios.post(
          "http://localhost:2323/api/v1/admin/signup",
          {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
          }
        );
        console.log(res);
        if (res.data.success) {
          setError(res.data.message);
          window.location.replace("/admin/login");
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
    <form className="adminSignUp">
      <div className="adminSignUpFormContent">
        <div className="formTitle">
          <h1 className="adminSignUpTitle">Add Admin</h1>
        </div>
        <div className="adminSignUpInput">
          <label for="fName">First Name</label>
          <input
            type="text"
            id="fName"
            name="firstName"
            onChange={setFirstNameOnChange}
            required
          />
        </div>
        <br />
        <div className="adminSignUpInput">
          <label for="lName">Last Name</label>
          <input
            type="text"
            id="lName"
            name="lastName"
            onChange={setLastNameOnChange}
            required
          />
        </div>
        <br />
        <div className="adminSignUpInput">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={setEmailOnChange}
            required
          />
        </div>
        <br />
        <div className="adminSignUpInput">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={setPasswordOnChange}
            required
          />
        </div>
        <br />
        <div className="adminSignUpSubmitDiv">
          <input
            id="submitButton"
            type="button"
            value="Signup"
            name="signup"
            onClick={adminSignup}
          />
        </div>
        <div>{error}</div>
      </div>
    </form>
  );
};

export default AdminSignUp;
