import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BLogDetails = () => {
  const [blog, setBLog] = useState({});
  const {id} = useParams();

  useEffect( () => {
    fetch(`./fakeData/${id}`)
    .then(res => res.json())
    .then(data => console.log(data))
  },[]);
  
  return (
    <div>
      Blogs Details
    </div>
  );
};

export default BLogDetails;