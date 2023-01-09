import axios from "axios";
import { useState, useEffect } from "react";

const MoviePoster = (props) => {
  const { poster } = props;
  const [posterUrl, setPosterUrl] = useState(
    "https://media.istockphoto.com/id/1216251206/vector/no-image-available-icon.jpg?b=1&s=170667a&w=0&k=20&c=MiWLEcUdxZONMlnsN_k5OCaz_nLviJB0Hvcz5Wlp5oI="
  );

  console.log("from movie poster component", poster);

  useEffect(() => {
    const getPoster = async () => {
      try {
        const res = await axios.get(
          `http://localhost:2323/api/v1/upload/${poster}/base64`,
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (res) {
          setPosterUrl(`data:image/png;base64,${res.data}`);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getPoster();
  }, [poster, setPosterUrl]);

  return <img height="220px" src={posterUrl} alt="Movie Poster" />;
};

export default MoviePoster;
