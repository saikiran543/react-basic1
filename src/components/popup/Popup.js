import React from "react";
import Tutorials from "../Header/Tutorials";
import "./Popup.css";
const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <div>
          <h1 className="h1">Tutorials</h1>
          <Tutorials />
        </div>
      </div>
    </div>
  );
};

export default Popup;
