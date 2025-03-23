import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate();

  return (
    <>
      <nav
        style={{
          padding: "10px",
          backgroundColor: "lightblue",
          marginBottom: "10rem",
        }}
      >
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/events">Events</NavLink>

        <NavLink to="/dashboard">Dashboard</NavLink>
        <button
          style={{ padding: "10px", backgroundColor: "blue" }}
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </nav>
    </>
  );
}

export default Header;
