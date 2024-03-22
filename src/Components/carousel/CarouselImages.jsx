import React from 'react';
import styles from '../../app.module.css';

// ExampleCarouselImage component renders an image for the carousel
export default function ExampleCarouselImage(props) {
  return (
    <div>
      {/* Render image with specified URL and style */}
      <img src={props.text} alt="" className={styles.carouselImg} />
    </div>
  );
}
