import React from 'react';
import Zuri from '../images/logo.png';
import Ingressive from '../images/I4G.png';

const Footer = () => (
  <footer className="mt-[100px]">
    <hr />
    <div className=" lg:flex lg:gap-[350px] lg:items-center lg:mt-[100px]">
      <img src={Zuri} alt="Zuri_Logo" />
      <p className="one">HNG Internship 9 Frontend Task</p>
      <img src={Ingressive} alt="Ingressive_Logo" />
    </div>
  </footer>
);

export default Footer;
