import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

export default function MainHeader() {
  return (
    <>
      <header className={classes.header}>
        <nav>
          <ul>
            <li>
              {/* whenever we click on "a" link it refresh it send the whole network request by using link we can prevent  
             <a href='/welcome'>Welcome</a>  */}
              {/* <Link to='/welcome'>Welcome</Link>  */}
              <NavLink
                className={(navData) => (navData.isActive ? "active" : "")}
                to="/welcome"
              >
                Welcome
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                Products
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
