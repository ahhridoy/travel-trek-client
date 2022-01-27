import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BLogDetails = () => {
  const [blog, setBlog] = useState({});
  const {id} = useParams();

  useEffect( () => {
    fetch(`http://localhost:5000/blogDetails/${id}`)
    .then(res => res.json())
    .then(data => setBlog(data))
  },[]);
  
  return (
    <div className="grid grid-cols-1 gap-3">
      <div className="p-9">
        <div className="flex items-center justify-center py-2">
          <img src={blog.image} alt="blog" />
        </div>
        <div>
          <h1 className="font-bold text-4xl py-2">{blog.title}</h1>
          <p>{blog.description}</p>
          <p className='font-bold text-2xl text-blue-600 py-2'>Total Cost: ${blog.cost}</p>
          <small>Location: {blog.location}</small>
          <p className="text-xl text-blue-600 py-2">Posted By: {blog.name}</p>
        </div>
      </div>
    </div>
  );
};

export default BLogDetails;