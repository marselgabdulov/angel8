import React from "react";
import "./BurgerIcon.css";

export function BurgerIcon() {
  return (
    <div className="burger">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="32"
        height="32"
        fill="none"
        stroke="white"
        strokeWidth="2"
      >
        <path d="M4 10h24M4 16h16M4 22h8" />
      </svg>
    </div>
  );
}
