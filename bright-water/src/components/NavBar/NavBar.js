import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./navBar.sass";

export default function NavBar({ navItems }) {

  const [showNavBarLinks, setShowNavBarLinks] = useState(false);

  const toggleNavBarLinks = () => {
    setShowNavBarLinks(!showNavBarLinks);
  }
  
  return (
    <div className="NavBar">
      <h2>Bright Water</h2>
      <button className="mobileMenu" onClick={toggleNavBarLinks}>
        <span class="material-symbols-outlined">
            menu
        </span>
        {showNavBarLinks &&  
            <ul className="mobileNavBarLinks">
                {navItems.map((item, index) => {
                    if (item.name === "Basket") {
                      return <li key={index}>
                                <Link to={item.link}>
                                    <span className="material-symbols-outlined">
                                        shopping_basket
                                    </span>
                                </Link>
                            </li>
                    } else {
                      return <li key={index}>
                                <Link to={item.link}>{item.name}</Link>
                            </li>
                    }
                  }
                )}
            </ul>
        }
      </button>
      <ul className="navBarLinks">
        {navItems.map((item, index) => {
          if (item.name === "Basket") {
            return <li key={index}>
                      <Link to={item.link}>
                          <span className="material-symbols-outlined">
                              shopping_basket
                          </span>
                      </Link>
                   </li>
          } else {
            return <li key={index}>
                      <Link to={item.link}>{item.name}</Link>
                   </li>
          }
        }
      )}
      </ul>
    </div>
  );
}
