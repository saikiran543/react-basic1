import React, { useState } from "react";
import { popupLinks } from "./Popuplinks";
import { Link } from "react-router-dom";
import "./Tutorials.css";
function Tutorials() {
  return (
    <div className="allign">
      {/* <h1>Tutorials</h1> */}
      <div className="leftside">
        <h2 className="h2">HTML and CSS</h2>
        <ul className="items">
          {popupLinks.htmlAndCss.map((link, index) => (
            <Link to={link.path}>
              <li>{link.pathName}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="leftside">
        <h2 className="h2">Java Script</h2>
        <ul>
          {popupLinks.javaScript.map((link, index) => (
            <Link to={link.path}>
              <li>{link.pathName}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="leftside">
        <h2 className="h2">Programming</h2>
        <ul>
          {popupLinks.programming.map((link, index) => (
            <Link to={link.path}>
              <li>{link.pathName}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Tutorials;
