import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BLogDetails = () => {
    const [blog, setBlog] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://damp-stream-68541.herokuapp.com/blogDetails/${id}`)
            .then((res) => res.json())
            .then((data) => setBlog(data));
    }, []);

    return (
        <div className="grid grid-cols-1 gap-3 bg-white">
            <div className="p-9">
                <div className="flex items-center justify-center py-2">
                    <img src={blog.image} alt="blog" />
                </div>
                <div>
                    <h1 className="font-bold text-4xl py-2">{blog.title}</h1>
                    <p>"{blog.description}"</p>
                    <p className="font-bold text-2xl text-blue-600 py-2">
                        Total cost: ${blog.cost}
                    </p>
                    <small>Location: {blog.location}.</small> <br />
                    <small>Rating: {blog.rating} out of 5</small>
                    <p className="text-l text-blue-600 py-2">
                        He/She was there from {blog.date}
                    </p>
                    <p className="text-l">Posted by: {blog.name}</p>
                </div>
            </div>
        </div>
    );
};

export default BLogDetails;
