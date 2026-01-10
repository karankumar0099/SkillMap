import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRoadmapData } from '../../data/roadmapRegistry';
import './StepDetail.css';

const BackIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
);

const ExternalLinkIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);

const StepDetail = () => {
    const { id } = useParams();

    const findNode = (nodeId) => {
        const roadmaps = [
            'frontend', 'backend', 'react', 'devops', 'python', 'java', 'sql'
        ].map(getRoadmapData);

        for (const map of roadmaps) {
            const found = map?.nodes?.find(n => n.id === nodeId);
            if (found) return found;
        }

        const genericSteps = {
            basics: { title: 'Basics', description: 'Master the fundamentals.' },
            intermediate: { title: 'Intermediate', description: 'Deepen your knowledge.' },
            advanced: { title: 'Advanced', description: 'Become an expert.' },
            'best-practices': { title: 'Best Practices', description: 'Write clean code.' },
            projects: { title: 'Projects', description: 'Build things.' }
        };

        if (genericSteps[nodeId]) {
            return {
                ...genericSteps[nodeId],
                whyImportant: 'Essential for progress.',
                website: 'https://google.com'
            };
        }

        return null;
    };

    const node = findNode(id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!node) {
        return (
            <div className="section-dark" style={{ textAlign: 'center', paddingTop: '10rem' }}>
                <h2>Step not found.</h2>
                <Link to="/" className="btn-primary">Go Home</Link>
            </div>
        );
    }

    return (
        <div className="section-dark">
            <div className="step-detail-container">
                <div className="step-navigation">
                    <button onClick={() => window.history.back()} className="back-button">
                        <BackIcon /> Back to Roadmap
                    </button>
                </div>

                <div className="step-header">
                    <h1 className="step-title">{node.title}</h1>
                    <p className="step-description">{node.description}</p>
                    {node.website && (
                        <a href={node.website} target="_blank" rel="noopener noreferrer" className="btn-primary doc-link">
                            Visit Documentation <ExternalLinkIcon />
                        </a>
                    )}
                </div>

                {node.whyImportant && (
                    <div className="step-importance">
                        <h3 className="importance-title">Why this step is important?</h3>
                        <div className="info-content">
                            <p>{node.whyImportant}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StepDetail;
