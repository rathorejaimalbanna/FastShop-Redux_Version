import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './CarouselImages';

// ControlledCarousel component renders a controlled carousel
function ControlledCarousel() {
  // State to track the index of the active carousel item
  const [index, setIndex] = useState(0);

  // Function to handle the selection of a carousel item
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {/* Render carousel items */}
      <Carousel.Item >
        {/* Render ExampleCarouselImage with specified image URL */}
        <ExampleCarouselImage text="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/67b53826ce8284e0.jpeg?q=20" />
        <Carousel.Caption>
          {/* Optional caption */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        {/* Render ExampleCarouselImage with specified image URL */}
        <ExampleCarouselImage  text="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/0f9ecd9ce4f86cfa.jpg?q=20" />
        <Carousel.Caption>
          {/* Optional caption */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        {/* Render ExampleCarouselImage with specified image URL */}
        <ExampleCarouselImage  text="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/0944d5fb3c43e1de.jpeg?q=20" />
        <Carousel.Caption>
          {/* Optional caption */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
