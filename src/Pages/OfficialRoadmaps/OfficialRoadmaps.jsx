import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sections } from "./OfficialRoadmapsData";
import "./OfficialRoadmapsNew.css";

const OfficialRoadmaps = () => {
  const [activeSection, setActiveSection] = useState("all");

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 96;
    const offset =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      headerOffset;

    window.scrollTo({ top: offset, behavior: "smooth" });
  };

  return (
    <div className="official-layout">

      <aside className="official-sidebar">
        <div
          className={`sidebar-item ${activeSection === "all" ? "active" : ""}`}
          onClick={() => {
            setActiveSection("all");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          All Roadmaps
        </div>

        {sections.map((section) => (
          <div
            key={section.id}
            className={`sidebar-item ${activeSection === section.id ? "active" : ""
              }`}
            onClick={() => scrollToSection(section.id)}
          >
            {section.label}
          </div>
        ))}
      </aside>


      <main className="official-content">
        <div className="official-header-section">
          <h1 className="official-main-title">
            <span className="highlight-text">Official</span> Career Roadmaps
          </h1>
          <p className="official-subtitle">
            Expert-curated, step-by-step paths to master modern technologies. Level up your career with industry-standard learning guides for <span className="highlight-text">2026</span>.
          </p>
        </div>
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="roadmap-group">
            <h3 className="group-title">{section.label}</h3>

            <div className="group-grid">
              {section.items.map((item) => (
                <Link
                  key={item.id}
                  to={`/roadmap/${item.id}`}
                  className="official-card"
                >
                  <div className="card-info">
                    <span className="card-title">{item.name}</span>

                  </div>
                  <svg
                    className="card-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                  </svg>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <section className="roadmap-group">
          <h3 className="group-title">Create Your Own</h3>
          <div className="group-grid">
            <Link to="/skill-input" className="official-card create-card">
              <span className="plus-icon">+</span>
              <span className="card-title muted-text">
                Create AI Roadmap
              </span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OfficialRoadmaps;
