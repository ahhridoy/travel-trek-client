import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import TopRatedBlogs from "../TopRatedBlogs/TopRatedBlogs";
import "./Blogs.css";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const size = 10;

    useEffect(() => {
        fetch(
            `https://damp-stream-68541.herokuapp.com/blogs?page=${page}&&size=${size}`
        )
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data.blogs);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            });
    }, [page]);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div
                    className="col-span-1 p-5 mx-9 bg-white mt-16 mb-5"
                    data-aos="fade-right"
                >
                    <h1 className="font-bold text-2xl my-9 text-blue-600">
                        Top Rated Spots
                    </h1>
                    <TopRatedBlogs />
                </div>
                <div className="col-span-2">
                    <h1 className="font-bold text-3xl mt-16 mb-5 text-blue-600">
                        Most Beautiful Places In The World
                    </h1>
                    {blogs.map((blog) => (
                        <Blog key={blog.id} blog={blog} />
                    ))}
                </div>
            </div>

            <div className="pagination">
                {[...Array(pageCount).keys()].map((number) => (
                    <button
                        className={number === page ? "selected" : ""}
                        key={number}
                        onClick={() => setPage(number)}
                    >
                        {number + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
