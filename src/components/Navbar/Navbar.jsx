import React from "react";
import en from "../../imgs/en.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import './Navbar.scss'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link to="products/1">Women</Link>
          </div>
          <div className="item">
            <Link to="products/2">Men</Link>
          </div>
          <div className="item">
            <Link to="products/3">Children</Link>
          </div>
        </div>
        <div className="center">
          <Link to="/">Clothsy</Link>
        </div>
        <div className="right">
          <div className="center">
            <Link to="/">Homepage</Link>
          </div>
          <div className="center">
            <Link to="/">About</Link>
          </div>
          <div className="center">
            <Link to="/">Contact Us</Link>
          </div>
          <div className="center">
            <Link to="/">Stores</Link>
          </div>
          <div className="icons">
            <SearchOutlinedIcon />
            <PersonOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIo">
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
