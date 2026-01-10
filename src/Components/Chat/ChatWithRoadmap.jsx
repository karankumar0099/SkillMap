import React, { useState } from 'react';
import './ChatWithRoadmap.css';
import AiTutor from '../../Pages/AiTutor/AiTutor';

const ChatWithRoadmap = ({ isSidebar = false }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => setIsOpen(!isOpen);

    if (isSidebar) {
        return (
            <div className="chat-window sidebar-mode">
                <AiTutor mode="sidebar" />
            </div>
        );
    }

    return (
        <>
            {!isOpen && (
                <button className="chat-roadmap-btn" onClick={toggleChat}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chat-icon">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    Chat with Roadmap
                </button>
            )}

            {isOpen && (
                <div className="chat-overlay" onClick={toggleChat}>
                    <div className="chat-modal-container" onClick={(e) => e.stopPropagation()}>
                        <AiTutor mode="card" />
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatWithRoadmap;
