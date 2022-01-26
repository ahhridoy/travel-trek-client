import React from 'react';
import Banner from '../Banner/Banner';
import BlogPosts from '../BlogPosts/BlogPosts';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <BlogPosts />
      <Footer />
    </div>
  );
};

export default Home;