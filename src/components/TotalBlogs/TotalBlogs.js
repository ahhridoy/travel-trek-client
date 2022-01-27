import React, { useEffect, useState } from 'react';
import TotalBlog from '../TotalBlog/TotalBlog';

const TotalBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
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