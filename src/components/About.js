import React from "react";
import "./About.css";
import ProgressiveImage from "./ProgressiveImage";

function About() {
  return (
    <div classname="mb-3 mb-sm-0">
      <div style={{ float: "left" }}>
        <ProgressiveImage
          preview="images/think-small.jpg"
          image="images/think-large.jpg"
          className="about-image mr-0 mr-sm-3 mb-2 mb-sm-1"
          alt="Howard"
        />
      </div>
      <p>
        <h3 id="header">About me</h3>
        <br />
        <p>I'm Howard, a web developer in Melbourne.</p>

        <p>
          I currently work for Revel, a startup aiming to connect event hosts
          with local services. My role mostly involves front end design and
          implementation using ReactJS and CSS, but other times it extends to
          NodeJS and MongoDB.
        </p>

        <p>
          I have also worked as a business analyst and volunteered as a
          campaigns advisor. This allowed me to gain experience in a wide range
          of skills, including media creation and distribution, as well as team
          communication. I also recently finished my Bachelors of Science,
          majoring in Mechatronics.
        </p>

        <p>
          I was born in Taichung, Taiwan and moved to Auckland, New Zealand for
          most of my life, then I moved to Melbourne. I enjoy reading, running
          and going to dog beaches.
        </p>
        <p>
          Visit my portfolio at{" "}
          <a href="https://howard-liu.github.io/me/" target="_blank">
            https://howard-liu.github.io/me/
          </a>
        </p>
      </p>
    </div>
  );
}

export default About;
