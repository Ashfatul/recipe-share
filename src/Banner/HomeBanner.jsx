import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const HomeBanner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="slider-image" style={{backgroundImage: "url(https://i.ibb.co/7XXyNZB/s1.jpg)"}}></div>
        <Carousel.Caption>
          <h3>Quick and Easy Recipes</h3>
          <p>Discover quick and easy recipes for busy weeknights.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="slider-image" style={{backgroundImage: "url(https://i.ibb.co/gJ7HMYK/s2.jpg)"}}></div>

        <Carousel.Caption>
          <h3>Global Flavors</h3>
          <p>Explore a world of flavors with our diverse collection of international recipes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="slider-image" style={{backgroundImage: "url(https://i.ibb.co/g9FN5Hh/s3.jpg)"}}></div>

        <Carousel.Caption>
          <h3>Healthy Eating</h3>
          <p>
          Find delicious and nutritious recipes that promote a healthy lifestyle.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeBanner;