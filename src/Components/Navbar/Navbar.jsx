import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const ChatIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const MapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
    <line x1="8" y1="2" x2="8" y2="18"></line>
    <line x1="16" y1="6" x2="16" y2="22"></line>
  </svg>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [aiDropdownOpen, setAiDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const activePath = location.pathname;


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path) => activePath === path;
  const isRoadmapActive = activePath === '/skills' || activePath === '/official-roadmaps';
  const isAiTutorActive = activePath === '/ai-tutor' || activePath === '/roadmap-chat';

  return (
    <>
      <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
        <nav className="nav-container">

          <Link to="/" className="logo">
            <span>Skill</span>Map
          </Link>

          <div className="nav-links">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              Home
            </Link>

            <div
              className="dropdown-container"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <span className={`nav-link dropdown-trigger ${isRoadmapActive ? 'active' : ''}`}>
                Roadmaps <ChevronDown />
              </span>

              {dropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/skills" className="dropdown-item">
                    <div>
                      Skill & Role Based Roadmaps
                      <span className="dropdown-description">
                        Visual & Interactive Guides
                      </span>
                    </div>
                  </Link>

                  <Link to="/official-roadmaps" className="dropdown-item">
                    <div>
                      Official Roadmaps
                      <span className="dropdown-description">
                        Curated Lists & Paths
                      </span>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <div
              className="dropdown-container"
              onMouseEnter={() => setAiDropdownOpen(true)}
              onMouseLeave={() => setAiDropdownOpen(false)}
            >
              <span className={`nav-link dropdown-trigger ${isAiTutorActive ? 'active' : ''}`}>
                AI Tutor <ChevronDown />
              </span>

              {aiDropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/ai-tutor" className="dropdown-item with-icon">
                    <ChatIcon />
                    <div>
                      Ask AI Tutor
                      <span className="dropdown-description">
                        Career, resume guidance, and more
                      </span>
                    </div>
                  </Link>

                  <Link to="/roadmap-chat" className="dropdown-item with-icon">
                    <MapIcon />
                    <div>
                      Roadmap Chat
                      <span className="dropdown-description">
                        Chat with AI Tutor about a roadmap
                      </span>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/skill-input"
              className={`nav-link ${isActive('/skill-input') ? 'active' : ''}`}
            >
              Skill Input
            </Link>

            <Link
              to="/contact"
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            >
              Contact
            </Link>
          </div>

          <div className="nav-buttons-group">
            <Link to="/skill-input" className="btn-primary">
              Get Started <ArrowRight />
            </Link>
            <Link to="/portfolio" className="btn-primary">
              Portfolio
            </Link>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuIcon />
          </button>

        </nav>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

          <div className="mobile-dropdown">
            <span className="mobile-dropdown-title">Roadmaps</span>
            <div className="mobile-dropdown-links">
              <Link to="/skills" onClick={() => setMenuOpen(false)}>
                Skill & Role Based
              </Link>
              <Link to="/official-roadmaps" onClick={() => setMenuOpen(false)}>
                Official Roadmaps
              </Link>
            </div>
          </div>

          <div className="mobile-dropdown">
            <span className="mobile-dropdown-title">AI Tutor</span>
            <div className="mobile-dropdown-links">
              <Link to="/ai-tutor" onClick={() => setMenuOpen(false)}>
                Ask AI Tutor
              </Link>
              <Link to="/roadmap-chat" onClick={() => setMenuOpen(false)}>
                Roadmap Chat
              </Link>
            </div>
          </div>

          <Link to="/skill-input" onClick={() => setMenuOpen(false)}>
            Skill Input
          </Link>

          <Link to="/portfolio" onClick={() => setMenuOpen(false)}>
            Portfolio
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
