import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import TopRatedBlog from "../TopRatedBLog/TopRatedBlog";

const TopRatedBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/blogs")
            .then((res) => res.json())
            .then((data) => setBlogs(data.blogs));
    }, []);

    return (
        <div>
            {blogs.slice(9, 20).map((blog) => (
                <TopRatedBlog key={blog.id} blog={blog} />
            ))}
        </div>
    );
};

export default TopRatedBlogs;
