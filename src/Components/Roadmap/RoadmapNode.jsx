import React, { useState } from 'react';
import RoadmapLine from './RoadmapLine';
import './Roadmap.css';

const ChevronDown = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);

const ExternalLinkIcon = () => (
    <svg className="link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);

const RoadmapNode = ({ node, isLast }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') toggleOpen();
    };

    return (
        <div className={`node-wrapper ${isOpen ? 'open' : ''}`}>
            <div
                className={`roadmap-node ${isOpen ? 'expanded' : ''}`}
                onClick={toggleOpen}
                role="button"
                tabIndex={0}
                onKeyPress={handleKeyPress}
            >
                <div className="node-header">
                    <div className="node-title">{node.title}</div>
                    <div className={`node-icon ${isOpen ? 'rotate' : ''}`}>
                        <ChevronDown />
                    </div>
                </div>

                <div className={`node-content ${isOpen ? 'show' : ''}`}>
                    <p className="node-description">{node.description}</p>

                    {node.subtopics?.length > 0 && (
                        <div className="node-subtopics">
                            <h4 className="subtopics-label">Key Topics</h4>
                            <div className="subtopics-list">
                                {node.subtopics.map((topic, i) => (
                                    <span key={i} className="subtopic-tag">{topic}</span>
                                ))}
                            </div>
                        </div>
                    )}

                    {node.whyImportant && (
                        <div className="node-importance">
                            <div className="importance-label">Why it's important</div>
                            <p>{node.whyImportant}</p>
                        </div>
                    )}

                    {node.website && (
                        <div className="node-actions">
                            <a
                                href={node.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="node-link"
                                onClick={(e) => e.stopPropagation()}
                            >
                                Learn More <ExternalLinkIcon />
                            </a>
                        </div>
                    )}
                </div>
            </div>
            {!isLast && <RoadmapLine />}
        </div>
    );
};

export default RoadmapNode;
