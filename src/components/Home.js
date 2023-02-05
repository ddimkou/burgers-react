import { Link } from "react-router-dom";
import header from "../assets/header.jpg";
import React from "react";
import "../styles/home.css";
const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${header})` }}>
      <div></div>
      <div className="headerContainer">
        <h1>Galaxy burgers</h1>
        <p>the juicy one</p>
        <Link to="/menu">
          <button className="order">Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
