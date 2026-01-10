import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const StartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const Home = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Node.js",
    "TypeScript", "SQL", "Git", "AWS", "Docker",
    "Kubernetes", "Rust", "Go", "Java"
  ];

  return (
    <div className="home-page-container">

      <section className="hero-section">
        <div className="hero-content-wrapper animate-hero">

          <h1 className="hero-title">
            Learn Any Skill <br />
            <span>in the Right Order</span>
          </h1>

          <p className="hero-description">
            SkillMap AI creates personalized learning roadmaps
            based on your goals, current skills, and time.
          </p>

          <Link to="/skill-input" className="btn-emerald">
            Start Skill Map <StartIcon />
          </Link>

        </div>


        <div className="hill-curve">
          <p className="popular-skills-label">Popular Skills</p>

          <div className="scroll-container">
            <div className="scroll-track animate-scroll">
              {[...skills, ...skills].map((s, i) => (
                <span key={i} className="skill-pill-dark">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="statement-section">
        <div className="statement-text">
          We help learners discover the{" "}
          <span className="statement-highlight">optimal path</span>{" "}
          to mastering new skills.
        </div>
      </section>

    </div>
  );
};

export default Home;
