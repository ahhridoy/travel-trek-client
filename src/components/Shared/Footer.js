import React from "react";

const Footer = () => {
  return (
    <div className="py-5 bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div>
          <h4 className="font-bold">Travel Trek</h4>
          <p>Address</p>
          <p>Los Angeles 90001, California, US</p>
        </div>

        <div className="">
          <p className="font-bold">Follow Us</p>
          <a href="https://facebook.com/juniorhridoyofficial">Facebook</a>{" "}
          <br />
          <a href="https://instagram.com/ahhridoyy">Instagram</a> <br />
          <a href="https://twitter.com/ahhridoyy">Twitter</a>
        </div>

        <div>
          <p className="font-bold">Our Services</p>
          <small>Camping Area for Tents</small> <br />
          <small>Caravan Solor Tents</small> <br />
          <small>Small Cavin Wood</small> <br />
        </div>
      </div> <br />
      <div>
        <small> 2021 All rights reserved.</small>
      </div>
    </div>
  );
};

export default Footer;
