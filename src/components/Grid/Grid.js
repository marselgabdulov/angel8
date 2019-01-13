import React from "react";
import "./Grid.css";

const Grid = () => (
  <>
    <div className="grid">
      <div className="grid__hline" />
      <div className="grid__vline-one" />
      <div className="grid__vline-two" />
      <div className="grid__eight">
        <div className="grid__eight-circle-one" />
        <div className="grid__eight-circle-two" />
      </div>
    </div>
  </>
);

export default Grid;
