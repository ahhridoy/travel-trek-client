import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const { id, image, title, description, location } = blog;
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="col-span-2 p-5">
        <Link to={`/blogDetails/${id}`}>
          <div>
            <div className="flex items-center justify-center">
              <img src={image} alt="blog" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{title}</h1>
              <p>{description}</p>
              <small>{location}</small>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
