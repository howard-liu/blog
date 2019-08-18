import React from "react";
import { Link } from "react-router-dom";
import ProgressiveImage from "./ProgressiveImage";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="home-image-container">
        <ProgressiveImage
          preview="./images/header-small.jpg"
          image="./images/header-large.jpg"
          className="home-image"
          alt="Home"
        />
        <div className="home-image-text">
          <h1>
            Hello <br />
            I'm Howard Liu
          </h1>
          <Link to="/blogs" className="home-blog-button">
            View Blog
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
