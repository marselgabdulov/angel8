import React from 'react'
import ImageGallery from '../../../components/ImageGallery/ImageGallery'
import './Intro.css'

class Intro extends React.Component {
  componentDidMount() {
    console.log(this.props.introImages)
  }
  render() {
    return (
      <section className="intro">
        <div className="intro__background" />
        <div className="intro__slogan">
          <h1 className="intro__slogan--title">
            <span
              data-aos="fade"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              Эмоциональная
            </span>
            <span
              data-aos="fade"
              data-aos-delay="150"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              кухня
            </span>
            <span
              data-aos="fade"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              в Туле
            </span>
          </h1>
          <span className="intro__slogan--address">
            пр-т Ленина д.85 кор. 1
          </span>
        </div>

        <div
          className="intro__gallery"
          data-aos="fade"
          data-aos-delay="150"
          data-aos-duration="1200"
          data-aos-once="true"
        >
          <ImageGallery images={this.props.introImages} />
        </div>
      </section>
    )
  }
}

export default Intro
