import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Kritipur Pizzaria</h1>
        <p> ODER YOUR FAVROUTE PIZZA</p>
        <Link to="Menu">
        <button>Order Now</button>
        </Link>
      </div>
       
    </div>
  )
}

export default Home