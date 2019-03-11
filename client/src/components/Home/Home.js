import React from "react";
import { Carousel } from "react-bootstrap";
import "./Home.css";

const Home = () => (

<Carousel>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="https://res.cloudinary.com/q1962/image/upload/v1552069838/sample.jpg"
    alt="First slide"
  />
  <Carousel.Caption>
    <h3>First slide label</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="images/a-fleshy-plant-1494116_640.jpg"
    alt="Third slide"
  />

  <Carousel.Caption>
    <h3>Second slide label</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="images/cacti-1845159_640.jpg"
    alt="Third slide"
  />

  <Carousel.Caption>
    <h3>Third slide label</h3>
    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="images/Devils_Ivy.jpg"
    alt="Third slide"
  />

  <Carousel.Caption>
    <h3>Fourth slide label</h3>
    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>
  
  )
export default Home;