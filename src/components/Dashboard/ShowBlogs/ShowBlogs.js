import React, { useEffect, useState } from "react";

const ShowBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/blogs")
            .then((res) => res.json())
            .then((data) => setBlogs(data.blogs));
    }, []);

    // DELETE AN USER
    const handleDeleteBlog = (id) => {
        const proceed = window.confirm("Are you sure, you want to delete?");
        if (proceed) {
            const url = `http://localhost:5000/blogs/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.acknowledged) {
                        alert("Deleted Successfully");
                        const remainingUsers = blogs.filter(
                            (product) => product._id !== id
                        );
                        setBlogs(remainingUsers);
                    }
                });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center text-left">
            <table class="table-auto">
                <thead className="text-pink-600">
                    <tr>
                        <th className="px-5">Spots</th>
                        <th className="px-5">Location</th>
                        <th className="px-5">Cost</th>
                        <th className="px-5">Delete BLog</th>
                    </tr>
                </thead>
                {blogs.map((blog) => (
                    <tbody key={blog.id} className="text-pink-600">
                        <tr>
                            <td className="px-5">{blog.title}</td>
                            <td className="px-5">{blog.location}</td>
                            <td className="px-5">${blog.cost}</td>
                            <td className="px-5">
                                <button
                                    onClick={() => handleDeleteBlog(blog._id)}
                                    className="px-2 py-1 my-5 bg-pink-600 rounded text-white w-full"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    );
};

export default ShowBlogs;
