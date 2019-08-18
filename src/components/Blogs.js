import React from "react";
import { Link } from "react-router-dom";
import ProgressiveImage from "./ProgressiveImage";
import "./Blogs.css";

function Blogs() {
  return (
    <div>
      <div className="row">
        <div className="blog-card">
          <Link to="/pressure-cooker" className="blog-link black-link">
            <div className="">
              <h4>Pressure Cooker</h4>
              <ProgressiveImage
                preview="images/pressurecooker-small.jpg"
                image="images/pressurecooker-large.jpg"
                className="col-12"
                alt="Pressure Cooker"
              />
            </div>
          </Link>
        </div>
        <div className="blog-card">
          <Link to="/toggle-x-workflow" className="blog-link black-link">
            <div>
              <h4>Toggle x Workflow</h4>
              <ProgressiveImage
                preview="images/togglexworkflow-small.png"
                image="images/togglexworkflow-large.png"
                className="col-12"
                alt="Toggle x Workflow"
              />
            </div>
          </Link>
        </div>
        <div className="blog-card last">
          <Link to="/ets2" className="blog-link black-link">
            <div>
              <h4>Euro Truck Simulator 2</h4>
              <ProgressiveImage
                preview="images/ets2-small.png"
                image="images/ets2-large.png"
                className="col-12"
                alt="Euro Truck Simulator 2"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
