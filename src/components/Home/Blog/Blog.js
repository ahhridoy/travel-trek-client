import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
    const { _id, image, title, description, location, name } = blog;
    return (
        <div className="p-5 bg-white m-5 rounded" data-aos="fade-up">
            <Link to={`/blogDetails/${_id}`}>
                <div>
                    <div className="flex items-center justify-center py-2">
                        <img src={image} alt="blog" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold py-2">{title}</h1>
                        <p>"{description}"</p>
                        <small>Location: {location}.</small>
                        <p className="text-l text-blue-600 py-2">Posted by: {name}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Blog;
