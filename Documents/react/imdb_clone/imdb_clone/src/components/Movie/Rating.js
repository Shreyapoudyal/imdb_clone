// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";

// function MovieRating({ movieId }) {
//   const dispatch = useDispatch();
//   const rating = useSelector((state) => state.movies[movieId].rating);

//   useEffect(() => {
//     // Fetch the current rating for the movie from the API
//     axios.get(`/api/movies/${movieId}/rating`).then((response) => {
//       dispatch({
//         type: "SET_MOVIE_RATING",
//         payload: {
//           movieId: movieId,
//           rating: response.data.rating,
//         },
//       });
//     });
//   }, []);

//   const handleRatingSubmit = (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const rating = formData.get("rating");

//     // Submit the new rating for the movie to the API
//     axios
//       .post(`/api/movies/${movieId}/rating`, {
//         rating: rating,
//       })
//       .then((response) => {
//         dispatch({
//           type: "SET_MOVIE_RATING",
//           payload: {
//             movieId: movieId,
//             rating: response.data.rating,
//           },
//         });
//       });
//   };

//   return (
//     <form onSubmit={handleRatingSubmit}>
//       <label>
//         Rating:
//         <input type="number" name="rating" min="0" max="10" />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default MovieRating;
