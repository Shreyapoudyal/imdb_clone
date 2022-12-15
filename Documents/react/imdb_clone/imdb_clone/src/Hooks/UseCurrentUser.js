import { useState, useEffect } from "react";
import axios from "axios";

const useCurrentUser = (currentUserAPI) => {
  // currentUserAPI = "http://localhost:2323/api/v1/user/currentUser";
  console.log("Inside useCheckCurrentUser");
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    if (!currentUser) {
      const token = localStorage.getItem("token");
      const role = localStorage.getItem("role");
      if (token && role.toString() === "user") {
        axios
          .get(currentUserAPI, {
            headers: {
              authorization: `bearer ${token}`,
            },
          })
          .then((res) => {
            console.log(res);
            if (res.data) {
              if (res.data.success) {
                setCurrentUser(res.data.user);
              }
            }
          });
      }
    }
  });

  return currentUser;
};

export default useCurrentUser;