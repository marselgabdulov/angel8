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
            className="vertical_7"
            style={{ backgroundImage: `url(${vertical_7.src})` }}
          ></div>
          <div
            className="vertical_8"
            style={{ backgroundImage: `url(${vertical_8.src})` }}
          ></div>
          <div
            className="vertical_9"
            style={{ backgroundImage: `url(${vertical_9.src})` }}
          ></div>
        </div>

        <div
          className="horizontal"
          style={{ backgroundImage: `url(${horizontal_2.src})` }}
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
        <div className="quadrant">
          <div
            className="quadrant_1"
            style={{ backgroundImage: `url(${quadrant_3.src})` }}
          ></div>
          <div
            className="quadrant_2"
            style={{ backgroundImage: `url(${quadrant_4.src})` }}
          ></div>
        </div>

        <div className="vertical">
          <div
            className="vertical_10"
            style={{ backgroundImage: `url(${vertical_10.src})` }}
          ></div>
          <div
            className="vertical_11"
            style={{ backgroundImage: `url(${vertical_11.src})` }}
          ></div>
          <div
            className="vertical_12"
            style={{ backgroundImage: `url(${vertical_12.src})` }}
          ></div>
        </div>

        <div className="text">
          <h3 className="text_title">Вера. Время. Движение.</h3>
          <div className="text_body">
            <p>
              История и вкус. Дьявол в мелочах. <br /> Храм архангела Михаила,
              1825 г, село Крутицы.
              <br /> Backstage съемок новых напитков для барной карты. <br />
              Вера - Свет | Движение - Огонь | Время - Жизнь.
            </p>
          </div>
        </div>

        <div className="vertical">
          <div
            className="vertical_13"
            style={{ backgroundImage: `url(${vertical_13.src})` }}
          ></div>
          <div
            className="vertical_14"
            style={{ backgroundImage: `url(${vertical_14.src})` }}
          ></div>
          <div
            className="vertical_15"
            style={{ backgroundImage: `url(${vertical_15.src})` }}
          ></div>
        </div>
      </div>
    </section>
  )
}

export default Images
