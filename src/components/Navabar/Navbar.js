import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { navLinks } from "./NavLinks";
function Navbar() {
  const [selected, setSelected] = useState({
    id: "",
    active: false,
  });

  useEffect(() => {
    navLinks.forEach((item, index) => {
      if (window.location.pathname === item.path) {
        setSelected({
          id: index,
          active: true,
        });
      }
    });
  }, []);

  const setActiveLink = (index) => {
    setSelected({
      id: index,
      active: true,
    });
  };
  //console.log(selected);
  return (
    <div>
      <nav>
        <ul>
          {navLinks.map((link, index) => (
            <Link
              to={link.path}
              onClick={() => setActiveLink(index)}
              className={`${
                selected.active && selected.id === index &&  selected.id !== 0 ? "active" : ""
              }`}
            >
              <li
                onClick={() => setActiveLink(index)}
                className={`list ${
                  selected.active && selected.id === index && selected.id !== 0  ? "active" : "li"
                }`}
              >
                {link.pathName}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
