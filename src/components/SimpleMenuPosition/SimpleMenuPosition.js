import React from "react";
import "./SimpleMenuPosition.css";

const SimpleMenuPosition = props => (
  <div className="simple-menu-position">
    <div className="simle-menu-position__name">{props.name}</div>
    <span />
    <div className="simle-menu-position__price">{props.price} &#8381;</div>
  </div>
);

export default SimpleMenuPosition;
