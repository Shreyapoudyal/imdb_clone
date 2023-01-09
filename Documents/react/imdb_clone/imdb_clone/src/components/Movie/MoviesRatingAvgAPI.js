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
import YourRating from "./Rating";

const MoviesRatingAvgAPI = (props) => {
  console.log("props", props);
  const token = localStorage.getItem("token");
  const [ratingAvg, setRatingAvg] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:2323/api/v1/rating/movie/${props.id}/avg`, {
        headers: {
          authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("rating avg API", res);
        if (res.data.success) {
          //ratingAvg.current = res.data.rating;
          setRatingAvg(res.data.rating);
          console.log("rateAvg", ratingAvg);
        }
      });
  }, [ratingAvg]);

  return <div>{ratingAvg}</div>;
};

export default MoviesRatingAvgAPI;
