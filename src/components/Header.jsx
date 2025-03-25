import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function CustomNavlink({to,end=false,children}) {
   return( 
    <NavLink
        to={to}
        end={end}
        style={({ isActive }) => (
            {
                color:isActive ? 'green' :'grey'
            }
        )}
    >
      {children}
    </NavLink>
    )
}

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
        <CustomNavlink to="/" end = {true}>Home</CustomNavlink>
        <CustomNavlink to="/events">Events</CustomNavlink>

        <CustomNavlink to="/dashboard">Dashboard</CustomNavlink>
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
