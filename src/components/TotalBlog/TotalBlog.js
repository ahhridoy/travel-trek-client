import React from "react";
import { Link } from "react-router-dom";

const TotalBlog = ({ blog }) => {
    const { _id, image, title, description, location, name } = blog;
    return (
        <div className="grid grid-cols-1 gap-3">
            <div className="p-5">
                <Link to={`/blogDetails/${_id}`}>
                    <div>
                        <div className="flex items-center justify-center">
                            <img src={image} alt="blog" />
                        </div>
                        <div>
                            <h1 className="font-bold">{title}</h1>
                            <p>{description}</p>
                            <small>Location: {location}</small>
                            <p className="text-xl text-blue-600 py-2">Posted By: {name}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default TotalBlog;
