import React from 'react'
import Img from 'gatsby-image'
import './TeamSection.scss'

function TeamSection({ teamData }) {
  return (
    <section id="team">
      <h2
        className="team__title"
        data-aos="fade"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
        data-aos-anchor-placement="top"
      >
        Команда
      </h2>
      <div className="team-cards">
        {teamData.map(member => (
          <div
            className="team-card"
            key={member.id}
            data-aos="fade"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          >
            <Img fluid={member.image} className="team-image"></Img>
            <div className="card-info">
              <div className="card-name ">{member.name}</div>
              <div className="card-position">
                <b>{member.position}</b>
              </div>
              <p className="card-experience">проекты: {member.projects}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TeamSection
