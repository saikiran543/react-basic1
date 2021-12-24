import React, { useState } from "react";
import W3logo from "../../images/W3Schools_logo.png";
import "./Header.css";
import Popup from "../popup/Popup";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div >
      <nav className="header">
        <div>
          <img className={"logo"} src={W3logo} alt="w3 img" />
        </div>
        <div className="tutorial">
          <input type={"button"} value="Tutorials" onClick={togglePopup} />
          {isOpen && <Popup handleClose={togglePopup} />}
        </div>
      </nav>
    </div>
  );
}

export default Header;
