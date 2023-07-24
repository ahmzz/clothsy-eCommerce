import React from "react";
import footerImg from '../../imgs/payments.png'
import './Footer.scss'
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Categories</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            blanditiis facere ipsum eveniet sint, repudiandae consequatur
            facilis veritatis iusto quod, dolores a fuga possimus praesentium
            numquam totam aspernatur error ea. Sed totam molestiae ipsam id,
            
          </span>
        </div>
        <div className="item">
        <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            blanditiis facere ipsum eveniet sint, repudiandae consequatur
            facilis veritatis iusto quod, dolores a fuga possimus praesentium
            numquam totam aspernatur error ea.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Clothsy</span>
          
        </div>
        <div className="right">
          <img src={footerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
