import React from "react";
import { useState, useEffect } from "react";
import MoviePoster from "./MoviePoster";

// import necessary libraries for making HTTP requests
import axios from "axios";

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

    // axios
    //   .get(
    //     `http://localhost:2323/api/v1/upload/${this.state.movies.id}/base64`,
    //     {
    //       headers: {
    //         authorization: `bearer ${token}`,
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     this.setState({ movies: [...this.state.movies, ...res.data.movie] });
    //   })
    //   .catch((err) => {
    //     this.setState({ error: err });
    //   });
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
            <h2>{movie.name}</h2>
            <p>{movie.year}</p>
            {console.log("poster", this.state.movies[0].poster)}
            <MoviePoster poster = {this.state.movies[0].poster}/>
          </div>
        ))}
      </div>
    );
  }
}

export default MovieCards;
