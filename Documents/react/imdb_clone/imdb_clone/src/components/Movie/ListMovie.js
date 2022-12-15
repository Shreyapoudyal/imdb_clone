import "./ListMovie.css";
import Movies from "../BootstrapData/index";
import { BsFillStarFill, BsStar, BsBookmarkStar } from "react-icons/bs";

function ListMovie() {

  useEffect(() => {
    const getMovie = async () => {
      if (user) {
        const res = await axios.get("http://localhost:2323/api/v1/movie", {
          headers: {
            authorization: `bearer ${localStorage.getItem("token")}`,
          },
        });

        if (res) {
          console.log(res);
          // setMovie1(res.data.movie)
        }
      }
    };
    getMovie();
  }, [user]);
  
  console.log(Movies);
  const movie = Movies.movies.list;
  console.log(movie);
  return (
    <div>
      <div className="main-container">
        <div className="movie-list">
          <h3 className="title">Movie Charts</h3>
          <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col" className="img-cell"></th>
                <th scope="col" className="rank">
                  Rank & Title
                </th>
                <th scope="col" className="imdbRating">
                  IMDB Rating
                </th>
                <th scope="col" className="yourRating">
                  Your Rating
                </th>
                <th scope="col" className="wishlist">
                  WatchList
                </th>
              </tr>
            </thead>
            <tbody>
              {movie.map((movie, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">
  <img src={movie.posterUrl} alt="poster" />
                    </th>
                    <td>
                      {movie.name} ({movie.year})
                    </td>
                    <td>
                      <BsFillStarFill />
                      {movie.rating}
                    </td>
                    <td>
                      <BsStar />
                      {movie.yourRating}
                    </td>
                    <td>
                      <BsBookmarkStar />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListMovie;
