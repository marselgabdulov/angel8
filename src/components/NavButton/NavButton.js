import React from "react";
import "./NavButton.css";
import { BurgerIcon } from "./icons/BurgerIcon/BurgerIcon";
import { CrossIcon } from "./icons/CrossIcon/CrossIcon";

const NavButton = props => {
  let icon;
  if (props.icon === false) {
    icon = <BurgerIcon />;
  } else {
    icon = <CrossIcon />;
  }
  return (
    <button className="nav-button" onClick={props.clickHandler}>
      {icon}
    </button>
  );
};

export default NavButton;
