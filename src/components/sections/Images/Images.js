import React from 'react'
import './Images.css'

function Images({
  vertical_1,
  vertical_2,
  vertical_3,
  vertical_4,
  vertical_5,
  vertical_6,
  vertical_7,
  vertical_8,
  vertical_9,
  vertical_10,
  vertical_11,
  vertical_12,
  vertical_13,
  vertical_14,
  vertical_15,
  quadrant_1,
  quadrant_2,
  quadrant_3,
  quadrant_4,
  horizontal_1,
  horizontal_2,
}) {
  return (
    <section id="images" className="images">
      <h2 className="images__title">Фото</h2>
      <div className="images__wrapper">
        <div className="vertical">
          <div
            className="vertical_1"
            style={{ backgroundImage: `url(${vertical_1.src})` }}
          ></div>
          <div
            className="vertical_2"
            style={{ backgroundImage: `url(${vertical_2.src})` }}
          ></div>
          <div
            className="vertical_3"
            style={{ backgroundImage: `url(${vertical_3.src})` }}
          ></div>
        </div>
        <div className="quadrant">
          <div
            className="quadrant_1"
            style={{ backgroundImage: `url(${quadrant_1.src})` }}
          ></div>
          <div
            className="quadrant_2"
            style={{ backgroundImage: `url(${quadrant_2.src})` }}
          ></div>
        </div>
        <div
          className="horizontal"
          style={{ backgroundImage: `url(${horizontal_1.src})` }}
        ></div>

        <div className="vertical">
          <div
            className="vertical_10"
            style={{ backgroundImage: `url(${vertical_4.src})` }}
          ></div>
          <div
            className="vertical_11"
            style={{ backgroundImage: `url(${vertical_5.src})` }}
          ></div>
          <div
            className="vertical_12"
            style={{ backgroundImage: `url(${vertical_6.src})` }}
          ></div>
        </div>
      </div>
    </section>
  )
}

export default Images
