import React, { useEffect, useState } from "react";
import TotalBlog from "../TotalBlog/TotalBlog";

const TotalBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("https://damp-stream-68541.herokuapp.com/blogs")
            .then((res) => res.json())
            .then((data) => setBlogs(data.blogs));
    }, []);
    return (
        <div>
            {blogs.map((blog) => (
                <TotalBlog key={blog.id} blog={blog} />
            ))}
        </div>
    );
};

export default TotalBlogs;
