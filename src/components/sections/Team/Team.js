import React from 'react'
// import './TeamSection.scss'
import TeamCard from './TeamCard/TeamCard'
import './Team.css'

function TeamSection({ teamData }) {
  return (
    <section id="team" className="data-scroll-section team">
      <h2 className="team__title">Команда</h2>
      <div className="team__cards">
        {teamData.map(member => (
          <TeamCard
            key={member.id}
            image={member.image}
            name={member.name}
            position={member.position}
            projects={member.projects}
          />
        ))}
      </div>
    </section>
  )
}

export default TeamSection
