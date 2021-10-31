import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../image/banner1.jpg'
import slider2 from '../../../image/banner4.jpg'
import slider3 from '../../../image/banner3.jpg'

const Banner = () => {
    return (
        <div>

<Carousel>
  <Carousel.Item className="carousel-design">
  <img
      className="d-block w-100"
      src={slider1}
      alt="First slide"
    />
  
  
    <Carousel.Caption className="styles">
      
      <button className="banner bg-dark text-white">About us</button>
      <button className="banners  text-white">Our Services</button>
    </Carousel.Caption>
  

   
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider2}
      alt="Second slide"
    />

    <Carousel.Caption>
 
      <button className="banner bg-dark text-white">About us</button>
      <button className="banners  text-white">Our Services</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider3}
      alt="Third slide"
    />

    <Carousel.Caption>
  
      <button className="banner bg-dark text-white">About us</button>
      <button className="banners  text-white">Our Services</button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            
        </div>
    );
};

export default Banner;