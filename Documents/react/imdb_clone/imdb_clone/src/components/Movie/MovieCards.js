import React from "react";
import { useState, useEffect } from "react";
import MoviePoster from "./MoviePoster";

// import necessary libraries for making HTTP requests
import axios from "axios";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AddMovie from "./AddMovie";
import { Rating } from "react-simple-star-rating";

const token = localStorage.getItem("token");

class MovieCards extends React.Component {
  state = {
    movies: [], // array to store movie data
    error: null, // variable to store any errors that may occur
  };

  componentDidMount() {
    axios
      .get("http://localhost:2323/api/v1/movie", {
        headers: {
          authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        this.setState({ movies: [...this.state.movies, ...res.data.movie] });
      })
      .catch((err) => {
        this.setState({ error: err });
      });
  }

  render() {
    // retrieve the movie data from the component's state
    const { movies, error } = this.state;

    // if there is an error, display an error message
    if (error) {
      return <p>There was an error loading the movies.</p>;
    }

    // if there are no movies, display a loading message
    if (!movies.length) {
      return <p>Loading movies...</p>;
    }

    // map over the movie data to create a list of movie cards
    return (
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <Card style={{ width: "18rem" }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" */}
              <MoviePoster poster={movie.poster} />
              {/* /> */}
              <Card.Body>
                <Card.Title>{movie.name}</Card.Title>
                <Card.Text>{movie.year}</Card.Text>
                <Card.Text>{movie.genre}</Card.Text>
                <Card.Text>{movie.tags}</Card.Text>
                <Button variant="primary">Update</Button>
              </Card.Body>
            </Card>
            {console.log("poster", movie.poster)}
          </div>
        ))}
        {/* <Rating /> */}

        <AddMovie />
      </div>
    );
  }
}

export default MovieCards;
