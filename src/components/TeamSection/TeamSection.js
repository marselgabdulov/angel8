import React, { useRef } from 'react'
import { useIntersection } from 'react-use'
import Img from 'gatsby-image'
import gsap from 'gsap'
import './TeamSection.scss'

function TeamSection({ teamData }) {
  let teamCards = useRef(null)

  const intersection = useIntersection(teamCards, {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  })

  // Animation for fading in

  return (
    <section id="team">
      <h2 className="team__title">Команда</h2>
      <div className="team-cards" ref={teamCards}>
        {teamData.map(member => (
          <div className="team-card" key={member.id}>
            <Img fluid={member.image} className="team-image"></Img>
            <div className="card-info">
              <div className="card-name ">{member.name}</div>
              <div className="card-position">
                <b>{member.position}</b>
              </div>
              <p className="card-experience">{member.projects}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TeamSection
