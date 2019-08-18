import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div>
      <div className="header-container pt-3 pr-0">
        <div className="header-gradient pr-0" />
        <div className="row pr-0 col-11">
          <div className="col-sm-12 col-11 mt-1 ml-sm-3 ml-0 pr-0">
            <h2 id="header">Howard's Corner</h2>
            <p className="headerstitle mb-0">by Howard Liu, for all of you</p>
          </div>
        </div>
        <div className="header-links float-right">
          <div className="">
            <Link to="/" className="col-2 black-link">
              Home
            </Link>
            <Link to="/about" className="col-2 black-link">
              About
            </Link>
            <Link to="/blogs" className="col-2 mr-sm-0 mr-3 black-link">
              Blogs
            </Link>
          </div>
        </div>
      </div>
      <div className="header-placeholder" />
    </div>
  );
}

export default Header;
