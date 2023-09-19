import React from 'react'
import './Video.css'

function VideoSection() {
  return (
    <section id="video" className="data-scroll-section video">
      <h2 className="video__title">Видео</h2>
      <div className="video__responsive">
        <iframe
          id="iframe"
          src="https://www.youtube.com/embed/BY4inryexz8"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />
      </div>
    </section>
  )
}

export default VideoSection
