import logo from "../assets/myntra-logo.png";
import { Link } from "react-router-dom";

import { FaSearch, FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Myntra Logo" className="logo" />
      </div>

      <div className="menu">
        <Link to="/men">MEN</Link>
        <Link to="/women"> WOMEN</Link>
        <Link to="/kids">KIDS</Link>
        <Link to="/home">HOME</Link>
        <Link to="/beauty">BEAUTY</Link>
        <Link to="/genz">GENZ</Link>
        <Link to="/studio">STUDIO</Link>
      </div>

      <div className="search-bar">
        <button type="button" className="search-button">
          <FaSearch />
        </button>

        <input type="text" placeholder="Search for products, brands and more" />
      </div>

      <div className="user-options">
        <div className="user-item">
          <FaUser className="user-icon" />
          <span>Profile</span>
        </div>

        <div className="user-item">
          <FaHeart className="user-icon" />
          <span>Wishlist</span>
        </div>

        <div className="user-item">
          <FaShoppingBag className="user-icon" />
          <span>Bag</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
