import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from React Router if needed
import './NavBar2.css'

import home from '../../assets/img/home.png'
import men from '../../assets/img/men.png'
import services from '../../assets/img/service.png'
import products from '../../assets/img/product.png'
import client from '../../assets/img/client.png'
import contact from '../../assets/img/contact.png'
import privacy from '../../assets/img/privacy.png'

// gsap 
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


function NavBar2({wd}) {
gsap.registerPlugin(useGSAP);

  return ( 
    <>
    <style>
      {`
      .sidebar img{
        width:20px;
      }
      `}
    </style>
<aside className={`sidebar `} style={{width:wd}}>
      <div className="logo">
        {/* <img src='./images/logo.jpg' alt="logo" />  */}
        <h2 style={{ opacity: wd=="0" ? 0 : 1}}>GlobalTech</h2>
      </div>
      <ul className="links flex flex-column" style={{ opacity: wd=="0" ? 0 : 1}}>
        <li>
          <span className="material-symbols-outlined">
            <img src={home} alt="" />
          </span>
          <NavLink to="/" className="lnk" >Home</NavLink> {/* Update the NavLink and path */}
        </li>
        <li>
          <span className="material-symbols-outlined">
            <img src={men} alt="" />
          </span>
          <NavLink to="/about" className="lnk">About</NavLink> {/* Update the NavLink and path */}
        </li>
        <li>
                 <span className="material-symbols-outlined">
            <img src={services} alt="" />
          </span>
          <NavLink to="/reports" className="lnk">Services</NavLink> {/* Update the NavLink and path */}
        </li>
        <li>
                 <span className="material-symbols-outlined">
            <img src={products} alt="" />
          </span>
          <NavLink to="/reports" className="lnk">Products</NavLink> {/* Update the NavLink and path */}
        </li>
        <li>
           <span className="material-symbols-outlined">
            <img src={client} alt="" />
          </span>
          <NavLink to="/reports" className="lnk">Clients</NavLink> {/* Update the NavLink and path */}
        </li>
        <li>
          <span className="material-symbols-outlined">
            <img src={contact} alt="" />
          </span>
          <NavLink to="/reports" className="lnk">Contact Us</NavLink> {/* Update the NavLink and path */}
        </li>
        <li>
           <span className="material-symbols-outlined">
            <img src={privacy} alt="" />
          </span>
          <NavLink to="/reports" className="lnk">Privacy</NavLink> {/* Update the NavLink and path */}
        </li>
        <hr />
      </ul>
    </aside>
    </>
  );
}

export default NavBar2;
