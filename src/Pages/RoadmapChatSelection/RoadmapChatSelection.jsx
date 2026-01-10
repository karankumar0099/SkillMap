import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { roleBased, skillBased } from '../Skills/SkillsData';
import './RoadmapChatSelection.css';

const RoadmapChatSelection = () => {
    return (
        <div className="chat-selection-page section-dark">
            <div className="chat-selection-wrapper">
                <div className="chat-selection-card">
                    <div className="chat-selection-header">
                        <h1 className="chat-selection-title">Chat with a Roadmap</h1>
                        <p className="chat-selection-subtitle">
                            Select a roadmap and start learning with AI as a guide.
                        </p>
                    </div>

                    <div className="selection-section">
                        <h2 className="section-label">Role-Based Roadmaps</h2>
                        <div className="selection-grid">
                            {roleBased.map(item => (
                                <Link
                                    key={item.id}
                                    to={`/roadmap/${item.id}?mode=chat`}
                                    className="selection-item"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="selection-section">
                        <h2 className="section-label">Skill-Based Roadmaps</h2>
                        <div className="selection-grid">
                            {skillBased.map(item => (
                                <Link
                                    key={item.id}
                                    to={`/roadmap/${item.id}?mode=chat`}
                                    className="selection-item"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoadmapChatSelection;
