import "../css/navbar.css";
import React from "react";
import gdsc from "../assets/img/gdsc-gif.gif";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="_navbar sticky inter-4">
      <div className="navlogo">
        <img style={{ height: "1%", width: "40%" }} src={gdsc} halt="logo" />
      </div>

      <ul className="px-4">
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">
          {" "}
          ☰{" "}
        </label>
        <div className="menu">
          <li>
            <Link className="link_text font-face-Bold " to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link_text font-face-Bold " to="/teams">
              Team
            </Link>
          </li>
          <li>
            <Link className="link_text font-face-Bold " to="/event">
              Events
            </Link>
          </li>
          <li>
              <Link className="link_text font-face-Bold "  to="/blogs">Blogs</Link>
            </li>

          <li>
            <a className="joinus inter-4" href="https://gdg.community.dev/gdg-on-campus-school-of-information-technology-bhopal-india/"  >
              Join Us
            </a>
          </li>
        </div>
      </ul>


    </nav>
    
  );
}
