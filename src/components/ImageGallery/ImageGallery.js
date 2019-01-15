import React from 'react'
import { Fade } from 'react-slideshow-image'
import './ImageGallery.css'

const fadeProperties = {
  duration: 2000,
  transitionDuration: 1000,
  infinite: true,
  indicators: false,
  arrows: false,
}

const MenuImages = props => (
  <div className="image-gallery">
    <Fade {...fadeProperties}>
      {props.images.map((each, index) => (
        <img key={index} style={{ width: '100%' }} src={each} alt={index} />
      ))}
    </Fade>
  </div>
)

export default MenuImages
