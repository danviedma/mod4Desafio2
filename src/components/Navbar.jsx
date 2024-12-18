import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/Navbar.css";
import { formatNumber } from "../utils/formatNumber";

const Navbar = () => {
  const token = true; 
  const total = 25000;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Pizzeria Mamma Mia!
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link nav-button" href="#">
                🍕 Home
              </a>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <a className="nav-link nav-button" href="#">
                    🔓 Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-button" href="#">
                    🔒 Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link nav-button" href="#">
                    🔐 Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-button" href="#">
                    🔐 Register
                  </a>
                </li>
              </>
            )}
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link nav-button" id="total" href="#">
                🛒 Total: $<span>{formatNumber(total)}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
