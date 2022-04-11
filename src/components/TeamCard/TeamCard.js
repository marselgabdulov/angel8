import React from 'react'
import './TeamCard.css'

const TeamCard = ({ image, name, position, projects }) => (
  <div className="team-card">
    <div
      className="team-card__image"
      style={{ backgroundImage: `url(${image.src})` }}
    ></div>
    <div className="team-card__name">
      <b>{name}</b>
    </div>
    <div className="team-card__position">
      <b>{position}</b>
    </div>
    <div className="team-card__projects">Проекты: {projects}</div>
  </div>
)

export default TeamCard
