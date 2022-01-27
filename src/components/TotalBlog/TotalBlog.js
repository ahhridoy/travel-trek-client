import React from 'react';

const TotalBlog = ({blog}) => {
  const { image, title, description, location } = blog;
  return (
    <div className="grid grid-cols-1 gap-3">
      <div className="p-5">
        <div className="flex items-center justify-center">
          <img src={image} alt="blog" />
        </div>
        <div>
          <h1 className="font-bold">{title}</h1>
          <p>{description}</p>
          <small>{location}</small>
        </div>
      </div>
    </div>
  );
};

export default TotalBlog;