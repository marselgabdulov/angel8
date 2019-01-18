import React from 'react'
import InstagramCard from '../../../components/InstagramCard/InstagramCard'
import './Media.css'

class Media extends React.Component {
  render() {
    return (
      <>
        <h2 className="media__title">Instagram</h2>
        <section className="media">
          {this.props.instagram.map(card => (
            <InstagramCard
              hreference={card.url}
              imageUrl={card.img}
              key={card.url}
            />
          ))}
        </section>
      </>
    )
  }
}

export default Media
