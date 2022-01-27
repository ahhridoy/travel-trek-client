import React from 'react';
import Footer from '../../Shared/Footer';
import Header from '../../Shared/Header';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';


const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;