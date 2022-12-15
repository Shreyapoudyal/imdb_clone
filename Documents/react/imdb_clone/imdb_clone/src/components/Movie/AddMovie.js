// import data from "../BootstrapData";
import "./AddMovie.css";
import { useState } from "react";
import axios from "axios";
// import useCurrentAdmin from "../../Hooks/UseCurrentAdmin";
// import { useSelector } from "react-redux";

function AddMovie() {
  // const admin = useCurrentAdmin(
  //   "http://localhost:2323/api/v1/admin/currentAdmin"
  // );

  const token = localStorage.getItem("token");

  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [tags, setTags] = useState("");
  const [poster, setPoster] = useState();

  // useSelector((state) => console.log(state));

  // const OnFileUpload = (e) => {
  //     console.log(e.target.files[0].name);
  //     const str = `${e.target.files[0].name} modified at ${
  //       new Date(e.target.files[0].lastModified).toLocaleTimeString
  //     }`;
  //     this.setState({
  //       dateStr: str,
  //     });

  //     console.log(str);
  //   };

  const uploadFile = async (e) => {
    try {
      console.log("upload api called");

      setError("");
      // const { email, password } = this.state;
      if (e) {
        const formData = new FormData();
        formData.append("upload", e.target.files[0]);
        const res = await axios.post(
          "http://localhost:2323/api/v1/upload",
          formData,
          {
            headers: {
              authorization: `bearer ${token}`,
            },
          }
        );
        console.log(res);
        //console.log(res.data.token);

        if (res.data.success) {
          setError(res.data.message);
          if (res.data.upload) {
            setPoster(res.data.upload.id);
          } else {
            setError("Something went wrong");
          }
        } else {
          setError(res.data.message);
        }
      }
    } catch (ex) {
      if (ex.response) {
        if (ex.response.data) {
          if (!ex.response.data.success) {
            setError(ex.response.data.message);
          }
        }
      }
    }
  };

  const addMovie = async () => {
    try {
      setError("");
      if (name && year && genre && tags && poster) {
        const res = await axios.post(
          "http://localhost:2323/api/v1/movie",
          {
            name: name,
            year: year,
            poster: poster,
            genre: genre,
            tags: tags,
          },
          {
            headers: {
              authorization: `bearer ${token}`,
            },
          }
        );
        if (res.data.success) {
          setError(res.data.message);
        } else {
          setError(res.data.message);
        }
      } else {
        setError("All Fields are Required");
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
          <h3 className="Auth-form-title">Add Movie</h3>
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
            <select
              className="form-select"
              name="department"
              onChange={(e) => {
                setGenre(e.target.value);
              }}
            >
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
              onChange={(e) => {
                uploadFile(e);
              }}
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

export default AddMovie;
