import React from "react";
import { useState, useEffect } from "react";
import MoviePoster from "./MoviePoster";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import axios from "axios";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AddMovie from "./AddMovie";
import UpdateMovie from "./UpdateMovie";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../Actions/MovieCrudActions";
import YourRating from "./Rating";
import MoviesRatingAvgAPI from "./MoviesRatingAvgAPI";

const token = localStorage.getItem("token");

function MovieCards() {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [tags, setTags] = useState("");
  const [poster, setPoster] = useState();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [ratingAvg, setRatingAvg] = useState(0);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //  const id = e.target.value;
  //  console.log("id", id);

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

  // const AddMovie = (e) => {
  //   navigate("/admin/addmovie");
  // };

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
      {/* <Button variant="primary" onClick={AddMovie}>
        Add Movie
      </Button> */}
      <Row>
        {movies.map((movie) => (
          <Col>
            <div key={movie.id}>
              <Card className="m-4" style={{ width: "18rem" }}>
                <MoviePoster poster={movie.poster} />
                <Card.Body>
                  <Card.Title>{movie.name}</Card.Title>
                  <Card.Text>{movie.year}</Card.Text>
                  <Card.Text>{movie.genre}</Card.Text>
                  <Card.Text>{movie.tags}</Card.Text>
                  <center>
                    <MoviesRatingAvgAPI id={movie.id} />
                    <YourRating {...movie} />{" "}
                  </center>
                  <Button
                    value={movie.id}
                    variant="primary"
                    onClick={UpdateMovie}
                  >
                    Update
                  </Button>{" "}
                  <Button
                    value={movie.id}
                    variant="danger"
                    onClick={() => {
                      dispatch(deleteMovie(movie.id));
                      window.location.reload();
                    }}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>

              {console.log("poster", movie.poster)}
            </div>
          </Col>
        ))}
      </Row>
      <AddMovie />
    </div>
  );
}

export default MovieCards;
