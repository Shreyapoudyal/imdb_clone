// import data from "../BootstrapData";
import "./AddMovie.css";
import { useState } from "react";
import axios from "axios";



function UpdateMovie() {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [tags, setTags] = useState("");
  // const [dateStr, setDateStr]=useState("");
  
 const onSelect = (e) => {
    // console.log(e.target.value);
    
      setGenre(e.target.value);
    
  };

const OnFileUpload = (e) => {
    console.log(e.target.files[0].name);
    // const str = `${e.target.files[0].name} modified at ${
    //   new Date(e.target.files[0].lastModified).toLocaleTimeString
    // }`;
    // setDateStr(str);
    

    // console.log(str);
  };

  const addMovie = async () => {
    debugger
    try {
      setError("");
      if (name && year && genre && tags) {
        const res = await axios.post(
          "http://localhost:2323/api/v1/user/login",
          {
            name: name,
            year: year,
            genre: genre,
            tags: tags,
          }
        );
        console.log(res);
        if (res.data.success) {
          console.log("hi");
          setError(
            "User logged in",
          );
          localStorage.setItem("token", res.data.token);
          console.log(localStorage.getItem("token"));
        } else {
          setError(res.data.message,
          );
        }
      }
    } catch (error) {
      console.log(error);
      if (error) {
        if (error.response) {
          if (!error.response.data.success) {
            setError(error.response.data.message,
            );
          }
        }
      }
    }
  };

    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Update Movie</h3>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                className="form-control "
                placeholder="Enter movie name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group-signin">
              <label>Launch Year</label>
              <input
                type="text"
                name="launchYear"
                className="form-control "
                placeholder="Enter launch year"
                onChange={(e) => {
                  setYear(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group-signin">
              <label>Genre</label>
              <select className="form-select" name="department" onChange={onSelect}>
                <option value="Comedy">Comedy</option>
                <option value="Action">Action</option>
                <option value="Romantic">Romantic</option>
              </select>
            </div>
            <div className="form-group-signin">
              <label>Tags</label>
              <input
                type="text"
                name="tags"
                className="form-control"
                placeholder="Enter tags"
                onChange={(e) => {
                  setTags(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group-signin">
              <label>Poster</label>
              <input
                type="file"
                onChange={OnFileUpload}
                name="tags"
                className="form-control"
                placeholder="Choose File"
                required
              />
            </div>
            <div className="form-group-signin d-grid gap-2">
              <input
                type="button"
                className="btn-addMovie"
                value="Add Movie"
                name="addMovie"
                onClick={addMovie}
              />

              {error}
            </div>
          </div>
        </form>
      </div>
    );
  }


export default UpdateMovie;
