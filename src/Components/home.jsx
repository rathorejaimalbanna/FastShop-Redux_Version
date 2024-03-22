import React from "react";
import styles from "../app.module.css";
import ControlledCarousel from "./carousel/carousel";
import Aside from "./aside section/aside";
import Product from "./products/product";


// Home component renders the home page layout
export default function Home() {
  return (
    <div className={styles.container}>
      {/* Render search bar with carousel */}
      <div className={styles.searchBar}>
        <ControlledCarousel />
      </div>
      {/* Render content section */}
      <div className={styles.contentDiv}>
        {/* Render aside section */}
        <div className={styles.aside}>
          <Aside />
        </div>
        {/* Render products section */}
        <div className={styles.products}>
          <Product />
        </div>
      </div>
    </div>
  );
}
