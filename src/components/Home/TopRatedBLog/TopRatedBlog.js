import React from 'react';

const TopRatedBlog = ({blog}) => {
    const { image, title, cost, location } = blog;
    return (
      <div className="grid grid-cols-1 gap-3">
        <div className="p-5">
          <div className="flex items-center justify-center">
            <img src={image} alt="blog" />
          </div>
          <div>
            <h1 className="font-bold">{title}</h1>
            <p>Total Cost: ${cost}</p>
            <small>Location: {location}</small>
          </div>
        </div>
      </div>
    );
};

export default TopRatedBlog;