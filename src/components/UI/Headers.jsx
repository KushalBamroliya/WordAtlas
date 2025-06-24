import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";

function Headers() {
  const [show, setshow] = useState(false);

  const togglebtn = ()=>{
    return setshow(!show)
  }

  

  return (
    <header>
      <div className="container">
        <div className="navbargrid">
          <div className="logo">
            <NavLink to="/">
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>
          <nav className={show ? "mobile" : "menuweb"}>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/country">Country</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>
          <div className="hammenu">
            <button onClick={togglebtn}>
            <MdOutlineMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Headers;
