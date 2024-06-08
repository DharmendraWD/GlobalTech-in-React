import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from React Router if needed
import './NavBar2.css'

function NavBar2() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src='./images/logo.jpg' alt="logo" /> {/* Update the image source */}
        <h2>CodingNepal</h2>
      </div>
      <ul className="links">
        <h4>Main Menu</h4>
        <li>
          {/* <span className="material-symbols-outlined">dashboard</span> */}
          <NavLink to="/" className="lnk">Home</NavLink> {/* Update the NavLink and path */}
        </li>
        <li>
          {/* <span className="material-symbols-outlined">show_chart</span> */}
          <NavLink to="/revenue" className="lnk">About</NavLink> {/* Update the NavLink and path */}
        </li>
        <li>
          
          <NavLink to="/reports" className="lnk">Services</NavLink> {/* Update the NavLink and path */}
        </li>
        <li>
          
          <NavLink to="/reports" className="lnk">Products</NavLink> {/* Update the NavLink and path */}
        </li>
        <li>
          
          <NavLink to="/reports" className="lnk">Clients</NavLink> {/* Update the NavLink and path */}
        </li>
        <li>
          
          <NavLink to="/reports" className="lnk">Contact Us</NavLink> {/* Update the NavLink and path */}
        </li>
        <li>
          
          <NavLink to="/reports" className="lnk">Privacy</NavLink> {/* Update the NavLink and path */}
        </li>
        <hr />
      </ul>
    </aside>
  );
}

export default NavBar2;
