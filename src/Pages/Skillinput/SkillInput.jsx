import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SkillInput.css';
import { searchRoadmapId } from '../../data/roadmapRegistry';

const SkillInput = () => {
  const navigate = useNavigate();
  const [targetRole, setTargetRole] = useState('');
  const [knownSkills, setKnownSkills] = useState([]);
  const [otherSkills, setOtherSkills] = useState('');
  const [showOther, setShowOther] = useState(false);

  const commonSkills = [
    'HTML', 'CSS', 'JavaScript', 'React',
    'Node.js', 'Python', 'Java', 'Git',
    'SQL', 'C++', 'TypeScript'
  ];

  const toggleSkill = (skill) => {
    if (knownSkills.includes(skill)) {
      setKnownSkills(knownSkills.filter(s => s !== skill));
    } else {
      setKnownSkills([...knownSkills, skill]);
    }
  };

  const handleOtherCheck = (e) => {
    setShowOther(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Combine known skills
    let allKnownSkills = [...knownSkills];
    if (showOther && otherSkills.trim()) {
      const others = otherSkills.split(',').map(s => s.trim()).filter(s => s);
      allKnownSkills = [...allKnownSkills, ...others];
    }

    // Find best matching roadmap ID
    const roadmapId = searchRoadmapId(targetRole);

    // Navigate to roadmap with filtered state
    navigate(`/roadmap/${roadmapId}`, {
      state: {
        knownSkills: allKnownSkills,
        targetRole: targetRole
      }
    });
  };

  return (
    <div className="skill-input-page section-dark">
      <div className="skill-input-container">
        <div className="input-header">
          <h1>Design Your Path</h1>
          <p>Tell us what you want to achieve and what you already know.</p>
        </div>

        <form onSubmit={handleSubmit} className="skill-form">

          <div className="form-group">
            <label className="form-label">What is your goal / career target?</label>
            <input
              type="text"
              className="text-input"
              placeholder="e.g. Frontend Developer, AI Engineer..."
              value={targetRole}
              onChange={(e) => setTargetRole(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Skills you already know:</label>
            <p className="form-hint">These will be marked as completed or skipped in your roadmap.</p>

            <div className="skills-selection-grid">
              {commonSkills.map(skill => (
                <div
                  key={skill}
                  className={`skill-checkbox ${knownSkills.includes(skill) ? 'selected' : ''}`}
                  onClick={() => toggleSkill(skill)}
                >
                  {skill}
                </div>
              ))}

              <div
                className={`skill-checkbox ${showOther ? 'selected' : ''}`}
                onClick={() => setShowOther(!showOther)}
              >
                Other...
              </div>
            </div>

            {showOther && (
              <div className="other-skill-container fade-in">
                <input
                  type="text"
                  className="text-input"
                  placeholder="Type other skills separated by commas (e.g. Docker, AWS, Go)..."
                  value={otherSkills}
                  onChange={(e) => setOtherSkills(e.target.value)}
                />
              </div>
            )}
          </div>

          <button type="submit" className="submit-btn">
            Generate Roadmap
          </button>
        </form>
      </div>
    </div>
  );
};

export default SkillInput;
