import React from 'react'
import Img from 'gatsby-image'
import './TeamSection.scss'
import gsap from 'gsap'

function TeamSection({ teamData }) {
  return (
    <section id="team">
      <h2 className="team__title">Команда</h2>
      <div className="team-cards">
        {teamData.map(member => (
          <div className="team-card" key={member.id}>
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
