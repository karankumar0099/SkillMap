import React from 'react';

const RoadmapLine = () => {
    return (
        <div className="roadmap-line-container">
            <svg width="24" height="60" viewBox="0 0 24 60" fill="none" xmlns="http://www.w3.org/2000/svg">

                <line x1="12" y1="0" x2="12" y2="54" stroke="currentColor" strokeWidth="2" />

                <path d="M6 48L12 58L18 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
};

export default RoadmapLine;
