import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import banner1 from "../../../images/banner1.png";
import banner2 from "../../../images/banner2.png";
import banner3 from "../../../images/banner3.png";
import useAuth from "../../hooks/useAuth";
import "./Banner.css";

const Banner = () => {
  const {user} = useAuth();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div data-aos="zoom-in">
      <div className="mx-9">
        <Slider {...settings}>
          <div>
            <img src={banner1} alt="" banner />
          </div>
          <div>
            <img src={banner2} alt="" banner />
          </div>
          <div>
            <img src={banner3} alt="" banner />
          </div>
        </Slider>
      </div>
      { user?.email &&
        <Link to="/dashboard/postBlogs">
        <button className="font-bold my-9 bg-blue-600 px-3 py-2 rounded text-white w-full">
          Post Your Blog
        </button>
      </Link>}
    </div>
  );
};

export default Banner;
