import React from "react";
import { useState, useEffect } from "react";
import MoviePoster from "./MoviePoster";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AddMovie from "./AddMovie";
import UpdateMovie from "./UpdateMovie";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../Actions/MovieCrudActions";

const token = localStorage.getItem("token");

function MovieCards() {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [tags, setTags] = useState("");
  const [poster, setPoster] = useState();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //GET all API (movie)
  useEffect(() => {
    console.log("fetching");
    axios
      .get("http://localhost:2323/api/v1/movie", {
        headers: {
          authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        setMovies(res.data.movie);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  const UpdateMovie = (e) => {
    const id = e.target.value;
    console.log("id", id);
    navigate(`/admin/updatemovie/${id}`);
  };

  // console.log("movies", movies);

  if (error) {
    return <p>There was an error loading the movies.</p>;
  }

  // if (!movies.length) {
  //   return <p>Loading movies...</p>;
  // }

  return (
    <div>
      {console.log("from movie cards")}
      {movies.map((movie) => (
        <div key={movie.id}>
          <Card style={{ width: "18rem" }}>
            <MoviePoster poster={movie.poster} />
            <Card.Body>
              <Card.Title>{movie.name}</Card.Title>
              <Card.Text>{movie.year}</Card.Text>
              <Card.Text>{movie.genre}</Card.Text>
              <Card.Text>{movie.tags}</Card.Text>
              <Button value={movie.id} variant="primary" onClick={UpdateMovie}>
                Update
              </Button>
              <Button
                value={movie.id}
                variant="danger"
                onClick={() => dispatch(deleteMovie(movie.id))}
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
          {console.log("poster", movie.poster)}
        </div>
      ))}
      {/* <Rating /> */}
      {/* <MovieRating /> */}
      <AddMovie />
    </div>
  );
}

export default MovieCards;
