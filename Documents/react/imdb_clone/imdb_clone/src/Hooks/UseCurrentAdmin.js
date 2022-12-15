import { useState, useEffect } from "react";
import axios from "axios";

const useCurrentAdmin = (currentUserAPI) => {
  // currentUserAPI = "http://localhost:2323/api/v1/admin/currentAdmin";

  console.log("Inside useCheckAdmin");
  const [currentAdmin, setCurrentAdmin] = useState();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  useEffect(() => {
    if (!currentAdmin) {
      if (token && role.toString() === "admin") {
        axios
          .get(currentUserAPI, {
            headers: {
              authorization: `bearer ${token}`,
            },
          })
          .then((res) => {
            if (res.data) {
              if (res.data.success) {
                setCurrentAdmin(res.data.admin);
              }
            }
          })
          .catch(() => {
            window.location.replace("/admin/login");
          });
      } else {
        window.location.replace("/admin/login");
      }
    }
  });

  return currentAdmin;
};

export default useCurrentAdmin;