import "./MovieDetails.css";
import Movies from "../BootstrapData/index";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function MovieDetails(props) {
  console.log(Movies);
  const movie = Movies.movies.list;
  console.log(movie);

  const [movieSelected, setMovieSelected] = useState({});

  let params = useParams();
  console.log(params);

  useEffect(() => {
    const name = params.name;
    // debugger;
    const selectMovie = movie.find((e) => {
      return e.name === name;
    });
    setMovieSelected(selectMovie);
  }, [movie, params.name]);

  //   console.log(movieSelected);

  return (
    <div>
      <div className="details-container">
        <div className="movie-details">
          <h3 className="movie-details">Movie Details</h3>

          {/* {movie.map((movie, i) => { */}
          {/* return ( */}
          <div
          //    key={i}
          >
            {/* <div scope="row"> */}
            <div className="movie-title">{movieSelected.name}</div>

            <div className="img-display">
              <img src={movieSelected.image} alt="poster" />
            </div>
            {/* </div> */}
            <div className="movie-genre"> {movieSelected.genre}</div>

            <div className="movie-tagLine"> {movieSelected.tagline}</div>

            <div className="movie-rank">Rank: {movieSelected.rank}</div>
            <div className="release-year">
              Year:
              {movieSelected.year}
            </div>
            <div className="movie-yourRating">
              Your rating: {movieSelected.yourRating}
            </div>
            <div className="movie-description">
              {" "}
              {movieSelected.description}
            </div>

            <div className="movie-numberOfRatings">
              Number of Ratings{movieSelected.numberOfRatings}
            </div>
          </div>
          {/* ); */}
          {/* })} */}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
