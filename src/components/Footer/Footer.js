import React from "react";

const Footer = () => {
  return (
    <div className="py-5 bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="">
          <h4 className="">Travel Trek</h4>
          <p className="">Address</p>
          <p className="">Los Angeles 90001, California, US</p>
        </div>

        <div className="">
          <p className="">Follow Us</p>
          <a href="https://facebook.com/juniorhridoyofficial">Facebook</a>{" "}
          <br />
          <a href="https://instagram.com/ahhridoyy">Instagram</a> <br />
          <a href="https://twitter.com/ahhridoyy">Twitter</a>
        </div>

        <div className="">
          <p className="">Our Services</p>
          <small className="">Camping Area for Tents</small> <br />
          <small className="">Caravan Solor Tents</small> <br />
          <small className="">Small Cavin Wood</small> <br />
        </div>
      </div>
      <div>
        <small className=""> 2021 All rights reserved.</small>
      </div>
    </div>
  );
};

export default Footer;
