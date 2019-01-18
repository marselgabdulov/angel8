import React from 'react'
import { Fade } from 'react-slideshow-image'
import './ImageGallery.css'

class ImageGallery extends React.Component {
  render() {
    const galleryImages = this.props.images
    const fadeProperties = {
      duration: 3500,
      transitionDuration: 1000,
      infinite: true,
      indicators: false,
      arrows: false,
    }
    return (
      <div className="image-gallery">
        <Fade {...fadeProperties}>
          {galleryImages.map((img, index) => (
            <div key={index} style={{ backgroundImage: `url(${img})` }} />
          ))}
        </Fade>
      </div>
    )
  }
}

export default ImageGallery
