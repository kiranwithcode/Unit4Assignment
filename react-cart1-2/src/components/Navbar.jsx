import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "Black",
  };

  return (
    <div className={styles.Navbar}>
      <div className={styles.left}>
        <div>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </div>
        <div>
          <Link to="/Mens" style={linkStyle}>
            Mens
          </Link>
        </div>
        <div>
          <Link to="/Womens" style={linkStyle}>
            Women
          </Link>
        </div>
        <div>
          <Link to="/Kids" style={linkStyle}>
            Kids
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <div>
          <Link to="/Login">
            <i class="fa-solid fa-user"></i>
          </Link>
        </div>
        <div>
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div>
          <i class="fa-solid fa-bag-shopping"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
