import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ backgroundColor: "lightblue", padding: "10px" ,marginTop:"10rem",width:"100%"}}>
      <p>&copy; 2025@Enterprices of wandel</p>
      <address>south street,bala nagar,cabridge city,chicago</address>
      <div>
        <Link to="https://google.com/tandc">Terms and conditons</Link>
        <Link to="https://google.com/privacy">Privacy Policy</Link>
      </div>
      <div>
        <p>Subscribe for our newletter</p>
        <input type="email" placeholder="Enter your email"></input>
        <button>Subscribe</button>
      </div>
    </footer>
  );
}

export default Footer;
