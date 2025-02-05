import React from 'react';
import { Carousel } from 'react-bootstrap';
import starbg from '../assets/bglogo.webp'
import bg2 from '../assets/bg2.webp'
import bg3 from '../assets/bg3.webp'
import bg4 from '../assets/bg4.webp'

const ImageSlider = () => {
  return (
    <div className="bg-container mb-4 mt-4 ">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src = {starbg}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={bg2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={bg3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={bg4}
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
