import React from 'react';
import { Link } from 'react-router-dom';
import { roleBased, skillBased } from './SkillsData';
import './Skills.css';

const Skills = () => {
  return (
    <div className="official-roadmaps-container">
      <div className="official-header">
        <h1>Skill & Role Based Roadmaps</h1>
        <p>Comprehensive guides for your career path</p>
      </div>

      <div className="roadmap-wrapper">
        <h2 className="category-title">Role Based Roadmaps</h2>

        <div className="roadmap-grid">
          {roleBased.map(item => (
            <Link
              key={item.id}
              to={`/roadmap/${item.id}`}
              className="roadmap-pill"
            >
              {item.name}
            </Link>
          ))}

          <Link to="/skill-input" className="roadmap-pill create-card">
            + Create your own Roadmap
          </Link>
        </div>
      </div>

      <div className="roadmap-wrapper">
        <h2 className="category-title">Skill Based Roadmaps</h2>

        <div className="roadmap-grid">
          {skillBased.map(item => (
            <Link
              key={item.id}
              to={`/roadmap/${item.id}`}
              className="roadmap-pill"
            >
              {item.name}
            </Link>
          ))}

          <Link to="/skill-input" className="roadmap-pill create-card">
            + Create your own Roadmap
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Skills;
