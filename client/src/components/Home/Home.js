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
    <h3>Welcome to Houseplants Advisor</h3>
    <p> Search flowers and foliges and succulents</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100 "
    
    src="images/a-fleshy-plant-1494116_640.jpg"
    alt="Third slide"
  />

  <Carousel.Caption>
    <h3>KAFFIR LILY PLANT</h3>
    <p>The clusters of spring time flowers the kaffir lily blooms</p>
    <p> makes this species well worth the effort needed to enable it to flower well.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="images/cacti-1845159_640.jpg"
    alt="Third slide"
  />

  <Carousel.Caption>
    <h3>Hatiora Gaertneri</h3>
    <p>Hatiora Gaertneri Tropical cactus that requires a certain amount of regular</p>
    <p> water in order to survive.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="images/wandering_jew.jpg"
    alt="Third slide"
  />

  <Carousel.Caption>
    <h3>Tradescantia</h3>
    <p>Tradescantia This species is a low growing plant suitable for </p>
    <p> planting in hanging baskets.amily.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="images/syngonium_podophyllum.jpg"
    alt="Third slide"
  />

  <Carousel.Caption>
    <h3>Syngonium Podophyllum</h3>
    <p>Syngonium Podophyllum Very similar species as the Philodendron </p>
    <p>and from the same.</p>
  </Carousel.Caption>
</Carousel.Item>

</Carousel>
  
  )
export default Home;