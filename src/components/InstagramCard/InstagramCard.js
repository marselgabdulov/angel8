import React from 'react'
import './InstagramCard.css'

const InstagramCard = props => (
  <a
    className="instagram-card"
    href={props.hreference}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      backgroundImage: `url(${props.imageUrl})`,
    }}
  >
    1
  </a>
)

export default InstagramCard
