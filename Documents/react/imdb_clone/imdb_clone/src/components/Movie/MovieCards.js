import React from "react";

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

    axios
      .get(
        "http://localhost:2323/api/v1/upload/938f090817f39b31e92c90dee6a36d9a/base64",
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      )
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
            <h2>{movie.name}</h2>
            <p>{movie.year}</p>
            <p>{movie.plot_summary}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default MovieCards;
