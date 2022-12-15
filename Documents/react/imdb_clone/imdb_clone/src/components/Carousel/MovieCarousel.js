import '../Carousel/Carousel.css'
import movie1 from '../MovieImages/TopGun.jpg'
import movie2 from '../MovieImages/MissionImpossible.jpg'
import movie3 from '../MovieImages/EdgeOfTomorrow.avif'
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function MovieCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="carousel"
    >
      <Carousel.Item>
        <img
          className="carouselItem"
          src={movie1}
          alt="Top Gun: Maverick"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselItem"
          src={movie2}
          alt="Mission Impossible"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselItem"
          src={movie3}
          alt="Edge of Tomorrow"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default MovieCarousel;