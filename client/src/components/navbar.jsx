import React from "react";
import "./navbar.css"; // valfritt för styling om du vill

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Fitness Apparel</h2>
      <ul className="nav-links">
        <li>
          <a href="/">Start</a>
        </li>
        <li>
          <a href="/products">Produkter</a>
        </li>
        <li>
          <a href="/contact">Kontakt</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
