import React from 'react'
import './Images.css'

function Images({
  verticalFirst,
  verticalSecond,
  verticalThird,
  quadrantFirst,
  quadrantSecond,
  horizontal,
}) {
  return (
    <section id="images" className="images">
      <h2 className="images__title">Фото</h2>
      <div className="images__wrapper">
        <div className="vertical">
          <div
            className="vertical__first"
            style={{ backgroundImage: `url(${verticalFirst.src})` }}
          ></div>
          <div
            className="vertical__second"
            style={{ backgroundImage: `url(${verticalSecond.src})` }}
          ></div>
          <div
            className="vertical__third"
            style={{ backgroundImage: `url(${verticalThird.src})` }}
          ></div>
        </div>
        <div className="quadrant">
          <div
            className="quadrant__first"
            style={{ backgroundImage: `url(${quadrantFirst.src})` }}
          ></div>
          <div
            className="quadrant__second"
            style={{ backgroundImage: `url(${quadrantSecond.src})` }}
          ></div>
        </div>
        <div
          className="horizontal"
          style={{ backgroundImage: `url(${horizontal.src})` }}
        ></div>
      </div>
    </section>
  )
}

export default Images
