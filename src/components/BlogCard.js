import React from "react";
import { Link, useLocation } from "react-router-dom";

const BlogCard = () => {
  let location = useLocation();
  return (
    <div className={`${location.pathname === "/blogs" ? "col-6" : "col-3"}`}>
      <div className="blog-card mb-3">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">8 Mar, 2023</p>
          <h5 className="title">A beautiful sunday morning renaissance</h5>
          <p className="desc">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
          <Link to="/" className="button">
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
