import React from "react";
import { useState, useEffect } from "react";
import MoviePoster from "./MoviePoster";
import { useNavigate } from "react-router-dom";

// import necessary libraries for making HTTP requests
import axios from "axios";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AddMovie from "./AddMovie";
import UpdateMovie from "./UpdateMovie";
// import MovieRating from "./Rating";
// import { Rating } from "react-simple-star-rating";

const token = localStorage.getItem("token");

function MovieCards() {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [tags, setTags] = useState("");
  const [poster, setPoster] = useState();
  const [movies, setMovies] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  //GET all API (movie)
  useEffect(() => {
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
  }, [movies]);

  const UpdateMovie = (e) => {
    const id = e.target.value;
    console.log("id", id);
    navigate(`/admin/updatemovie/${id}`);
  };

  // console.log(movies);

  if (error) {
    return <p>There was an error loading the movies.</p>;
  }

  if (!movies.length) {
    return <p>Loading movies...</p>;
  }

  return (
    <div>
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
