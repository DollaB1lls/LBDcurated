

import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        {/* Your Header Component goes here */}
      </header>

      <div className="background-image">
        <div className="center-box">
          <h1>LBDCurated</h1>
          <button className="shop-now-btn">Shop Now</button>
        </div>
      </div>

      <div className="cards-section">
        <Link to="/shop/tshirts" className="card-link">
          <div className="card1">Shop T-Shirts</div>
        </Link>
        <Link to="/shop/crewnecks" className="card-link">
          <div className="card2">Shop Crewnecks</div>
        </Link>
      </div>

      <div className="shop-all-card">
        <Link to="/shop/all" className="card-link">
          <div className="card3">Shop All</div>
        </Link>
      </div>
      <div className="footer">
      </div>
    </div>
  );
};

export default LandingPage;
