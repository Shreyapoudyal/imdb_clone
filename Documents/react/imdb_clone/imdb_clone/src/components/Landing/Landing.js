import React from "react";
import "./Landing.css";
import Content from "./Content";
import MovieCarousel from "../Carousel/MovieCarousel";
import MovieCards from "../Movie/MovieCards";

const Landing = ({ isLoggedIn }) => {
  const contents = [
    "Reviews",
    "Listings",
    "All your Favourite Movies",
    "At one place",
    "Welcome to IMDB",
  ];
  return (
    <>
      {isLoggedIn ? (
        <h1>Welcome!!</h1>
      ) : (
        <div className="main-container">
          <MovieCarousel />
          <div id="sub-container">
            {/* {contents.map((cont) => {
              return <Content content={cont} />;
            })} */}
            <MovieCards />
          </div>
        </div>
      )}
    </>
  );
};
export default Landing;
